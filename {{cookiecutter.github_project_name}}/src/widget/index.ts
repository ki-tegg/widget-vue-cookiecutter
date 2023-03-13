// Copyright (c) {{ cookiecutter.author_name }}.
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from '../version';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useDataStore } from './store';

// Import Vue Widget
import ExampleWidget from './Example.vue';

export class ExampleModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ExampleModel.model_name,
      _model_module: ExampleModel.model_module,
      _model_module_version: ExampleModel.model_module_version,
      _view_name: ExampleModel.view_name,
      _view_module: ExampleModel.view_module,
      _view_module_version: ExampleModel.view_module_version,

      value: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'ExampleModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ExampleView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ExampleView extends DOMWidgetView {
  render() {
    // Add pinia
    const pinia = createPinia();
    // Create Vue app with widget
    const app = createApp(ExampleWidget, {
      onSend: () => {
        this.send({ event: 'executePython' });
      },
    });
    
    // Add pinia to Vue
    app.use(pinia);

    // Mount Vue App in Jupyter
    app.mount(this.el);

    // Initalise Store
    const dataStore = useDataStore();

    // Update Jupyter model on store changes
    dataStore.$onAction((context) => {
      if (context.name === 'setData') {
        this.model.set(context.args[0], context.args[1]);
        this.model.save_changes();
      }
    });

    // ######### Set widget valueKeys here ###########
    const widgetValues = ['value'];

    // Add listeners for each value
    widgetValues.forEach((valKey) => {
      // Set each widget value in store
      dataStore.setData(valKey, this.model.get(valKey));
      // Update each widget value here
      this.model.on(
        `change:${valKey}`,
        () => {
          dataStore.update(valKey, this.model.get(valKey));
        },
        this
      );
    });
  }
}
