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

    constructor(ipfs: IPFS) {
        this.ipfs = ipfs
        this.levelBlob = new LevelBlobDb('./test-level-db')
        this.remoteStore = new RemoteStore(ipfs)
        this.localStore = new LocalDB(this.levelBlob)
        this.objStore = new ObjectStore(this.localStore, this.remoteStore)
    }

    public async teardown() {
        this.ipfs.stop()
        await this.levelBlob.close()
    }
}

let ipfsPromise: Promise<IPFS>
export async function buildIPFS(): Promise<IPFS> {
    if (ipfsPromise) {
        return ipfsPromise
    }

    ipfsPromise = new Promise<IPFS>((resolve, reject) => {
        let ipfs = new IPFS({
            repo: './test-ipfs-repo',
        })
        ipfs.on('ready', () => {
            resolve(ipfs)
        })
        ipfs.on('error', (e: any) => {
            reject(e)
        })
    })
    return ipfsPromise
}
