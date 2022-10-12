#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Jean Boehm.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget, CallbackDispatcher
from traitlets import Unicode, Bool
from ._frontend import module_name, module_version


class ExampleWidget(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('ExampleModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('ExampleView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    value = Unicode('Hello World').tag(sync=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self._click_handlers = CallbackDispatcher()
        self.on_msg(self._handle_click_msgs)

    def executePythonFunction(self):
        print('Python function triggered!')
        
    # Handle different click messages from frontend if needed.
    def _handle_click_msgs(self, _, content, buffers):
        """Handle a msg from the front-end.
        Parameters
        ----------
        content: dict
            Content of the msg.
        """

        if content.get('event', '') == 'executePython':
            self.executePythonFunction()
