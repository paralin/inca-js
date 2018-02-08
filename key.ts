import * as lcrypto from 'libp2p-crypto'

// generateKeyPair generates a key pair.
export async function generateKeyPair(keyType: string, keyBits: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        lcrypto.keys.generateKeyPair(keyType, keyBits, (err: any, key: any) => {
            if (err) {
                reject(err)
            } else {
                resolve(key)
            }
        })
    })
}
