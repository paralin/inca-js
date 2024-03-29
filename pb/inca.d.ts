/* tslint:disable */
import * as $protobuf from "protobufjs";

/** Namespace inca. */
export namespace inca {

    /** Properties of a Validator. */
    interface IValidator {

        /** Validator pubKey */
        pubKey?: (Uint8Array|null);

        /** Validator votingPower */
        votingPower?: (number|Long|null);

        /** Validator operationMode */
        operationMode?: (inca.Validator.OperationMode|null);
    }

    /** Represents a Validator. */
    class Validator implements IValidator {

        /**
         * Constructs a new Validator.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IValidator);

        /** Validator pubKey. */
        public pubKey: Uint8Array;

        /** Validator votingPower. */
        public votingPower: (number|Long);

        /** Validator operationMode. */
        public operationMode: inca.Validator.OperationMode;

        /**
         * Creates a new Validator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Validator instance
         */
        public static create(properties?: inca.IValidator): inca.Validator;

        /**
         * Encodes the specified Validator message. Does not implicitly {@link inca.Validator.verify|verify} messages.
         * @param message Validator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Validator message, length delimited. Does not implicitly {@link inca.Validator.verify|verify} messages.
         * @param message Validator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Validator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.Validator;

        /**
         * Decodes a Validator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.Validator;

        /**
         * Verifies a Validator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Validator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Validator
         */
        public static fromObject(object: { [k: string]: any }): inca.Validator;

        /**
         * Creates a plain object from a Validator message. Also converts values to other types if specified.
         * @param message Validator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.Validator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Validator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Validator {

        /** OperationMode enum. */
        enum OperationMode {
            OperationMode_STAGING = 0,
            OperationMode_OPERATING = 1
        }
    }

    /** Properties of a ValidatorSet. */
    interface IValidatorSet {

        /** ValidatorSet validators */
        validators?: (inca.IValidator[]|null);
    }

    /** Represents a ValidatorSet. */
    class ValidatorSet implements IValidatorSet {

        /**
         * Constructs a new ValidatorSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IValidatorSet);

        /** ValidatorSet validators. */
        public validators: inca.IValidator[];

        /**
         * Creates a new ValidatorSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidatorSet instance
         */
        public static create(properties?: inca.IValidatorSet): inca.ValidatorSet;

        /**
         * Encodes the specified ValidatorSet message. Does not implicitly {@link inca.ValidatorSet.verify|verify} messages.
         * @param message ValidatorSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IValidatorSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidatorSet message, length delimited. Does not implicitly {@link inca.ValidatorSet.verify|verify} messages.
         * @param message ValidatorSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IValidatorSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidatorSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidatorSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.ValidatorSet;

        /**
         * Decodes a ValidatorSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidatorSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.ValidatorSet;

        /**
         * Verifies a ValidatorSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidatorSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidatorSet
         */
        public static fromObject(object: { [k: string]: any }): inca.ValidatorSet;

        /**
         * Creates a plain object from a ValidatorSet message. Also converts values to other types if specified.
         * @param message ValidatorSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.ValidatorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidatorSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Block. */
    interface IBlock {

        /** Block blockHeaderRef */
        blockHeaderRef?: (storageref.IStorageRef|null);

        /** Block voteRefs */
        voteRefs?: (storageref.IStorageRef[]|null);
    }

    /** Represents a Block. */
    class Block implements IBlock {

        /**
         * Constructs a new Block.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IBlock);

        /** Block blockHeaderRef. */
        public blockHeaderRef?: (storageref.IStorageRef|null);

        /** Block voteRefs. */
        public voteRefs: storageref.IStorageRef[];

        /**
         * Creates a new Block instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Block instance
         */
        public static create(properties?: inca.IBlock): inca.Block;

        /**
         * Encodes the specified Block message. Does not implicitly {@link inca.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link inca.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.Block;

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.Block;

        /**
         * Verifies a Block message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Block
         */
        public static fromObject(object: { [k: string]: any }): inca.Block;

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @param message Block
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Block to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockRoundInfo. */
    interface IBlockRoundInfo {

        /** BlockRoundInfo height */
        height?: (number|Long|null);

        /** BlockRoundInfo round */
        round?: (number|Long|null);
    }

    /** Represents a BlockRoundInfo. */
    class BlockRoundInfo implements IBlockRoundInfo {

        /**
         * Constructs a new BlockRoundInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IBlockRoundInfo);

        /** BlockRoundInfo height. */
        public height: (number|Long);

        /** BlockRoundInfo round. */
        public round: (number|Long);

        /**
         * Creates a new BlockRoundInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockRoundInfo instance
         */
        public static create(properties?: inca.IBlockRoundInfo): inca.BlockRoundInfo;

        /**
         * Encodes the specified BlockRoundInfo message. Does not implicitly {@link inca.BlockRoundInfo.verify|verify} messages.
         * @param message BlockRoundInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IBlockRoundInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockRoundInfo message, length delimited. Does not implicitly {@link inca.BlockRoundInfo.verify|verify} messages.
         * @param message BlockRoundInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IBlockRoundInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockRoundInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockRoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.BlockRoundInfo;

        /**
         * Decodes a BlockRoundInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockRoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.BlockRoundInfo;

        /**
         * Verifies a BlockRoundInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockRoundInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockRoundInfo
         */
        public static fromObject(object: { [k: string]: any }): inca.BlockRoundInfo;

