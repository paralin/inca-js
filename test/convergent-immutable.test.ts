import { ConvergentImmutable, newConvergentImmutable } from '../encryption/convergentimmutable/convergent_immutable'
import { buildTestbed, Testbed } from './common'
import { MockObject } from '@aperturerobotics/pbobject/mock/object'

import toBuffer from 'typedarray-to-buffer'

describe('ConvergentImmutable', () => {
    it('should encrypt and decrypt correctly', async () => {
        let testbed = await buildTestbed()
        let strat = await newConvergentImmutable()
        let encConf = strat.getEncryptionConfig()
        let objStore = testbed.objStore

        let objBefore = new MockObject({ testField: "testing" })
        let res = await objStore.storeObject(
            objBefore,
            encConf,
        )

        let encConfDec = strat.getEncryptionConfigWithDigest(res.storageRef.objectDigest)
        console.log('reported digest: '+ toBuffer(res.storageRef.objectDigest).toString('base64'))
        let objAfter = new MockObject()
        objAfter = await objStore.getOrFetch(
            res.storageRef.objectDigest,
            res.storageRef.ipfs.objectHash,
            objAfter,
            encConfDec,
        )
        expect(objBefore.testField).toEqual(objAfter.testField)
    })
})
