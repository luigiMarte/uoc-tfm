<template>
  <h3>{{ $t("update_profile") }}</h3>
  <b-container class="mt-4 form-container">
    <b-row class="card-box mb-3">
      <b-row v-if="selectedAvatar">
        <b-col md="6" class="mb-4">
          <ImageAvatar style="width: 90px" :imagePath="selectedAvatar" />
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col md="6" class="mb-4">
          <!-- avatar -->
          <ImageAvatar
            style="width: 90px"
            :imagePath="userDetails.avatar"
          /> </b-col
      ></b-row>
    </b-row>
    <b-row class="card-box mb-4">
      <b-col md="6">
        <div class="avatar-dropdown">
          <ul>
            <!-- avatar -->
            <li>
              <b-dropdown
                split
                split-variant="outline-secondary"
                variant="secondary"
                :text="this.$t('change_avatar')"
                class="m-2"
              >
                <b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_1.png"
                    alt=""
                    @click="setAvatar('user_1')"
                /></b-dropdown-item>
                <b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_2.png"
                    alt=""
                    @click="setAvatar('user_2')"
                  /> </b-dropdown-item
                ><b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_3.png"
                    alt=""
                    @click="setAvatar('user_3')" /></b-dropdown-item
                ><b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_4.png"
                    alt=""
                    @click="setAvatar('user_4')" /></b-dropdown-item
                ><b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_5.png"
                    alt=""
                    @click="setAvatar('user_5')" /></b-dropdown-item
                ><b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_6.png"
                    alt=""
                    @click="setAvatar('user_6')"
                /></b-dropdown-item>
                <b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_8.png"
                    alt=""
                    @click="setAvatar('user_8')"
                /></b-dropdown-item>
                <b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_9.png"
                    alt=""
                    @click="setAvatar('user_9')"
                /></b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col md="6">
        <!-- Name -->
        <label>{{ $t("alias") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.alias"
          :placeholder="userDetails.alias"
        ></b-form-input
      ></b-col>
    </b-row>

    <!-- campos responsive formulario -->
    <b-row class="card-box mb-4">
      <b-col md="6" class="mb-3">
        <!-- Country -->
        <label>{{ $t("country") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.country"
          :placeholder="userDetails.country"
        ></b-form-input
      ></b-col>
      <b-col md="6" class="mb-3">
        <!-- City -->
        <label>{{ $t("city") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.city"
          :placeholder="userDetails.city"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-4">
      <b-col md="6" class="mb-3">
        <!-- Postal Code -->
        <label>{{ $t("postal_code") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.postalCode"
          :placeholder="userDetails.postalCode"
        ></b-form-input
      ></b-col>
      <b-col md="6" class="mb-3">
        <!-- Phone -->
        <label>{{ $t("phone") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.phone"
          :placeholder="userDetails.phone"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-4">
      <b-col class="mb-3 mt-3">
        <!-- Drone question -->
        <b-form-group label="Do you have a drone">
          <b-form-radio
            v-model="formData.haveDrone"
            name="some-radios"
            :value="true"
            >{{ $t("yes") }}</b-form-radio
          >
          <b-form-radio
            v-model="formData.haveDrone"
            name="some-radios"
            :value="false"
            >{{ $t("no") }}</b-form-radio
          >
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="card-box mb-4">
      <b-col md="6" class="mb-3">
        <!-- Drone brand -->
        <label>{{ $t("drone_brand") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id"
          :options="options"
          v-model="formData.droneBrand"
          size="sm"
        ></b-form-select>
      </b-col>

      <b-col md="6" class="mb-3">
        <!-- Drone model -->
        <label>{{ $t("drone_model") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id"
          :options="optionsModel"
          v-model="formData.droneModel"
          size="sm"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row class="card-box mb-4">
      <b-col md="6" class="mb-3">
        <!-- latitude -->
        <label>{{ $t("latitude") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.latitude"
          :placeholder="userDetails.latitude"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!--  longitude -->
        <label>{{ $t("longitude") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.longitude"
          :placeholder="userDetails.longitude"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-4">
      <b-col md="6" class="mb-3">
        <!-- Price -->
        <label>{{ $t("price") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.price"
          :placeholder="userDetails.price"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!-- User web -->
        <label>{{ $t("website") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.website"
          :placeholder="userDetails.webpage"
        ></b-form-input
      ></b-col>
    </b-row>
    <b-row class="card-box mb-4">
      <b-col md="6" class="mb-3">
        <!-- video -->
        <label>{{ $t("video") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.video"
          :placeholder="userDetails.video"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!-- photo -->
      </b-col>
    </b-row>

    <b-row class="card-box mb-4 mt-5">
      <b-col md="8" class="mb-3">
        <!-- Redes sociales -->
        <label>{{ $t("social_media") }}</label>
        <div class="d-flex mt-3">
          <IconYoutube class="w-36 iconSm grayscale1" />
          <b-form-input
            class="input-group-text mb-3"
            id="subject-id"
            v-model="formData.youtube"
            :placeholder="userDetails.youtube"
          ></b-form-input>
        </div>
        <div class="d-flex">
          <IconInstagram class="w-36 iconSm grayscale1" />
          <b-form-input
            class="input-group-text mb-3"
            id="subject-id"
            v-model="formData.instagram"
            :placeholder="userDetails.instagram"
          ></b-form-input>
        </div>
        <div class="d-flex">
          <IconTiktok class="w-36 iconSm grayscale1" />
          <b-form-input
            class="input-group-text mb-3"
            id="subject-id"
            v-model="formData.tiktok"
            :placeholder="userDetails.tiktok"
          ></b-form-input>
        </div>
        <div class="d-flex">
          <IconTwitterColor class="w-36 iconSm grayscale1" />
          <b-form-input
            class="input-group-text mb-3"
            id="subject-id"
            v-model="formData.twitter"
            :placeholder="userDetails.twitter"
          ></b-form-input>
        </div>
        <div class="d-flex">
          <IconFacebook class="w-36 iconSm grayscale1" />
          <b-form-input
            class="input-group-text mb-3"
            id="subject-id"
            v-model="formData.facebook"
            :placeholder="userDetails.facebook"
          ></b-form-input>
        </div>
      </b-col>
    </b-row>

    <b-row class="card-box mt-5 mb-4">
      <b-col>
        <!-- Description -->
        <label class="mb-3">{{ $t("tell_about_you") }}</label>
        <b-form-textarea
          id="textarea"
          v-model="formData.aboutMe"
          rows="3"
          max-rows="6"
          :placeholder="userDetails.aboutMe"
        ></b-form-textarea
      ></b-col>
    </b-row>

    <!-- button -->
    <b-row class="row-box">
      <div cols="12" class="card-description">
        <b-button
          class="col-12 mt-4"
          type="submit"
          @click="sendForm()"
          variant="primary"
          >{{ $t("buttons.update_profile") }}</b-button
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import ImageAvatar from "@/components/ImageAvatar.vue";
export default {
  name: "editProfile",
  components: {
    ImageAvatar,
  },
  data() {
    return {
      cardFields: [],
      formData: {
        avatar: "",
        alias: "",
        country: "",
        city: "",
        postalCode: "",
        phone: "",
        aboutMe: "",
        haveDrone: false,
        droneBrand: "",
        droneModel: "",
        latitude: "",
        longitude: "",
        price: "",
        website: "",
        video: "",
        youtube: "",
        instagram: "",
        tiktok: "",
        twitter: "",
        facebook: "",
        enabled: false,
        status: false,
      },
      showAvatar: false,
      avatarImg: "",
      selectedAvatar: "",
      avatarsUrl: "@/assets/img/avatars/",
      show: true,
      options: [
        { value: "dji", text: "Dji" },
        { value: "autel", text: "Autel" },
        { value: "hubsan", text: "Hubsan" },
      ],
      optionsModel: [],
    };
  },
  watch: {
    "formData.droneBrand"(newValue) {
      if (newValue === "dji") {
        this.optionsModel = [
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
      if (newValue === "autel") {
        this.optionsModel = [
          { value: "evo_nano", text: "Evo Nano" },
          { value: "evo_nano_plus", text: "Evo Nano +" },
          { value: "evo_lite", text: "Evo Lite" },
          { value: "evo_lite_plus", text: "Evo Lite +" },
          { value: "evo_2", text: "Evo 2" },
        ];
      }
      if (newValue === "hubsan") {
        this.optionsModel = [
          { value: "zino_mini", text: "Zino mini" },
          { value: "zino_mini_pro", text: "Zino mini pro" },
          { value: "ace_pro", text: "Ace pro" },
        ];
      }
    },
  },

  created() {
    this.setHaveDroneValue();
  },

  computed: {
    ...mapState({
      userDetails: "userInfo",
    }),
    isDisabled() {
      return !(this.username && this.email && this.password);
    },
  },
  methods: {
    setHaveDroneValue() {
      this.formData.haveDrone = this.userDetails.haveDrone;
    },
    setAvatar(value) {
      this.formData.avatar = value;
      this.avatarImg = value;
      this.selectedAvatar = value;
      this.showAvatar = true;
    },

    sendForm() {
      this.$store
        .dispatch("updateProfile", {
          avatar: this.formData.avatar,
          alias: this.formData.alias,
          country: this.formData.country,
          city: this.formData.city,
          postalCode: this.formData.postalCode,
          phone: this.formData.phone,
          aboutMe: this.formData.aboutMe,
          haveDrone: this.formData.haveDrone,
          droneBrand: this.formData.droneBrand,
          droneModel: this.formData.droneModel,
          latitude: this.formData.latitude,
          longitude: this.formData.longitude,
          price: this.formData.price,
          webpage: this.formData.website,
          video: this.formData.video,
          youtube: this.formData.youtube,
          instagram: this.formData.instagram,
          tiktok: this.formData.tiktok,
          twitter: this.formData.twitter,
          facebook: this.formData.facebook,
        })
        .then((response) => {
          if (response.status === 200) {
            this.$toast.success(this.$t("notification.user_updated_success"));
            setTimeout(() => {
              this.$router.push({ path: "user" });
            }, 1000);
          } else {
            this.$toast.error(this.$t("error.error.ocurred"));
            setTimeout(() => {
              this.showAlert = false;
              this.$router.push({ name: "landing" });
            }, 2000);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-dropdown {
  ul {
    margin-left: 0;
    padding-left: 0;
  }
  :deep(button) {
    min-width: 70px;
  }
}
// :deep(#dropdownMenuButton) {
//   button {
//     width: 500px !important;
//   }
// }

// :deep(#dropdownMenuButton__BV_toggle_) {
//   width: 500px;
// }
.form-container {
  @include phone-up {
    padding: toRem(55);
  }
  padding: toRem(15);
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}
.avatar-img {
  width: 55px;
  height: 55px;
}
.input-group-text {
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  border-radius: 0px;
  background-color: transparent;
  text-align: start;
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
  //max-width: toRem(700);
  // div:nth-child(1),
  // div:nth-child(2) {
  //   padding-left: toRem(30);
  //   padding-right: toRem(30);
  // }
  input {
    color: $text-blue;
  }
  label {
    font-weight: bold;
  }
}

.iconSm {
  margin-right: toRem(15) !important;
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