        /**
         * Creates a plain object from a BlockRoundInfo message. Also converts values to other types if specified.
         * @param message BlockRoundInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.BlockRoundInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockRoundInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockHeader. */
    interface IBlockHeader {

        /** BlockHeader genesisRef */
        genesisRef?: (storageref.IStorageRef|null);

        /** BlockHeader chainConfigRef */
        chainConfigRef?: (storageref.IStorageRef|null);

        /** BlockHeader nextChainConfigRef */
        nextChainConfigRef?: (storageref.IStorageRef|null);

        /** BlockHeader lastBlockRef */
        lastBlockRef?: (storageref.IStorageRef|null);

        /** BlockHeader roundInfo */
        roundInfo?: (inca.IBlockRoundInfo|null);

        /** BlockHeader blockTs */
        blockTs?: (timestamp.ITimestamp|null);

        /** BlockHeader proposerId */
        proposerId?: (string|null);
    }

    /** Represents a BlockHeader. */
    class BlockHeader implements IBlockHeader {

        /**
         * Constructs a new BlockHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IBlockHeader);

        /** BlockHeader genesisRef. */
        public genesisRef?: (storageref.IStorageRef|null);

        /** BlockHeader chainConfigRef. */
        public chainConfigRef?: (storageref.IStorageRef|null);

        /** BlockHeader nextChainConfigRef. */
        public nextChainConfigRef?: (storageref.IStorageRef|null);

        /** BlockHeader lastBlockRef. */
        public lastBlockRef?: (storageref.IStorageRef|null);

        /** BlockHeader roundInfo. */
        public roundInfo?: (inca.IBlockRoundInfo|null);

        /** BlockHeader blockTs. */
        public blockTs?: (timestamp.ITimestamp|null);

        /** BlockHeader proposerId. */
        public proposerId: string;

        /**
         * Creates a new BlockHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockHeader instance
         */
        public static create(properties?: inca.IBlockHeader): inca.BlockHeader;

        /**
         * Encodes the specified BlockHeader message. Does not implicitly {@link inca.BlockHeader.verify|verify} messages.
         * @param message BlockHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link inca.BlockHeader.verify|verify} messages.
         * @param message BlockHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.BlockHeader;

        /**
         * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.BlockHeader;

        /**
         * Verifies a BlockHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockHeader
         */
        public static fromObject(object: { [k: string]: any }): inca.BlockHeader;

        /**
         * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
         * @param message BlockHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.BlockHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Vote. */
    interface IVote {

        /** Vote blockHeaderRef */
        blockHeaderRef?: (storageref.IStorageRef|null);
    }

    /** Represents a Vote. */
    class Vote implements IVote {

        /**
         * Constructs a new Vote.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IVote);

        /** Vote blockHeaderRef. */
        public blockHeaderRef?: (storageref.IStorageRef|null);

        /**
         * Creates a new Vote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vote instance
         */
        public static create(properties?: inca.IVote): inca.Vote;

        /**
         * Encodes the specified Vote message. Does not implicitly {@link inca.Vote.verify|verify} messages.
         * @param message Vote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vote message, length delimited. Does not implicitly {@link inca.Vote.verify|verify} messages.
         * @param message Vote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.Vote;

        /**
         * Decodes a Vote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.Vote;

        /**
         * Verifies a Vote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vote
         */
        public static fromObject(object: { [k: string]: any }): inca.Vote;

        /**
         * Creates a plain object from a Vote message. Also converts values to other types if specified.
         * @param message Vote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Genesis. */
    interface IGenesis {

        /** Genesis chainId */
        chainId?: (string|null);

        /** Genesis timestamp */
        timestamp?: (timestamp.ITimestamp|null);

        /** Genesis encStrategy */
        encStrategy?: (inca.EncryptionStrategy|null);

        /** Genesis initChainConfigRef */
        initChainConfigRef?: (storageref.IStorageRef|null);
    }

    /** Represents a Genesis. */
    class Genesis implements IGenesis {

        /**
         * Constructs a new Genesis.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IGenesis);

        /** Genesis chainId. */
        public chainId: string;

        /** Genesis timestamp. */
        public timestamp?: (timestamp.ITimestamp|null);

        /** Genesis encStrategy. */
        public encStrategy: inca.EncryptionStrategy;

        /** Genesis initChainConfigRef. */
        public initChainConfigRef?: (storageref.IStorageRef|null);

        /**
         * Creates a new Genesis instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Genesis instance
         */
        public static create(properties?: inca.IGenesis): inca.Genesis;

        /**
         * Encodes the specified Genesis message. Does not implicitly {@link inca.Genesis.verify|verify} messages.
         * @param message Genesis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IGenesis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Genesis message, length delimited. Does not implicitly {@link inca.Genesis.verify|verify} messages.
         * @param message Genesis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IGenesis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Genesis message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Genesis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.Genesis;

        /**
         * Decodes a Genesis message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Genesis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.Genesis;

        /**
         * Verifies a Genesis message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Genesis message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Genesis
         */
        public static fromObject(object: { [k: string]: any }): inca.Genesis;

