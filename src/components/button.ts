import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KiteggButton',
  props: ['label'],
  template: `
    <button>
      {{ label }}
    </button>
  `,
});
