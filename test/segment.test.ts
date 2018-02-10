import { storageref } from '@aperturerobotics/storageref'
import { Segment } from '../segment'
import { SegmentStore } from '../segment-store'
import { Testbed, buildIPFS } from './common'
import { Block, BlockHeader } from '../pb'

describe('Segment', () => {
    let ipfs: IPFS
    let testbed: Testbed

    beforeAll(async () => {
        ipfs = await buildIPFS()
        testbed = new Testbed(ipfs)
    })

    it('should generate a uuid when making a new segment', async () => {
        let segmentStore = new SegmentStore(testbed.levelBlob, testbed.objStore)
        let blkHeader = new BlockHeader()
        let blk = new Block(undefined, blkHeader)
        let blkStorageRef = new storageref.StorageRef({})
        let seg = await segmentStore.newSegment(blk, blkStorageRef)
        expect(seg.id).not.toEqual("")

        let segb = await segmentStore.getSegmentByID(seg.id)
        expect(segb).toBe(seg)
    })

    afterAll(async () => {
        await testbed.teardown()
    })
})
