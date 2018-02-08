import { Chain } from '../chain'
import { ObjectStore, LevelBlobDb, RemoteStore, LocalDB } from '@aperturerobotics/objstore'
import { generateKeyPair } from '../key'

import * as lcrypto from 'libp2p-crypto'
import IPFS from 'ipfs'
import randombytes from 'randombytes'

async function buildIPFS(): Promise<IPFS> {
  let ipfs = new IPFS({
    repo: './test-ipfs-repo'
  })
  return new Promise<IPFS>((resolve, reject) => {
    ipfs.on('ready', () => {
      resolve(ipfs)
    })
  })
}

describe('Chain', () => {
  let key = randombytes(32)
  let nonce = randombytes(24)
  let ipfs: IPFS
  let levelBlob: LevelBlobDb
  let remoteStore: RemoteStore
  let localStore: LocalDB
  let objStore: ObjectStore

  beforeAll(async () => {
    ipfs = await buildIPFS()
    levelBlob = new LevelBlobDb('./test-level-db')
    remoteStore = new RemoteStore(ipfs)
    localStore = new LocalDB(levelBlob)
    objStore = new ObjectStore(localStore, remoteStore)
  })

  afterAll(async () => {
    await levelBlob.close()
    ipfs.stop()
  })

  it('should construct correctly', async () => {
    let chain = new Chain(objStore, 'test-chain', await generateKeyPair('ed25519', 256))
  })
})
