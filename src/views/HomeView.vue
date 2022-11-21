<template>
  <b-container class="mt-4">
    <b-row>
      <b-col cols="12" md="6" class="mt-4"><geoMap></geoMap> </b-col>
      <b-col cols="12" md="6" class="mt-5 mb-5 p-4"><searchForm /></b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import searchForm from "../components/forms/searchForm/index.vue";
import geoMap from "../components/maps/index.vue";
</script>
