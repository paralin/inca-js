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
import { inca } from '../../pb/chain'
import { IEncryptionConfig } from '../../../pbobject/index';
import isEqual from 'arraybuffer-equal'

// StrategyType is the strategy type of this implementation.
export const StrategyType = inca.EncryptionStrategy.EncryptionStrategy_ConvergentImmutable;

// EncType is the encryption type of this implementation.
export const EncType = objectenc.EncryptionType.EncryptionType_SECRET_BOX;

// CmpType is the compression type of this implementation.
export const CmpType = objectenc.CompressionType.CompressionType_SNAPPY;

const sampleLocalDb: ILocalStore = new LocalDB(new InmemDB())

// ConvergentImmutable implements the convergent encryption strategy with immutable historic encryption.
// This means that a pre-shared key will be used, along with the digest (sha256) of the object as the nonce.
// If the key is changed in some block, the blocks following the change will be re-encrypted with the new key.
// Immutable indicates that the state cannot be historically re-encrypted if the key is leaked.
export class ConvergentImmutable implements IStrategy {
    // key is the pre-shared key
    private key: Uint8Array

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
            if (nonce.length != 24) {
                throw new Error('sliced digest nonce is not 24 bytes')
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

            let sb = resource as ISecretBoxResource
            let nonce = digest.slice(digest.length - 24)
            if (nonce.length != 24) {
                throw new Error('sliced digest nonce is not 24 bytes')
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
