#!/bin/bash
echo "Installing libraries"
conda install -c conda-forge jupyterlab jupyter-packaging cookiecutter nodejs yarn python

python -m pip install -e .
jupyter labextension develop . --overwrite
jlpm run build

jupyter lab build