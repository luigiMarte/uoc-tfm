<template>
  <h4>
    {{ $t("welcome_user_prof") }}
    <span class="capitalize alias">{{ selectedPilot.alias }}</span>
  </h4>
  <b-container class="mt-4 profile-container">
    <b-row class="mb-4">
      <b-col
        ><h4>{{ $t("personal_info") }}</h4></b-col
      >
    </b-row>

    <b-row class="mb-5 crystal-card">
      <b-col md="6" class="first-col">
        <b-row class="inner-row">
          <b-col>
            <ImageAvatar style="width: 120px" :imagePath="selectedPilot.avatar"
          /></b-col>
          <b-col class="personal-data">
            <span class="capitalize"
              >{{ selectedPilot.city }}, {{ selectedPilot.country }}</span
            >
            <span>
              <b-badge class="mr-3">{{ selectedPilot.price }} €</b-badge>
              <b-badge
                @click="favoriteRemove(selectedPilot._id)"
                variant="danger"
                class="favorites-badge"
              >
                {{ this.$t("favorites_remove") }}
              </b-badge></span
            >
            <!-- <span
                ><a :href="selectedPilot.webpage" target="_blank">{{
                  selectedPilot.webpage
                }}</a></span
              > -->
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6">
        <h5>{{ this.$t("about_me") }}</h5>
        <p>{{ selectedPilot.aboutMe }}</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        ><h4 class="capitalize mb-4">
          {{ this.$t("main_specs") }}
          {{ selectedPilot.droneBrand }}
          {{ formatText(selectedPilot.droneModel) }}
        </h4></b-col
      >
    </b-row>
    <b-row class="mb-5 crystal-card">
      <b-col md="6" class="first-col">
        <b-row class="inner-row">
          <b-col>
            <ImageUrl
              class="circular--square"
              style="width: 180px"
              :imagePath="selectedPilot.droneModel"
          /></b-col>
          <!-- <b-col class="personal-data">
              <p>{{ selectedPilot.droneBrand }}</p>
              <p>{{ selectedPilot.droneModel }}</p>
            </b-col> -->
        </b-row>
      </b-col>
      <b-col md="6">
        <div v-for="data in droneSpecs" :key="data.cameraRes">
          <p>
            <strong>{{ this.$t("max_photo_res") }}:</strong>
            {{ data.cameraRes }}
          </p>
          <p>
            <strong>{{ this.$t("video_resolutions") }} :</strong>
            {{ data.videoRes }}
          </p>
          <p>
            <strong>{{ this.$t("video_format") }} :</strong>
            {{ data.videoFormat }}
          </p>
          <p>
            <strong>{{ this.$t("flyingTime") }} :</strong> {{ data.flyingTime }}
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row v-if="selectedPilot.video">
      <b-col
        ><h4 class="mb-4">{{ this.$t("video_xample") }}</h4></b-col
      >
    </b-row>

    <b-row v-if="selectedPilot.video" class="mb-5 crystal-card">
      <b-col
        ><VideoPlayer showControls :videoId="selectedPilot.video"></VideoPlayer
      ></b-col>
    </b-row>

    <!-- <b-row class="testing mb-5">
        <b-col md="6"><p>photo gallery</p></b-col>
        <b-col md="6"><p>hola</p></b-col>
      </b-row> -->

    <b-row>
      <b-col
        ><h4 class="mb-4">{{ this.$t("contact") }}</h4></b-col
      >
    </b-row>
    <b-row class="mb-5 crystal-card">
      <b-col md="6"
        ><label>
          <strong>{{ this.$t("phone") }}: </strong>
        </label>
        <p>{{ selectedPilot.phone }}</p>
        <label>
          <strong>{{ this.$t("website") }}: </strong>
        </label>
        <p>
          <a :href="selectedPilot.webpage" target="_blank">{{
            selectedPilot.webpage
          }}</a>
        </p>
      </b-col>
      <b-col md="6"
        ><label>
          <strong>{{ this.$t("whatsApp_msg") }}: </strong>
        </label>
        <p>
          <b-badge variant="success" class="whatapp-badge">
            <a :href="'https://wa.me/' + selectedPilot.phone" target="blank_">{{
              this.$t("whatsApp")
            }}</a>
          </b-badge>
        </p>
        <label>
          <strong>{{ this.$t("social_media") }}: </strong>
        </label>
        <p>
          <a
            v-if="selectedPilot.instagram"
            :href="selectedPilot.instagram"
            target="blank_"
          >
            <IconInstagram class="width30 mr-2" />
          </a>
          <a
            v-if="selectedPilot.facebook"
            :href="selectedPilot.facebook"
            target="blank_"
          >
            <IconFacebook class="width30 mr-2" />
          </a>
          <a
            v-if="selectedPilot.tiktok"
            :href="selectedPilot.tiktok"
            target="blank_"
          >
            <IconTiktok class="width30 mr-2" />
          </a>
          <a
            v-if="selectedPilot.twitter"
            :href="selectedPilot.twitter"
            target="blank_"
          >
            <IconTwitterColor class="width30 mr-2" />
          </a>
          <a
            v-if="selectedPilot.youtube"
            :href="selectedPilot.youtube"
            target="blank_"
          >
            <IconYoutube class="width30 mr-2" />
          </a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import ImageAvatar from "@/components/ImageAvatar.vue";
