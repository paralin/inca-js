import {
    ObjectStore,
    IArrayPtr,
    Prefixer,
} from '@aperturerobotics/objstore'
import {
    inca,
    chain,
    ValidatorSet,
    ChainConfig,
    ChainState,
    Genesis,
    BlockHeader,
    Vote,
    Block,
    SegmentState,
} from './pb'
import { GetBlock } from './block'
import { peerIDFromPubKey } from './peer-id'
import { timestamp } from '@aperturerobotics/timestamp'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { EncryptionStrategyCtor, BuildEncryptionStrategy } from './encryption/impl'
import { newConvergentImmutable } from './encryption/convergentimmutable'
import { SegmentStore } from './segment-store'

import * as lcrypto from 'libp2p-crypto'
import * as peerid from 'peer-id'
import toBuffer from 'typedarray-to-buffer'
import uuidv4 from 'uuid/v4'

// Chain is a block-chain.
export class Chain {
    // blockDbm is the db prefixed for blocks.
    private blockDbm: IDb;
    // segmentStore contains known segments.
    private segmentStore: SegmentStore
    // state is the chain state.
    private state: ChainState

    constructor(
        // db is the key-value database.
        private db: IDb,
        // objStore is the object storage stack.
        private objStore: ObjectStore,
        // conf is the chain configuration.
        private conf: chain.IConfig,
        // genesis is the genesis object.
        private genesis: Genesis
    ) {
        this.blockDbm = new Prefixer(db, "/blocks")
        this.segmentStore = new SegmentStore(db, objStore)
        this.state = new ChainState()
    }

    // getBlockDbm returns the block dbm.
    public getBlockDbm(): IDb {
        return this.blockDbm
    }

    // getSegmentStore returns the segment store.
    public getSegmentStore(): SegmentStore {
        return this.segmentStore
    }

    // getChainConfig returns the chain config.
    public getChainConfig(): chain.IConfig {
        return this.conf
    }

    // dbKey is the state key.
    public get dbKey(): string {
        return "/chain/" + this.genesis.chainId
    }

    // writeState writes the state.
    public async writeState(): Promise<void> {
        let dat = this.state.encode(this.state).finish()
        return this.blockDbm.setKey(this.dbKey, dat)
    }

    // readState reads the state.
    public async readState(): Promise<void> {
        let dat = await this.db.getKey(this.dbKey)
        if (!dat) {
            return
        }

        let chainState = this.state.decode(dat) as ChainState
        this.state = chainState
    }
}

// BuildChain builds a new chain from scratch.
export async function BuildChain(
    db: IDb,
    objStore: ObjectStore,
    chainID: string,
    validatorPriv: any,
): Promise<Chain> {
    if (!chainID || !chainID.length) {
        throw new Error('chain id must be set')
    }

    let encStrat = await newConvergentImmutable()
    let encStratConf = await encStrat.buildArgs()

    let validatorPub = validatorPriv.public
    if (!validatorPub) {
        throw new Error('validator private key is not valid (does not have public getter)')
    }

    let validatorPubBytes = validatorPub.bytes
    let validatorID = await peerIDFromPubKey(validatorPubBytes)
    let validatorSet = new ValidatorSet({
        validators: [{
            pubKey: validatorPubBytes,
            votingPower: 10,
            operationMode: inca.Validator.OperationMode.OperationMode_OPERATING,
        }],
    })

    let validatorSetStorageRef = (await objStore.storeObject(validatorSet, {})).storageRef

    let chainConf = new ChainConfig({
        timingConfig: {
            minProposeAfterBlock: 500,
            maxProposeAfterBlock: 10000,
            roundLength: 3000,
        },
        validatorSetRef: validatorSetStorageRef,
    })

    let chainConfStorageRef = (await objStore.storeObject(
        chainConf,
        encStrat.getBlockEncryptionConfig(),
    )).storageRef

    let ts = new Date()
    let nowTS: timestamp.ITimestamp = { timeUnixMs: Math.floor(ts.valueOf()) }
    let genesis = new Genesis({
        chainId: chainID,
        timestamp: nowTS,
        encStrategy: encStrat.getEncryptionStrategyType(),
        initChainConfigRef: chainConfStorageRef,
    })

    let genesisStorageRef = (await objStore.storeObject(
        genesis,
        encStrat.getGenesisEncryptionConfig(),
    )).storageRef

    let cconf: chain.IConfig = {
        genesisRef: genesisStorageRef,
        encryptionStrategy: encStrat.getEncryptionStrategyType(),
        encryptionArgs: encStratConf,
    }

    let firstBlockHeaderEncConf = encStrat.getBlockEncryptionConfig()
    firstBlockHeaderEncConf.signerKeys = [validatorPriv]
    let firstBlockHeader = new BlockHeader({
        genesisRef: genesisStorageRef,
        chainConfigRef: chainConfStorageRef,
        nextChainConfigRef: chainConfStorageRef,
        roundInfo: { height: 0, round: 0 },
        blockTs: nowTS,
        proposerId: validatorID.toB58String(),
    })
    let firstBlockHeaderStorageRef = (await objStore.storeObject(
        firstBlockHeader,
        firstBlockHeaderEncConf,
    )).storageRef

    let firstBlockVoteEncConf = encStrat.getNodeMessageEncryptionConfig(validatorPriv)
    let firstBlockVote = new Vote({
        blockHeaderRef: firstBlockHeaderStorageRef,
    })
    let firstBlockVoteStorageRef = (await objStore.storeObject(
        firstBlockVote,
        firstBlockVoteEncConf,
    )).storageRef

    let firstBlockEncConf = firstBlockHeaderEncConf
    let firstBlock = new Block({
        blockHeaderRef: firstBlockHeaderStorageRef,
        voteRefs: [firstBlockVoteStorageRef],
    })
    let firstBlockStorageRef = (await objStore.storeObject(
        firstBlock,
        firstBlockEncConf,
    )).storageRef

    let firstSegUid = uuidv4()
    let firstSegDigest: IArrayPtr = {}
    let firstSeg = new SegmentState({
        id: firstSegUid,
        status: chain.SegmentStatus.SegmentStatus_VALID,
        headBlock: firstBlockStorageRef,
        tailBlock: firstBlockStorageRef,
    })
    await objStore.storeLocal(firstSeg, firstSegDigest)

    // ch is the chain instance.
    let ch = new Chain(db, objStore, cconf, genesis)
    let segmentStore = ch.getSegmentStore()

    // blockDbm is the dbm used for blocks.
    let blockDbm: IDb = ch.getBlockDbm()

    let firstBlk = await GetBlock(encStrat, blockDbm, objStore, firstBlockStorageRef)
    let seg = await segmentStore.newSegment(firstBlk, firstBlockStorageRef)
    firstBlk.segmentId = seg.id

    ch.stateSegment = seg.id

    await firstBlk.writeState()
    await ch.writeState()

    return ch
}

// FromConfig loads a blockchain from a config.
export async function FromConfig(
    db: IDb,
    objStore: ObjectStore,
    conf: chain.IConfig,
): Promise<Chain> {
    let encStrat = await BuildEncryptionStrategy(conf.encryptionStrategy, conf.encryptionArgs)
    let encConf = encStrat.getGenesisEncryptionConfigWithDigest(conf.genesisRef.objectDigest)
    let genesisRef = conf.genesisRef
    let genesis = await objStore.getOrFetchReference(genesisRef, new Genesis(), encConf)
    let chain = new Chain(db, objStore, conf, genesis)
    await chain.readState()
    return chain
}
