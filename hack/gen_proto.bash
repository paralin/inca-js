#!/bin/bash
set -eo pipefail

cd $(git rev-parse --show-toplevel)
export PATH=$PATH:$(pwd)/node_modules/.bin

GEN_PROTO=../../hack/lib/gen_proto.bash
if [ ! -f $GEN_PROTO ]; then
    echo "Please run this script in the js monorepo."
    exit 1
fi

source $GEN_PROTO

build_proto_tree
genprotoset \
    inca \
    prototree/github.com/aperturerobotics/pbobject/pbobject.proto \
    proto/inca.proto \
    proto/chain/chain.proto \
    proto/chain/chain_config.proto \
    proto/chain/segment.proto \
    proto/chain/validator.proto \
    proto/chain/proposer.proto \
    proto/encryption/convergentimmutable/convergent_immutable.proto
git add ./pb
npm run precommit
