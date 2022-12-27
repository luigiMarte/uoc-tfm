<script setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  imagePath: { type: String },
});

const logo = ref();
watchEffect(async () => {
  logo.value = (
    await import(
      /* @vite-ignore */ `../assets/img/avatars/${props.imagePath}.png`
    )
  ).default;
});
</script>

<template>
  <img :src="logo" />
</template>
