#!/usr/bin/env bash

DIR=$(dirname $(realpath "$0"))
set -ex

#./sh/build.config.sh

cd $(dirname DIR)
bunx nodemon \
  --watch 'src' \
  -e coffee,svelte,styl,svg,pug --exec ./build.sh
# --watch '../styl/src' \
