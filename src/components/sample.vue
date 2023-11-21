<script setup>
import { ref } from "vue"
import { useSampleStore } from "../stores/sample.store";

const store = useSampleStore();
const count = ref(store.count);

const increment = () => {
  store.increment();
  count.value = store.count;
};

const decrement = () => {
  store.decrement();
  count.value = store.count;
};

</script>

<template>
  <h1 class="flex">Count: {{count}}</h1>
  <button 
    class="w-24 h-12 mr-1 bg-blue-500 text-white rounded-md"
    @click="increment"
  >
    Increment
  </button>
  <button
    class="w-24 h-12 bg-blue-500 text-white rounded-md"
    @click="decrement"
  >
    Decrement
  </button>
</template>
