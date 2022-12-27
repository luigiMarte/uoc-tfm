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
            v-model="city"
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
          @click="getPilots"
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
    <h2 v-if="pilots">Resultados</h2>
    <b-row>
      <b-col>
        <div class="results">
          <div v-for="result in pilots" :key="result.latitude">
            <b-card
              no-body
              class="overflow-hidden mb-3 mt-3"
              style="max-width: 350px"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <div>
                    <ImageUrl
                      style="width: 165px"
                      :imagePath="result.droneBrand"
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
                  <b-card-body :title="result.username">
                    <b-card-text>
                      <p class="mb-2">
                        {{ result.city }} / <span> {{ result.price }}€</span>
                      </p>

                      <p class="mb-2">
                        {{ result.droneBrand }} - {{ result.droneModel }}
                      </p>

                      <b-badge
                        class="profile-badge"
                        variant="secondary"
                        @click="
                          goToProfile(
                            result._id,
                            result.username,
                            result.alias,
                            result.email,
                            result.country,
                            result.city,
                            result.aboutMe,
                            result.price,
                            result.droneBrand,
                            result.droneModel,
                            result.phone,
                            result.webpage,
                            result.avatar
                          )
                        "
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
            <!-- <ImageUrl style="width: 165px" :imagePath="droneBrand" /> -->
            <img style="max-width: 165px" src="@/assets/img/drones/autel.png" />
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
import { mapState } from "vuex";
import ImageUrl from "@/components/Image.vue";
export default {
  components: {
    ImageUrl,
  },
  data() {
    return {
      modalShow: false,
      showResults: false,
      selected: "searchByCity",
      city: "",
      options: [
        { text: "Buscar por ciudad", value: "searchByCity" },
        { text: "Buscar por mapa", value: "searchByMap" },
      ],
    };
  },
  watch: {},
  computed: {
    ...mapState({
      pilots: "pilots",
    }),
  },
  methods: {
    goToProfile(
      id,
      userName,
      alias,
      email,
      country,
      city,
      aboutMe,
      price,
      droneBrand,
      droneModel,
      phone,
      webpage,
      avatar
    ) {
      let payload = {
        id,
        userName,
        alias,
        email,
        country,
        city,
        aboutMe,
        price,
        droneBrand,
        droneModel,
        phone,
        webpage,
        avatar,
      };
      this.$store.commit("SET_SELECTED_PILOT", payload);
      this.$router.push({ path: "user-contact" });
    },
    showDroneInfo() {},
    getImageUrl(name) {
      return new URL(`@/${name}.png`, import.meta.url).href;
    },
    getPilots() {
      this.$store.dispatch("searchByCity", {
        city: this.city,
      });
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
