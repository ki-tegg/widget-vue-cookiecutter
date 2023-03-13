# {{ cookiecutter.github_project_name }}

## Installation

You can install this package using `pip`:

```bash
pip install {{ cookiecutter.python_package_name }}
```

## 🚧 Development installation

### 1. Start the docker container.

Execute the following command:

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

### 2. Run the `setup.sh` inside the docker container.

Open a new terminal window and hook into the container.

```bash
docker exec -it {{ cookiecutter.python_package_name }} /bin/bash
```

Execute the `setup.sh`. This bash script contains multiple commands which will install all the needed dependencies as well as building and installing the widget. In the end it will start a `watch` command to automatically rebuild the widget on code changes.

```bash
bash setup.sh
```

### 3. Start Jupyter Lab

Now you can start Jupyter Lab inside the container. Open another terminal window and execute the following command to start Jupyter Lab.

```bash
jupyter lab --ip=0.0.0.0 --port=8888 --no-browser --allow-root --notebook-dir=/home --ServerApp.token=''
```

Open the link displayed in the terminal. By default is is `localhost:8888`.

### 4. See changes

#### JavaScript & TypeScript

If you make a change to the JavaScript or TypeScript code you need to reload the browser window to see the changes.

#### Python

If you make a change to the python code then you will need to restart the notebook kernel to have it take effect.

## 📦 Publish your custom widgets as a PyPI package

This widget can also be released as a PyPI package which can then be installed via `pip`.

For that follow the instructions of the widget-ts-cookiecutter [here](https://github.com/jupyter-widgets/widget-ts-cookiecutter#releasing-your-initial-packages).

## 🔍 Examples

In the `/examples` folder is a Jupyter notebook, which executes an example widget.
