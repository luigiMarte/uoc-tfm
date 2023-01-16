<template>
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <h3 class="mt-4">{{ $t("weather_prediction") }}</h3>
        <p class="mt-4">{{ $t("weather_instructions") }}</p>
      </b-col>
    </b-row>
    <!-- inputs -->
    <b-row class="mb-5 input_styles">
      <b-col class="text-center">
        <b-input-group class="mt-3">
          <b-form-input
            v-model="city"
            :placeholder="placeholder"
            id="search"
            type="text"
          ></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-primary" @click="searchWeather">{{
              $t("search")
            }}</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <b-card
          v-if="showCard"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text class="d-flex justify-content-evenly">
            <div>
              <img :src="iconsUrl + this.icon + '@2x.png'" />
            </div>
            <div class="pt-3">
              <h4>{{ city }}</h4>
              <span>{{ date }}</span>
            </div>
          </b-card-text>

          <b-card-text class="d-flex justify-content-between">
            <span class="mr-3">
              <b> {{ $t("flying_conditions") }} : </b>
            </span>
            <span class="ml-3"
              ><b-badge pill :variant="variant">{{
                this.flyingMsg
              }}</b-badge></span
            >
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ $t("wind_speed") }} :</b></span
            >
            <span>{{ this.windSpeed }} m/s</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ $t("visibility") }} :</b></span
            >
            <span>{{ this.visibility }} m</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ $t("humidity") }} :</b></span
            >
            <span>{{ this.humidity }} %</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ $t("max-temp") }} :</b></span
            >
            <span>{{ this.max_temp }}°</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ $t("min-temp") }} :</b></span
            >
            <span>{{ this.min_temp }}°</span>
          </b-card-text>
          <b-card-text class="d-flex justify-content-between">
            <span
              ><b>{{ $t("feels_like") }} :</b></span
            >
            <span>{{ this.feels_like }}°</span>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "searchForm",
  data() {
    return {
      city: "",
      data: {},
      date: new Date().toDateString(),
      greeting: "",
      weather: "",
      humidity: "",
      visibility: "",
      max_temp: "",
      min_temp: "",
      feels_like: "",
      windSpeed: "",
      iconsUrl: "http://openweathermap.org/img/wn/",
      icon: "",
      variant: "",
      flyingMsg: "",
      showCard: false,
      placeholder: this.$t("city"),
    };
  },
  watch: {
    windSpeed(value) {
      if (value < 8) {
        this.variant = "success";
        this.flyingMsg = this.$t("optimum");
      }
      if (value > 8) {
        this.variant = "warning";
        this.flyingMsg = this.$t("moderate");
      }
      if (value > 10.5) {
        this.variant = "danger";
        this.flyingMsg = this.$t("danger");
      }
    },
  },
  methods: {
    searchWeather() {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.city +
          "&units=metric&lang=en&appid=a495404234abce9b5830b1e8d20e90a6"
      )
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.weather = data.weather[0].description;
          this.humidity = data.main.humidity;
          this.visibility = data.visibility;
          this.max_temp = data.main.temp_max;
          this.min_temp = data.main.temp_min;
          this.feels_like = data.main.feels_like;
          this.windSpeed = data.wind.speed;
          this.icon = data.weather[0].icon;
          this.showCard = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.weather-card-container {
  max-width: toRem(400);
  border: 1px solid red;
  .container-top {
    padding: 25px;
  }
}
.input_styles {
  max-width: toRem(350);
}
</style>