        /**
         * Creates a plain object from a Genesis message. Also converts values to other types if specified.
         * @param message Genesis
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.Genesis, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Genesis to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** EncryptionStrategy enum. */
    enum EncryptionStrategy {
        EncryptionStrategy_Invalid = 0,
        EncryptionStrategy_ConvergentImmutable = 1
    }

    /** Properties of a ChainConfig. */
    interface IChainConfig {

        /** ChainConfig timingConfig */
        timingConfig?: (inca.ITimingConfig|null);

        /** ChainConfig validatorSetRef */
        validatorSetRef?: (storageref.IStorageRef|null);
    }

    /** Represents a ChainConfig. */
    class ChainConfig implements IChainConfig {

        /**
         * Constructs a new ChainConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IChainConfig);

        /** ChainConfig timingConfig. */
        public timingConfig?: (inca.ITimingConfig|null);

        /** ChainConfig validatorSetRef. */
        public validatorSetRef?: (storageref.IStorageRef|null);

        /**
         * Creates a new ChainConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChainConfig instance
         */
        public static create(properties?: inca.IChainConfig): inca.ChainConfig;

        /**
         * Encodes the specified ChainConfig message. Does not implicitly {@link inca.ChainConfig.verify|verify} messages.
         * @param message ChainConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IChainConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChainConfig message, length delimited. Does not implicitly {@link inca.ChainConfig.verify|verify} messages.
         * @param message ChainConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IChainConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChainConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChainConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.ChainConfig;

        /**
         * Decodes a ChainConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChainConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.ChainConfig;

        /**
         * Verifies a ChainConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChainConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChainConfig
         */
        public static fromObject(object: { [k: string]: any }): inca.ChainConfig;

        /**
         * Creates a plain object from a ChainConfig message. Also converts values to other types if specified.
         * @param message ChainConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.ChainConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChainConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimingConfig. */
    interface ITimingConfig {

        /** TimingConfig minProposeAfterBlock */
        minProposeAfterBlock?: (number|null);

        /** TimingConfig maxProposeAfterBlock */
        maxProposeAfterBlock?: (number|null);

        /** TimingConfig roundLength */
        roundLength?: (number|null);
    }

    /** Represents a TimingConfig. */
    class TimingConfig implements ITimingConfig {

        /**
         * Constructs a new TimingConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.ITimingConfig);

        /** TimingConfig minProposeAfterBlock. */
        public minProposeAfterBlock: number;

        /** TimingConfig maxProposeAfterBlock. */
        public maxProposeAfterBlock: number;

        /** TimingConfig roundLength. */
        public roundLength: number;

        /**
         * Creates a new TimingConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimingConfig instance
         */
        public static create(properties?: inca.ITimingConfig): inca.TimingConfig;

        /**
         * Encodes the specified TimingConfig message. Does not implicitly {@link inca.TimingConfig.verify|verify} messages.
         * @param message TimingConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.ITimingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimingConfig message, length delimited. Does not implicitly {@link inca.TimingConfig.verify|verify} messages.
         * @param message TimingConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.ITimingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimingConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.TimingConfig;

        /**
         * Decodes a TimingConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.TimingConfig;

        /**
         * Verifies a TimingConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimingConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimingConfig
         */
        public static fromObject(object: { [k: string]: any }): inca.TimingConfig;

        /**
         * Creates a plain object from a TimingConfig message. Also converts values to other types if specified.
         * @param message TimingConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.TimingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimingConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeMessage. */
    interface INodeMessage {

        /** NodeMessage genesisRef */
        genesisRef?: (storageref.IStorageRef|null);

        /** NodeMessage prevMsgRef */
        prevMsgRef?: (storageref.IStorageRef|null);

        /** NodeMessage timestamp */
        timestamp?: (timestamp.ITimestamp|null);

        /** NodeMessage innerRef */
        innerRef?: (storageref.IStorageRef|null);

        /** NodeMessage messageType */
        messageType?: (inca.NodeMessageType|null);
    }

    /** Represents a NodeMessage. */
    class NodeMessage implements INodeMessage {

        /**
         * Constructs a new NodeMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.INodeMessage);

        /** NodeMessage genesisRef. */
        public genesisRef?: (storageref.IStorageRef|null);

        /** NodeMessage prevMsgRef. */
        public prevMsgRef?: (storageref.IStorageRef|null);

        /** NodeMessage timestamp. */
        public timestamp?: (timestamp.ITimestamp|null);

        /** NodeMessage innerRef. */
        public innerRef?: (storageref.IStorageRef|null);

        /** NodeMessage messageType. */
        public messageType: inca.NodeMessageType;

        /**
         * Creates a new NodeMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeMessage instance
         */
        public static create(properties?: inca.INodeMessage): inca.NodeMessage;

        /**
         * Encodes the specified NodeMessage message. Does not implicitly {@link inca.NodeMessage.verify|verify} messages.
         * @param message NodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.INodeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeMessage message, length delimited. Does not implicitly {@link inca.NodeMessage.verify|verify} messages.
         * @param message NodeMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.INodeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.NodeMessage;

        /**
         * Decodes a NodeMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.NodeMessage;

        /**
         * Verifies a NodeMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeMessage
         */
        public static fromObject(object: { [k: string]: any }): inca.NodeMessage;

