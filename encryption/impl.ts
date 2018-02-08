import { ObjectWrapper } from '@aperturerobotics/pbobject'
import { IStrategy } from './encryption'
import { inca } from '../pb/chain'
import { newConvergentImmutable } from './convergentimmutable'

// EncryptionStrategyCtor is a constructor for an encryption strategy with optional arguments wrapped in a ObjectWrapper.
export type EncryptionStrategyCtor = function(conf: ObjectWrapper | null): Promise<IStrategy>;

// encryptionStratImplMap maps encryption strategies to encryption strategy implementations.
export type encryptionStratImplMap = { [key: number]: EncryptionStrategyCtor };

let impls: encryptionStratImplMap = {}
impls[inca.EncryptionStrategy.EncryptionStrategy_ConvergentImmutable] = 
