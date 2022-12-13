<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import leaflet from "leaflet";
import { onMounted } from "vue";
export default {
  name: "leafletMap",
  setup() {
    let myMap;

    onMounted(() => {
      myMap = leaflet.map("map").setView([40.424, -3.722], 13);

      leaflet.polygon([[40.424, -3.7228]]).addTo(myMap);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(myMap);
    });
  },
};
</script>
<style lang="scss" scoped>
#map {
  height: 300px;
}
</style>
