<template>
  <b-container class="mt-4">
    <div class="locale-changer mb-4"></div>
    <b-row>
      <h2 class="mt-5">Busqueda</h2>
      <b-row>
        <b-col md="6" class="mb-3 mt-5">
          <b-form-group
            label="Selecciona la forma de búsqueda"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="radio-inline"
            ></b-form-radio-group>
          </b-form-group>
          <!-- <b-button class="mt-3 mb-4" variant="primary">Go to map</b-button> -->
        </b-col>
      </b-row>
    </b-row>
    <!-- busquedas -->
    <b-row class="card-box mb-3">
      <div v-if="selected === 'searchByCity'">
        <b-col md="3" class="mb-3">
          <label>Ciudad</label>
          <b-form-input
            class="input-group-text"
            id="subject-id"
            placeholder=""
          ></b-form-input
        ></b-col>
      </div>
      <div v-if="selected === 'searchByCoords'">
        <b-col md="3" class="mb-3">
          <label>Latitude</label>
          <b-form-input
            class="input-group-text"
            id="subject-id"
            placeholder=""
          ></b-form-input
        ></b-col>
        <b-col md="3" class="mb-3">
          <label>Longitude</label>
          <b-form-input
            class="input-group-text"
            id="subject-id"
            placeholder=""
          ></b-form-input
        ></b-col>
      </div>
      <b-col md="3" class="mb-3">
        <b-button
          v-if="selected === 'searchByCoords' || selected === 'searchByCity'"
          class="mt-3 mb-4"
          variant="primary"
          @click="showResults = true"
          >Buscar</b-button
        >
        <b-button
          v-else
          @click="showResults = true"
          class="mt-3 mb-4"
          variant="primary"
          >Mapa</b-button
        ></b-col
      >
    </b-row>
    <!-- resultados -->
    <h2 v-if="showResults">Resultados</h2>
    <b-row v-if="showResults">
      <b-col>
        <div class="results">
          <div v-for="result in results" :key="result.latitude">
            <b-card
              no-body
              class="overflow-hidden mb-3 mt-3"
              style="max-width: 350px"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <div>
                    <img
                      style="max-width: 165px"
                      src="@/assets/img/drones/autel.png"
                    />
                  </div>
                  <div class="pl-3">
                    <b-badge
                      @click="modalShow = !modalShow"
                      class="badge-position"
                      variant="success"
                      >Drone info</b-badge
                    >
                  </div>
                </b-col>
                <b-col md="6">
                  <b-card-body :title="result.name">
                    <b-card-text>
                      <p class="mb-2">
                        Madrid / <span> {{ result.price }}€</span>
                      </p>

                      <p class="mb-2">Autel - Nano evo</p>

                      <b-badge
                        class="profile-badge"
                        variant="secondary"
                        @click="goToProfile()"
                        >Ir al perfil</b-badge
                      >
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- modal -->
    <b-modal v-model="modalShow">
      <b-card tag="article" class="mb-2">
        <b-card-text class="d-flex justify-content-evenly">
          <div>
            <!-- <img :src="iconsUrl + this.icon + '@2x.png'" /> -->
            <img class="size-drone" src="@/assets/img/drones/mavic.png" />
          </div>
          <div class="pt-3">
            <h4>Dji</h4>
            <span>Mini 3</span>
          </div>
        </b-card-text>
        <b-card-text class="d-flex justify-content-between">
          <span><b>Sensor :</b></span>
          <span>1'3</span>
        </b-card-text>
        <b-card-text class="d-flex justify-content-between">
          <span><b>Peso</b></span>
          <span>250 gr</span>
        </b-card-text>
        <b-card-text class="d-flex justify-content-between">
          <span><b>Tiempo de vuelo</b></span>
          <span>28 min</span>
        </b-card-text>
        <b-card-text class="d-flex justify-content-between">
          <span><b>Resistencia al viento</b></span>
          <span>37.8 km/h</span>
        </b-card-text>
        <b-card-text class="d-flex justify-content-between">
          <span><b>Fotografía</b></span>
          <span>48 Mpx</span>
        </b-card-text>
        <b-card-text class="d-flex justify-content-between">
          <span><b>Video</b></span>
          <span>4K</span>
        </b-card-text>
      </b-card>
    </b-modal>
    <!-- modal -->
  </b-container>
</template>

<script>
//import searchForm from "../components/forms/searchForm/index.vue";
//import leafletMap from "../components/maps/leaflets.vue";
//import geoMap from "../components/maps/index.vue";
//import leaflet from "../components/leaflet.vue";
export default {
  data() {
    return {
      modalShow: false,
      showResults: false,
      selected: "searchByCity",
      options: [
        { text: "Buscar por ciudad", value: "searchByCity" },
        { text: "Buscar por coordenadas", value: "searchByCoords" },
        { text: "Buscar por mapa", value: "searchByMap" },
      ],
      results: [
        {
          name: "Lucas",
          drone: "mavic mini",
          city: "getafe",
          latitude: "234234",
          longitude: "234234",
          price: "44",
          img: "@/assets/img/drones/mavic.png",
        },
        {
          name: "Lejo",
          drone: "mavic mini",
          city: "madrid",
          latitude: "234234",
          longitude: "234234",
          price: "34",
          img: "@/assets/img/drones/autel.png",
        },
        {
          name: "Lucas",
          drone: "mavic mini",
          city: "alcorcon",
          latitude: "234234",
          longitude: "234234",
          price: "24",
          img: "@/assets/img/drones/mavic",
        },
        {
          name: "Lucas",
          drone: "mavic mini",
          city: "alcorcon",
          latitude: "234234",
          longitude: "234234",
          price: "24",
          img: "@/assets/img/drones/mavic",
        },
      ],
    };
  },
  watch: {},
  methods: {
    goToProfile() {
      this.$router.push({ path: "user-contact" });
    },
    showDroneInfo() {},
    getImageUrl(name) {
      return new URL(`@/${name}.png`, import.meta.url).href;
    },
  },
};
</script>
<style lang="scss" scoped>
.results {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr;
}
.profile-badge {
  cursor: pointer;
}
.badge-position {
  position: absolute;
  top: -30px;
  left: 25%;
  cursor: pointer;
}
.size-drone {
  width: 150px;
}
</style>
