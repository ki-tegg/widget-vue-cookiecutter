import { defineComponent } from 'vue';
import KiteggButton from './components/button';

import { useExampleStore } from './ExampleStore';
import { mapState, mapActions } from 'pinia';

export default defineComponent({
  components: { KiteggButton },
  computed: {
    ...mapState(useExampleStore, ['data']),
  },
  methods: {
    ...mapActions(useExampleStore, {
      setData: 'setData',
    }),
    changeStoreModel() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.setData('value', this.$refs.exampleInput.value);
    },
  },
  template: `
    <input type="text" ref="exampleInput" :placeholder="data.value">
    <kitegg-button label="update model" @click="changeStoreModel"></kitegg-button>
  `,
});
