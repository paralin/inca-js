import {
    SegmentState,
    chain,
    Block,
} from './pb'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { Prefixer } from '@aperturerobotics/objstore/prefixer'
import { storageref, storageRefEquals } from '@aperturerobotics/storageref'
import { IStrategy } from './encryption/encryption'
import { ObjectStore } from '@aperturerobotics/objstore'
import { Segment } from './segment'
import {
    FollowBlockRef,
    GetBlock,
    FollowBlockHeaderRef,
} from './block'

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
    // blockDb is the block database.
    private blockDb: IDb
    // objStore is the object store.
    private objStore: ObjectStore
    // segmentQueue is the segment rewinding queue.
    private segmentQueue: SegmentQueue

    constructor(dbm: IDb, objStore: ObjectStore) {
        this.db = dbm
        this.segmentDb = new Prefixer(dbm, "/segments")
        this.blockDb = new Prefixer(dbm, "/blocks")
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
    public async newSegment(blk: Block, blkRef: storageref.IStorageRef): Promise<Segment> {
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

    // rewindOnce rewinds the highest priority segment once.
    // The segment that was rewound is returned.
    public async rewindOnce(encStrat: IStrategy): Promise<Segment | null> {
        let nseg = this.segmentQueue.dequeue()
        if (!nseg) {
            return null
        }

        await this.rewindSegment(nseg, encStrat)
        return nseg
    }

    // rewindSegment rewinds a particular segment once.
    private async rewindSegment(seg: Segment, encStrat: IStrategy): Promise<void> {
        let tailRef: storageref.IStorageRef | null = seg.tailBlock || null
        let tailBlk = await FollowBlockRef(tailRef, encStrat)
        let tailBlkObj = await GetBlock(encStrat, this.blockDb, this.objStore, tailRef)
        let tailBlkHeaderRef: storageref.IStorageRef | null = tailBlk.blockHeaderRef || null
        let tailBlkHeader = await FollowBlockHeaderRef(tailBlkHeaderRef, encStrat)
        let prevBlockRef: storageref.IStorageRef | null = tailBlkHeader.lastBlockRef || null
        let prevBlk = await GetBlock(encStrat, this.blockDb, this.objStore, prevBlockRef)

        let prevSegID = prevBlk.getSegmentID()
        if (prevSegID && prevSegID.length) {
            let prevSeg = await this.getSegmentByID(prevSegID)
            if (prevSeg === seg) {
                throw new Error('previous segment resolved to same segment')
            }

            return prevSeg.appendSegment(this.blockDb, encStrat, seg)
        }

        prevBlk.setSegmentID(seg.id)
        prevBlk.setNextBlock(tailBlkObj.getBlockRef())
        await prevBlk.writeState()

        seg.tailBlock = prevBlockRef
        seg.tailBlockRound = prevBlk.getHeader().roundInfo
        try {
            await prevBlk.validateChild(tailBlkObj)
        } catch (e) {
            seg.status = chain.SegmentStatus.SegmentStatus_INVALID
        }

        if (seg.status === chain.SegmentStatus.SegmentStatus_DISJOINTED) {
            let prevBlkHeader = prevBlk.getHeader()
            if (!prevBlkHeader) {
                throw new Error('previous block header not known')
            }

            let prevBlkRound = prevBlkHeader.roundInfo
            if (!prevBlkRound) {
                throw new Error('previous block round is empty')
            }

            // height = 0 -> we have traversed to genesis.
            if (prevBlkRound.height === 0) {
                // TODO: more checking.
                    /*
                if prevBlk.GetHeader().GetChainConfigRef().Equals(chain.GetGenesis().GetInitChainConfigRef()) {
                    s.le.Info("traversed to the genesis block, marking segment as valid")
                    s.state.Status = ichain.SegmentStatus_SegmentStatus_VALID
                } else {
                    s.le.Warn("segment terminates at invalid genesis")
                    s.state.Status = ichain.SegmentStatus_SegmentStatus_INVALID
                }
                */
                seg.status = chain.SegmentStatus.SegmentStatus_VALID
            }
        }

        await seg.writeState()
    }
}
