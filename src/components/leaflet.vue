<template>
  <div>
    <span>{{ message }}</span>
    <button @click="increment">click</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const message = ref(0);

function increment() {
  message.value++;
}

onMounted(() => {
  console.log("original message", message);
});
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: 100vh;
}
</style>
