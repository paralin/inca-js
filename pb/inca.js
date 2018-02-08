/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.inca = (function() {

    /**
     * Namespace inca.
     * @exports inca
     * @namespace
     */
    var inca = {};

    inca.Validator = (function() {

        /**
         * Properties of a Validator.
         * @memberof inca
         * @interface IValidator
         * @property {Uint8Array|null} [pubKey] Validator pubKey
         * @property {number|Long|null} [votingPower] Validator votingPower
         * @property {inca.Validator.OperationMode|null} [operationMode] Validator operationMode
         */

        /**
         * Constructs a new Validator.
         * @memberof inca
         * @classdesc Represents a Validator.
         * @implements IValidator
         * @constructor
         * @param {inca.IValidator=} [properties] Properties to set
         */
        function Validator(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Validator pubKey.
         * @member {Uint8Array} pubKey
         * @memberof inca.Validator
         * @instance
         */
        Validator.prototype.pubKey = $util.newBuffer([]);

        /**
         * Validator votingPower.
         * @member {number|Long} votingPower
         * @memberof inca.Validator
         * @instance
         */
        Validator.prototype.votingPower = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Validator operationMode.
         * @member {inca.Validator.OperationMode} operationMode
         * @memberof inca.Validator
         * @instance
         */
        Validator.prototype.operationMode = 0;

        /**
         * Creates a new Validator instance using the specified properties.
         * @function create
         * @memberof inca.Validator
         * @static
         * @param {inca.IValidator=} [properties] Properties to set
         * @returns {inca.Validator} Validator instance
         */
        Validator.create = function create(properties) {
            return new Validator(properties);
        };

        /**
         * Encodes the specified Validator message. Does not implicitly {@link inca.Validator.verify|verify} messages.
         * @function encode
         * @memberof inca.Validator
         * @static
         * @param {inca.IValidator} message Validator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Validator.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pubKey != null && message.hasOwnProperty("pubKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.pubKey);
            if (message.votingPower != null && message.hasOwnProperty("votingPower"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.votingPower);
            if (message.operationMode != null && message.hasOwnProperty("operationMode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.operationMode);
            return writer;
        };

        /**
         * Encodes the specified Validator message, length delimited. Does not implicitly {@link inca.Validator.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.Validator
         * @static
         * @param {inca.IValidator} message Validator message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Validator.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Validator message from the specified reader or buffer.
         * @function decode
         * @memberof inca.Validator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.Validator} Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Validator.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.Validator();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pubKey = reader.bytes();
                    break;
                case 2:
                    message.votingPower = reader.uint64();
                    break;
                case 3:
                    message.operationMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Validator message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.Validator
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.Validator} Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Validator.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Validator message.
         * @function verify
         * @memberof inca.Validator
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Validator.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pubKey != null && message.hasOwnProperty("pubKey"))
                if (!(message.pubKey && typeof message.pubKey.length === "number" || $util.isString(message.pubKey)))
                    return "pubKey: buffer expected";
            if (message.votingPower != null && message.hasOwnProperty("votingPower"))
                if (!$util.isInteger(message.votingPower) && !(message.votingPower && $util.isInteger(message.votingPower.low) && $util.isInteger(message.votingPower.high)))
                    return "votingPower: integer|Long expected";
            if (message.operationMode != null && message.hasOwnProperty("operationMode"))
                switch (message.operationMode) {
                default:
                    return "operationMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a Validator message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.Validator
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.Validator} Validator
         */
        Validator.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.Validator)
                return object;
            var message = new $root.inca.Validator();
            if (object.pubKey != null)
                if (typeof object.pubKey === "string")
                    $util.base64.decode(object.pubKey, message.pubKey = $util.newBuffer($util.base64.length(object.pubKey)), 0);
                else if (object.pubKey.length)
                    message.pubKey = object.pubKey;
            if (object.votingPower != null)
                if ($util.Long)
                    (message.votingPower = $util.Long.fromValue(object.votingPower)).unsigned = true;
                else if (typeof object.votingPower === "string")
                    message.votingPower = parseInt(object.votingPower, 10);
                else if (typeof object.votingPower === "number")
                    message.votingPower = object.votingPower;
                else if (typeof object.votingPower === "object")
                    message.votingPower = new $util.LongBits(object.votingPower.low >>> 0, object.votingPower.high >>> 0).toNumber(true);
            switch (object.operationMode) {
            case "OperationMode_STAGING":
            case 0:
                message.operationMode = 0;
                break;
            case "OperationMode_OPERATING":
            case 1:
                message.operationMode = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Validator message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.Validator
         * @static
         * @param {inca.Validator} message Validator
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Validator.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pubKey = options.bytes === String ? "" : [];
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.votingPower = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.votingPower = options.longs === String ? "0" : 0;
                object.operationMode = options.enums === String ? "OperationMode_STAGING" : 0;
            }
            if (message.pubKey != null && message.hasOwnProperty("pubKey"))
                object.pubKey = options.bytes === String ? $util.base64.encode(message.pubKey, 0, message.pubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.pubKey) : message.pubKey;
            if (message.votingPower != null && message.hasOwnProperty("votingPower"))
                if (typeof message.votingPower === "number")
                    object.votingPower = options.longs === String ? String(message.votingPower) : message.votingPower;
                else
                    object.votingPower = options.longs === String ? $util.Long.prototype.toString.call(message.votingPower) : options.longs === Number ? new $util.LongBits(message.votingPower.low >>> 0, message.votingPower.high >>> 0).toNumber(true) : message.votingPower;
            if (message.operationMode != null && message.hasOwnProperty("operationMode"))
                object.operationMode = options.enums === String ? $root.inca.Validator.OperationMode[message.operationMode] : message.operationMode;
            return object;
        };

        /**
         * Converts this Validator to JSON.
         * @function toJSON
         * @memberof inca.Validator
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Validator.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * OperationMode enum.
         * @name inca.Validator.OperationMode
         * @enum {string}
         * @property {number} OperationMode_STAGING=0 OperationMode_STAGING value
         * @property {number} OperationMode_OPERATING=1 OperationMode_OPERATING value
         */
        Validator.OperationMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OperationMode_STAGING"] = 0;
            values[valuesById[1] = "OperationMode_OPERATING"] = 1;
            return values;
        })();

        return Validator;
    })();

    inca.ValidatorSet = (function() {

        /**
         * Properties of a ValidatorSet.
         * @memberof inca
         * @interface IValidatorSet
         * @property {Array.<inca.IValidator>|null} [validators] ValidatorSet validators
         */

        /**
         * Constructs a new ValidatorSet.
         * @memberof inca
         * @classdesc Represents a ValidatorSet.
         * @implements IValidatorSet
         * @constructor
         * @param {inca.IValidatorSet=} [properties] Properties to set
         */
        function ValidatorSet(properties) {
            this.validators = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ValidatorSet validators.
         * @member {Array.<inca.IValidator>} validators
         * @memberof inca.ValidatorSet
         * @instance
         */
        ValidatorSet.prototype.validators = $util.emptyArray;

        /**
         * Creates a new ValidatorSet instance using the specified properties.
         * @function create
         * @memberof inca.ValidatorSet
         * @static
         * @param {inca.IValidatorSet=} [properties] Properties to set
         * @returns {inca.ValidatorSet} ValidatorSet instance
         */
        ValidatorSet.create = function create(properties) {
            return new ValidatorSet(properties);
        };

        /**
         * Encodes the specified ValidatorSet message. Does not implicitly {@link inca.ValidatorSet.verify|verify} messages.
         * @function encode
         * @memberof inca.ValidatorSet
         * @static
         * @param {inca.IValidatorSet} message ValidatorSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.validators != null && message.validators.length)
                for (var i = 0; i < message.validators.length; ++i)
                    $root.inca.Validator.encode(message.validators[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ValidatorSet message, length delimited. Does not implicitly {@link inca.ValidatorSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.ValidatorSet
         * @static
         * @param {inca.IValidatorSet} message ValidatorSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ValidatorSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ValidatorSet message from the specified reader or buffer.
         * @function decode
         * @memberof inca.ValidatorSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.ValidatorSet} ValidatorSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.ValidatorSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.validators && message.validators.length))
                        message.validators = [];
                    message.validators.push($root.inca.Validator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ValidatorSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.ValidatorSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.ValidatorSet} ValidatorSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ValidatorSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ValidatorSet message.
         * @function verify
         * @memberof inca.ValidatorSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ValidatorSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.validators != null && message.hasOwnProperty("validators")) {
                if (!Array.isArray(message.validators))
                    return "validators: array expected";
                for (var i = 0; i < message.validators.length; ++i) {
                    var error = $root.inca.Validator.verify(message.validators[i]);
                    if (error)
                        return "validators." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ValidatorSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.ValidatorSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.ValidatorSet} ValidatorSet
         */
        ValidatorSet.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.ValidatorSet)
                return object;
            var message = new $root.inca.ValidatorSet();
            if (object.validators) {
                if (!Array.isArray(object.validators))
                    throw TypeError(".inca.ValidatorSet.validators: array expected");
                message.validators = [];
                for (var i = 0; i < object.validators.length; ++i) {
                    if (typeof object.validators[i] !== "object")
                        throw TypeError(".inca.ValidatorSet.validators: object expected");
                    message.validators[i] = $root.inca.Validator.fromObject(object.validators[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ValidatorSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.ValidatorSet
         * @static
         * @param {inca.ValidatorSet} message ValidatorSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ValidatorSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.validators = [];
            if (message.validators && message.validators.length) {
                object.validators = [];
                for (var j = 0; j < message.validators.length; ++j)
                    object.validators[j] = $root.inca.Validator.toObject(message.validators[j], options);
            }
            return object;
        };

        /**
         * Converts this ValidatorSet to JSON.
         * @function toJSON
         * @memberof inca.ValidatorSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ValidatorSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ValidatorSet;
    })();

    inca.Block = (function() {

        /**
         * Properties of a Block.
         * @memberof inca
         * @interface IBlock
         * @property {storageref.IStorageRef|null} [blockHeaderRef] Block blockHeaderRef
         * @property {Array.<storageref.IStorageRef>|null} [voteRefs] Block voteRefs
         */

        /**
         * Constructs a new Block.
         * @memberof inca
         * @classdesc Represents a Block.
         * @implements IBlock
         * @constructor
         * @param {inca.IBlock=} [properties] Properties to set
         */
        function Block(properties) {
            this.voteRefs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Block blockHeaderRef.
         * @member {storageref.IStorageRef|null|undefined} blockHeaderRef
         * @memberof inca.Block
         * @instance
         */
        Block.prototype.blockHeaderRef = null;

        /**
         * Block voteRefs.
         * @member {Array.<storageref.IStorageRef>} voteRefs
         * @memberof inca.Block
         * @instance
         */
        Block.prototype.voteRefs = $util.emptyArray;

        /**
         * Creates a new Block instance using the specified properties.
         * @function create
         * @memberof inca.Block
         * @static
         * @param {inca.IBlock=} [properties] Properties to set
         * @returns {inca.Block} Block instance
         */
        Block.create = function create(properties) {
            return new Block(properties);
        };

        /**
         * Encodes the specified Block message. Does not implicitly {@link inca.Block.verify|verify} messages.
         * @function encode
         * @memberof inca.Block
         * @static
         * @param {inca.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeaderRef != null && message.hasOwnProperty("blockHeaderRef"))
                $root.storageref.StorageRef.encode(message.blockHeaderRef, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.voteRefs != null && message.voteRefs.length)
                for (var i = 0; i < message.voteRefs.length; ++i)
                    $root.storageref.StorageRef.encode(message.voteRefs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link inca.Block.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.Block
         * @static
         * @param {inca.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @function decode
         * @memberof inca.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.Block();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.blockHeaderRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.voteRefs && message.voteRefs.length))
                        message.voteRefs = [];
                    message.voteRefs.push($root.storageref.StorageRef.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Block message.
         * @function verify
         * @memberof inca.Block
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Block.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeaderRef != null && message.hasOwnProperty("blockHeaderRef")) {
                var error = $root.storageref.StorageRef.verify(message.blockHeaderRef);
                if (error)
                    return "blockHeaderRef." + error;
            }
            if (message.voteRefs != null && message.hasOwnProperty("voteRefs")) {
                if (!Array.isArray(message.voteRefs))
                    return "voteRefs: array expected";
                for (var i = 0; i < message.voteRefs.length; ++i) {
                    var error = $root.storageref.StorageRef.verify(message.voteRefs[i]);
                    if (error)
                        return "voteRefs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.Block
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.Block} Block
         */
        Block.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.Block)
                return object;
            var message = new $root.inca.Block();
            if (object.blockHeaderRef != null) {
                if (typeof object.blockHeaderRef !== "object")
                    throw TypeError(".inca.Block.blockHeaderRef: object expected");
                message.blockHeaderRef = $root.storageref.StorageRef.fromObject(object.blockHeaderRef);
            }
            if (object.voteRefs) {
                if (!Array.isArray(object.voteRefs))
                    throw TypeError(".inca.Block.voteRefs: array expected");
                message.voteRefs = [];
                for (var i = 0; i < object.voteRefs.length; ++i) {
                    if (typeof object.voteRefs[i] !== "object")
                        throw TypeError(".inca.Block.voteRefs: object expected");
                    message.voteRefs[i] = $root.storageref.StorageRef.fromObject(object.voteRefs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.Block
         * @static
         * @param {inca.Block} message Block
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Block.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.voteRefs = [];
            if (options.defaults)
                object.blockHeaderRef = null;
            if (message.blockHeaderRef != null && message.hasOwnProperty("blockHeaderRef"))
                object.blockHeaderRef = $root.storageref.StorageRef.toObject(message.blockHeaderRef, options);
            if (message.voteRefs && message.voteRefs.length) {
                object.voteRefs = [];
                for (var j = 0; j < message.voteRefs.length; ++j)
                    object.voteRefs[j] = $root.storageref.StorageRef.toObject(message.voteRefs[j], options);
            }
            return object;
        };

        /**
         * Converts this Block to JSON.
         * @function toJSON
         * @memberof inca.Block
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Block.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Block;
    })();

    inca.BlockRoundInfo = (function() {

        /**
         * Properties of a BlockRoundInfo.
         * @memberof inca
         * @interface IBlockRoundInfo
         * @property {number|Long|null} [height] BlockRoundInfo height
         * @property {number|Long|null} [round] BlockRoundInfo round
         */

        /**
         * Constructs a new BlockRoundInfo.
         * @memberof inca
         * @classdesc Represents a BlockRoundInfo.
         * @implements IBlockRoundInfo
         * @constructor
         * @param {inca.IBlockRoundInfo=} [properties] Properties to set
         */
        function BlockRoundInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockRoundInfo height.
         * @member {number|Long} height
         * @memberof inca.BlockRoundInfo
         * @instance
         */
        BlockRoundInfo.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BlockRoundInfo round.
         * @member {number|Long} round
         * @memberof inca.BlockRoundInfo
         * @instance
         */
        BlockRoundInfo.prototype.round = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new BlockRoundInfo instance using the specified properties.
         * @function create
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {inca.IBlockRoundInfo=} [properties] Properties to set
         * @returns {inca.BlockRoundInfo} BlockRoundInfo instance
         */
        BlockRoundInfo.create = function create(properties) {
            return new BlockRoundInfo(properties);
        };

        /**
         * Encodes the specified BlockRoundInfo message. Does not implicitly {@link inca.BlockRoundInfo.verify|verify} messages.
         * @function encode
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {inca.IBlockRoundInfo} message BlockRoundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockRoundInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.height);
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.round);
            return writer;
        };

        /**
         * Encodes the specified BlockRoundInfo message, length delimited. Does not implicitly {@link inca.BlockRoundInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {inca.IBlockRoundInfo} message BlockRoundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockRoundInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockRoundInfo message from the specified reader or buffer.
         * @function decode
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.BlockRoundInfo} BlockRoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockRoundInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.BlockRoundInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.round = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockRoundInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.BlockRoundInfo} BlockRoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockRoundInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockRoundInfo message.
         * @function verify
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockRoundInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                    return "height: integer|Long expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round) && !(message.round && $util.isInteger(message.round.low) && $util.isInteger(message.round.high)))
                    return "round: integer|Long expected";
            return null;
        };

        /**
         * Creates a BlockRoundInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.BlockRoundInfo} BlockRoundInfo
         */
        BlockRoundInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.BlockRoundInfo)
                return object;
            var message = new $root.inca.BlockRoundInfo();
            if (object.height != null)
                if ($util.Long)
                    (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                else if (typeof object.height === "string")
                    message.height = parseInt(object.height, 10);
                else if (typeof object.height === "number")
                    message.height = object.height;
                else if (typeof object.height === "object")
                    message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
            if (object.round != null)
                if ($util.Long)
                    (message.round = $util.Long.fromValue(object.round)).unsigned = true;
                else if (typeof object.round === "string")
                    message.round = parseInt(object.round, 10);
                else if (typeof object.round === "number")
                    message.round = object.round;
                else if (typeof object.round === "object")
                    message.round = new $util.LongBits(object.round.low >>> 0, object.round.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a BlockRoundInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.BlockRoundInfo
         * @static
         * @param {inca.BlockRoundInfo} message BlockRoundInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockRoundInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.height = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.round = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.round = options.longs === String ? "0" : 0;
            }
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height === "number")
                    object.height = options.longs === String ? String(message.height) : message.height;
                else
                    object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
            if (message.round != null && message.hasOwnProperty("round"))
                if (typeof message.round === "number")
                    object.round = options.longs === String ? String(message.round) : message.round;
                else
                    object.round = options.longs === String ? $util.Long.prototype.toString.call(message.round) : options.longs === Number ? new $util.LongBits(message.round.low >>> 0, message.round.high >>> 0).toNumber(true) : message.round;
            return object;
        };

        /**
         * Converts this BlockRoundInfo to JSON.
         * @function toJSON
         * @memberof inca.BlockRoundInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockRoundInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BlockRoundInfo;
    })();

    inca.BlockHeader = (function() {

        /**
         * Properties of a BlockHeader.
         * @memberof inca
         * @interface IBlockHeader
         * @property {storageref.IStorageRef|null} [genesisRef] BlockHeader genesisRef
         * @property {storageref.IStorageRef|null} [chainConfigRef] BlockHeader chainConfigRef
         * @property {storageref.IStorageRef|null} [nextChainConfigRef] BlockHeader nextChainConfigRef
         * @property {storageref.IStorageRef|null} [lastBlockRef] BlockHeader lastBlockRef
         * @property {inca.IBlockRoundInfo|null} [roundInfo] BlockHeader roundInfo
         * @property {timestamp.ITimestamp|null} [blockTs] BlockHeader blockTs
         * @property {string|null} [proposerId] BlockHeader proposerId
         */

        /**
         * Constructs a new BlockHeader.
         * @memberof inca
         * @classdesc Represents a BlockHeader.
         * @implements IBlockHeader
         * @constructor
         * @param {inca.IBlockHeader=} [properties] Properties to set
         */
        function BlockHeader(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockHeader genesisRef.
         * @member {storageref.IStorageRef|null|undefined} genesisRef
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.genesisRef = null;

        /**
         * BlockHeader chainConfigRef.
         * @member {storageref.IStorageRef|null|undefined} chainConfigRef
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.chainConfigRef = null;

        /**
         * BlockHeader nextChainConfigRef.
         * @member {storageref.IStorageRef|null|undefined} nextChainConfigRef
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.nextChainConfigRef = null;

        /**
         * BlockHeader lastBlockRef.
         * @member {storageref.IStorageRef|null|undefined} lastBlockRef
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.lastBlockRef = null;

        /**
         * BlockHeader roundInfo.
         * @member {inca.IBlockRoundInfo|null|undefined} roundInfo
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.roundInfo = null;

        /**
         * BlockHeader blockTs.
         * @member {timestamp.ITimestamp|null|undefined} blockTs
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.blockTs = null;

        /**
         * BlockHeader proposerId.
         * @member {string} proposerId
         * @memberof inca.BlockHeader
         * @instance
         */
        BlockHeader.prototype.proposerId = "";

        /**
         * Creates a new BlockHeader instance using the specified properties.
         * @function create
         * @memberof inca.BlockHeader
         * @static
         * @param {inca.IBlockHeader=} [properties] Properties to set
         * @returns {inca.BlockHeader} BlockHeader instance
         */
        BlockHeader.create = function create(properties) {
            return new BlockHeader(properties);
        };

        /**
         * Encodes the specified BlockHeader message. Does not implicitly {@link inca.BlockHeader.verify|verify} messages.
         * @function encode
         * @memberof inca.BlockHeader
         * @static
         * @param {inca.IBlockHeader} message BlockHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.genesisRef != null && message.hasOwnProperty("genesisRef"))
                $root.storageref.StorageRef.encode(message.genesisRef, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chainConfigRef != null && message.hasOwnProperty("chainConfigRef"))
                $root.storageref.StorageRef.encode(message.chainConfigRef, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nextChainConfigRef != null && message.hasOwnProperty("nextChainConfigRef"))
                $root.storageref.StorageRef.encode(message.nextChainConfigRef, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.lastBlockRef != null && message.hasOwnProperty("lastBlockRef"))
                $root.storageref.StorageRef.encode(message.lastBlockRef, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.roundInfo != null && message.hasOwnProperty("roundInfo"))
                $root.inca.BlockRoundInfo.encode(message.roundInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.blockTs != null && message.hasOwnProperty("blockTs"))
                $root.timestamp.Timestamp.encode(message.blockTs, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.proposerId != null && message.hasOwnProperty("proposerId"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.proposerId);
            return writer;
        };

        /**
         * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link inca.BlockHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.BlockHeader
         * @static
         * @param {inca.IBlockHeader} message BlockHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockHeader message from the specified reader or buffer.
         * @function decode
         * @memberof inca.BlockHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.BlockHeader} BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.BlockHeader();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.genesisRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainConfigRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextChainConfigRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastBlockRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.roundInfo = $root.inca.BlockRoundInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.blockTs = $root.timestamp.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.proposerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.BlockHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.BlockHeader} BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockHeader message.
         * @function verify
         * @memberof inca.BlockHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.genesisRef != null && message.hasOwnProperty("genesisRef")) {
                var error = $root.storageref.StorageRef.verify(message.genesisRef);
                if (error)
                    return "genesisRef." + error;
            }
            if (message.chainConfigRef != null && message.hasOwnProperty("chainConfigRef")) {
                var error = $root.storageref.StorageRef.verify(message.chainConfigRef);
                if (error)
                    return "chainConfigRef." + error;
            }
            if (message.nextChainConfigRef != null && message.hasOwnProperty("nextChainConfigRef")) {
                var error = $root.storageref.StorageRef.verify(message.nextChainConfigRef);
                if (error)
                    return "nextChainConfigRef." + error;
            }
            if (message.lastBlockRef != null && message.hasOwnProperty("lastBlockRef")) {
                var error = $root.storageref.StorageRef.verify(message.lastBlockRef);
                if (error)
                    return "lastBlockRef." + error;
            }
            if (message.roundInfo != null && message.hasOwnProperty("roundInfo")) {
                var error = $root.inca.BlockRoundInfo.verify(message.roundInfo);
                if (error)
                    return "roundInfo." + error;
            }
            if (message.blockTs != null && message.hasOwnProperty("blockTs")) {
                var error = $root.timestamp.Timestamp.verify(message.blockTs);
                if (error)
                    return "blockTs." + error;
            }
            if (message.proposerId != null && message.hasOwnProperty("proposerId"))
                if (!$util.isString(message.proposerId))
                    return "proposerId: string expected";
            return null;
        };

        /**
         * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.BlockHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.BlockHeader} BlockHeader
         */
        BlockHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.BlockHeader)
                return object;
            var message = new $root.inca.BlockHeader();
            if (object.genesisRef != null) {
                if (typeof object.genesisRef !== "object")
                    throw TypeError(".inca.BlockHeader.genesisRef: object expected");
                message.genesisRef = $root.storageref.StorageRef.fromObject(object.genesisRef);
            }
            if (object.chainConfigRef != null) {
                if (typeof object.chainConfigRef !== "object")
                    throw TypeError(".inca.BlockHeader.chainConfigRef: object expected");
                message.chainConfigRef = $root.storageref.StorageRef.fromObject(object.chainConfigRef);
            }
            if (object.nextChainConfigRef != null) {
                if (typeof object.nextChainConfigRef !== "object")
                    throw TypeError(".inca.BlockHeader.nextChainConfigRef: object expected");
                message.nextChainConfigRef = $root.storageref.StorageRef.fromObject(object.nextChainConfigRef);
            }
            if (object.lastBlockRef != null) {
                if (typeof object.lastBlockRef !== "object")
                    throw TypeError(".inca.BlockHeader.lastBlockRef: object expected");
                message.lastBlockRef = $root.storageref.StorageRef.fromObject(object.lastBlockRef);
            }
            if (object.roundInfo != null) {
                if (typeof object.roundInfo !== "object")
                    throw TypeError(".inca.BlockHeader.roundInfo: object expected");
                message.roundInfo = $root.inca.BlockRoundInfo.fromObject(object.roundInfo);
            }
            if (object.blockTs != null) {
                if (typeof object.blockTs !== "object")
                    throw TypeError(".inca.BlockHeader.blockTs: object expected");
                message.blockTs = $root.timestamp.Timestamp.fromObject(object.blockTs);
            }
            if (object.proposerId != null)
                message.proposerId = String(object.proposerId);
            return message;
        };

        /**
         * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.BlockHeader
         * @static
         * @param {inca.BlockHeader} message BlockHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.genesisRef = null;
                object.chainConfigRef = null;
                object.nextChainConfigRef = null;
                object.lastBlockRef = null;
                object.roundInfo = null;
                object.blockTs = null;
                object.proposerId = "";
            }
            if (message.genesisRef != null && message.hasOwnProperty("genesisRef"))
                object.genesisRef = $root.storageref.StorageRef.toObject(message.genesisRef, options);
            if (message.chainConfigRef != null && message.hasOwnProperty("chainConfigRef"))
                object.chainConfigRef = $root.storageref.StorageRef.toObject(message.chainConfigRef, options);
            if (message.nextChainConfigRef != null && message.hasOwnProperty("nextChainConfigRef"))
                object.nextChainConfigRef = $root.storageref.StorageRef.toObject(message.nextChainConfigRef, options);
            if (message.lastBlockRef != null && message.hasOwnProperty("lastBlockRef"))
                object.lastBlockRef = $root.storageref.StorageRef.toObject(message.lastBlockRef, options);
            if (message.roundInfo != null && message.hasOwnProperty("roundInfo"))
                object.roundInfo = $root.inca.BlockRoundInfo.toObject(message.roundInfo, options);
            if (message.blockTs != null && message.hasOwnProperty("blockTs"))
                object.blockTs = $root.timestamp.Timestamp.toObject(message.blockTs, options);
            if (message.proposerId != null && message.hasOwnProperty("proposerId"))
                object.proposerId = message.proposerId;
            return object;
        };

        /**
         * Converts this BlockHeader to JSON.
         * @function toJSON
         * @memberof inca.BlockHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BlockHeader;
    })();

    inca.Vote = (function() {

        /**
         * Properties of a Vote.
         * @memberof inca
         * @interface IVote
         * @property {storageref.IStorageRef|null} [blockHeaderRef] Vote blockHeaderRef
         */

        /**
         * Constructs a new Vote.
         * @memberof inca
         * @classdesc Represents a Vote.
         * @implements IVote
         * @constructor
         * @param {inca.IVote=} [properties] Properties to set
         */
        function Vote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vote blockHeaderRef.
         * @member {storageref.IStorageRef|null|undefined} blockHeaderRef
         * @memberof inca.Vote
         * @instance
         */
        Vote.prototype.blockHeaderRef = null;

        /**
         * Creates a new Vote instance using the specified properties.
         * @function create
         * @memberof inca.Vote
         * @static
         * @param {inca.IVote=} [properties] Properties to set
         * @returns {inca.Vote} Vote instance
         */
        Vote.create = function create(properties) {
            return new Vote(properties);
        };

        /**
         * Encodes the specified Vote message. Does not implicitly {@link inca.Vote.verify|verify} messages.
         * @function encode
         * @memberof inca.Vote
         * @static
         * @param {inca.IVote} message Vote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeaderRef != null && message.hasOwnProperty("blockHeaderRef"))
                $root.storageref.StorageRef.encode(message.blockHeaderRef, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Vote message, length delimited. Does not implicitly {@link inca.Vote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.Vote
         * @static
         * @param {inca.IVote} message Vote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @function decode
         * @memberof inca.Vote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.Vote} Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.Vote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.blockHeaderRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.Vote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.Vote} Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vote message.
         * @function verify
         * @memberof inca.Vote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeaderRef != null && message.hasOwnProperty("blockHeaderRef")) {
                var error = $root.storageref.StorageRef.verify(message.blockHeaderRef);
                if (error)
                    return "blockHeaderRef." + error;
            }
            return null;
        };

        /**
         * Creates a Vote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.Vote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.Vote} Vote
         */
        Vote.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.Vote)
                return object;
            var message = new $root.inca.Vote();
            if (object.blockHeaderRef != null) {
                if (typeof object.blockHeaderRef !== "object")
                    throw TypeError(".inca.Vote.blockHeaderRef: object expected");
                message.blockHeaderRef = $root.storageref.StorageRef.fromObject(object.blockHeaderRef);
            }
            return message;
        };

        /**
         * Creates a plain object from a Vote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.Vote
         * @static
         * @param {inca.Vote} message Vote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.blockHeaderRef = null;
            if (message.blockHeaderRef != null && message.hasOwnProperty("blockHeaderRef"))
                object.blockHeaderRef = $root.storageref.StorageRef.toObject(message.blockHeaderRef, options);
            return object;
        };

        /**
         * Converts this Vote to JSON.
         * @function toJSON
         * @memberof inca.Vote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Vote;
    })();

    inca.Genesis = (function() {

        /**
         * Properties of a Genesis.
         * @memberof inca
         * @interface IGenesis
         * @property {string|null} [chainId] Genesis chainId
         * @property {timestamp.ITimestamp|null} [timestamp] Genesis timestamp
         * @property {inca.EncryptionStrategy|null} [encStrategy] Genesis encStrategy
         */

        /**
         * Constructs a new Genesis.
         * @memberof inca
         * @classdesc Represents a Genesis.
         * @implements IGenesis
         * @constructor
         * @param {inca.IGenesis=} [properties] Properties to set
         */
        function Genesis(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Genesis chainId.
         * @member {string} chainId
         * @memberof inca.Genesis
         * @instance
         */
        Genesis.prototype.chainId = "";

        /**
         * Genesis timestamp.
         * @member {timestamp.ITimestamp|null|undefined} timestamp
         * @memberof inca.Genesis
         * @instance
         */
        Genesis.prototype.timestamp = null;

        /**
         * Genesis encStrategy.
         * @member {inca.EncryptionStrategy} encStrategy
         * @memberof inca.Genesis
         * @instance
         */
        Genesis.prototype.encStrategy = 0;

        /**
         * Creates a new Genesis instance using the specified properties.
         * @function create
         * @memberof inca.Genesis
         * @static
         * @param {inca.IGenesis=} [properties] Properties to set
         * @returns {inca.Genesis} Genesis instance
         */
        Genesis.create = function create(properties) {
            return new Genesis(properties);
        };

        /**
         * Encodes the specified Genesis message. Does not implicitly {@link inca.Genesis.verify|verify} messages.
         * @function encode
         * @memberof inca.Genesis
         * @static
         * @param {inca.IGenesis} message Genesis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Genesis.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.chainId);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.timestamp.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.encStrategy != null && message.hasOwnProperty("encStrategy"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.encStrategy);
            return writer;
        };

        /**
         * Encodes the specified Genesis message, length delimited. Does not implicitly {@link inca.Genesis.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.Genesis
         * @static
         * @param {inca.IGenesis} message Genesis message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Genesis.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Genesis message from the specified reader or buffer.
         * @function decode
         * @memberof inca.Genesis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.Genesis} Genesis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Genesis.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.Genesis();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.timestamp = $root.timestamp.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.encStrategy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Genesis message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.Genesis
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.Genesis} Genesis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Genesis.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Genesis message.
         * @function verify
         * @memberof inca.Genesis
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Genesis.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                if (!$util.isString(message.chainId))
                    return "chainId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                var error = $root.timestamp.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.encStrategy != null && message.hasOwnProperty("encStrategy"))
                switch (message.encStrategy) {
                default:
                    return "encStrategy: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a Genesis message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.Genesis
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.Genesis} Genesis
         */
        Genesis.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.Genesis)
                return object;
            var message = new $root.inca.Genesis();
            if (object.chainId != null)
                message.chainId = String(object.chainId);
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".inca.Genesis.timestamp: object expected");
                message.timestamp = $root.timestamp.Timestamp.fromObject(object.timestamp);
            }
            switch (object.encStrategy) {
            case "EncryptionStrategy_Invalid":
            case 0:
                message.encStrategy = 0;
                break;
            case "EncryptionStrategy_ConvergentImmutable":
            case 1:
                message.encStrategy = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Genesis message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.Genesis
         * @static
         * @param {inca.Genesis} message Genesis
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Genesis.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chainId = "";
                object.timestamp = null;
                object.encStrategy = options.enums === String ? "EncryptionStrategy_Invalid" : 0;
            }
            if (message.chainId != null && message.hasOwnProperty("chainId"))
                object.chainId = message.chainId;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.timestamp.Timestamp.toObject(message.timestamp, options);
            if (message.encStrategy != null && message.hasOwnProperty("encStrategy"))
                object.encStrategy = options.enums === String ? $root.inca.EncryptionStrategy[message.encStrategy] : message.encStrategy;
            return object;
        };

        /**
         * Converts this Genesis to JSON.
         * @function toJSON
         * @memberof inca.Genesis
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Genesis.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Genesis;
    })();

    /**
     * EncryptionStrategy enum.
     * @name inca.EncryptionStrategy
     * @enum {string}
     * @property {number} EncryptionStrategy_Invalid=0 EncryptionStrategy_Invalid value
     * @property {number} EncryptionStrategy_ConvergentImmutable=1 EncryptionStrategy_ConvergentImmutable value
     */
    inca.EncryptionStrategy = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EncryptionStrategy_Invalid"] = 0;
        values[valuesById[1] = "EncryptionStrategy_ConvergentImmutable"] = 1;
        return values;
    })();

    inca.ChainConfig = (function() {

        /**
         * Properties of a ChainConfig.
         * @memberof inca
         * @interface IChainConfig
         * @property {inca.ITimingConfig|null} [timingConfig] ChainConfig timingConfig
         * @property {storageref.IStorageRef|null} [validatorSetRef] ChainConfig validatorSetRef
         */

        /**
         * Constructs a new ChainConfig.
         * @memberof inca
         * @classdesc Represents a ChainConfig.
         * @implements IChainConfig
         * @constructor
         * @param {inca.IChainConfig=} [properties] Properties to set
         */
        function ChainConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChainConfig timingConfig.
         * @member {inca.ITimingConfig|null|undefined} timingConfig
         * @memberof inca.ChainConfig
         * @instance
         */
        ChainConfig.prototype.timingConfig = null;

        /**
         * ChainConfig validatorSetRef.
         * @member {storageref.IStorageRef|null|undefined} validatorSetRef
         * @memberof inca.ChainConfig
         * @instance
         */
        ChainConfig.prototype.validatorSetRef = null;

        /**
         * Creates a new ChainConfig instance using the specified properties.
         * @function create
         * @memberof inca.ChainConfig
         * @static
         * @param {inca.IChainConfig=} [properties] Properties to set
         * @returns {inca.ChainConfig} ChainConfig instance
         */
        ChainConfig.create = function create(properties) {
            return new ChainConfig(properties);
        };

        /**
         * Encodes the specified ChainConfig message. Does not implicitly {@link inca.ChainConfig.verify|verify} messages.
         * @function encode
         * @memberof inca.ChainConfig
         * @static
         * @param {inca.IChainConfig} message ChainConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChainConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timingConfig != null && message.hasOwnProperty("timingConfig"))
                $root.inca.TimingConfig.encode(message.timingConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.validatorSetRef != null && message.hasOwnProperty("validatorSetRef"))
                $root.storageref.StorageRef.encode(message.validatorSetRef, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChainConfig message, length delimited. Does not implicitly {@link inca.ChainConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.ChainConfig
         * @static
         * @param {inca.IChainConfig} message ChainConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChainConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChainConfig message from the specified reader or buffer.
         * @function decode
         * @memberof inca.ChainConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.ChainConfig} ChainConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChainConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.ChainConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timingConfig = $root.inca.TimingConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSetRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChainConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.ChainConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.ChainConfig} ChainConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChainConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChainConfig message.
         * @function verify
         * @memberof inca.ChainConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChainConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timingConfig != null && message.hasOwnProperty("timingConfig")) {
                var error = $root.inca.TimingConfig.verify(message.timingConfig);
                if (error)
                    return "timingConfig." + error;
            }
            if (message.validatorSetRef != null && message.hasOwnProperty("validatorSetRef")) {
                var error = $root.storageref.StorageRef.verify(message.validatorSetRef);
                if (error)
                    return "validatorSetRef." + error;
            }
            return null;
        };

        /**
         * Creates a ChainConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.ChainConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.ChainConfig} ChainConfig
         */
        ChainConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.ChainConfig)
                return object;
            var message = new $root.inca.ChainConfig();
            if (object.timingConfig != null) {
                if (typeof object.timingConfig !== "object")
                    throw TypeError(".inca.ChainConfig.timingConfig: object expected");
                message.timingConfig = $root.inca.TimingConfig.fromObject(object.timingConfig);
            }
            if (object.validatorSetRef != null) {
                if (typeof object.validatorSetRef !== "object")
                    throw TypeError(".inca.ChainConfig.validatorSetRef: object expected");
                message.validatorSetRef = $root.storageref.StorageRef.fromObject(object.validatorSetRef);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChainConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.ChainConfig
         * @static
         * @param {inca.ChainConfig} message ChainConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChainConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.timingConfig = null;
                object.validatorSetRef = null;
            }
            if (message.timingConfig != null && message.hasOwnProperty("timingConfig"))
                object.timingConfig = $root.inca.TimingConfig.toObject(message.timingConfig, options);
            if (message.validatorSetRef != null && message.hasOwnProperty("validatorSetRef"))
                object.validatorSetRef = $root.storageref.StorageRef.toObject(message.validatorSetRef, options);
            return object;
        };

        /**
         * Converts this ChainConfig to JSON.
         * @function toJSON
         * @memberof inca.ChainConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChainConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChainConfig;
    })();

    inca.TimingConfig = (function() {

        /**
         * Properties of a TimingConfig.
         * @memberof inca
         * @interface ITimingConfig
         * @property {number|null} [minProposeAfterBlock] TimingConfig minProposeAfterBlock
         * @property {number|null} [maxProposeAfterBlock] TimingConfig maxProposeAfterBlock
         * @property {number|null} [roundLength] TimingConfig roundLength
         */

        /**
         * Constructs a new TimingConfig.
         * @memberof inca
         * @classdesc Represents a TimingConfig.
         * @implements ITimingConfig
         * @constructor
         * @param {inca.ITimingConfig=} [properties] Properties to set
         */
        function TimingConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimingConfig minProposeAfterBlock.
         * @member {number} minProposeAfterBlock
         * @memberof inca.TimingConfig
         * @instance
         */
        TimingConfig.prototype.minProposeAfterBlock = 0;

        /**
         * TimingConfig maxProposeAfterBlock.
         * @member {number} maxProposeAfterBlock
         * @memberof inca.TimingConfig
         * @instance
         */
        TimingConfig.prototype.maxProposeAfterBlock = 0;

        /**
         * TimingConfig roundLength.
         * @member {number} roundLength
         * @memberof inca.TimingConfig
         * @instance
         */
        TimingConfig.prototype.roundLength = 0;

        /**
         * Creates a new TimingConfig instance using the specified properties.
         * @function create
         * @memberof inca.TimingConfig
         * @static
         * @param {inca.ITimingConfig=} [properties] Properties to set
         * @returns {inca.TimingConfig} TimingConfig instance
         */
        TimingConfig.create = function create(properties) {
            return new TimingConfig(properties);
        };

        /**
         * Encodes the specified TimingConfig message. Does not implicitly {@link inca.TimingConfig.verify|verify} messages.
         * @function encode
         * @memberof inca.TimingConfig
         * @static
         * @param {inca.ITimingConfig} message TimingConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimingConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minProposeAfterBlock != null && message.hasOwnProperty("minProposeAfterBlock"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.minProposeAfterBlock);
            if (message.maxProposeAfterBlock != null && message.hasOwnProperty("maxProposeAfterBlock"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxProposeAfterBlock);
            if (message.roundLength != null && message.hasOwnProperty("roundLength"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.roundLength);
            return writer;
        };

        /**
         * Encodes the specified TimingConfig message, length delimited. Does not implicitly {@link inca.TimingConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.TimingConfig
         * @static
         * @param {inca.ITimingConfig} message TimingConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimingConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimingConfig message from the specified reader or buffer.
         * @function decode
         * @memberof inca.TimingConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.TimingConfig} TimingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimingConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.TimingConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.minProposeAfterBlock = reader.uint32();
                    break;
                case 2:
                    message.maxProposeAfterBlock = reader.uint32();
                    break;
                case 3:
                    message.roundLength = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimingConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.TimingConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.TimingConfig} TimingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimingConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimingConfig message.
         * @function verify
         * @memberof inca.TimingConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimingConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.minProposeAfterBlock != null && message.hasOwnProperty("minProposeAfterBlock"))
                if (!$util.isInteger(message.minProposeAfterBlock))
                    return "minProposeAfterBlock: integer expected";
            if (message.maxProposeAfterBlock != null && message.hasOwnProperty("maxProposeAfterBlock"))
                if (!$util.isInteger(message.maxProposeAfterBlock))
                    return "maxProposeAfterBlock: integer expected";
            if (message.roundLength != null && message.hasOwnProperty("roundLength"))
                if (!$util.isInteger(message.roundLength))
                    return "roundLength: integer expected";
            return null;
        };

        /**
         * Creates a TimingConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.TimingConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.TimingConfig} TimingConfig
         */
        TimingConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.TimingConfig)
                return object;
            var message = new $root.inca.TimingConfig();
            if (object.minProposeAfterBlock != null)
                message.minProposeAfterBlock = object.minProposeAfterBlock >>> 0;
            if (object.maxProposeAfterBlock != null)
                message.maxProposeAfterBlock = object.maxProposeAfterBlock >>> 0;
            if (object.roundLength != null)
                message.roundLength = object.roundLength >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TimingConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.TimingConfig
         * @static
         * @param {inca.TimingConfig} message TimingConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimingConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.minProposeAfterBlock = 0;
                object.maxProposeAfterBlock = 0;
                object.roundLength = 0;
            }
            if (message.minProposeAfterBlock != null && message.hasOwnProperty("minProposeAfterBlock"))
                object.minProposeAfterBlock = message.minProposeAfterBlock;
            if (message.maxProposeAfterBlock != null && message.hasOwnProperty("maxProposeAfterBlock"))
                object.maxProposeAfterBlock = message.maxProposeAfterBlock;
            if (message.roundLength != null && message.hasOwnProperty("roundLength"))
                object.roundLength = message.roundLength;
            return object;
        };

        /**
         * Converts this TimingConfig to JSON.
         * @function toJSON
         * @memberof inca.TimingConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimingConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimingConfig;
    })();

    inca.NodeMessage = (function() {

        /**
         * Properties of a NodeMessage.
         * @memberof inca
         * @interface INodeMessage
         * @property {storageref.IStorageRef|null} [genesisRef] NodeMessage genesisRef
         * @property {storageref.IStorageRef|null} [prevMsgRef] NodeMessage prevMsgRef
         * @property {timestamp.ITimestamp|null} [timestamp] NodeMessage timestamp
         * @property {storageref.IStorageRef|null} [innerRef] NodeMessage innerRef
         * @property {inca.NodeMessageType|null} [messageType] NodeMessage messageType
         */

        /**
         * Constructs a new NodeMessage.
         * @memberof inca
         * @classdesc Represents a NodeMessage.
         * @implements INodeMessage
         * @constructor
         * @param {inca.INodeMessage=} [properties] Properties to set
         */
        function NodeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NodeMessage genesisRef.
         * @member {storageref.IStorageRef|null|undefined} genesisRef
         * @memberof inca.NodeMessage
         * @instance
         */
        NodeMessage.prototype.genesisRef = null;

        /**
         * NodeMessage prevMsgRef.
         * @member {storageref.IStorageRef|null|undefined} prevMsgRef
         * @memberof inca.NodeMessage
         * @instance
         */
        NodeMessage.prototype.prevMsgRef = null;

        /**
         * NodeMessage timestamp.
         * @member {timestamp.ITimestamp|null|undefined} timestamp
         * @memberof inca.NodeMessage
         * @instance
         */
        NodeMessage.prototype.timestamp = null;

        /**
         * NodeMessage innerRef.
         * @member {storageref.IStorageRef|null|undefined} innerRef
         * @memberof inca.NodeMessage
         * @instance
         */
        NodeMessage.prototype.innerRef = null;

        /**
         * NodeMessage messageType.
         * @member {inca.NodeMessageType} messageType
         * @memberof inca.NodeMessage
         * @instance
         */
        NodeMessage.prototype.messageType = 0;

        /**
         * Creates a new NodeMessage instance using the specified properties.
         * @function create
         * @memberof inca.NodeMessage
         * @static
         * @param {inca.INodeMessage=} [properties] Properties to set
         * @returns {inca.NodeMessage} NodeMessage instance
         */
        NodeMessage.create = function create(properties) {
            return new NodeMessage(properties);
        };

        /**
         * Encodes the specified NodeMessage message. Does not implicitly {@link inca.NodeMessage.verify|verify} messages.
         * @function encode
         * @memberof inca.NodeMessage
         * @static
         * @param {inca.INodeMessage} message NodeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.genesisRef != null && message.hasOwnProperty("genesisRef"))
                $root.storageref.StorageRef.encode(message.genesisRef, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.prevMsgRef != null && message.hasOwnProperty("prevMsgRef"))
                $root.storageref.StorageRef.encode(message.prevMsgRef, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.timestamp.Timestamp.encode(message.timestamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.innerRef != null && message.hasOwnProperty("innerRef"))
                $root.storageref.StorageRef.encode(message.innerRef, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.messageType);
            return writer;
        };

        /**
         * Encodes the specified NodeMessage message, length delimited. Does not implicitly {@link inca.NodeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.NodeMessage
         * @static
         * @param {inca.INodeMessage} message NodeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NodeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NodeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof inca.NodeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.NodeMessage} NodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.NodeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.genesisRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.prevMsgRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timestamp = $root.timestamp.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.innerRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.messageType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NodeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.NodeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.NodeMessage} NodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NodeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NodeMessage message.
         * @function verify
         * @memberof inca.NodeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NodeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.genesisRef != null && message.hasOwnProperty("genesisRef")) {
                var error = $root.storageref.StorageRef.verify(message.genesisRef);
                if (error)
                    return "genesisRef." + error;
            }
            if (message.prevMsgRef != null && message.hasOwnProperty("prevMsgRef")) {
                var error = $root.storageref.StorageRef.verify(message.prevMsgRef);
                if (error)
                    return "prevMsgRef." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                var error = $root.timestamp.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.innerRef != null && message.hasOwnProperty("innerRef")) {
                var error = $root.storageref.StorageRef.verify(message.innerRef);
                if (error)
                    return "innerRef." + error;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a NodeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.NodeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.NodeMessage} NodeMessage
         */
        NodeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.NodeMessage)
                return object;
            var message = new $root.inca.NodeMessage();
            if (object.genesisRef != null) {
                if (typeof object.genesisRef !== "object")
                    throw TypeError(".inca.NodeMessage.genesisRef: object expected");
                message.genesisRef = $root.storageref.StorageRef.fromObject(object.genesisRef);
            }
            if (object.prevMsgRef != null) {
                if (typeof object.prevMsgRef !== "object")
                    throw TypeError(".inca.NodeMessage.prevMsgRef: object expected");
                message.prevMsgRef = $root.storageref.StorageRef.fromObject(object.prevMsgRef);
            }
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".inca.NodeMessage.timestamp: object expected");
                message.timestamp = $root.timestamp.Timestamp.fromObject(object.timestamp);
            }
            if (object.innerRef != null) {
                if (typeof object.innerRef !== "object")
                    throw TypeError(".inca.NodeMessage.innerRef: object expected");
                message.innerRef = $root.storageref.StorageRef.fromObject(object.innerRef);
            }
            switch (object.messageType) {
            case "NodeMessageType_UNKNOWN":
            case 0:
                message.messageType = 0;
                break;
            case "NodeMessageType_VOTE":
            case 1:
                message.messageType = 1;
                break;
            case "NodeMessageType_BLOCK_COMMIT":
            case 2:
                message.messageType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NodeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.NodeMessage
         * @static
         * @param {inca.NodeMessage} message NodeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NodeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.genesisRef = null;
                object.prevMsgRef = null;
                object.timestamp = null;
                object.innerRef = null;
                object.messageType = options.enums === String ? "NodeMessageType_UNKNOWN" : 0;
            }
            if (message.genesisRef != null && message.hasOwnProperty("genesisRef"))
                object.genesisRef = $root.storageref.StorageRef.toObject(message.genesisRef, options);
            if (message.prevMsgRef != null && message.hasOwnProperty("prevMsgRef"))
                object.prevMsgRef = $root.storageref.StorageRef.toObject(message.prevMsgRef, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.timestamp.Timestamp.toObject(message.timestamp, options);
            if (message.innerRef != null && message.hasOwnProperty("innerRef"))
                object.innerRef = $root.storageref.StorageRef.toObject(message.innerRef, options);
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.inca.NodeMessageType[message.messageType] : message.messageType;
            return object;
        };

        /**
         * Converts this NodeMessage to JSON.
         * @function toJSON
         * @memberof inca.NodeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NodeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NodeMessage;
    })();

    inca.ChainPubsubMessage = (function() {

        /**
         * Properties of a ChainPubsubMessage.
         * @memberof inca
         * @interface IChainPubsubMessage
         * @property {storageref.IStorageRef|null} [nodeMessageRef] ChainPubsubMessage nodeMessageRef
         * @property {string|null} [peerId] ChainPubsubMessage peerId
         */

        /**
         * Constructs a new ChainPubsubMessage.
         * @memberof inca
         * @classdesc Represents a ChainPubsubMessage.
         * @implements IChainPubsubMessage
         * @constructor
         * @param {inca.IChainPubsubMessage=} [properties] Properties to set
         */
        function ChainPubsubMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChainPubsubMessage nodeMessageRef.
         * @member {storageref.IStorageRef|null|undefined} nodeMessageRef
         * @memberof inca.ChainPubsubMessage
         * @instance
         */
        ChainPubsubMessage.prototype.nodeMessageRef = null;

        /**
         * ChainPubsubMessage peerId.
         * @member {string} peerId
         * @memberof inca.ChainPubsubMessage
         * @instance
         */
        ChainPubsubMessage.prototype.peerId = "";

        /**
         * Creates a new ChainPubsubMessage instance using the specified properties.
         * @function create
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {inca.IChainPubsubMessage=} [properties] Properties to set
         * @returns {inca.ChainPubsubMessage} ChainPubsubMessage instance
         */
        ChainPubsubMessage.create = function create(properties) {
            return new ChainPubsubMessage(properties);
        };

        /**
         * Encodes the specified ChainPubsubMessage message. Does not implicitly {@link inca.ChainPubsubMessage.verify|verify} messages.
         * @function encode
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {inca.IChainPubsubMessage} message ChainPubsubMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChainPubsubMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nodeMessageRef != null && message.hasOwnProperty("nodeMessageRef"))
                $root.storageref.StorageRef.encode(message.nodeMessageRef, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.peerId);
            return writer;
        };

        /**
         * Encodes the specified ChainPubsubMessage message, length delimited. Does not implicitly {@link inca.ChainPubsubMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {inca.IChainPubsubMessage} message ChainPubsubMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChainPubsubMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChainPubsubMessage message from the specified reader or buffer.
         * @function decode
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inca.ChainPubsubMessage} ChainPubsubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChainPubsubMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.inca.ChainPubsubMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.nodeMessageRef = $root.storageref.StorageRef.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.peerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChainPubsubMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inca.ChainPubsubMessage} ChainPubsubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChainPubsubMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChainPubsubMessage message.
         * @function verify
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChainPubsubMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nodeMessageRef != null && message.hasOwnProperty("nodeMessageRef")) {
                var error = $root.storageref.StorageRef.verify(message.nodeMessageRef);
                if (error)
                    return "nodeMessageRef." + error;
            }
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isString(message.peerId))
                    return "peerId: string expected";
            return null;
        };

        /**
         * Creates a ChainPubsubMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inca.ChainPubsubMessage} ChainPubsubMessage
         */
        ChainPubsubMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.inca.ChainPubsubMessage)
                return object;
            var message = new $root.inca.ChainPubsubMessage();
            if (object.nodeMessageRef != null) {
                if (typeof object.nodeMessageRef !== "object")
                    throw TypeError(".inca.ChainPubsubMessage.nodeMessageRef: object expected");
                message.nodeMessageRef = $root.storageref.StorageRef.fromObject(object.nodeMessageRef);
            }
            if (object.peerId != null)
                message.peerId = String(object.peerId);
            return message;
        };

        /**
         * Creates a plain object from a ChainPubsubMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inca.ChainPubsubMessage
         * @static
         * @param {inca.ChainPubsubMessage} message ChainPubsubMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChainPubsubMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nodeMessageRef = null;
                object.peerId = "";
            }
            if (message.nodeMessageRef != null && message.hasOwnProperty("nodeMessageRef"))
                object.nodeMessageRef = $root.storageref.StorageRef.toObject(message.nodeMessageRef, options);
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            return object;
        };

        /**
         * Converts this ChainPubsubMessage to JSON.
         * @function toJSON
         * @memberof inca.ChainPubsubMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChainPubsubMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChainPubsubMessage;
    })();

    /**
     * NodeMessageType enum.
     * @name inca.NodeMessageType
     * @enum {string}
     * @property {number} NodeMessageType_UNKNOWN=0 NodeMessageType_UNKNOWN value
     * @property {number} NodeMessageType_VOTE=1 NodeMessageType_VOTE value
     * @property {number} NodeMessageType_BLOCK_COMMIT=2 NodeMessageType_BLOCK_COMMIT value
     */
    inca.NodeMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NodeMessageType_UNKNOWN"] = 0;
        values[valuesById[1] = "NodeMessageType_VOTE"] = 1;
        values[valuesById[2] = "NodeMessageType_BLOCK_COMMIT"] = 2;
        return values;
    })();

    return inca;
})();

