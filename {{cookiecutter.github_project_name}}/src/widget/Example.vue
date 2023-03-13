<template lang="pug">
div
  input(
    type="text"
    ref="exampleInput"
    :placeholder="data.value"
  )

  button.update-value(
    type="button" 
    @click="updateStoreModel()"
  ) Update value
  button.python-function(
    type="button" 
    @click="emit('send')"
  ) Trigger a python function
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDataStore } from './store';
import { storeToRefs } from 'pinia';

const dataStore = useDataStore();
const { data } = storeToRefs(dataStore);

const emit = defineEmits(['send']);

const exampleInput = ref<HTMLInputElement>();

// Watch for value changes
dataStore.$subscribe((mutation, state) => {
  if (mutation.storeId === 'data') console.log(state.data.value); // Do something
});

function updateStoreModel() {
  dataStore.setData('value', exampleInput.value?.value);
}
</script>

<style module>
input {
  width: 100%;
  font-size: 1rem;

  padding: 0.5rem;

  border: 1px solid black;
  border-radius: 0.5rem;
}

.update-value,
.python-function {
  margin-top: 1rem;
  padding: 0.5rem;

  border: 1px transparent solid;
  border-radius: 0.5rem;
}

.update-value:hover,
.python-function:hover {
  cursor: pointer;
}

.update-value {
  background-color: black;
  color: white;
}

.python-function {
  margin-left: 0.25rem;
}
</style>

