<template>
  <b-container class="mt-4">
    <div class="locale-changer"></div>
    <b-row>
      <b-col>
        <h3 class="mt-3 mb-3">{{ $t("welcome") }}</h3>
        <p class="mt-3 mb-5">{{ $t("landing_text") }} :</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab :title="tab1Title" active>
                <b-card-text>
                  <p class="mt-5">{{ $t("my_profile_tab_exp") }}</p>
                  <p class="mb-4">{{ $t("recommendation") }}.</p>
                  <RouterLink to="user">
                    <b-button class="mt-4" variant="primary"
                      >{{ $t("go_to") }} {{ $t("my_profile") }}</b-button
                    >
                  </RouterLink>
                </b-card-text>
              </b-tab>
              <b-tab :title="tab2Title">
                <b-card-text>
                  <b-card-text>
                    <p class="mt-5">{{ $t("search_tab_exp") }}</p>
                    <RouterLink to="search">
                      <b-button class="mt-4" variant="primary"
                        >{{ $t("go_to") }} {{ $t("search") }}</b-button
                      >
                    </RouterLink>
                  </b-card-text></b-card-text
                >
              </b-tab>
              <b-tab :title="tab3Title">
                <b-card-text>
                  <b-card-text>
                    <p class="mt-5">{{ $t("weather_short_exp") }}</p>
                    <RouterLink to="weather">
                      <b-button class="mt-4" variant="primary"
                        >{{ $t("go_to") }} {{ $t("weather") }}</b-button
                      >
                    </RouterLink>
                  </b-card-text></b-card-text
                >
              </b-tab>
              <b-tab :title="tab4Title">
                <b-card-text>
                  <b-card-text>
                    <p class="mt-5">{{ $t("legislation_short_exp") }}.</p>
                    <p class="mt-3 mb-3">{{ $t("legislation_short_exp_2") }}</p>
                    <b-button
                      ><a href="https://www.droneregulations.info/" class="mt-3"
                        >Global Drone Regulations</a
                      ></b-button
                    >
                  </b-card-text></b-card-text
                >
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "searchForm",
  data() {
    return {
      tab1Title: this.$t("my_profile"),
      tab2Title: this.$t("search"),
      tab3Title: this.$t("weather"),
      tab4Title: this.$t("legislation"),
    };
  },
  watch: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
