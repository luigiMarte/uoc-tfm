<template>
  <b-row>
    <b-col>
      <h4 class="mb-4 text-grey-dark">
        {{ $t("profile_of") }} {{ userDetails.username }}
      </h4>
    </b-col>
  </b-row>

  <b-container class="mt-4 cards-container">
    <div class="crystal-card">
      <b-row class="mb-4">
        <b-col
          ><h5 class="text-dark-grey">{{ $t("personal_info") }}</h5></b-col
        >
      </b-row>
      <b-row class="mb-3">
        <b-col md="6" class="first-col mb-4">
          <b-row class="inner-row">
            <b-col>
              <ImageAvatar style="width: 120px" :imagePath="userDetails.avatar"
            /></b-col>
            <b-col class="personal-data">
              <span class="capitalize"
                >{{ userDetails.city }}, {{ userDetails.country }}</span
              >
              <span>
                <b-badge class="mr-3">{{ userDetails.price }} €</b-badge>
              </span>
              <span
                ><a :href="userDetails.webpage" target="_blank">{{
                  userDetails.webpage
                }}</a></span
              >
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <p class="text-dark-grey">
            <strong>{{ $t("about_me") }}</strong>
          </p>
          <p class="text-grey">{{ userDetails.aboutMe }}</p>
        </b-col>
      </b-row>
    </div>
    <div class="crystal-card mt-4" v-if="userDetails.haveDrone">
      <h5 class="text-dark-grey"><strong></strong>{{ $t("my_drone") }}</h5>
      <p class="capitalize text-grey">
        {{ userDetails.droneBrand }} -
        {{ formatText(userDetails.droneModel) }}
      </p>
      <b-row class="mb-4">
        <b-col><VideoPlayer :videoId="userDetails.video"></VideoPlayer> </b-col>
      </b-row>
    </div>
    <div class="crystal-card mt-4 mb-4">
      <h5 class="mb-4 text-dark-grey">{{ $t("social_media") }}</h5>
      <p>
        <a
          v-if="userDetails.instagram"
          :href="userDetails.instagram"
          target="blank_"
        >
          <IconInstagram class="width30 mr-2" />
        </a>
        <a
          v-if="userDetails.facebook"
          :href="userDetails.facebook"
          target="blank_"
        >
          <IconFacebook class="width30 mr-2" />
        </a>
        <a v-if="userDetails.tiktok" :href="userDetails.tiktok" target="blank_">
          <IconTiktok class="width30 mr-2" />
        </a>
        <a
          v-if="userDetails.twitter"
          :href="userDetails.twitter"
          target="blank_"
        >
          <IconTwitterColor class="width30 mr-2" />
        </a>
        <a
          v-if="userDetails.youtube"
          :href="userDetails.youtube"
          target="blank_"
        >
          <IconYoutube class="width30 mr-2" />
        </a>
      </p>
    </div>

    <b-row class="row-box buttons-box">
      <b-col cols="12" md="6">
        <b-button
          class="w-100 mt-2 mb-5"
          @click="goToEdit()"
          variant="secondary"
          >{{ $t("buttons.editProfile") }}</b-button
        ></b-col
      >
      <b-col cols="12" md="6">
        <b-button
          class="w-100 mt-2 mb-5"
          @click="deleteProfile()"
          variant="danger"
          >{{ $t("buttons.deleteProfile") }}</b-button
        ></b-col
      >
    </b-row>
    <!-- modal -->
    <b-modal id="modal-1" v-model="modalShow" hide-footer :title="modalTitle">
      <p class="my-4">{{ $t("delete_account_text") }}</p>
      <div class="d-flex justify-content-evenly mb-4">
        <b-button variant="secondary" @click="hideModal()">{{
          $t("buttons.cancel")
        }}</b-button>
        <b-button variant="danger" @click="killUser()">{{
          $t("yes_delete")
        }}</b-button>
      </div>
    </b-modal>

    <!-- modal -->
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
    return {
      modalShow: false,
      modalTitle: this.$t("delete_account"),
    };
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
    deleteProfile() {
      this.modalShow = true;
    },
    hideModal() {
      this.modalShow = false;
    },
    killUser() {
      this.$store.dispatch("deleteUser").then((resp) => {
        console.log(resp);
        if (resp.status === 204) {
          this.$toast.error(this.$t("notification.user_deleted_success"));
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 1000);
        } else {
          this.$toast.error(this.$t("error.unable_delete_user"));
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 1000);
        }
      });
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
.width30 {
  width: toRem(30);
  margin-left: toRem(15);
}
.cards-container {
  @include phone-up {
    padding: toRem(15);
  }

  padding: toRem(5);
  border-color: 1px solid #827c7ccc;
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}

.card-box {
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
.crystal-card {
  @include phone-up {
    padding: toRem(20);
  }
  padding: toRem(5);
  border-bottom: 1px solid rgb(215, 212, 212);
  /* From https://css.glass */
  // background: rgba(253, 252, 252, 0.11);
  // border-radius: 16px;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(5.5px);
  // -webkit-backdrop-filter: blur(5.5px);
  // border: 1px solid rgba(253, 252, 252, 0.16);
  // box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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
  }
}

.contact-label {
  margin-bottom: toRem(5px) !important;
}
.buttons-box {
  margin-top: toRem(50);
}
</style>
