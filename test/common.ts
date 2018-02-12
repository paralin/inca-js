import { ObjectStore, LevelBlobDb, RemoteStore, LocalDB } from '@aperturerobotics/objstore'
import IPFS from 'ipfs'

// Testbed is an initialized testbed.
export class Testbed {
    // levelBlob is the level blob database.
    public levelBlob: LevelBlobDb
    // remoteStore is the remote store
    public remoteStore: RemoteStore
    // localStore is the local database
    public localStore: LocalDB
    // objStore is the object storage stack.
    public objStore: ObjectStore
    // ipfs is the ipfs instance
    public ipfs: IPFS
    // refCount is the reference count.
    public refCount: number

    public async teardown() {
        this.ipfs.close()
        await this.levelBlob.close()
    }
}

export async function buildTestbed(): Promise<Testbed> {
    let randTestbedID = Math.floor(Math.random() * 1000000)
    let id = "" + randTestbedID
    console.log('building testbed ' + id)
    return new Promise<Testbed>((resolve, reject) => {
        // Problem:
        // 1. IPFS binds to a port, and to a path (repo + port)
        // 2. jest (the testing framework) runs multiple threads.
        // 3. IPFS nodes are conflicting for this reason.
        // To solve this, for now, we just add an ID to the repo name.
        // TODO: Properly solve this.
        let path = './test-repos/' + id
        let ipfs = new IPFS({
            init: true,
            start: true,
            EXPERIMENTAL: {
                pubsub: true,
            },
            repo: path,
            config: {Addresses: {Swarm: []}}
        })
        ipfs.on('ready', () => {
            console.log('testbed ready')
            let tb = new Testbed()
            tb.ipfs = ipfs
            tb.levelBlob = new LevelBlobDb(path)
            tb.remoteStore = new RemoteStore(ipfs)
            tb.localStore = new LocalDB(tb.levelBlob)
            tb.objStore = new ObjectStore(tb.localStore, tb.remoteStore)

            resolve(tb)
        })
        ipfs.on('error', (e: any) => {
            reject(e)
        })
    })
}
