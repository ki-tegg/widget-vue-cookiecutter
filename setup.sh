#!/bin/bash
npm install --save @kitegg/kitegg-ui
jlpm install

jlpm run build

python3 -m pip install --no-cache-dir -e .
jupyter labextension develop . --overwrite

# Use watch commands instead of build commands
# Recompiles jupyter and widgets on file change
# Faster compilation time
jlpm run watch