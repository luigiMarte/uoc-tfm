<template>
  <b-container class="view-search">
    <!-- <div class="locale-changer mb-4 mt-4"></div> -->
    <b-row>
      <b-col class="mb-4">
        <h3>{{ $t("search_title") }}</h3>
      </b-col>
    </b-row>
    <b-row class="card-box mb-3">
      <div>
        <label class="mb-3">{{ $t("search_instructions") }}</label>
        <b-col md="3" class="mb-3">
          <b-form-input
            v-model="city"
            class=""
            id="subject-id"
            :placeholder="this.$t('city')"
          ></b-form-input
        ></b-col>
      </div>

      <b-col md="3" class="mb-3">
        <b-button
          class="mt-3 mb-4"
          variant="primary"
          :disabled="city.length < 2"
          @click="getPilots"
          >{{ $t("buttons.search") }}</b-button
        >
      </b-col>
    </b-row>

    <!-- filtros -->
    <b-row v-if="pilotsList.length && this.$store.state.isLogin === true">
      <b-col md="2" class="mb-3">
        <label for="">{{ $t("drone_brand") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id1"
          :options="droneBrands"
          v-model="selectedBrand"
          size="sm"
        ></b-form-select
      ></b-col>
      <b-col md="2" class="mb-3">
        <label for="">{{ $t("drone_model") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id2"
          :options="droneModels"
          v-model="selectedModel"
          size="sm"
        ></b-form-select
      ></b-col>
      <b-col md="2" class="mb-3">
        <label for="">{{ $t("price") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id3"
          :options="sortPrice"
          v-model="sortedPrice"
          size="sm"
        ></b-form-select
      ></b-col>
      <b-col md="2" class="mb-3">
        <b-button
          class="button-reset"
          :disabled="city.length < 2"
          @click="resetFilters()"
          >{{ $t("reset_filters") }}</b-button
        >
      </b-col>
    </b-row>
    <b-row
      class="mt-4"
      v-if="pilotsList.length && this.$store.state.isLogin === true"
    >
      <b-col>
        <b-form-checkbox v-model="showMap" name="check-button" switch>
          {{ $t("show_in_map") }}
        </b-form-checkbox>
      </b-col>
    </b-row>

    <!-- alert login for more options -->
    <b-col>
      <b-row>
        <div v-if="pilots.length">
          <b-alert
            v-if="this.$store.state.isLogin === false"
            show
            variant="warning"
            >{{ $t("limited_results") }}</b-alert
          >
        </div>
      </b-row>
    </b-col>

    <!-- mapa -->
    <b-row
      v-if="pilotsList.length && this.$store.state.isLogin === true"
      class="mt-5"
    >
      <b-col v-if="showMap">
        <TomtomMap :locations="PilotsLocations" :key="componentKey" />
      </b-col>
    </b-row>

    <!-- results -->
    <b-row>
      <b-col>
        <div class="">
          <div>
            <b-row>
              <b-col
                v-for="(result, index) in paginatedItems"
                :key="index"
                md="6"
                class="mt-5 resultsCard"
                ><b-row>
                  <b-col cols="5" class="ml-3">
                    <div class="height-175 d-flex justify-content-center">
                      <ImageUrl
                        style="width: 165px"
                        :imagePath="result.droneModel"
                      />
                    </div>
                    <div class="height-50 d-flex justify-content-center">
                      <b-badge
                        @click="
                          ShowDroneModal(result.droneBrand, result.droneModel)
                        "
                        class="badgeStyles"
                        variant="success"
                        >{{ $t("drone_info") }}</b-badge
                      >
                    </div></b-col
                  >
                  <b-col cols="6" class="ml-3"
                    ><div
                      class="height-175 d-flex flex-column justify-content-around"
                    >
                      <span>
                        <span>
                          <strong>{{ $t("user") }}: </strong>
                        </span>
                        <span class="capitalize">{{ result.username }}</span>
                      </span>
                      <span>
                        <span
                          ><strong>{{ $t("city") }}: </strong></span
                        >
                        <span class="capitalize">{{ result.city }}</span>
                      </span>
                      <span>
                        <span
                          ><strong>{{ $t("price") }}: </strong></span
                        >
                        {{ getCurrency(result.price) }}
                        {{ getSymbol() }}
                      </span>
                      <span>
                        <span><strong>Drone: </strong></span>
                        <span class="capitalize"
                          >{{ result.droneBrand }} -
                          {{ formatText(result.droneModel) }}</span
                        >
                      </span>
                    </div>
                    <div class="height-50">
                      <b-badge
                        class="badgeStyles"
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
                            result.video,
                            result.youtube,
                            result.instagram,
                            result.tiktok,
                            result.twitter,
                            result.facebook,
                            result.avatar
                          )
                        "
                        >{{ $t("go_to_profile") }}</b-badge
                      >
                    </div></b-col
                  >
                </b-row>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- pagination -->
    <b-row
      v-if="pilotsList.length && this.$store.state.isLogin === true"
      class="mt-5"
    >
      <b-col class="mt-5">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
        />
      </b-col>
    </b-row>
    <!-- pagination -->

    <!-- modal -->
    <b-modal v-model="modalShow" ok-only>
      <b-card tag="article" class="mb-2" v-if="filteredModel">
        <div v-for="data in filteredModel" :key="data.model">
          <b-card-text class="d-flex justify-content-between">
            <div>
              <h4>
                <b-badge class="capitalize" variant="success"
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
import { mapState } from "vuex";
import ImageUrl from "@/components/Image.vue";
import { removeDashes } from "@/utils/removeDashes.js";
import dronesInfo from "@/services/drones/technicalInfo.json";
import TomtomMap from "@/components/maps/TomtomMap.vue";
import { getCurrencySymbol, getCurrencyValue } from "@/utils/currency.js";
export default {
  components: {
    ImageUrl,
    TomtomMap,
  },
  data() {
    return {
      techInfo: dronesInfo,
      filteredModel: [],
      modalShow: false,
      showMap: false,
      showResults: false,
      selectedBrand: "",
      selectedModel: "",
      sortedPrice: "",
      pilotsList: [],
      selected: "searchByCity",
      city: "",
      PilotsLocations: "",
      componentKey: 0,
      options: [
        { text: this.$t("search_by_city"), value: "searchByCity" },
        { text: this.$t("search_by_map"), value: "searchByMap" },
      ],
      droneFeatures: {},
      paginatedItems: [],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      droneBrands: [
        { value: "dji", text: "Dji" },
        { value: "autel", text: "Autel" },
        { value: "hubsan", text: "Hubsan" },
      ],
      droneModels: [],
      sortPrice: [
        { value: "asc", text: "Asc" },
        { value: "desc", text: "Desc" },
      ],
    };
  },
  watch: {
    pilotsList() {
      let arrayLength = this.pilotsList.length;
      this.totalRows = arrayLength;
      this.getLocations();
    },
    currentPage(value) {
      this.paginate(this.perPage, value);
    },
    selectedBrand(value) {
      this.filterBrand(value);
      if (value === "dji") {
        this.droneModels = [
          { value: "mini_2", text: "Mini 2" },
          { value: "mini_3", text: "Mini 3" },
          { value: "mini_3_pro", text: "Mini 3 Pro" },
          { value: "avata", text: "Avata" },
          { value: "mavic_2", text: "Mavic 2" },
          { value: "mavic_3", text: "Mavic 3" },
          { value: "air_2", text: "Air 2" },
          { value: "phantom_3", text: "Phantom 3" },
        ];
      }
      if (value === "autel") {
        this.droneModels = [
          { value: "evo_nano", text: "Evo Nano" },
          { value: "evo_nano_plus", text: "Evo Nano +" },
          { value: "evo_lite", text: "Evo Lite" },
          { value: "evo_lite_plus", text: "Evo Lite +" },
          { value: "evo_2", text: "Evo 2" },
        ];
      }
      if (value === "hubsan") {
        this.droneModels = [
          { value: "zino_mini", text: "Zino mini" },
          { value: "zino_mini_pro", text: "Zino mini pro" },
          { value: "ace_pro", text: "Ace pro" },
        ];
      }
    },
    selectedModel(value) {
      this.filterModel(value);
    },
    sortedPrice(value) {
      this.applySorting(value);
    },
  },
  computed: {
    ...mapState({
      pilots: "pilots",
      userCurrency: "userInfo.currency",
    }),
  },

  methods: {
    getCurrency(price) {
      let currency = this.$store.state.userInfo.currency;
      return getCurrencyValue(price, currency);
    },
    getSymbol() {
      let currency = this.$store.state.userInfo.currency;
      return getCurrencySymbol(currency);
    },
    getLocations() {
      const locations = this.pilotsList.map((datum) => {
        return {
          lat: datum.latitude,
          lng: datum.longitude,
          name: datum.username,
          id: datum._id,
        };
      });
      this.PilotsLocations = locations;
      this.componentKey += 1;
    },
    paginate(perPage, currentPage) {
      let itemsToParse = this.pilotsList;
      if (itemsToParse.length) {
        let filteredResult = itemsToParse.slice(
          (currentPage - 1) * this.perPage,
          currentPage * perPage
        );
        this.paginatedItems = filteredResult;
      }
    },

    filterBrand(model) {
      let tempRecipes = this.pilots;
      let sortedPilots = tempRecipes.filter((item) => {
        return item.droneBrand === model;
      });
      this.pilotsList = sortedPilots;
      this.currentPage = 1;
      this.paginate(this.perPage, this.currentPage);
    },

    filterModel(model) {
      let tempRecipes = this.pilots;
      let sortedPilots = tempRecipes.filter((item) => {
        return item.droneModel === model;
      });
      this.pilotsList = sortedPilots;
      this.currentPage = 1;
      this.paginate(this.perPage, this.currentPage);
    },

    applySorting(value) {
      if (value === "asc") {
        let pilots = this.pilots;
        let sortedPilots = pilots.sort((a, b) => {
          return a.price - b.price;
        });
        //this.paginatedItems = sortedPilots;
        this.currentPage = 1;
        this.paginate(this.perPage, this.currentPage, sortedPilots);
      } else {
        let pilots = this.pilots;
        let sortedPilots = pilots.sort((a, b) => {
          return b.price - a.price;
        });
        //this.paginatedItems = sortedPilots;
        this.currentPage = 1;
        this.paginate(this.perPage, this.currentPage, sortedPilots);
      }
    },

    resetFilters() {
      this.selectedBrand = "";
      this.selectedModel = "";
      this.sortedPrice = "";
      this.currentPage = 1;
      this.getPilots();
    },

    ShowDroneModal(brand, model) {
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
      video,
      youtube,
      instagram,
      tiktok,
      twitter,
      facebook,
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
        video,
        youtube,
        instagram,
        tiktok,
        twitter,
        facebook,
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
      this.$store
        .dispatch("searchByCity", {
          city: this.city.toLowerCase(),
        })
        .then((res) => {
          if (res.status === 200) {
            this.pilotsList = this.pilots;
            this.paginate(this.perPage, this.currentPage);
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.view-search {
  margin-top: $margin-top-views;
  max-width: toRem(1175);
  padding-left: toRem(20);
  padding-right: toRem(20);
  @include phone-up {
    padding-left: toRem(45);
    padding-right: toRem(45);
  }
}
.results {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr;
}

.resultsCard {
  @include phone-up {
    width: toRem(520);
    margin-left: toRem(30);
  }
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}
.profile-badge {
  cursor: pointer;
}
.badgeStyles {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 90px;
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
.height-175 {
  height: toRem(150);
}
.height-50 {
  height: toRem(50);
}
.button-reset {
  margin-top: toRem(23);
}
</style>
