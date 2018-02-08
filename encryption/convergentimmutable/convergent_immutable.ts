import { IStrategy } from '../encryption'
import {
    objectenc,
    ResourceResolverFunc,
    IResource,
    ISecretBoxResource,
} from '@aperturerobotics/objectenc'
import {
    LocalDB,
    ILocalStore,
    InmemDB,
} from '@aperturerobotics/objstore'
import {
    IEncryptionConfig,
    ObjectWrapper,
    newObjectWrapper,
} from '@aperturerobotics/pbobject'
import {
    inca,
    convergentimmutable,
    ConvergentImmutableConfig,
} from '../../pb'

import isEqual from 'arraybuffer-equal'
import randombytes from 'randombytes'

// StrategyType is the strategy type of this implementation.
export const StrategyType = inca.EncryptionStrategy.EncryptionStrategy_ConvergentImmutable;

// EncType is the encryption type of this implementation.
export const EncType = objectenc.EncryptionType.EncryptionType_SECRET_BOX;

// CmpType is the compression type of this implementation.
export const CmpType = objectenc.CompressionType.CompressionType_SNAPPY;

// sampleLocalDb is used to get digests. temporary hack.
const sampleLocalDb: ILocalStore = new LocalDB(new InmemDB())

// ConvergentImmutable implements the convergent encryption strategy with immutable historic encryption.
// This means that a pre-shared key will be used, along with the digest (sha256) of the object as the nonce.
// If the key is changed in some block, the blocks following the change will be re-encrypted with the new key.
// Immutable indicates that the state cannot be historically re-encrypted if the key is leaked.
export class ConvergentImmutable implements IStrategy {
    constructor(
        // key is the pre-shared key
        private key: Uint8Array,
    ) {
        //
    }

    // buildArgs encodes the arguments of the strategy to a ObjectWrapper.
    public buildArgs(): Promise<ObjectWrapper> {
        let args = new ConvergentImmutableConfig({
            preSharedKey: this.key,
        })

        return newObjectWrapper(args, {})
    }

    // GetEncryptionStrategyType returns the encryption strategy type.
    public getEncryptionStrategyType(): inca.EncryptionStrategy {
        return inca.EncryptionStrategy.EncryptionStrategy_ConvergentImmutable
    }

    // getEncryptionConfig returns the encryption configuration for encrypting an object.
    public getEncryptionConfig(): IEncryptionConfig {
        let resolver: ResourceResolverFunc = async (
            blob: objectenc.EncryptedBlob,
            resource: IResource,
        ): Promise<void> => {
            if (resource.resourceId !== 'ISecretBoxResource') {
                throw new Error('expected secret box resource')
            }

            let sb = resource as ISecretBoxResource
            if (!sb.encrypting || !sb.encryptingData) {
                throw new Error('encryption config without digest valid for encrypting only')
            }

            let digest = sampleLocalDb.digestData(sb.encryptingData)
            if (digest.length < 24) {
                throw new Error('digest returned by localdb is less than 24 bytes')
            }

            let nonce = digest.slice(digest.length - 24)
            if (nonce.length !== 24) {
                throw new Error('sliced digest nonce is not 24 bytes: ' + nonce.length)
            }

            sb.keyData = this.key
            sb.nonceData = nonce
        }

        return {
            encryptionType: EncType,
            compressionType: CmpType,
            resourceLookup: resolver,
        }
    }

    // GetGenesisEncryptionConfig returns the encryption configuration for encrypting the genesis block.
    public getGenesisEncryptionConfig(): IEncryptionConfig {
        return this.getEncryptionConfig()
    }

    // getEncryptionConfigWithDigest returns the encryption configuration for decrypting or encrypting an object with a known digest.
    public getEncryptionConfigWithDigest(digest: Uint8Array): IEncryptionConfig {
        if (digest.length < 24) {
            throw new Error('digest given for encryption config is less than 24 bytes')
        }

        let resolver: ResourceResolverFunc = async (
            blob: objectenc.EncryptedBlob,
            resource: IResource,
        ): Promise<void> => {
            if (resource.resourceId !== 'ISecretBoxResource') {
                throw new Error('expected secret box resource')
            }

            if (digest.length < 24) {
                throw new Error('digest returned by localdb is less than 24 bytes')
            }

            let sb = resource as ISecretBoxResource
            let nonce = digest.slice(digest.length - 24)

            if (nonce.length !== 24) {
                throw new Error('sliced digest nonce is not 24 bytes: ' + nonce.length)
            }

            if (sb.encrypting && sb.encryptingData) {
                let encDigest = sampleLocalDb.digestData(sb.encryptingData)
                if (!isEqual(encDigest, digest)) {
                    throw new Error('encrypting object digest does not match pre-configured encryption config digest')
                }
            }

            sb.keyData = this.key
            sb.nonceData = nonce
        }

        return {
            encryptionType: EncType,
            compressionType: CmpType,
            resourceLookup: resolver,
        }
    }

    // GetGenesisEncryptionConfigWithDigest returns the encryption configuration for the genesis block with a digest.
    public getGenesisEncryptionConfigWithDigest(digest: Uint8Array): IEncryptionConfig {
        return this.getEncryptionConfigWithDigest(digest)
    }

    // GetNodeMessageEncryptionConfig returns the encryption configuration for encrypting a node message.
    public getNodeMessageEncryptionConfig(privKey: any): IEncryptionConfig {
        let conf = this.getEncryptionConfig()
        conf.signerKeys = [privKey]
        return conf
    }

    // GetNodeMessageEncryptionConfigWithDigest returns the encryption configuration for the node message with a digest.
    public getNodeMessageEncryptionConfigWithDigest(pubKey: any, digest: Uint8Array): IEncryptionConfig {
        let conf = this.getEncryptionConfigWithDigest(digest)
        conf.verifyKeys = [pubKey]
        return conf
    }

    // GetBlockEncryptionConfig returns the encryption configuration for block messages.
    public getBlockEncryptionConfig(): IEncryptionConfig {
        return this.getEncryptionConfig()
    }

    // GetNodeMessageEncryptionConfigWithDigest returns the encryption configuration for the node message with a digest.
    public getBlockEncryptionConfigWithDigest(digest: Uint8Array): IEncryptionConfig {
        return this.getEncryptionConfigWithDigest(digest)
    }
}

// newConvergentImmutableWithConfig builds a new convergent immutable instance from a configuration.
export async function newConvergentImmutableWithConfig(conf: ObjectWrapper | null): Promise<IStrategy> {
    let confObjTmpl = new Config()
    if (!conf) {
        throw new Error('convergent immutable requires configuration with pre-shared key')
    }

    let confObj = await conf.decodeToObject(confObjTmpl, {}) as Config
    if (!confObj.preSharedKey || !confObj.preSharedKey.length) {
        throw new Error('convergent immutable requires configuration with pre-shared key')
    }

    return new ConvergentImmutable(confObj.preSharedKey)
}

// newConvergentImmutable builds a new convergent immutable instance with a random psk.
export async function newConvergentImmutable(): Promise<IStrategy> {
    let psk = randombytes(32)
    return new ConvergentImmutable(psk)
}
