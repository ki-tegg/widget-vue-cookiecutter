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
    <div>
      <input class="q-mr-lg" type="text" ref="exampleInput" :placeholder="data.value">
      <KBtn label="Hallo" size="sm" :primary="false" :dark="true" @click="changeStoreModel"/>
      <div>Neue Changes Again :)!</div>
      <KSelect :options="['mail', 'Figma', 'Mattermost']" label="Contact" dense />
    </div>
  `,
});
