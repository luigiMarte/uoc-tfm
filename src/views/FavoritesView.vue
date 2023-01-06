<template>
  <b-container class="mt-4">
    <h3 class="mb-5">{{ $t("favorites") }}</h3>
    <b-row>
      <b-col sm="12" lg="6">
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
                    <b-badge variant="light"> {{ favorite.phone }}</b-badge>
                    <b-badge
                      class="cursor-pointer"
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
      console.log("favorites", resp.data);
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

<style lang="scss" scoped></style>
