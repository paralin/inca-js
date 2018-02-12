import { buildTestbed } from './common'
import { newPeer, Peer } from '../peer'
import { generateKeyPair } from '../key'
import { newConvergentImmutable } from '../encryption/convergentimmutable'
import { storageref } from '@aperturerobotics/storageref'
import { BlockImpl } from '../block'

class MockChain {
    public async handleBlockCommit(
        peer: Peer,
        blkRef: storageref.IStorageRef,
        blk: BlockImpl,
    ): Promise<void> {
        //
        return
    }
}

describe('Peer', () => {
    it('should build a new peer', async () => {
        let testbed = await buildTestbed()
        let privKey = await generateKeyPair('ed25519', 256)
        console.log(privKey)
        let mc = new MockChain()
        let p = await newPeer(
            testbed.levelBlob,
            testbed.objStore,
            privKey.public.bytes,
            new Uint8Array([]),
            await newConvergentImmutable(),
            mc,
        )
    })
})
