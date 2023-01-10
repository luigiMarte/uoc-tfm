<template>
  <b-row>
    <b-col>
      <div>
        <!-- <Form /> -->
        <!-- <MapForm @useLocation="useLocation" /> -->
        <div ref="mapRef" id="map"></div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { onMounted, ref } from "vue";
//import { onMounted, reactive, ref } from "vue";
//import MapForm from "@/components/forms/MapForm.vue";

export default {
  name: "TomtomMap",
  components: {
    //MapForm,
  },
  props: {
    locations: {
      type: Array,
    },
  },
  setup(props) {
    // const state = reactive({
    //   locations: [
    //     { lat: -23.5448697, lng: -46.6484584 },
    //     { lat: 6.4442, lng: 3.3561 },
    //     { lat: 6.4451, lng: 3.3573 },
    //     { lat: 6.4459, lng: 3.352 },
    //   ],
    // });
    console.log("comp api props", props.locations);
    const insertLocs = (map) => {
      const tomtom = window.tt;
      if (props.locations.length) {
        props.locations.forEach(function (location) {
          var marker = new tomtom.Marker().setLngLat(location).addTo(map);
          const popup = new tt.Popup({ anchor: "top" }).setText(location.name);
          marker.setPopup(popup).togglePopup();
        });
      }
    };
    // [...]

    const mapRef = ref(null);

    onMounted(() => {
      const tt = window.tt;
      //const focus = { lat: 40.410103, lng: -3.712005 };
      const focus = props.locations[0];
      var map = tt.map({
        key: "Ka5JcBchkVsJSr3gxVgHPC1NcvPO90lG",
        container: mapRef.value,
        center: focus,
        zoom: 11,
      });

      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());

      window.map = map;

      insertLocs(map);
    });

    return {
      mapRef,
    };
  },

  // [...]
};
</script>
<style lang="scss" scoped>
#map {
  @include phone-up {
    width: 100%;
  }
  height: 50vh;
  width: 90vw;
}
</style>
