import { pbobject } from '@aperturerobotics/pbobject'
import { IStrategy } from './encryption'
import { inca } from '../pb'
import { newConvergentImmutableWithConfig } from './convergentimmutable'

// EncryptionStrategyCtor is a constructor for an encryption strategy with optional arguments wrapped in a pbobject.IObjectWrapper.
export type EncryptionStrategyCtor = (conf: pbobject.IObjectWrapper | null) => Promise<IStrategy>;

// encryptionStratImplMap maps encryption strategies to encryption strategy implementations.
export type encryptionStratImplMap = { [key: number]: EncryptionStrategyCtor };

let impls: encryptionStratImplMap = {}
impls[inca.EncryptionStrategy.EncryptionStrategy_ConvergentImmutable] = newConvergentImmutableWithConfig

// GetEncryptionStrategyCtor returns the constructor for the encryption strategy or throws.
export function GetEncryptionStrategyCtor(kind: inca.EncryptionStrategy): EncryptionStrategyCtor {
    let ctor = impls[kind]
    if (!ctor) {
        throw new Error('encryption strategy kind not known: ' + kind)
    }

    return ctor
}

// BuildEncryptionStrategy tries to build an encryption strategy given type and args.
export function BuildEncryptionStrategy(kind: inca.EncryptionStrategy, args: pbobject.IObjectWrapper): Promise<IStrategy> {
    let stratCtor = GetEncryptionStrategyCtor(kind)
    return stratCtor(args)
}
