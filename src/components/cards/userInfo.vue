<template>
  <b-container class="mt-4 cards-container">
    <h4 class="mb-4">{{ $t("welcome") }} {{ userDetails.username }}</h4>

    <b-row class="card-box mb-3">
      <b-col class="mb-3 card-text">
        <!-- avatar -->
        <ImageAvatar style="width: 120px" :imagePath="userDetails.avatar" />
        <p>{{ userDetails.alias }}</p>
      </b-col>
    </b-row>

    <!-- campos responsive formulario -->
    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3 card-text">
        <!-- Country -->
        <label>{{ $t("country") }}</label>
        <p>{{ userDetails.country }}</p>
      </b-col>
      <b-col md="6" class="mb-3 card-text">
        <!-- City -->
        <label>{{ $t("city") }}</label>
        <p>{{ userDetails.city }}</p>
      </b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3 card-text">
        <!-- phone -->
        <label>{{ $t("phone") }}</label>
        <p>{{ userDetails.phone }}</p>
      </b-col>
      <b-col md="6" class="mb-3 card-text">
        <!-- Email -->
        <label>{{ $t("email") }}</label>
        <p>{{ userDetails.email }}</p>
      </b-col>
    </b-row>

    <div v-if="userDetails.haveDrone">
      <b-row class="card-box mb-3">
        <b-col md="6" class="mb-3 card-text">
          <!-- DroneBrand -->
          <label>{{ $t("drone_brand") }}</label>
          <p>{{ userDetails.droneBrand }}</p>
        </b-col>
        <b-col md="6" class="mb-3 card-text">
          <!-- DroneModel -->
          <label>{{ $t("drone_model") }}</label>
          <p>{{ formatText(userDetails.droneModel) }}</p>
        </b-col>
      </b-row>
      <b-row class="card-box mb-3">
        <b-col md="6" class="mb-3 card-text">
          <!-- latitud -->
          <label>{{ $t("latitude") }}</label>
          <p>{{ userDetails.latitude }}</p>
        </b-col>
        <b-col md="6" class="mb-3 card-text">
          <!-- longitd -->
          <label>{{ $t("longitude") }}</label>
          <p>{{ userDetails.longitude }}</p>
        </b-col>
      </b-row>
      <b-row class="card-box mb-3">
        <b-col md="6" class="mb-3 card-text">
          <!-- latitud -->
          <label>{{ $t("price") }}</label>
          <p>{{ userDetails.price }} €</p>
        </b-col>
      </b-row>
    </div>

    <b-row class="row-box mb-3">
      <b-col class="mb-3 card-text">
        <!-- description -->
        <label>{{ $t("description") }}</label>
        <p>{{ userDetails.aboutMe }}</p>
      </b-col>
    </b-row>

    <b-row class="row-box">
      <div cols="12" class="card-description">
        <b-button class="col-12 mt-4" @click="goToEdit()" variant="secondary">{{
          $t("buttons.editProfile")
        }}</b-button>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import ImageAvatar from "@/components/ImageAvatar.vue";
import { removeDashes } from "@/utils/removeDashes.js";
export default {
  name: "userInfoCard",
  components: {
    ImageAvatar,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getUserbyId");
  },
  computed: {
    ...mapState({
      userDetails: "userInfo",
    }),
  },
  methods: {
    // getImgUrl(name) {
    //   return new URL(`.@/assets/img/avatars/${name}.png`, import.meta.url).href;
    // },
    goToEdit() {
      this.$router.push({ name: "edit" });
    },
    formatText(text) {
      return removeDashes(text);
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-img {
  width: 75px;
  height: 75px;
}
label {
  font-weight: bold;
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
.cards-container {
  padding: toRem(15);
  border-color: 1px solid #827c7ccc;
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}

.card-box {
  max-width: toRem(700);
  // ul {
  //   list-style-type: none;
  //   li:first-child {
  //     font-weight: bold;
  //   }
  // }
  .card-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
</style>
