import { Chain, BuildChain, FromConfig } from '../chain'
import { Genesis } from '../pb'
import { ObjectStore, LevelBlobDb, RemoteStore, LocalDB } from '@aperturerobotics/objstore'
import { generateKeyPair } from '../key'
import { buildTestbed, Testbed } from './common'

import * as lcrypto from 'libp2p-crypto'
import IPFS from 'ipfs'
import randombytes from 'randombytes'

describe('Chain', () => {
    let key = randombytes(32)
    let nonce = randombytes(24)

    it('should construct correctly', async () => {
        let testbed = await buildTestbed()
        let chain = new Chain(
            testbed.levelBlob,
            testbed.objStore,
            'test-chain',
            await generateKeyPair('ed25519', 256),
            new Genesis(),
        )
    })

    it('should build a new chain correctly', async () => {
        let testbed = await buildTestbed()
        let chain = await BuildChain(
            testbed.levelBlob,
            testbed.objStore,
            'test-chain',
            await generateKeyPair('ed25519', 256),
        )

        let fromConfig = await FromConfig(
            testbed.levelBlob,
            testbed.objStore,
            chain.getChainConfig(),
        )
    })
})
