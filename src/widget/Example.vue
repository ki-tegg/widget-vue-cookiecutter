<template lang="pug">
div
  input.q-mr-lg(
    type="text"
    ref="exampleInput"
    :placeholder="data.value"
  )
  KBtn(
    label="Set new value"
    size="sm"
    :primary="false"
    :dark="true"
    @click="updateStoreModel"
  )
  KSelect(:options="['mail', 'Figma', 'Mattermost']" label="Contact" dense)

  KBtn(
    label="Execute function on python kernel"
    size="sm"
    :primary="false"
    :dark="true"
    @click="emit('send')"
    class="q-mt-md"
    style="display: block;"
  )
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDataStore } from './store';
import { storeToRefs } from 'pinia';

const dataStore = useDataStore();
const { data } = storeToRefs(dataStore);

const emit = defineEmits(['send'])

const exampleInput = ref<HTMLInputElement>();

// Watch for value changes
dataStore.$subscribe((mutation, state) => {
  if (mutation.storeId === 'data') console.log(state.data.value); // Do something
});

function updateStoreModel() {
  dataStore.setData('value', exampleInput.value?.value);
}
</script>

<style scoped></style>
