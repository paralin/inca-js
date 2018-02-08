import { inca } from '../pb'
import { pbobject, IEncryptionConfig } from '@aperturerobotics/pbobject'

// IStrategy is a blockchain encryption implementation strategy.
export interface IStrategy {
    // GetEncryptionStrategyType returns the encryption strategy type.
    getEncryptionStrategyType(): inca.EncryptionStrategy
    // GetGenesisEncryptionConfig returns the encryption configuration for encrypting the genesis block.
    getGenesisEncryptionConfig(): IEncryptionConfig
    // GetGenesisEncryptionConfigWithDigest returns the encryption configuration for the genesis block with a digest.
    getGenesisEncryptionConfigWithDigest(digest: Uint8Array): IEncryptionConfig
    // GetNodeMessageEncryptionConfig returns the encryption configuration for encrypting a node message.
    getNodeMessageEncryptionConfig(privKey: any): IEncryptionConfig
    // GetNodeMessageEncryptionConfigWithDigest returns the encryption configuration for the node message with a digest.
    getNodeMessageEncryptionConfigWithDigest(pubKey: any, digest: Uint8Array): IEncryptionConfig
    // GetBlockEncryptionConfig returns the encryption configuration for block messages.
    getBlockEncryptionConfig(): IEncryptionConfig
    // GetNodeMessageEncryptionConfigWithDigest returns the encryption configuration for the node message with a digest.
    getBlockEncryptionConfigWithDigest(digest: Uint8Array): IEncryptionConfig
}
