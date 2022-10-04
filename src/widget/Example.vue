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
    @click="updateStoreModel"
  />
  <div>Neue Changes :)!</div>
  <KSelect :options="['mail', 'Figma', 'Mattermost']" label="Contact" dense />
</template>

<script setup>
import { ref } from 'vue';
import { useDataStore } from './store';
import { storeToRefs } from 'pinia';

const dataStore = useDataStore()
const { data } = storeToRefs(dataStore)

const exampleInput = ref(undefined)

// Watch for value changes
dataStore.$subscribe((mutation, state) => {
  if (mutation.storeId === 'data') console.log(state.data.value) // Do something
})

function updateStoreModel () {
  dataStore.setData('value', exampleInput.value.value);
}
</script>

<style scoped></style>