        /**
         * Creates a plain object from a NodeMessage message. Also converts values to other types if specified.
         * @param message NodeMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.NodeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChainPubsubMessage. */
    interface IChainPubsubMessage {

        /** ChainPubsubMessage nodeMessageRef */
        nodeMessageRef?: (storageref.IStorageRef|null);

        /** ChainPubsubMessage peerId */
        peerId?: (string|null);
    }

    /** Represents a ChainPubsubMessage. */
    class ChainPubsubMessage implements IChainPubsubMessage {

        /**
         * Constructs a new ChainPubsubMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: inca.IChainPubsubMessage);

        /** ChainPubsubMessage nodeMessageRef. */
        public nodeMessageRef?: (storageref.IStorageRef|null);

        /** ChainPubsubMessage peerId. */
        public peerId: string;

        /**
         * Creates a new ChainPubsubMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChainPubsubMessage instance
         */
        public static create(properties?: inca.IChainPubsubMessage): inca.ChainPubsubMessage;

        /**
         * Encodes the specified ChainPubsubMessage message. Does not implicitly {@link inca.ChainPubsubMessage.verify|verify} messages.
         * @param message ChainPubsubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inca.IChainPubsubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChainPubsubMessage message, length delimited. Does not implicitly {@link inca.ChainPubsubMessage.verify|verify} messages.
         * @param message ChainPubsubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inca.IChainPubsubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChainPubsubMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChainPubsubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inca.ChainPubsubMessage;

        /**
         * Decodes a ChainPubsubMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChainPubsubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inca.ChainPubsubMessage;

        /**
         * Verifies a ChainPubsubMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChainPubsubMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChainPubsubMessage
         */
        public static fromObject(object: { [k: string]: any }): inca.ChainPubsubMessage;

        /**
         * Creates a plain object from a ChainPubsubMessage message. Also converts values to other types if specified.
         * @param message ChainPubsubMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inca.ChainPubsubMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChainPubsubMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** NodeMessageType enum. */
    enum NodeMessageType {
        NodeMessageType_UNKNOWN = 0,
        NodeMessageType_VOTE = 1,
        NodeMessageType_BLOCK_COMMIT = 2
    }
}

/** Namespace timestamp. */
export namespace timestamp {

    /** Properties of a Timestamp. */
    interface ITimestamp {

        /** Timestamp timeUnixMs */
        timeUnixMs?: (number|Long|null);
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {

        /**
         * Constructs a new Timestamp.
         * @param [properties] Properties to set
         */
        constructor(properties?: timestamp.ITimestamp);

        /** Timestamp timeUnixMs. */
        public timeUnixMs: (number|Long);

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Timestamp instance
         */
        public static create(properties?: timestamp.ITimestamp): timestamp.Timestamp;

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @param message Timestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: timestamp.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @param message Timestamp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: timestamp.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): timestamp.Timestamp;

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): timestamp.Timestamp;

        /**
         * Verifies a Timestamp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Timestamp
         */
        public static fromObject(object: { [k: string]: any }): timestamp.Timestamp;

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @param message Timestamp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: timestamp.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Timestamp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace storageref. */
export namespace storageref {

    /** Properties of a StorageRef. */
    interface IStorageRef {

        /** StorageRef storageType */
        storageType?: (storageref.StorageType|null);

        /** StorageRef objectDigest */
        objectDigest?: (Uint8Array|null);

        /** StorageRef ipfs */
        ipfs?: (storageref.IStorageRefIPFS|null);

        /** StorageRef digest */
        digest?: (storageref.IStorageRefDigest|null);
    }

    /** Represents a StorageRef. */
    class StorageRef implements IStorageRef {

        /**
         * Constructs a new StorageRef.
         * @param [properties] Properties to set
         */
        constructor(properties?: storageref.IStorageRef);

        /** StorageRef storageType. */
        public storageType: storageref.StorageType;

        /** StorageRef objectDigest. */
        public objectDigest: Uint8Array;

        /** StorageRef ipfs. */
        public ipfs?: (storageref.IStorageRefIPFS|null);

        /** StorageRef digest. */
        public digest?: (storageref.IStorageRefDigest|null);

        /**
         * Creates a new StorageRef instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageRef instance
         */
        public static create(properties?: storageref.IStorageRef): storageref.StorageRef;

        /**
         * Encodes the specified StorageRef message. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
         * @param message StorageRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storageref.IStorageRef, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageRef message, length delimited. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
         * @param message StorageRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storageref.IStorageRef, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageRef message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storageref.StorageRef;

        /**
         * Decodes a StorageRef message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storageref.StorageRef;

        /**
         * Verifies a StorageRef message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageRef message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageRef
         */
        public static fromObject(object: { [k: string]: any }): storageref.StorageRef;

        /**
         * Creates a plain object from a StorageRef message. Also converts values to other types if specified.
         * @param message StorageRef
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storageref.StorageRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageRef to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** StorageType enum. */
    enum StorageType {
        StorageType_UNKNOWN = 0,
        StorageType_IPFS = 1,
        StorageType_DIGEST = 2
    }

    /** Properties of a StorageRefIPFS. */
    interface IStorageRefIPFS {

