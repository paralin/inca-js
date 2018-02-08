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
genproto inca
genproto chain/chain
genproto chain/chain_config
genproto chain/proposer
genproto chain/segment
genproto chain/validator
genproto block/block
npm run precommit
