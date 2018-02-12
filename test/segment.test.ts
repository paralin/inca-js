import { storageref } from '@aperturerobotics/storageref'
import { Segment } from '../segment'
import { SegmentStore } from '../segment-store'
import { buildTestbed, Testbed } from './common'
import { Block, BlockHeader } from '../pb'

describe('Segment', () => {
    it('should generate a uuid when making a new segment', async () => {
        let testbed = await buildTestbed()

        let segmentStore = new SegmentStore(testbed.levelBlob, testbed.objStore)
        let blkHeader = new BlockHeader()
        let blk = new Block(undefined, blkHeader)
        let blkStorageRef = new storageref.StorageRef({})
        let seg = await segmentStore.newSegment(blk, blkStorageRef)
        expect(seg.id).not.toEqual("")

        let segb = await segmentStore.getSegmentByID(seg.id)
        expect(segb).toBe(seg)
    })
})