        /** StorageRefIPFS objectHash */
        objectHash?: (string|null);
    }

    /** Represents a StorageRefIPFS. */
    class StorageRefIPFS implements IStorageRefIPFS {

        /**
         * Constructs a new StorageRefIPFS.
         * @param [properties] Properties to set
         */
        constructor(properties?: storageref.IStorageRefIPFS);

        /** StorageRefIPFS objectHash. */
        public objectHash: string;

        /**
         * Creates a new StorageRefIPFS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageRefIPFS instance
         */
        public static create(properties?: storageref.IStorageRefIPFS): storageref.StorageRefIPFS;

        /**
         * Encodes the specified StorageRefIPFS message. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
         * @param message StorageRefIPFS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storageref.IStorageRefIPFS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageRefIPFS message, length delimited. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
         * @param message StorageRefIPFS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storageref.IStorageRefIPFS, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageRefIPFS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageRefIPFS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storageref.StorageRefIPFS;

        /**
         * Decodes a StorageRefIPFS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageRefIPFS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storageref.StorageRefIPFS;

        /**
         * Verifies a StorageRefIPFS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageRefIPFS message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageRefIPFS
         */
        public static fromObject(object: { [k: string]: any }): storageref.StorageRefIPFS;

        /**
         * Creates a plain object from a StorageRefIPFS message. Also converts values to other types if specified.
         * @param message StorageRefIPFS
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storageref.StorageRefIPFS, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageRefIPFS to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StorageRefDigest. */
    interface IStorageRefDigest {
    }

    /** Represents a StorageRefDigest. */
    class StorageRefDigest implements IStorageRefDigest {

        /**
         * Constructs a new StorageRefDigest.
         * @param [properties] Properties to set
         */
        constructor(properties?: storageref.IStorageRefDigest);

        /**
         * Creates a new StorageRefDigest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageRefDigest instance
         */
        public static create(properties?: storageref.IStorageRefDigest): storageref.StorageRefDigest;

        /**
         * Encodes the specified StorageRefDigest message. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
         * @param message StorageRefDigest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: storageref.IStorageRefDigest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageRefDigest message, length delimited. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
         * @param message StorageRefDigest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: storageref.IStorageRefDigest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageRefDigest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageRefDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storageref.StorageRefDigest;

        /**
         * Decodes a StorageRefDigest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageRefDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storageref.StorageRefDigest;

        /**
         * Verifies a StorageRefDigest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageRefDigest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageRefDigest
         */
        public static fromObject(object: { [k: string]: any }): storageref.StorageRefDigest;

        /**
         * Creates a plain object from a StorageRefDigest message. Also converts values to other types if specified.
         * @param message StorageRefDigest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: storageref.StorageRefDigest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageRefDigest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace objectsig. */
export namespace objectsig {

    /** Properties of a Signature. */
    interface ISignature {

        /** Signature keyMultihash */
        keyMultihash?: (Uint8Array|null);

        /** Signature signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a Signature. */
    class Signature implements ISignature {

        /**
         * Constructs a new Signature.
         * @param [properties] Properties to set
         */
        constructor(properties?: objectsig.ISignature);

        /** Signature keyMultihash. */
        public keyMultihash: Uint8Array;

        /** Signature signature. */
        public signature: Uint8Array;

        /**
         * Creates a new Signature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Signature instance
         */
        public static create(properties?: objectsig.ISignature): objectsig.Signature;

        /**
         * Encodes the specified Signature message. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: objectsig.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @param message Signature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: objectsig.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): objectsig.Signature;

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): objectsig.Signature;

        /**
         * Verifies a Signature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signature
         */
        public static fromObject(object: { [k: string]: any }): objectsig.Signature;

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @param message Signature
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: objectsig.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Signature to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace peer. */
export namespace peer {

    /** Properties of a PeerState. */
    interface IPeerState {

        /** PeerState lastObservedMessage */
        lastObservedMessage?: (inca.INodeMessage|null);
    }

    /** Represents a PeerState. */
    class PeerState implements IPeerState {

        /**
         * Constructs a new PeerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: peer.IPeerState);

        /** PeerState lastObservedMessage. */
        public lastObservedMessage?: (inca.INodeMessage|null);

        /**
         * Creates a new PeerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PeerState instance
         */
        public static create(properties?: peer.IPeerState): peer.PeerState;

        /**
         * Encodes the specified PeerState message. Does not implicitly {@link peer.PeerState.verify|verify} messages.
         * @param message PeerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: peer.IPeerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PeerState message, length delimited. Does not implicitly {@link peer.PeerState.verify|verify} messages.
         * @param message PeerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: peer.IPeerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PeerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PeerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): peer.PeerState;

        /**
         * Decodes a PeerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PeerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): peer.PeerState;

        /**
         * Verifies a PeerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PeerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PeerState
         */
        public static fromObject(object: { [k: string]: any }): peer.PeerState;

        /**
         * Creates a plain object from a PeerState message. Also converts values to other types if specified.
         * @param message PeerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: peer.PeerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PeerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace pbobject. */
export namespace pbobject {

    /** Properties of an ObjectWrapper. */
    interface IObjectWrapper {

        /** ObjectWrapper objectTypeCrc */
        objectTypeCrc?: (number|null);

