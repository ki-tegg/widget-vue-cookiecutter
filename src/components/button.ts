import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KiteggButton',
  props: ['label'],
  data() {
    return {
      count: 1,
    };
  },
  mounted() {
    console.log('Component mounted');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(this.count);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(this.$refs.sampleElement);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$nextTick(() => {
      console.log('NEXT TICK');
    });
  },
  template: `
    <button @click="count++" ref="sampleElement">
      {{ label }} = {{count}}
    </button>
  `,
});