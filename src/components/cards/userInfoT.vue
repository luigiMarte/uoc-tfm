<script>
import { useStore } from "vuex";

export default {
  name: "imgLoader",
  props: {
    name: String,
  },
  setup(props, context) {
    const imgUrl = new URL(
      `/src/assets/img/avatars/${props.name}.png`,
      import.meta.url
    ).href;
    return {
      imgUrl,
    };
  },
};
</script>

<template>
  <b-container class="mt-4">
    <img :src="{ imgUrl }" alt="img" />
  </b-container>
</template>

<style lang="scss" scoped></style>
