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
      this.setData('value', 'This is a new value set dynamically');
    },
  },
  template: `
    <kitegg-button :label="data.value"></kitegg-button>
    <kitegg-button label="Change Store model" @click="changeStoreModel"></kitegg-button>
    <kitegg-button label="this is a test label via props 3"></kitegg-button>
  `,
});
