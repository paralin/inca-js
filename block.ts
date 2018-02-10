import { IStrategy } from './encryption/encryption'
import { IDb } from './db'
import { StorageRef } from '@aperturerobotics/storageref'
import { Block, BlockHeader, block } from './pb'

import toBuffer from 'typedarray-to-buffer'

// BlockImpl contains the implementation of the block logic loaded into memory.
export class BlockImpl extends Block {
    // state is the block state.
    private state: block.State
    // db is a reference to the db.
    private db: IDb
    // blk is the block object
    private blk: Block
    // header is the block header object
    private header: BlockHeader
    // encStrat is the encryption strategy
    private encStrat: IStrategy
    // blkRef is the block storage reference
    private blkRef: StorageRef
    // id is the block id
    private id: string
    // dbKey is the database key
    private dbKey: string

    constructor(
        db: IDb,
        blockRef: StorageRef,
        blk: Block,
        header: BlockHeader,
        encStrat: IStrategy,
    ) {
        let digestBuf = toBuffer(blockRef.objectDigest)
        let id = digestBuf.toString('base64')

        this.state = {}
        this.id = id
        this.db = db
        this.blkRef = blockRef
        this.blk = blk
        this.header = header
        this.encStrat = encStrat
        this.dbKey = "/"+id
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
        let dat = this.db.getKey(dbKey)
        if (!dat || !dat.length) {
            return
        }

        this.state = block.State.decode(dat)
    }
}

// FollowBlockRef follows a reference to a Block object.
export async function FollowBlockRef(
    ref: StorageRef,
    encStrat: IStrategy,
): Promise<Block> {
    // TODO: 
    return null
}

// FollowBlockHeaderRef follows a reference to a BlockHeader object.
export async function FollowBlockHeaderRef(
    ref: StorageRef,
    encStrat: IStrategy,
): Promise<BlockHeader> {
    // TODO
    return null
}

// GetBlock gets the Block object associated with the given Block storage ref.
export async function GetBlock(
    encStrat: IStrategy,
    dbm: IDb,
    blockRef: StorageRef,
): Promise<BlockImpl> {
    let blk = FollowBlockRef(blockRef, encStrat)
    let blkHeader = FollowBlockHeaderRef(blk.blockHeaderRef, encStrat)
    let b = new BlockImpl(dbm, blockRef, blk, blkHeader, encStrat)
    await b.readState()
    return b
}
