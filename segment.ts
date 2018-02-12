import {
    chain,
    SegmentState,
} from './pb'
import { IStrategy } from './encryption'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { ObjectStore } from '@aperturerobotics/objstore'
import { GetBlock } from './block';

// Segment is an instance of a connected or disconnected segment of the blockchain.
export class Segment extends SegmentState {
    // objStore is the object store
    private objStore: ObjectStore
    // db is the key-value database
    private db: IDb

    constructor(objStore: ObjectStore, db: IDb) {
        super()
        this.objStore = objStore
        this.db = db
    }

    // dbKey is the database key.
    public get dbKey(): string {
        return "/" + this.id
    }

    // readState reads the state from the database.
    public async readState(): Promise<void> {
        let dat = await this.db.getKey(this.dbKey)
        if (!dat) {
            return
        }

        let segState = this.decode(dat) as SegmentState
        Object.assign(this, segState)
    }

    // writeState writes the state to the database.
    public async writeState(): Promise<void> {
        let dat = this.encode(this).finish()
        await this.db.setKey(this.dbKey, dat)
        return
    }

    // appendSegment attempts to append a segment to the segment.
    public async appendSegment(blockDbm: IDb, encStrat: IStrategy, segNext: Segment): Promise<void> {
        if (segNext.status !== chain.SegmentStatus.SegmentStatus_DISJOINTED) {
            throw new Error('unexpected status: ' + segNext.status.toString())
        }

        let tailRef = segNext.tailBlock
        let tailBlk = await GetBlock(encStrat, blockDbm, this.objStore, tailRef || null)

        let sHeadRef = this.headBlock
        let sHeadBlk = await GetBlock(encStrat, blockDbm, this.objStore, sHeadRef || null)
        try {
            await sHeadBlk.validateChild(tailBlk)
        } catch (e) {
            segNext.status = chain.SegmentStatus.SegmentStatus_INVALID
            segNext.invalidError = "" + e
            return segNext.writeState()
        }

        segNext.status = this.status
        segNext.segmentPrev = this.id

        await segNext.writeState()
        this.segmentNext = segNext.id
        return this.writeState()
    }
}
