import { ObjectStore } from '@aperturerobotics/objstore'
import { chain } from './pb/chain/chain_config'
import * as lcrypto from 'libp2p-crypto'

export class Chain {
    // db is the object store.
    private db: ObjectStore;
    private conf: chain.IConfig

    constructor(objStore: ObjectStore, chainID: string, validatorPriv: any) {
    }
}
