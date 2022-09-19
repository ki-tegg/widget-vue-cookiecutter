#!/bin/bash

jlpm add --save @kitegg/kitegg-ui

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade wheel
python3 -m pip install --upgrade setuptools
python3 -m pip install --no-cache-dir -e .
jupyter labextension develop . --overwrite
#jlpm run build

# Use watch commands instead of build commands
# Recompiles jupyter and widgets on file change
# Faster compilation time
jupyter labextension watch & jlpm run watch
