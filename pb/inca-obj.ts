import { pbobject, IObject } from '@aperturerobotics/pbobject'
import { inca, chain, convergentimmutable } from './inca'
import * as $protobuf from 'protobufjs'

// ValidatorSet is a validator set object.
export class ValidatorSet extends inca.ValidatorSet implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/validator-set" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.ValidatorSet.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new ValidatorSet(inca.ValidatorSet.decode(reader, length))
    }
}

// Genesis is a genesis object.
export class Genesis extends inca.Genesis implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/genesis" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.Genesis.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new Genesis(inca.Genesis.decode(reader, length))
    }
}

// NodeMessage is a node message object.
export class NodeMessage extends inca.NodeMessage implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/node-message" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.NodeMessage.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new NodeMessage(inca.NodeMessage.decode(reader, length))
    }
}

// ChainConfig is a node message object.
export class ChainConfig extends inca.ChainConfig implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/chain-config" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.ChainConfig.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new ChainConfig(inca.ChainConfig.decode(reader, length))
    }
}

// BlockHeader is a block header object.
export class BlockHeader extends inca.BlockHeader implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/block-header" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.BlockHeader.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new BlockHeader(inca.BlockHeader.decode(reader, length))
    }
}

// Block is a block object.
export class Block extends inca.Block implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/block" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.Block.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new Block(inca.Block.decode(reader, length))
    }
}

// Vote is a vote object.
export class Vote extends inca.Vote implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/vote" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return inca.Vote.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new Vote(inca.Vote.decode(reader, length))
    }
}

// ConvergentImmutableConfig is configuration for the ConvergentImmutable strategy.
export class ConvergentImmutableConfig extends convergentimmutable.Config implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/encryption/convergent-immutable/config" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return convergentimmutable.Config.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new ConvergentImmutableConfig(convergentimmutable.Config.decode(reader, length))
    }
}

// SegmentState is a segment state object.
export class SegmentState extends chain.SegmentState implements IObject {
    /* Returns the object type ID.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public getObjectTypeId(): pbobject.IObjectTypeID {
        return { typeUuid: "/inca/segment" }
    }

    /* Encodes the specified message.
     * @param message Protobuf object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public encode(message: any, writer?: $protobuf.Writer): $protobuf.Writer {
        return chain.SegmentState.encode(message, writer)
    }

    /**
     * Decodes an Object message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Object
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public decode(reader: $protobuf.Reader | Uint8Array, length?: number): IObject {
        return new SegmentState(chain.SegmentState.decode(reader, length))
    }
}
