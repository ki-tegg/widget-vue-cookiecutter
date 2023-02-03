#!/bin/bash
yarn add @kitegg/kitegg-ui
yarn install

yarn run build

python3 -m pip install --no-cache-dir -e .
jupyter labextension develop . --overwrite

# Use watch commands instead of build commands
# Recompiles jupyter and widgets on file change
# Faster compilation time
yarn run watch