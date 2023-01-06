<template>
  <b-container class="mt-4">
    <div class="locale-changer mb-4"></div>
    <b-row>
      <h2 class="mt-5">{{ $t("search") }}</h2>
      <b-row>
        <b-col md="6" class="mb-3 mt-5">
          <b-form-group
            :label="this.$t('choose_search')"
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
          <label>{{ $t("city") }}</label>
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
          <label>{{ $t("latitude") }}</label>
          <b-form-input
            class="input-group-text"
            id="subject-id"
            placeholder=""
          ></b-form-input
        ></b-col>
        <b-col md="3" class="mb-3">
          <label>{{ $t("longitude") }}</label>
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
          >{{ $t("buttons.search") }}</b-button
        >
        <b-button v-else @click="loadMap" class="mt-3 mb-4" variant="primary">{{
          $t("go_to_map")
        }}</b-button></b-col
      >
    </b-row>
    <!-- resultados -->
    <div v-if="pilots.length">
      <h2 class="mb-4">{{ $t("results") }}:</h2>

      <b-alert
        v-if="this.$store.state.isLogin === false"
        show
        variant="warning"
        >{{ $t("limited_results") }}</b-alert
      >
    </div>

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
                      :imagePath="result.droneModel"
                    />
                  </div>
                  <div class="pl-3">
                    <b-badge
                      @click="
                        ShowDroneModal(result.droneBrand, result.droneModel)
                      "
                      class="badge-position"
                      variant="success"
                      >{{ $t("drone_info") }}</b-badge
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
                        {{ result.droneBrand }} -
                        {{ formatText(result.droneModel) }}
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
                        >{{ $t("go_to_profile") }}</b-badge
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
    <b-modal v-model="modalShow" ok-only>
      <b-card tag="article" class="mb-2" v-if="filteredModel">
        <div v-for="data in filteredModel" :key="data.model">
          <b-card-text class="d-flex justify-content-between">
            <div>
              <h4>
                <b-badge variant="success"
                  >{{ data.brand }} - {{ formatText(data.model) }}</b-badge
                >
              </h4>

              <ImageUrl style="width: 140px" :imagePath="data.model" />
            </div>
          </b-card-text>
          <h3 class="mt-3 mb-3">{{ this.$t("aircraf_info") }}</h3>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("weight") }}</b></span
            >
            <span>{{ data.weight }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("navigation_system") }}</b></span
            >
            <span>{{ data.navigationSystem }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("max-speed") }}</b></span
            >
            <span>{{ data.maxSpeed }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("flyingTime") }}</b></span
            >
            <span>{{ data.flyingTime }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("wind_resistance") }}</b></span
            >
            <span>{{ data.windResistance }}</span>
          </b-card-text>
          <h3 class="mt-5 mb-4">{{ this.$t("video_photo") }} :</h3>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("sensor") }}</b></span
            >
            <span>{{ data.sensor }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("max_photo_res") }}</b></span
            >
            <span>{{ data.cameraRes }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("iso_photo") }}</b></span
            >
            <span>{{ data.isoPhoto }}</span> </b-card-text
          ><b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("iso_video") }}</b></span
            >
            <span>{{ data.isoVideo }}</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ this.$t("photo_format") }}</b></span
            >
            <span>{{ data.photoFormat }}</span>
          </b-card-text>
          <span
            ><b>{{ this.$t("video_format") }}</b></span
          >
          <b-card-text class="d-flex justify-content-between">
            <span>{{ data.videoFormat }}</span>
          </b-card-text>
          <span
            ><b>{{ this.$t("video_resolutions") }}</b></span
          >
          <b-card-text class="">
            <p>{{ data.videoRes }}</p>
            <p>{{ data.videoRes2 }}</p>
            <p>{{ data.videoRes3 }}</p>
          </b-card-text>
        </div>
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
import { removeDashes } from "@/utils/removeDashes.js";
import dronesInfo from "@/services/drones/technicalInfo.json";
export default {
  components: {
    ImageUrl,
  },
  data() {
    return {
      techInfo: dronesInfo,
      filteredModel: [],
      modalShow: false,
      showResults: false,
      selected: "searchByCity",
      city: "",
      options: [
        { text: this.$t("search_by_city"), value: "searchByCity" },
        { text: this.$t("search_by_map"), value: "searchByMap" },
      ],
      droneFeatures: {},
    };
  },
  watch: {},
  computed: {
    ...mapState({
      pilots: "pilots",
    }),
  },
  methods: {
    ShowDroneModal(brand, model) {
      console.log(brand, model);
      //this.modalShow = !modalShow;
      this.modalShow = true;
      const filtered = this.techInfo.filter((data) => {
        return data.model === model;
      });
      this.filteredModel = filtered;
    },
    formatText(text) {
      return removeDashes(text);
    },
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
    loadMap() {
      this.$router.push({ path: "searchMap" });
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
