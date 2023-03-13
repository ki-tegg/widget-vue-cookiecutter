# widget-vue-cookiecutter

A cookiecutter template for a custom [Jupyter widget](https://ipywidgets.readthedocs.io/en/stable/) project using [Vue 3](https://vuejs.org/) and [Pinia](https://pinia.vuejs.org/).
This cookiecutter is based on the great [widget-ts-cookiecutter](https://github.com/jupyter-widgets/widget-ts-cookiecutter) and [widget-svelte-cookiecutter](https://github.com/cabreraalex/widget-svelte-cookiecutter).

In addition this custom Jupyter widget cookiecutter uses [Docker](https://www.docker.com/) as a dev environment for a better DX.

This cookiecutter is part of a larger research project trying to bring AI into design education: [KITeGG / gestaltung.ai](https://gestaltung.ai/#/).

## 🚧 Usage

### 1. Download the cookiecutter

Install [cookiecutter](https://github.com/cookiecutter/cookiecutter):

```bash
pip install cookiecutter
```

After installing cookiecutter, use the widget-vue-cookiecutter:

```bash
cookiecutter https://github.com/ki-tegg/widget-vue-cookiecutter.git
```

As widget-vue-cookiecutter runs, you will be asked for basic information about
your custom Jupyter widget project. You will be prompted for the following
information:

- `author_name`: your name or the name of your organization,
- `author_email`: your project's contact email,
- `github_project_name`: name of your custom Jupyter widget's GitHub repository,
- `github_organization_name`: name of your custom Jupyter widget's GitHub user or organization,
- `python_package_name`: name of the Python "back-end" package used in your custom widget.
- `npm_package_name`: name for the npm "front-end" package holding the JavaScript
  implementation used in your custom widget.
- `npm_package_version`: initial version of the npm package.
- `project_short_description` : a short description for your project that will
  be used for both the "back-end" and "front-end" packages.

After this, you will have a directory containing files used for creating a custom Jupyter widget.

### 2. Use the Docker environment

#### 1. Start the docker container.

Navigate in your freshly created folder and execute the following command:

```bash
docker compose up
```

This will start the docker container used for developing the widgets.

The first time running this command it could take some time, because the container needs to be downloaded and build. The second time starting the container it should be significantly faster.

Sometimes it could be necessary to rebuild the container. For example if the image was updated or the current container is broken. Run the following command to rebuild the container:

```bash
docker compose up --build
```

The container will start in an idle mode. It will do nothing but will keep on running until you close your terminal window.

After starting the container you are prompted with instructions on how to continue. Alternatively you can follow these steps:

#### 2. Run the `setup.sh` inside the docker container.

Open a new terminal window and hook into the container.

```bash
docker exec -it <python package name> /bin/bash
```

Execute the `setup.sh`. This bash script contains multiple commands which will install all the needed dependencies as well as building and installing the widget. In the end it will start a `watch` command to automatically rebuild the widget on code changes.

```bash
bash setup.sh
```

#### 3. Start Jupyter Lab

Now you can start Jupyter Lab inside the container. Open another terminal window and execute the following command to start Jupyter Lab.

```bash
jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root --notebook-dir=/home --ServerApp.token=''
```

Open the link displayed in the terminal. By default is is `localhost:8888`.

#### 4. See changes

##### JavaScript & TypeScript

If you make a change to the JavaScript or TypeScript code you need to reload the browser window to see the changes.

##### Python

If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.

## 📦 Publish your custom widgets as a PyPI package

This widget can also be released as a PyPI package which can then be installed via `pip`.

For that follow the instructions of the widget-ts-cookiecutter [here](https://github.com/jupyter-widgets/widget-ts-cookiecutter#releasing-your-initial-packages).

## 🔍 Examples

In the `/examples` folder is a Jupyter notebook, which executes an example widget.

## Footer

[KITeGG](https://gestaltung.ai/#/) is founded by [BMBF](https://www.bmbf.de/bmbf/de/home/home_node.html) and the states of RLP, NRW, BW, HE.

- https://gestaltung.ai/
- https://twitter.com/gestaltungai
- https://www.instagram.com/gestaltungai/
