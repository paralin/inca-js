import { IStrategy } from './encryption/encryption'
import { IDb } from '@aperturerobotics/objstore'
import { timestampToTime } from '@aperturerobotics/timestamp';
import { storageref } from '@aperturerobotics/storageref'
import { ObjectStore } from '@aperturerobotics/objstore';
import {
    Block,
    BlockHeader,
    ChainConfig,
    block,
} from './pb'

import * as toBuffer from 'typedarray-to-buffer'

// BlockImpl contains the implementation of the block logic loaded into memory.
export class BlockImpl extends Block {
    // state is the block state.
    public state: block.State
    // db is a reference to the db.
    private db: IDb
    // objStore is the object store.
    private objStore: ObjectStore;
    // encStrat is the encryption strategy
    private encStrat: IStrategy
    // blkRef is the block storage reference
    private blkRef: storageref.IStorageRef
    // id is the block id
    private id: string
    // dbKey is the database key
    private dbKey: string

    constructor(
        db: IDb,
        objStore: ObjectStore,
        blockRef: storageref.IStorageRef,
        blk: Block,
        header: BlockHeader,
        encStrat: IStrategy,
    ) {
        super(blk)
        let digestBuf = toBuffer(blockRef.objectDigest)
        let id = digestBuf.toString('base64')

        this.state = new block.State({ segmentId: "" })
        this.objStore = objStore
        this.id = id
        this.db = db
        this.blkRef = blockRef
        this.setHeader(header)
        this.encStrat = encStrat
        this.dbKey = "/" + id
    }

    // writeState attempts to write state to the db.
    public async writeState(): Promise<void> {
        let dbKey = this.dbKey
        let val = block.State.encode(this.state).finish()
        await this.db.setKey(dbKey, val)
    }

    // readState attempts to read state from the db.
    public async readState(): Promise<void> {
        let dbKey = this.dbKey
        let dat = await this.db.getKey(dbKey)
        if (!dat || !dat.length) {
            return
        }

        this.state = block.State.decode(dat)
    }

    // getSegmentID returns the current segment ID.
    public getSegmentID(): string {
        return this.state.segmentId
    }

    // setSegmentID sets the segment ID.
    public setSegmentID(id: string) {
        this.state.segmentId = id
    }

    // setNextBlock sets the reference to the next block.
    public setNextBlock(ref: storageref.IStorageRef) {
        this.state.nextBlock = ref
    }

    // getBlockRef returns the block reference.
    public getBlockRef(): storageref.IStorageRef {
        return this.blkRef
    }

    // validateChild throws if the child is not valid.
    public async validateChild(child: BlockImpl): Promise<void> {
        let childHeader = child.getHeader()
        if (!childHeader) {
            throw new Error('child block header unset, cannot validate')
        }

        let bHeader = this.getHeader()
        if (!bHeader) {
            throw new Error('parent block header unset, cannot validate child')
        }

        let bTs = timestampToTime(bHeader.blockTs || null)
        let childTs = timestampToTime(childHeader.blockTs || null)

        let bRoundInfo = bHeader.roundInfo
        if (!bRoundInfo) {
            throw new Error('parent block header did not contain round info, cannot validate child')
        }

        let childRoundInfo = childHeader.roundInfo
        if (!childRoundInfo) {
            throw new Error('child block header did not contain round info, cannot validate')
        }

        let childExpectedHeight = ((bRoundInfo.height as number) || 0) + 1
        if (childRoundInfo.height !== childExpectedHeight) {
            throw new Error(`child height ${childRoundInfo.height} != expected ${childExpectedHeight}`)
        }

        if (childTs.getTime() < bTs.getTime()) {
            throw new Error(`child timestamp ${childTs.toString()} before parent ${bTs.toString()}`)
        }

        let chainConf = await this.fetchChainConfig()
    }

    // fetchChainConfig fetches the chain config.
    private async fetchChainConfig(): Promise<ChainConfig> {
        let header = this.getHeader()
        if (!header || !header.chainConfigRef || !header.chainConfigRef.objectDigest) {
            throw new Error('header reference required')
        }

        let chainConfRef = header.chainConfigRef
        if (!chainConfRef || !chainConfRef.objectDigest) {
            throw new Error('chain config reference and object digest required')
        }

        let encConf = this.encStrat.getBlockEncryptionConfigWithDigest(chainConfRef.objectDigest)
        let chainConf = await this.objStore.getOrFetchReference(chainConfRef, new ChainConfig(), encConf) as ChainConfig
        if (!chainConf) {
            throw new Error('cannot find chain config in network')
        }

        return chainConf
    }
}

// FollowBlockRef follows a reference to a Block object.
export async function FollowBlockRef(
    ref: storageref.IStorageRef | null,
    encStrat: IStrategy,
    objStore: ObjectStore,
): Promise<Block> {
    if (!ref || !ref.objectDigest) {
        throw new Error('block reference and object digest expected')
    }

    let encConf = encStrat.getBlockEncryptionConfigWithDigest(ref.objectDigest)
    let blockRef = await objStore.getOrFetchReference(ref, new Block(), encConf) as Block
    if (!blockRef) {
        throw new Error('cannot find block reference in network')
    }

    return blockRef
}

// FollowBlockHeaderRef follows a reference to a BlockHeader object.
export async function FollowBlockHeaderRef(
    ref: storageref.IStorageRef | null,
    encStrat: IStrategy,
    objStore: ObjectStore,
): Promise<BlockHeader> {
    if (!ref || !ref.objectDigest) {
        throw new Error('block header reference and object digest expected')
    }

    let encConf = encStrat.getBlockEncryptionConfigWithDigest(ref.objectDigest)
    let blockHeader = await objStore.getOrFetchReference(ref, new BlockHeader(), encConf) as BlockHeader
    if (!blockHeader) {
        throw new Error('cannot find block header reference in network')
    }

    return blockHeader
}

// GetBlock gets the Block object associated with the given Block storage ref.
export async function GetBlock(
    encStrat: IStrategy,
    dbm: IDb,
    objStore: ObjectStore,
    blockRef: storageref.IStorageRef | null,
): Promise<BlockImpl> {
    if (!blockRef) {
        throw new Error('block reference expected')
    }

    let blk = await FollowBlockRef(blockRef, encStrat, objStore)
    let blkHeader = await FollowBlockHeaderRef(blk.blockHeaderRef || null, encStrat, objStore)
    let b = new BlockImpl(dbm, objStore, blockRef, blk, blkHeader, encStrat)
    await b.readState()
    return b
}