        /** ObjectWrapper encBlob */
        encBlob?: (objectenc.IEncryptedBlob|null);

        /** ObjectWrapper signatures */
        signatures?: (objectsig.ISignature[]|null);
    }

    /** Represents an ObjectWrapper. */
    class ObjectWrapper implements IObjectWrapper {

        /**
         * Constructs a new ObjectWrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbobject.IObjectWrapper);

        /** ObjectWrapper objectTypeCrc. */
        public objectTypeCrc: number;

        /** ObjectWrapper encBlob. */
        public encBlob?: (objectenc.IEncryptedBlob|null);

        /** ObjectWrapper signatures. */
        public signatures: objectsig.ISignature[];

        /**
         * Creates a new ObjectWrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectWrapper instance
         */
        public static create(properties?: pbobject.IObjectWrapper): pbobject.ObjectWrapper;

        /**
         * Encodes the specified ObjectWrapper message. Does not implicitly {@link pbobject.ObjectWrapper.verify|verify} messages.
         * @param message ObjectWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbobject.IObjectWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectWrapper message, length delimited. Does not implicitly {@link pbobject.ObjectWrapper.verify|verify} messages.
         * @param message ObjectWrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbobject.IObjectWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectWrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbobject.ObjectWrapper;

        /**
         * Decodes an ObjectWrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectWrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbobject.ObjectWrapper;

        /**
         * Verifies an ObjectWrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectWrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectWrapper
         */
        public static fromObject(object: { [k: string]: any }): pbobject.ObjectWrapper;

        /**
         * Creates a plain object from an ObjectWrapper message. Also converts values to other types if specified.
         * @param message ObjectWrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbobject.ObjectWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectWrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ObjectTypeID. */
    interface IObjectTypeID {

        /** ObjectTypeID typeUuid */
        typeUuid?: (string|null);
    }

    /** Represents an ObjectTypeID. */
    class ObjectTypeID implements IObjectTypeID {

        /**
         * Constructs a new ObjectTypeID.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbobject.IObjectTypeID);

        /** ObjectTypeID typeUuid. */
        public typeUuid: string;

        /**
         * Creates a new ObjectTypeID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectTypeID instance
         */
        public static create(properties?: pbobject.IObjectTypeID): pbobject.ObjectTypeID;

        /**
         * Encodes the specified ObjectTypeID message. Does not implicitly {@link pbobject.ObjectTypeID.verify|verify} messages.
         * @param message ObjectTypeID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbobject.IObjectTypeID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectTypeID message, length delimited. Does not implicitly {@link pbobject.ObjectTypeID.verify|verify} messages.
         * @param message ObjectTypeID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbobject.IObjectTypeID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectTypeID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectTypeID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbobject.ObjectTypeID;

        /**
         * Decodes an ObjectTypeID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectTypeID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbobject.ObjectTypeID;

        /**
         * Verifies an ObjectTypeID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectTypeID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectTypeID
         */
        public static fromObject(object: { [k: string]: any }): pbobject.ObjectTypeID;

        /**
         * Creates a plain object from an ObjectTypeID message. Also converts values to other types if specified.
         * @param message ObjectTypeID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbobject.ObjectTypeID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectTypeID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace objectenc. */
export namespace objectenc {

    /** Properties of an EncryptedBlob. */
    interface IEncryptedBlob {

        /** EncryptedBlob encType */
        encType?: (objectenc.EncryptionType|null);

        /** EncryptedBlob encData */
        encData?: (Uint8Array|null);

        /** EncryptedBlob encMetadata */
        encMetadata?: (Uint8Array|null);

        /** EncryptedBlob compressionType */
        compressionType?: (objectenc.CompressionType|null);
    }

    /** Represents an EncryptedBlob. */
    class EncryptedBlob implements IEncryptedBlob {

        /**
         * Constructs a new EncryptedBlob.
         * @param [properties] Properties to set
         */
        constructor(properties?: objectenc.IEncryptedBlob);

        /** EncryptedBlob encType. */
        public encType: objectenc.EncryptionType;

        /** EncryptedBlob encData. */
        public encData: Uint8Array;

        /** EncryptedBlob encMetadata. */
        public encMetadata: Uint8Array;

        /** EncryptedBlob compressionType. */
        public compressionType: objectenc.CompressionType;

        /**
         * Creates a new EncryptedBlob instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedBlob instance
         */
        public static create(properties?: objectenc.IEncryptedBlob): objectenc.EncryptedBlob;

        /**
         * Encodes the specified EncryptedBlob message. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @param message EncryptedBlob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: objectenc.IEncryptedBlob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedBlob message, length delimited. Does not implicitly {@link objectenc.EncryptedBlob.verify|verify} messages.
         * @param message EncryptedBlob message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: objectenc.IEncryptedBlob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): objectenc.EncryptedBlob;

        /**
         * Decodes an EncryptedBlob message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedBlob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): objectenc.EncryptedBlob;

        /**
         * Verifies an EncryptedBlob message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedBlob message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedBlob
         */
        public static fromObject(object: { [k: string]: any }): objectenc.EncryptedBlob;

