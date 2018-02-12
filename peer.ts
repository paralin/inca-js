import { ObjectStore, Prefixer } from '@aperturerobotics/objstore'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { IStrategy } from './encryption'
import { peer } from './pb'
import { storageref } from '@aperturerobotics/storageref'
import { BlockImpl } from './block'
import { peerIDFromPubKey } from './peer-id'

// IPeerHandler is the block commit peer handler.
export interface IPeerHandler {
    // handleBlockCommit handles an incoming block commit.
    handleBlockCommit(peer: Peer, blkRef: storageref.IStorageRef, blk: BlockImpl): Promise<void>
}

// Peer is an observed participant in the network.
export class Peer {
    // state is the peer state.
    private state: peer.PeerState

    constructor(
        // db is the peer database.
        private db: IDb,
        // objStore is the object store.
        private objStore: ObjectStore,
        // pubKey is the public key of the node.
        private pubKey: any,
        // peerID is the peer id.
        private peerID: any,
        // genesisDigest is the genesis digest.
        private genesisDigest: Uint8Array,
        // encStrat is the encryption strategy
        private encStrat: IStrategy,
        // handler is the peer event handler.
        private handler: IPeerHandler,
    ) {
        this.state = new peer.PeerState()
    }

    // readState reads the state.
    public async readState(): Promise<void> {
        let dat = await this.db.getKey("/state")
        if (!dat) {
            return
        }

        let state = this.state.decode(dat) as peer.PeerState
        this.state = state
    }
}

// newPeer builds a new peer.
export async function newPeer(
    // dbm is the parent database.
    dbm: IDb,
    // objStore is the object store.
    private objStore: ObjectStore,
    // pubKey is the public key of the node.
    private pubKey: any,
    // genesisDigest is the genesis digest.
    private genesisDigest: Uint8Array,
    // encStrat is the encryption strategy
    private encStrat: IStrategy,
    // handler is the peer event handler.
    private handler: IPeerHandler,
): Promise<Peer> {
    let peerID = await peerIDFromPubKey(pubKey)
    let db = new Prefixer(dbm, "/" + peerID.toB58String())

    let p = new Peer(db, objStore, pubKey, peerID, genesisDigest, encStrat, handler)
    await p.readState()
    return p
}
