#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
set -ex

#./sh/build.config.sh

rm -rf lib

# ./demo.sh

cd $DIR
bun x concurrently \
  -r --kill-others \
  "./sh/svelte.sh"
# "direnv exec ../styl/dev.sh" \
# "bunx stylus -w -o lib/demo demo/file/*.styl" \
# "bunx pug -w -o lib/demo demo/file/index.pug" \
# "./preview.sh" \
