#!/usr/bin/env bash

DIR=$(realpath $0) && DIR=${DIR%/*}
cd $DIR
set -ex

bun x cep -c conf

bun x svelteup --config conf/svelteup.config.js