        /**
         * Creates a plain object from an EncryptedBlob message. Also converts values to other types if specified.
         * @param message EncryptedBlob
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: objectenc.EncryptedBlob, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedBlob to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** EncryptionType enum. */
    enum EncryptionType {
        EncryptionType_UNENCRYPTED = 0,
        EncryptionType_AES = 1,
        EncryptionType_SECRET_BOX = 2
    }

    /** CompressionType enum. */
    enum CompressionType {
        CompressionType_UNCOMPRESSED = 0,
        CompressionType_SNAPPY = 1
    }
}

/** Namespace chain. */
export namespace chain {

    /** Properties of a ChainState. */
    interface IChainState {

        /** ChainState stateSegment */
        stateSegment?: (string|null);

        /** ChainState lastHeight */
        lastHeight?: (number|Long|null);

        /** ChainState lastRound */
        lastRound?: (number|Long|null);
    }

    /** Represents a ChainState. */
    class ChainState implements IChainState {

        /**
         * Constructs a new ChainState.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.IChainState);

        /** ChainState stateSegment. */
        public stateSegment: string;

        /** ChainState lastHeight. */
        public lastHeight: (number|Long);

        /** ChainState lastRound. */
        public lastRound: (number|Long);

        /**
         * Creates a new ChainState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChainState instance
         */
        public static create(properties?: chain.IChainState): chain.ChainState;

        /**
         * Encodes the specified ChainState message. Does not implicitly {@link chain.ChainState.verify|verify} messages.
         * @param message ChainState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.IChainState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChainState message, length delimited. Does not implicitly {@link chain.ChainState.verify|verify} messages.
         * @param message ChainState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.IChainState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChainState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChainState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.ChainState;

        /**
         * Decodes a ChainState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChainState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.ChainState;

        /**
         * Verifies a ChainState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChainState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChainState
         */
        public static fromObject(object: { [k: string]: any }): chain.ChainState;

        /**
         * Creates a plain object from a ChainState message. Also converts values to other types if specified.
         * @param message ChainState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.ChainState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChainState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Config. */
    interface IConfig {

        /** Config genesisRef */
        genesisRef?: (storageref.IStorageRef|null);

        /** Config encryptionArgs */
        encryptionArgs?: (pbobject.IObjectWrapper|null);

        /** Config encryptionStrategy */
        encryptionStrategy?: (inca.EncryptionStrategy|null);
    }

    /** Represents a Config. */
    class Config implements IConfig {

        /**
         * Constructs a new Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.IConfig);

        /** Config genesisRef. */
        public genesisRef?: (storageref.IStorageRef|null);

        /** Config encryptionArgs. */
        public encryptionArgs?: (pbobject.IObjectWrapper|null);

        /** Config encryptionStrategy. */
        public encryptionStrategy: inca.EncryptionStrategy;

        /**
         * Creates a new Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Config instance
         */
        public static create(properties?: chain.IConfig): chain.Config;

        /**
         * Encodes the specified Config message. Does not implicitly {@link chain.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link chain.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.Config;

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.Config;

        /**
         * Verifies a Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Config
         */
        public static fromObject(object: { [k: string]: any }): chain.Config;

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @param message Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Config to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SegmentState. */
    interface ISegmentState {

        /** SegmentState id */
        id?: (string|null);

        /** SegmentState status */
        status?: (chain.SegmentStatus|null);

        /** SegmentState headBlock */
        headBlock?: (storageref.IStorageRef|null);

        /** SegmentState tailBlock */
        tailBlock?: (storageref.IStorageRef|null);

        /** SegmentState segmentPrev */
        segmentPrev?: (string|null);

        /** SegmentState segmentNext */
        segmentNext?: (string|null);

        /** SegmentState tailBlockRound */
        tailBlockRound?: (inca.IBlockRoundInfo|null);

        /** SegmentState invalidError */
        invalidError?: (string|null);
    }

    /** Represents a SegmentState. */
    class SegmentState implements ISegmentState {

        /**
         * Constructs a new SegmentState.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.ISegmentState);

        /** SegmentState id. */
        public id: string;

        /** SegmentState status. */
        public status: chain.SegmentStatus;

        /** SegmentState headBlock. */
        public headBlock?: (storageref.IStorageRef|null);

        /** SegmentState tailBlock. */
        public tailBlock?: (storageref.IStorageRef|null);

        /** SegmentState segmentPrev. */
        public segmentPrev: string;

        /** SegmentState segmentNext. */
        public segmentNext: string;

        /** SegmentState tailBlockRound. */
        public tailBlockRound?: (inca.IBlockRoundInfo|null);

        /** SegmentState invalidError. */
        public invalidError: string;

        /**
         * Creates a new SegmentState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SegmentState instance
         */
        public static create(properties?: chain.ISegmentState): chain.SegmentState;

        /**
         * Encodes the specified SegmentState message. Does not implicitly {@link chain.SegmentState.verify|verify} messages.
         * @param message SegmentState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.ISegmentState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SegmentState message, length delimited. Does not implicitly {@link chain.SegmentState.verify|verify} messages.
         * @param message SegmentState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.ISegmentState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SegmentState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SegmentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.SegmentState;

        /**
         * Decodes a SegmentState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SegmentState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.SegmentState;

        /**
         * Verifies a SegmentState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SegmentState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SegmentState
         */
        public static fromObject(object: { [k: string]: any }): chain.SegmentState;

