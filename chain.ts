import { ObjectStore } from '@aperturerobotics/objstore'
import { chain } from './pb/chain/chain_config'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { EncryptionStrategyCtor } from './encryption/impl'
import * as lcrypto from 'libp2p-crypto'

export class Chain {
    private objStore: ObjectStore
    private conf: chain.IConfig
    private db: IDb

    // Constructs a new Chain from scratch from a chain ID and validator private key.
    constructor(db: IDb, objStore: ObjectStore, chainID: string, validatorPriv: any) {
        if (!chainID || !chainID.length) {
            throw new Error("chain id must be set")
        }

        this.db = db
        this.objStore = objStore

        let encStrat: EncryptionStrategyCtor
    }
}
