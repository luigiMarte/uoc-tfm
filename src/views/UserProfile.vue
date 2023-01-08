<script setup>
import userInfoCard from "../components/cards/userInfo.vue";
</script>

<template>
  <b-container class="mt-4 m-bot-50">
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="10" class="mt-5 mb-5 general-padding"
        ><userInfoCard
      /></b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.general-padding {
  @include phone-up {
    padding: toRem(25);
  }
  padding: toRem(5);
}
</style>
