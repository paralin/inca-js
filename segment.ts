import {
    SegmentState,
} from './pb'
import { IDb } from '@aperturerobotics/objstore/db/interfaces'
import { ObjectStore } from '@aperturerobotics/objstore'

// Segment is an instance of a connected or disconnected segment of the blockchain.
export class Segment extends SegmentState {
    // objStore is the object store
    private objStore: ObjectStore
    // db is the key-value database
    private db: IDb

    constructor(objStore: ObjectStore, db: IDb) {
        super()
        this.objStore = objStore
        this.db = db
    }

    // dbKey is the database key.
    public get dbKey(): string {
        return "/" + this.id
    }

    // readState reads the state from the database.
    public async readState(): Promise<void> {
        let dat = await this.db.getKey(this.dbKey)
        if (!dat) {
            return
        }

        let segState = this.decode(dat) as SegmentState
        Object.assign(this, segState)
        return
    }

    // writeState writes the state to the database.
    public async writeState(): Promise<void> {
        let dat = this.encode(this).finish()
        await this.db.setKey(this.dbKey, dat)
        return
    }
}