$root.timestamp = (function() {

    /**
     * Namespace timestamp.
     * @exports timestamp
     * @namespace
     */
    var timestamp = {};

    timestamp.Timestamp = (function() {

        /**
         * Properties of a Timestamp.
         * @memberof timestamp
         * @interface ITimestamp
         * @property {number|Long|null} [timeUnixMs] Timestamp timeUnixMs
         */

        /**
         * Constructs a new Timestamp.
         * @memberof timestamp
         * @classdesc Represents a Timestamp.
         * @implements ITimestamp
         * @constructor
         * @param {timestamp.ITimestamp=} [properties] Properties to set
         */
        function Timestamp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Timestamp timeUnixMs.
         * @member {number|Long} timeUnixMs
         * @memberof timestamp.Timestamp
         * @instance
         */
        Timestamp.prototype.timeUnixMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Timestamp instance using the specified properties.
         * @function create
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.ITimestamp=} [properties] Properties to set
         * @returns {timestamp.Timestamp} Timestamp instance
         */
        Timestamp.create = function create(properties) {
            return new Timestamp(properties);
        };

        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @function encode
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeUnixMs != null && message.hasOwnProperty("timeUnixMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timeUnixMs);
            return writer;
        };

        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link timestamp.Timestamp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @function decode
         * @memberof timestamp.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {timestamp.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.timestamp.Timestamp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timeUnixMs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof timestamp.Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {timestamp.Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Timestamp message.
         * @function verify
         * @memberof timestamp.Timestamp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timestamp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeUnixMs != null && message.hasOwnProperty("timeUnixMs"))
                if (!$util.isInteger(message.timeUnixMs) && !(message.timeUnixMs && $util.isInteger(message.timeUnixMs.low) && $util.isInteger(message.timeUnixMs.high)))
                    return "timeUnixMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof timestamp.Timestamp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {timestamp.Timestamp} Timestamp
         */
        Timestamp.fromObject = function fromObject(object) {
            if (object instanceof $root.timestamp.Timestamp)
                return object;
            var message = new $root.timestamp.Timestamp();
            if (object.timeUnixMs != null)
                if ($util.Long)
                    (message.timeUnixMs = $util.Long.fromValue(object.timeUnixMs)).unsigned = true;
                else if (typeof object.timeUnixMs === "string")
                    message.timeUnixMs = parseInt(object.timeUnixMs, 10);
                else if (typeof object.timeUnixMs === "number")
                    message.timeUnixMs = object.timeUnixMs;
                else if (typeof object.timeUnixMs === "object")
                    message.timeUnixMs = new $util.LongBits(object.timeUnixMs.low >>> 0, object.timeUnixMs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof timestamp.Timestamp
         * @static
         * @param {timestamp.Timestamp} message Timestamp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timestamp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeUnixMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeUnixMs = options.longs === String ? "0" : 0;
            if (message.timeUnixMs != null && message.hasOwnProperty("timeUnixMs"))
                if (typeof message.timeUnixMs === "number")
                    object.timeUnixMs = options.longs === String ? String(message.timeUnixMs) : message.timeUnixMs;
                else
                    object.timeUnixMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixMs) : options.longs === Number ? new $util.LongBits(message.timeUnixMs.low >>> 0, message.timeUnixMs.high >>> 0).toNumber(true) : message.timeUnixMs;
            return object;
        };

        /**
         * Converts this Timestamp to JSON.
         * @function toJSON
         * @memberof timestamp.Timestamp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timestamp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Timestamp;
    })();

    return timestamp;
})();

$root.storageref = (function() {

    /**
     * Namespace storageref.
     * @exports storageref
     * @namespace
     */
    var storageref = {};

    storageref.StorageRef = (function() {

        /**
         * Properties of a StorageRef.
         * @memberof storageref
         * @interface IStorageRef
         * @property {storageref.StorageType|null} [storageType] StorageRef storageType
         * @property {Uint8Array|null} [objectDigest] StorageRef objectDigest
         * @property {storageref.IStorageRefIPFS|null} [ipfs] StorageRef ipfs
         * @property {storageref.IStorageRefDigest|null} [digest] StorageRef digest
         */

        /**
         * Constructs a new StorageRef.
         * @memberof storageref
         * @classdesc Represents a StorageRef.
         * @implements IStorageRef
         * @constructor
         * @param {storageref.IStorageRef=} [properties] Properties to set
         */
        function StorageRef(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageRef storageType.
         * @member {storageref.StorageType} storageType
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.storageType = 0;

        /**
         * StorageRef objectDigest.
         * @member {Uint8Array} objectDigest
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.objectDigest = $util.newBuffer([]);

        /**
         * StorageRef ipfs.
         * @member {storageref.IStorageRefIPFS|null|undefined} ipfs
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.ipfs = null;

        /**
         * StorageRef digest.
         * @member {storageref.IStorageRefDigest|null|undefined} digest
         * @memberof storageref.StorageRef
         * @instance
         */
        StorageRef.prototype.digest = null;

        /**
         * Creates a new StorageRef instance using the specified properties.
         * @function create
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.IStorageRef=} [properties] Properties to set
         * @returns {storageref.StorageRef} StorageRef instance
         */
        StorageRef.create = function create(properties) {
            return new StorageRef(properties);
        };

        /**
         * Encodes the specified StorageRef message. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
         * @function encode
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.IStorageRef} message StorageRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRef.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.storageType != null && message.hasOwnProperty("storageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.storageType);
            if (message.ipfs != null && message.hasOwnProperty("ipfs"))
                $root.storageref.StorageRefIPFS.encode(message.ipfs, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.objectDigest != null && message.hasOwnProperty("objectDigest"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.objectDigest);
            if (message.digest != null && message.hasOwnProperty("digest"))
                $root.storageref.StorageRefDigest.encode(message.digest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StorageRef message, length delimited. Does not implicitly {@link storageref.StorageRef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.IStorageRef} message StorageRef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageRef message from the specified reader or buffer.
         * @function decode
         * @memberof storageref.StorageRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storageref.StorageRef} StorageRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRef.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storageref.StorageRef();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.storageType = reader.int32();
                    break;
                case 3:
                    message.objectDigest = reader.bytes();
                    break;
                case 2:
                    message.ipfs = $root.storageref.StorageRefIPFS.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.digest = $root.storageref.StorageRefDigest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageRef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storageref.StorageRef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storageref.StorageRef} StorageRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageRef message.
         * @function verify
         * @memberof storageref.StorageRef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageRef.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.storageType != null && message.hasOwnProperty("storageType"))
                switch (message.storageType) {
                default:
                    return "storageType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.objectDigest != null && message.hasOwnProperty("objectDigest"))
                if (!(message.objectDigest && typeof message.objectDigest.length === "number" || $util.isString(message.objectDigest)))
                    return "objectDigest: buffer expected";
            if (message.ipfs != null && message.hasOwnProperty("ipfs")) {
                var error = $root.storageref.StorageRefIPFS.verify(message.ipfs);
                if (error)
                    return "ipfs." + error;
            }
            if (message.digest != null && message.hasOwnProperty("digest")) {
                var error = $root.storageref.StorageRefDigest.verify(message.digest);
                if (error)
                    return "digest." + error;
            }
            return null;
        };

        /**
         * Creates a StorageRef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storageref.StorageRef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storageref.StorageRef} StorageRef
         */
        StorageRef.fromObject = function fromObject(object) {
            if (object instanceof $root.storageref.StorageRef)
                return object;
            var message = new $root.storageref.StorageRef();
            switch (object.storageType) {
            case "StorageType_UNKNOWN":
            case 0:
                message.storageType = 0;
                break;
            case "StorageType_IPFS":
            case 1:
                message.storageType = 1;
                break;
            case "StorageRef_DIGEST":
            case 2:
                message.storageType = 2;
                break;
            }
            if (object.objectDigest != null)
                if (typeof object.objectDigest === "string")
                    $util.base64.decode(object.objectDigest, message.objectDigest = $util.newBuffer($util.base64.length(object.objectDigest)), 0);
                else if (object.objectDigest.length)
                    message.objectDigest = object.objectDigest;
            if (object.ipfs != null) {
                if (typeof object.ipfs !== "object")
                    throw TypeError(".storageref.StorageRef.ipfs: object expected");
                message.ipfs = $root.storageref.StorageRefIPFS.fromObject(object.ipfs);
            }
            if (object.digest != null) {
                if (typeof object.digest !== "object")
                    throw TypeError(".storageref.StorageRef.digest: object expected");
                message.digest = $root.storageref.StorageRefDigest.fromObject(object.digest);
            }
            return message;
        };

        /**
         * Creates a plain object from a StorageRef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storageref.StorageRef
         * @static
         * @param {storageref.StorageRef} message StorageRef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageRef.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.storageType = options.enums === String ? "StorageType_UNKNOWN" : 0;
                object.ipfs = null;
                object.objectDigest = options.bytes === String ? "" : [];
                object.digest = null;
            }
            if (message.storageType != null && message.hasOwnProperty("storageType"))
                object.storageType = options.enums === String ? $root.storageref.StorageType[message.storageType] : message.storageType;
            if (message.ipfs != null && message.hasOwnProperty("ipfs"))
                object.ipfs = $root.storageref.StorageRefIPFS.toObject(message.ipfs, options);
            if (message.objectDigest != null && message.hasOwnProperty("objectDigest"))
                object.objectDigest = options.bytes === String ? $util.base64.encode(message.objectDigest, 0, message.objectDigest.length) : options.bytes === Array ? Array.prototype.slice.call(message.objectDigest) : message.objectDigest;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = $root.storageref.StorageRefDigest.toObject(message.digest, options);
            return object;
        };

        /**
         * Converts this StorageRef to JSON.
         * @function toJSON
         * @memberof storageref.StorageRef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageRef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StorageRef;
    })();

    /**
     * StorageType enum.
     * @name storageref.StorageType
     * @enum {string}
     * @property {number} StorageType_UNKNOWN=0 StorageType_UNKNOWN value
     * @property {number} StorageType_IPFS=1 StorageType_IPFS value
     * @property {number} StorageRef_DIGEST=2 StorageRef_DIGEST value
     */
    storageref.StorageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "StorageType_UNKNOWN"] = 0;
        values[valuesById[1] = "StorageType_IPFS"] = 1;
        values[valuesById[2] = "StorageRef_DIGEST"] = 2;
        return values;
    })();

    storageref.StorageRefIPFS = (function() {

        /**
         * Properties of a StorageRefIPFS.
         * @memberof storageref
         * @interface IStorageRefIPFS
         * @property {string|null} [objectHash] StorageRefIPFS objectHash
         */

        /**
         * Constructs a new StorageRefIPFS.
         * @memberof storageref
         * @classdesc Represents a StorageRefIPFS.
         * @implements IStorageRefIPFS
         * @constructor
         * @param {storageref.IStorageRefIPFS=} [properties] Properties to set
         */
        function StorageRefIPFS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageRefIPFS objectHash.
         * @member {string} objectHash
         * @memberof storageref.StorageRefIPFS
         * @instance
         */
        StorageRefIPFS.prototype.objectHash = "";

        /**
         * Creates a new StorageRefIPFS instance using the specified properties.
         * @function create
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.IStorageRefIPFS=} [properties] Properties to set
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS instance
         */
        StorageRefIPFS.create = function create(properties) {
            return new StorageRefIPFS(properties);
        };

        /**
         * Encodes the specified StorageRefIPFS message. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
         * @function encode
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.IStorageRefIPFS} message StorageRefIPFS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefIPFS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objectHash != null && message.hasOwnProperty("objectHash"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.objectHash);
            return writer;
        };

        /**
         * Encodes the specified StorageRefIPFS message, length delimited. Does not implicitly {@link storageref.StorageRefIPFS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.IStorageRefIPFS} message StorageRefIPFS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefIPFS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageRefIPFS message from the specified reader or buffer.
         * @function decode
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefIPFS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storageref.StorageRefIPFS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.objectHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageRefIPFS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefIPFS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageRefIPFS message.
         * @function verify
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageRefIPFS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objectHash != null && message.hasOwnProperty("objectHash"))
                if (!$util.isString(message.objectHash))
                    return "objectHash: string expected";
            return null;
        };

        /**
         * Creates a StorageRefIPFS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storageref.StorageRefIPFS} StorageRefIPFS
         */
        StorageRefIPFS.fromObject = function fromObject(object) {
            if (object instanceof $root.storageref.StorageRefIPFS)
                return object;
            var message = new $root.storageref.StorageRefIPFS();
            if (object.objectHash != null)
                message.objectHash = String(object.objectHash);
            return message;
        };

        /**
         * Creates a plain object from a StorageRefIPFS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storageref.StorageRefIPFS
         * @static
         * @param {storageref.StorageRefIPFS} message StorageRefIPFS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageRefIPFS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.objectHash = "";
            if (message.objectHash != null && message.hasOwnProperty("objectHash"))
                object.objectHash = message.objectHash;
            return object;
        };

        /**
         * Converts this StorageRefIPFS to JSON.
         * @function toJSON
         * @memberof storageref.StorageRefIPFS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageRefIPFS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StorageRefIPFS;
    })();

    storageref.StorageRefDigest = (function() {

        /**
         * Properties of a StorageRefDigest.
         * @memberof storageref
         * @interface IStorageRefDigest
         */

        /**
         * Constructs a new StorageRefDigest.
         * @memberof storageref
         * @classdesc Represents a StorageRefDigest.
         * @implements IStorageRefDigest
         * @constructor
         * @param {storageref.IStorageRefDigest=} [properties] Properties to set
         */
        function StorageRefDigest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StorageRefDigest instance using the specified properties.
         * @function create
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.IStorageRefDigest=} [properties] Properties to set
         * @returns {storageref.StorageRefDigest} StorageRefDigest instance
         */
        StorageRefDigest.create = function create(properties) {
            return new StorageRefDigest(properties);
        };

        /**
         * Encodes the specified StorageRefDigest message. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
         * @function encode
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.IStorageRefDigest} message StorageRefDigest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefDigest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StorageRefDigest message, length delimited. Does not implicitly {@link storageref.StorageRefDigest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.IStorageRefDigest} message StorageRefDigest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageRefDigest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageRefDigest message from the specified reader or buffer.
         * @function decode
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {storageref.StorageRefDigest} StorageRefDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefDigest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storageref.StorageRefDigest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageRefDigest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {storageref.StorageRefDigest} StorageRefDigest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageRefDigest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageRefDigest message.
         * @function verify
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageRefDigest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StorageRefDigest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {storageref.StorageRefDigest} StorageRefDigest
         */
        StorageRefDigest.fromObject = function fromObject(object) {
            if (object instanceof $root.storageref.StorageRefDigest)
                return object;
            return new $root.storageref.StorageRefDigest();
        };

        /**
         * Creates a plain object from a StorageRefDigest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof storageref.StorageRefDigest
         * @static
         * @param {storageref.StorageRefDigest} message StorageRefDigest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageRefDigest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StorageRefDigest to JSON.
         * @function toJSON
         * @memberof storageref.StorageRefDigest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageRefDigest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StorageRefDigest;
    })();

    return storageref;
})();

$root.objectsig = (function() {

    /**
     * Namespace objectsig.
     * @exports objectsig
     * @namespace
     */
    var objectsig = {};

    objectsig.Signature = (function() {

        /**
         * Properties of a Signature.
         * @memberof objectsig
         * @interface ISignature
         * @property {Uint8Array|null} [keyMultihash] Signature keyMultihash
         * @property {Uint8Array|null} [signature] Signature signature
         */

        /**
         * Constructs a new Signature.
         * @memberof objectsig
         * @classdesc Represents a Signature.
         * @implements ISignature
         * @constructor
         * @param {objectsig.ISignature=} [properties] Properties to set
         */
        function Signature(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Signature keyMultihash.
         * @member {Uint8Array} keyMultihash
         * @memberof objectsig.Signature
         * @instance
         */
        Signature.prototype.keyMultihash = $util.newBuffer([]);

        /**
         * Signature signature.
         * @member {Uint8Array} signature
         * @memberof objectsig.Signature
         * @instance
         */
        Signature.prototype.signature = $util.newBuffer([]);

        /**
         * Creates a new Signature instance using the specified properties.
         * @function create
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature=} [properties] Properties to set
         * @returns {objectsig.Signature} Signature instance
         */
        Signature.create = function create(properties) {
            return new Signature(properties);
        };

        /**
         * Encodes the specified Signature message. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @function encode
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.keyMultihash);
            if (message.signature != null && message.hasOwnProperty("signature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified Signature message, length delimited. Does not implicitly {@link objectsig.Signature.verify|verify} messages.
         * @function encodeDelimited
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.ISignature} message Signature message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Signature.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Signature message from the specified reader or buffer.
         * @function decode
         * @memberof objectsig.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {objectsig.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.objectsig.Signature();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.keyMultihash = reader.bytes();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Signature message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof objectsig.Signature
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {objectsig.Signature} Signature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Signature.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Signature message.
         * @function verify
         * @memberof objectsig.Signature
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Signature.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                if (!(message.keyMultihash && typeof message.keyMultihash.length === "number" || $util.isString(message.keyMultihash)))
                    return "keyMultihash: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            return null;
        };

        /**
         * Creates a Signature message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof objectsig.Signature
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {objectsig.Signature} Signature
         */
        Signature.fromObject = function fromObject(object) {
            if (object instanceof $root.objectsig.Signature)
                return object;
            var message = new $root.objectsig.Signature();
            if (object.keyMultihash != null)
                if (typeof object.keyMultihash === "string")
                    $util.base64.decode(object.keyMultihash, message.keyMultihash = $util.newBuffer($util.base64.length(object.keyMultihash)), 0);
                else if (object.keyMultihash.length)
                    message.keyMultihash = object.keyMultihash;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a Signature message. Also converts values to other types if specified.
         * @function toObject
         * @memberof objectsig.Signature
         * @static
         * @param {objectsig.Signature} message Signature
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Signature.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.keyMultihash = options.bytes === String ? "" : [];
                object.signature = options.bytes === String ? "" : [];
            }
            if (message.keyMultihash != null && message.hasOwnProperty("keyMultihash"))
                object.keyMultihash = options.bytes === String ? $util.base64.encode(message.keyMultihash, 0, message.keyMultihash.length) : options.bytes === Array ? Array.prototype.slice.call(message.keyMultihash) : message.keyMultihash;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this Signature to JSON.
         * @function toJSON
         * @memberof objectsig.Signature
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Signature.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Signature;
    })();

    return objectsig;
})();

module.exports = $root;
