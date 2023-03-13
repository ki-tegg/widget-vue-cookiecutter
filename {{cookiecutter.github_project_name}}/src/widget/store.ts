import { defineStore } from 'pinia';
// ts deinition for data object
const object: { [key: string]: any[] } = {};

export const useDataStore = defineStore('data', {
  state: () => ({
    data: object,
  }),

  // Optionally define each value of the widget in the getters
  // otherwise it will be available with data.value
  // getters: {
  //   value: (state) => state.data.value,
  // },

  actions: {
    // Set data always need name and value
    // Otherwise the update to the python counterpart does not work
    // (see: widget.ts line – 59 to 60)
    setData(name: string, val: any) {
      this.data[name] = val;
    },
    // update function is called if the python side changes
    // It's the same as setData but named differently to prevent an infinite loop
    update(name: string, val: any) {
      this.data[name] = val;
    },
  },
});
