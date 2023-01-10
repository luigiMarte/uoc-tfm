<template>
  <b-row>
    <b-col>
      <div>
        <!-- <Form /> -->
        <h1>Vue 3 TomTom Maps Demo</h1>
        <div ref="mapRef" id="map"></div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "TomtomMap",
  setup() {
    const mapRef = ref(null);
    onMounted(() => {
      const tt = window.tt;
      var map = tt.map({
        key: "GEb7uD67DecBG53CB3U8Mg2Ti2JPdhFO",
        container: mapRef.value,
        style: "tomtom://vector/1/basic-main",
      });
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());
      addMarker(map);
    });

    function addMarker(map) {
      const tt = window.tt;
      var location = [-121.91595, 37.36729];
      var popupOffset = 25;

      var marker = new tt.Marker().setLngLat(location).addTo(map);
      var popup = new tt.Popup({ offset: popupOffset });
      reverseGeocoding(marker, popup);
      marker.setPopup(popup).togglePopup();
    }

    function reverseGeocoding(marker, popup) {
      const tt = window.tt;
      tt.services
        .reverseGeocode({
          key: "GEb7uD67DecBG53CB3U8Mg2Ti2JPdhFO",
          position: marker.getLngLat(),
        })
        .go()
        .then(function (result) {
          console.log(result.addresses[0].address.freeformAddress);
          popup.setHTML(result.addresses[0].address.freeformAddress);
        });
    }

    return {
      mapRef,
    };
  },
};
</script>
<style>
#map {
  height: 70vh;
  width: 70vw;
}
</style>
