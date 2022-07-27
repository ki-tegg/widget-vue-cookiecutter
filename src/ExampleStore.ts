import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', {
  state: () => ({
    value: 'This is a value from Example Store',
  }),
  actions: {
    setValue(val: any) {
      this.value = val;
    },
    updateValue(val: any) {
      this.value = val;
    },
  },
});