        /**
         * Creates a plain object from a SegmentState message. Also converts values to other types if specified.
         * @param message SegmentState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.SegmentState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SegmentState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SegmentStatus enum. */
    enum SegmentStatus {
        SegmentStatus_INVALID = 0,
        SegmentStatus_DISJOINTED = 1,
        SegmentStatus_VALID = 2
    }

    /** Properties of a ValidatorState. */
    interface IValidatorState {

        /** ValidatorState lastVote */
        lastVote?: (inca.IBlockRoundInfo|null);
    }

    /** Represents a ValidatorState. */
    class ValidatorState implements IValidatorState {

        /**
         * Constructs a new ValidatorState.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.IValidatorState);

        /** ValidatorState lastVote. */
        public lastVote?: (inca.IBlockRoundInfo|null);

        /**
         * Creates a new ValidatorState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidatorState instance
         */
        public static create(properties?: chain.IValidatorState): chain.ValidatorState;

        /**
         * Encodes the specified ValidatorState message. Does not implicitly {@link chain.ValidatorState.verify|verify} messages.
         * @param message ValidatorState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.IValidatorState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidatorState message, length delimited. Does not implicitly {@link chain.ValidatorState.verify|verify} messages.
         * @param message ValidatorState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.IValidatorState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidatorState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidatorState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.ValidatorState;

        /**
         * Decodes a ValidatorState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidatorState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.ValidatorState;

        /**
         * Verifies a ValidatorState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidatorState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidatorState
         */
        public static fromObject(object: { [k: string]: any }): chain.ValidatorState;

        /**
         * Creates a plain object from a ValidatorState message. Also converts values to other types if specified.
         * @param message ValidatorState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.ValidatorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidatorState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ProposerState. */
    interface IProposerState {

        /** ProposerState lastProposal */
        lastProposal?: (inca.IBlockRoundInfo|null);
    }

    /** Represents a ProposerState. */
    class ProposerState implements IProposerState {

        /**
         * Constructs a new ProposerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.IProposerState);

        /** ProposerState lastProposal. */
        public lastProposal?: (inca.IBlockRoundInfo|null);

        /**
         * Creates a new ProposerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProposerState instance
         */
        public static create(properties?: chain.IProposerState): chain.ProposerState;

        /**
         * Encodes the specified ProposerState message. Does not implicitly {@link chain.ProposerState.verify|verify} messages.
         * @param message ProposerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.IProposerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProposerState message, length delimited. Does not implicitly {@link chain.ProposerState.verify|verify} messages.
         * @param message ProposerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.IProposerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProposerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProposerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.ProposerState;

        /**
         * Decodes a ProposerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProposerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.ProposerState;

        /**
         * Verifies a ProposerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProposerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProposerState
         */
        public static fromObject(object: { [k: string]: any }): chain.ProposerState;

        /**
         * Creates a plain object from a ProposerState message. Also converts values to other types if specified.
         * @param message ProposerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.ProposerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProposerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace block. */
export namespace block {

    /** Properties of a State. */
    interface IState {

        /** State nextBlock */
        nextBlock?: (storageref.IStorageRef|null);

        /** State segmentId */
        segmentId?: (string|null);
    }

    /** Represents a State. */
    class State implements IState {

        /**
         * Constructs a new State.
         * @param [properties] Properties to set
         */
        constructor(properties?: block.IState);

        /** State nextBlock. */
        public nextBlock?: (storageref.IStorageRef|null);

        /** State segmentId. */
        public segmentId: string;

        /**
         * Creates a new State instance using the specified properties.
         * @param [properties] Properties to set
         * @returns State instance
         */
        public static create(properties?: block.IState): block.State;

        /**
         * Encodes the specified State message. Does not implicitly {@link block.State.verify|verify} messages.
         * @param message State message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: block.IState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified State message, length delimited. Does not implicitly {@link block.State.verify|verify} messages.
         * @param message State message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: block.IState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a State message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): block.State;

        /**
         * Decodes a State message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns State
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): block.State;

        /**
         * Verifies a State message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a State message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns State
         */
        public static fromObject(object: { [k: string]: any }): block.State;

        /**
         * Creates a plain object from a State message. Also converts values to other types if specified.
         * @param message State
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: block.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this State to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace convergentimmutable. */
export namespace convergentimmutable {

    /** Properties of a Config. */
    interface IConfig {

        /** Config preSharedKey */
        preSharedKey?: (Uint8Array|null);
    }

    /** Represents a Config. */
    class Config implements IConfig {

        /**
         * Constructs a new Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: convergentimmutable.IConfig);

        /** Config preSharedKey. */
        public preSharedKey: Uint8Array;

        /**
         * Creates a new Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Config instance
         */
        public static create(properties?: convergentimmutable.IConfig): convergentimmutable.Config;

        /**
         * Encodes the specified Config message. Does not implicitly {@link convergentimmutable.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: convergentimmutable.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link convergentimmutable.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: convergentimmutable.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): convergentimmutable.Config;

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): convergentimmutable.Config;

        /**
         * Verifies a Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Config
         */
        public static fromObject(object: { [k: string]: any }): convergentimmutable.Config;

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @param message Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: convergentimmutable.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Config to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
