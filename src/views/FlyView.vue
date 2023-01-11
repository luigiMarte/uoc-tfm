<template>
  <b-container class="mt-4 view-fly">
    <h3 class="mt-5 mb-5">{{ $t("fly") }}</h3>
    <b-row class="boxes">
      <b-col sm="6" class="mb-4">
        <div class="card box-shadow">
          <b-card-text>
            <h4>{{ $t("weather") }}</h4>
            <b-card-text>
              <p class="mt-4">{{ $t("weather_short_exp") }}</p>
              <RouterLink to="weather">
                <b-button class="mt-4" variant="primary">{{
                  $t("weather_info")
                }}</b-button>
              </RouterLink>
            </b-card-text></b-card-text
          >
        </div>
      </b-col>
      <b-col sm="6" class="mb-4">
        <div class="card box-shadow">
          <b-card-text>
            <h4>{{ $t("legislation") }}</h4>
            <b-card-text>
              <p class="mt-4 mb-3">{{ $t("legislation_short_exp") }}.</p>
              <p class="mb-3">{{ $t("legislation_short_exp_2") }}</p>
              <b-button variant="warning" @click="gotoGlobalReg()"
                >Global Drone Regulations
              </b-button>
            </b-card-text></b-card-text
          >
        </div>
      </b-col>
    </b-row>
    <b-row class="weather">
      <b-col sm="12" lg="6"> </b-col>
    </b-row>
    <b-row class="legal">
      <b-col sm="12" lg="6"> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "searchResults",
  data() {
    return {
      results: [],
    };
  },
  methods: {
    goToEdit() {
      this.$router.push({ name: "edit" });
    },
    gotoGlobalReg() {
      this.$toast.info(this.$t("notification.external_redirection"));
      setTimeout(() => {
        window.open("https://www.droneregulations.info/", "_blank");
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.view-fly {
  margin-top: 30px !important;
  padding-left: toRem(20);
  padding-right: toRem(20);
  @include phone-up {
    margin-top: $margin-top-views !important;
  }
}
.card {
  padding: toRem(20);
}
</style>
