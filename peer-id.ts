import * as peerid from 'peer-id'

// peerIDFromPubKey calls peerid.createFromPubKey asynchronously.
export async function peerIDFromPubKey(pubKeyBytes: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        peerid.createFromPubKey(pubKeyBytes, (err: any, key: any) => {
            if (err) {
                reject(err)
                return
            }

            resolve(key)
        })
    })
}
