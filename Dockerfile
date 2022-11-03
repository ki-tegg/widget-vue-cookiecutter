FROM continuumio/miniconda3:4.12.0

USER root

WORKDIR /home

RUN apt update && apt install -y git python-dev gcc

#COPY setup.sh setup.sh
#RUN chmod +x setup.sh

RUN conda install -c conda-forge \
                    python=3.8 \
                    pip \
                    jupyterlab \
                    hatch-jupyter-builder \
                    nodejs=16 \
                    yarn \
                    ipywidgets

EXPOSE 8888

COPY KITeGG-ASCii.txt KITeGG-ASCii.txt
RUN chmod +x KITeGG-ASCii.txt

ENTRYPOINT ["/bin/sh", "-c" , "cat KITeGG-ASCii.txt && tail -f /dev/null"]
#CMD ["jupyter","lab","--ip=0.0.0.0","--port=8888","--no-browser","--allow-root", "--notebook-dir=/home"]
#USER ${NB_UID}

#CMD ["jupyter", "lab", "--ServerApp.token=''"]