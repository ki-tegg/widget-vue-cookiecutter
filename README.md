# KITeGG Widgets

A widget library for jupyter notebooks. Easy interfaces for Machine Learning and Artifical Intelligence.  
Based on [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/).

## 📝 Colophon

- Technology
  - Based on the [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/) library to develop widgets for Jupyter notebooks.
  - Extended with [Vue 3](https://vuejs.org/), [Quasar](https://quasar.dev/) and our custom UI library [KITeGG UI](https://gitlab.rlp.net/kitegg/kitegg-lehr-lernplattform/kitegg-ui-components) to develop component-based frontend interfaces.
  - Using [Docker](https://www.docker.com/) to create an unified development environment.
- Fonts in use
  - ...

## 🚧 Development

### 1. Initial Setup `.env`

Before you can use the docker environment you have to make the private KITeGG UI library accessible from GitLab.

To do so, you have to generate a personal access token with your GitLab account and add it to a `.env` file. Copy the `.env.example` file and rename it to `.env`. After that, replace `YOUR_GITLAB_ACCESS_TOKEN` with your new generated access token.

### 2. Use the Docker environment

#### 1. Start the docker container.

The first time running this command it could take some time, because the image needs to be downloaded and build. The second time starting the container it should be significantly faster.

```bash
docker compose up
```

Some times it could be necessary to rebuild the image. For example if the image was updated or the current container is broken. Run the following command to rebuild the image.

```bash
docker compose up --build
```

The container will start in an idle mode. It will do nothing but will keep on running until you close your terminal window.

#### 2. Run the `setup.sh` inside the docker container.

Hook into the container from your terminal.

```bash
docker exec -it jupyterlab-vue-widgets /bin/bash
```

Execute the `setup.sh`. It will start the container in watch mode. That will recompile the widgets if there are any changes.

```bash
bash setup.sh
```

#### 3. Start Jupyter Lab

Now you can start Jupyter Lab inside of the container. Use another container terminal to start Jupyter Lab

```bash
jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root --notebook-dir=/home --ServerApp.token=''
```

Open the link in the terminal!

## 🏗️ Build the widget

To build the widget you can use `pip install build` and the run `python -m build -s` this should create python source package in `/dist` as `.tar.gz`.
This can then be installed with `pip install <package-name>.tar.gz`.
