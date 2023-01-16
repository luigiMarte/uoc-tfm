<template>
  <b-container class="mt-4 favorites-view">
    <h3 class="mb-2">{{ $t("favorites") }}</h3>
    <!-- favorites card new -->
    <b-row>
      <b-col
        v-for="favorite in userInfo.favorites"
        :key="favorite.id"
        md="6"
        class="mt-5 results-card"
        ><b-row>
          <b-col cols="5" class="ml-3">
            <div class="height-175 d-flex justify-content-center">
              <ImageUrl style="width: 165px" :imagePath="favorite.droneModel" />
            </div>
          </b-col>
          <b-col cols="6" class="ml-3"
            ><div class="height-175 d-flex flex-column justify-content-around">
              <span>
                <span>
                  <strong>{{ $t("user") }}: </strong>
                </span>
                <span class="capitalize">{{ favorite.alias }}</span>
              </span>
              <span>
                <span
                  ><strong>{{ $t("city") }}: </strong></span
                >
                <span class="capitalize">{{ favorite.city }}</span>
              </span>
              <span>
                <span
                  ><strong>{{ $t("price") }}: </strong></span
                >
                {{ getCurrency(favorite.price) }}
                {{ getSymbol() }}
              </span>
              <span>
                <span><strong>Drone: </strong></span>
                <span class="capitalize"
                  >{{ favorite.droneBrand }} -
                  {{ formatText(favorite.droneModel) }}</span
                >
              </span>
            </div>
            <div class="height-50">
              <b-badge
                class="badgeStyles cursor-pointer"
                variant="warning"
                @click="goToPilotProfile(favorite.id)"
                >{{ $t("go_to_profile") }}</b-badge
              >
            </div></b-col
          >
        </b-row>
      </b-col>
    </b-row>
    <!-- favorites Card New -->
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import { getUser } from "@/services/api/auth";
import ImageUrl from "@/components/Image.vue";
import { removeDashes } from "@/utils/removeDashes.js";
import { getCurrencySymbol, getCurrencyValue } from "@/utils/currency.js";

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
    getCurrency(price) {
      let currency = this.$store.state.userInfo.currency;
      return getCurrencyValue(price, currency);
    },
    getSymbol() {
      let currency = this.$store.state.userInfo.currency;
      return getCurrencySymbol(currency);
    },
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
        console.log("goToPilotProfile pilot", response.data);
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
.favorites-view {
  margin-top: $margin-top-views !important;
  padding-left: toRem(25);
  padding-right: toRem(25);
  @include phone-up {
    padding-left: toRem(20);
    padding-right: toRem(20);
  }
}
.results-card {
  @include phone-up {
    width: toRem(520);
    margin-left: toRem(30);
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.height-175 {
  margin-top: toRem(10);
  @include phone-up {
    margin-top: toRem(20);
  }
}
</style>
