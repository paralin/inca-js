import {
    SegmentState,
    chain,
    Block,
} from './pb'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { Prefixer } from '@aperturerobotics/objstore/prefixer'
import { storageref } from '@aperturerobotics/storageref'
import { ObjectStore } from '@aperturerobotics/objstore'
import { Segment } from './segment'

import * as Collections from 'typescript-collections'
import uuidv4 from 'uuid/v4'
import toBuffer from 'typedarray-to-buffer'

// SegmentQueue is a priority queue for rewinding segments.
export class SegmentQueue extends Collections.PriorityQueue<Segment> {
    /**
     * Creates an empty segment queue.
     */
    constructor() {
        super((a: Segment, b: Segment) => this.compareElementsLess(a, b))
    }

    /*
     * compareElementsLess is the function used to compare two element priorities.
     * Must return a negative integer, zero, or a positive integer as the first argument
     * is less than, equal to, or greater than the second.
     */
    private compareElementsLess(a: Segment, b: Segment): number {
        if (!a.tailBlockRound || !b.tailBlockRound) {
            return 0
        }

        return a.tailBlockRound.height - b.tailBlockRound.height
    }
}

// SegmentStore stores segments in memory and loads them out of the database.
export class SegmentStore {
    // segmentMap stores segments loaded into memory by id.
    private segmentMap: { [id: string]: Segment } = {}
    // db is the database.
    private db: IDb
    // segmentDb is the segment database.
    private segmentDb: IDb
    // objStore is the object store.
    private objStore: ObjectStore
    // segmentQueue is the segment rewinding queue.
    private segmentQueue: SegmentQueue

    constructor(dbm: IDb, objStore: ObjectStore) {
        this.db = dbm
        this.segmentDb = new Prefixer(dbm, "/segments")
        this.objStore = objStore
        this.segmentQueue = new SegmentQueue()
    }

    // getSegmentByID gets a segment instance from the db or creates it.
    public async getSegmentByID(id: string): Promise<Segment> {
        if (this.segmentMap.hasOwnProperty(id)) {
            return this.segmentMap[id]
        }

        let seg = new Segment(this.objStore, this.segmentDb)
        seg.id = id
        seg.status = chain.SegmentStatus.SegmentStatus_DISJOINTED

        await seg.readState()
        this.segmentMap[seg.id] = seg
        return seg
    }

    // getDigestKey returns the key for the given digest.
    public getDigestKey(hash: Uint8Array): string {
        let hashHex = toBuffer(hash).toString('hex')
        return "/" + hashHex
    }

    // newSegment builds a new segment for the block.
    public async newSegment(blk: Block, blkRef: storageref.StorageRef): Promise<Segment> {
        let blkHeader = blk.getHeader()
        if (!blkHeader) {
            throw new Error('newSegment: block header must be attached to block')
        }

        let seg = new Segment(this.objStore, this.segmentDb)
        seg.id = uuidv4()
        seg.headBlock = blkRef
        seg.tailBlock = blkRef
        seg.status = chain.SegmentStatus.SegmentStatus_DISJOINTED
        seg.tailBlockRound = blkHeader.roundInfo

        await seg.writeState()
        this.segmentMap[seg.id] = seg
        return seg
    }

    // listSegments lists all known segments in the database.
    public async listSegments(): Promise<string[]> {
        let keys = await this.segmentDb.listKeys("/")
        let res: string[] = []
        for (let key of keys) {
            let keyPts = key.split('/')
            res.push(keyPts[keyPts.length - 1])
        }
        return res
    }
}
