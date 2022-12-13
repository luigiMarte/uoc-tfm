<template>
  <b-container class="mt-4">
    <div class="locale-changer"></div>
    <b-row>
      <!-- <b-col cols="12" md="6" class="mt-4"><geoMap></geoMap> </b-col> -->
      <b-col cols="12" md="6" class="mt-4"><leafletMap></leafletMap></b-col>
      <b-col cols="12" md="6" class="mt-5 mb-5 p-4"><searchForm /></b-col>
    </b-row>
    <b-row>
      <b-col> </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import searchForm from "../components/forms/searchForm/index.vue";
import leafletMap from "../components/maps/leaflets.vue";
//import geoMap from "../components/maps/index.vue";
//import leaflet from "../components/leaflet.vue";
</script>
