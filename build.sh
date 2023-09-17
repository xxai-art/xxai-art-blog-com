#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

bun x cep -c conf
rm -rf lib
./conf/index.js.gen.js
bun x svelteup --config conf/svelteup.config.js
