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
                      <b-button class="mt-4" variant="primary">{{
                        $t("weather_info")
                      }}</b-button>
                    </RouterLink>
                  </b-card-text></b-card-text
                >
              </b-tab>
              <b-tab :title="tab4Title">
                <b-card-text>
                  <b-card-text class="mt-3 mb-3">
                    <p class="mt-5 mb-3">{{ $t("legislation_short_exp") }}.</p>
                    <p class="mb-3">{{ $t("legislation_short_exp_2") }}</p>
                    <b-button variant="warning" @click="gotoGlobalReg()"
                      >Global Drone Regulations
                    </b-button>
                  </b-card-text></b-card-text
                >
              </b-tab>
              <b-tab :title="tab5Title">
                <div v-for="favorite in userInfo.favorites" :key="favorite.id">
                  <b-card
                    no-body
                    class="overflow-hidden mt-3 mb-3"
                    style="max-width: 300px"
                  >
                    <b-row no-gutters>
                      <b-col md="6">
                        <ImageUrl
                          style="width: 140px"
                          :imagePath="favorite.droneModel"
                        />
                      </b-col>
                      <b-col md="6">
                        <b-card-body :title="favorite.alias">
                          <b-card-text>
                            <p>
                              {{ favorite.droneBrand }}
                              {{ formatText(favorite.droneModel) }}
                            </p>
                            <b-badge variant="light">
                              {{ favorite.phone }}</b-badge
                            >
                            <b-badge
                              variant="success"
                              @click="goToPilotProfile(favorite.id)"
                            >
                              {{ $t("go_to_profile") }}</b-badge
                            >
                          </b-card-text>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </b-card>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import { getUser } from "@/services/api/auth";
import ImageUrl from "@/components/Image.vue";
import { removeDashes } from "@/utils/removeDashes.js";

export default {
  name: "searchForm",
  components: {
    ImageUrl,
  },
  data() {
    return {
      tab1Title: this.$t("my_profile"),
      tab2Title: this.$t("search"),
      tab3Title: this.$t("weather"),
      tab4Title: this.$t("legislation"),
      tab5Title: this.$t("favorites"),
      favorites: {},
    };
  },
  watch: {
    userInfo(value) {
      if (value) {
        console.log("watch if", value);
        this.getFavorites();
      } else {
        console.log("watch else", value);
      }
    },
  },
  computed: {
    ...mapState({
      userInfo: "userInfo",
    }),
  },
  created() {},

  methods: {
    async getFavorites() {
      let favorites = this.userInfo.favorites;
      const resp = await getUser(favorites);
      this.favorites = resp.data;
    },
    formatText(text) {
      return removeDashes(text);
    },
    goToPilotProfile(id) {
      this.$store.dispatch("getPilotById", id).then((response) => {
        console.log("response pilot", response.data);
        this.$router.push({ name: "pilotContact" });
      });
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
.toasting {
  background-color: aqua !important;
  color: rgb(208, 9, 9);
  padding: 20px;
}
</style>