import ImageUrl from "@/components/Image.vue";
import { removeDashes } from "@/utils/removeDashes.js";
//import { addFavorite } from "@/services/api/user";
import dronesInfo from "@/services/drones/technicalInfo.json";
import { removeFavorite } from "@/services/api/user";
export default {
  name: "userContact",
  components: {
    ImageUrl,
    ImageAvatar,
  },
  data() {
    return {
      techInfo: dronesInfo,
      droneSpecs: [],
      cardFields: [],
      phone: "",
    };
  },

  created() {
    this.droneData(this.selectedPilot.droneModel);
  },

  computed: {
    ...mapState({
      selectedPilot: "pilotInfo",
      userInfo: "userInfo",
      pilotInfo: "pilotInfo",
    }),
  },
  methods: {
    droneData(model) {
      const filtered = this.techInfo.filter((data) => {
        return data.model === model;
      });
      this.droneSpecs = filtered;
    },
    formatText(text) {
      return removeDashes(text);
    },
    async favoriteRemove(id) {
      let stateUserId = this.$store.state.userId;
      //let stateToken = this.$store.state.token;
      try {
        console.log("favorite remove", id);
        const resp = await removeFavorite(id, stateUserId);
        console.log(resp);
        if (resp.status === 200) {
          this.$toast.success(this.$t("notification.user_updated_success"));
          setTimeout(() => {
            this.$router.push({ path: "favorites" });
          }, 1000);
        }
      } catch (error) {
        return error;
      }
    },

    // async favoritesAdd() {
    //   try {
    //     let stateUserId = this.$store.state.userId;
    //     let stateToken = this.$store.state.token;
    //     console.log("ACTION", this.selectedPilot.id, stateUserId, stateToken);
    //     const pilotData = {
    //       id: this.selectedPilot.id,
    //       droneBrand: this.selectedPilot.droneBrand,
    //       droneModel: this.selectedPilot.droneModel,
    //       alias: this.selectedPilot.alias,
    //       price: this.selectedPilot.price,
    //     };
    //     const resp = await addFavorite(pilotData, stateUserId, stateToken);
    //     console.log("resp favorites", resp);
    //     this.$toast.info(this.$t("notification.favorite_added"));
    //     return resp;
    //   } catch (error) {
    //     return error;
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
a:link,
a:visited,
a:active {
  color: $text-blue;
}

a:hover {
  color: rgb(34, 34, 82);
}

.row-card {
  display: "flex";
}
.row-item {
  display: "flex";
}
.row-box {
  width: 90%;
  margin: 0 auto;
}
.card-box {
  width: 100%;
  ul {
    list-style-type: none;
    li:first-child {
      font-weight: bold;
    }
  }
}
.card-description {
  width: 100%;
  ul {
    list-style-type: none;
    li:first-child {
      font-weight: bold;
    }
  }
}
.whatapp-badge {
  cursor: pointer;
  height: toRem(30);
  //width: toRem(100);
  font-size: toRem(17);
  a {
    color: white !important;
  }
}
.favorites-badge {
  cursor: pointer;
}
.width30 {
  width: toRem(30);
  margin-left: toRem(15);
}
.profile-container {
  background-color: #ffffff;
  //background-image: url("https://www.transparenttextures.com/patterns/brushed-alum-dark.png");
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  padding: toRem(25);
  @include phone-up {
    padding: toRem(45);
  }
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}

.crystal-card {
  padding: toRem(20);
  /* From https://css.glass */
  background: rgba(253, 252, 252, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(253, 252, 252, 0.16);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.alias {
  color: $text-blue;
  font-weight: bold;
  font-style: italic;
}

.circular--square {
  border-radius: 50%;
}

.first-col {
  justify-content: center;
  align-items: center;
  display: flex;
}

.inner-row {
  align-items: center;
  .personal-data {
    display: grid;
    grid-gap: toRem(10);
  }
}

.contact-label {
  margin-bottom: toRem(5px) !important;
}
</style>
