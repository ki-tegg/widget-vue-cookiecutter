FROM continuumio/miniconda3:22.11.1

USER root

WORKDIR /home

RUN apt update && apt install -y python-dev gcc curl

# Install Rust & Cargo
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

RUN conda install -c conda-forge \
                    python=3.10 \
                    pip \
                    jupyterlab \
                    hatch-jupyter-builder \
                    nodejs=18 \
                    yarn \
                    ipywidgets

EXPOSE 8888

# KITeGG ASCii 
# Displayed after starting the container
COPY KITeGG-ASCii.txt KITeGG-ASCii.txt
RUN chmod +x KITeGG-ASCii.txt

ENTRYPOINT ["/bin/sh", "-c" , "cat KITeGG-ASCii.txt && tail -f /dev/null"]