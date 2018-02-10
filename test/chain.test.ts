import { Chain, BuildChain } from '../chain'
import { ObjectStore, LevelBlobDb, RemoteStore, LocalDB } from '@aperturerobotics/objstore'
import { generateKeyPair } from '../key'
import { Testbed, buildIPFS } from './common'

import * as lcrypto from 'libp2p-crypto'
import IPFS from 'ipfs'
import randombytes from 'randombytes'

describe('Chain', () => {
    let key = randombytes(32)
    let nonce = randombytes(24)

    let ipfs: IPFS
    let testbed: Testbed

    beforeAll(async () => {
        ipfs = await buildIPFS()
        testbed = new Testbed(ipfs)
    })

    afterAll(async () => {
        await testbed.teardown()
    })

    it('should construct correctly', async () => {
        let chain = new Chain(
            testbed.levelBlob,
            testbed.objStore,
            'test-chain',
            await generateKeyPair('ed25519', 256),
        )
    })

    it('should build a new chain correctly', async () => {
        let chain = await BuildChain(
            testbed.levelBlob,
            testbed.objStore,
            'test-chain',
            await generateKeyPair('ed25519', 256),
        )
    })
})
