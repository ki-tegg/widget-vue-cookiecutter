import { defineComponent } from 'vue';

import { useExampleStore } from './ExampleStore';
import { mapState, mapActions } from 'pinia';

export default defineComponent({
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
    <input class="q-mr-lg" type="text" ref="exampleInput" :placeholder="data.value">
    <k-btn label="Hallo" size="sm" :primary="false" :dark="true" @click="changeStoreModel"/>
    <k-toggle label="toggle"/>
  `,
});
