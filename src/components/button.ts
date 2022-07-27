import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KiteggButton',
  props: ['label'],
  data() {
    return {
      count: 1,
    };
  },
  template: `
    <button @click="count++" ref="sampleElement">
      {{ label }} = {{count}}
    </button>
  `,
});
