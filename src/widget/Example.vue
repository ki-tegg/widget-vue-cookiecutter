<template>
  <input
    class="q-mr-lg"
    type="text"
    ref="exampleInput"
    :placeholder="data.value"
  />
  <KBtn
    label="Hallo"
    size="sm"
    :primary="false"
    :dark="true"
    @click="changeStoreModel"
  />
  <div>Neue Changes :)!</div>
  <KSelect :options="['mail', 'Figma', 'Mattermost']" label="Contact" dense />
</template>

<script setup lang="ts"></script>

<script lang="ts">
import { defineComponent } from 'vue';

import { useDataStore } from './store';
import { mapState, mapActions } from 'pinia';

export default defineComponent({
  computed: {
    ...mapState(useDataStore, ['data']),
  },
  methods: {
    ...mapActions(useDataStore, {
      setData: 'setData',
    }),
    changeStoreModel() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.setData('value', this.$refs.exampleInput.value);
    },
  },
});
</script>

<style scoped></style>
