<template>
  <h4>{{ $t("register_form_text") }}</h4>
  <p class="text-grey">{{ $t("advise_mandatory") }}</p>
  <b-container class="mt-4 form-container">
    <!-- modal -->
    <b-row>
      <b-modal v-model="modalShow">
        <b-card :title="$t('locationModal.title')" sub-title="Card subtitle">
          <b-card-text>{{ $t("locationModal.hint_1") }}</b-card-text>
          <b-button variant="outline-primary" @click="getCoordinates()">
            <b-spinner v-if="spinner" small></b-spinner
            ><span v-else>{{ $t("locationModal.button_text") }}</span>
          </b-button>
          <div class="mb-3 mt-3" v-if="showCoord">
            <b-card-text
              ><b>{{ $t("locationModal.latitude") }}</b>
              {{ latitude }}</b-card-text
            >
            <b-card-text
              ><b>{{ $t("locationModal.longitude") }}</b>
              {{ longitude }}</b-card-text
            >
          </div>
          <b-card-text class="mt-3">
            {{ $t("locationModal.hint_2") }}</b-card-text
          >
        </b-card>
      </b-modal>
      <!-- Modal -->
      <!-- new-->

      <!-- new-->
    </b-row>
    <b-row>
      <b-col>
        <!-- modal video -->
        <b-modal v-model="modalVideoShow" ok-only>
          <b-card :title="$t('hint.youtube_modal_title')" sub-title="">
            <b-card-text class="mt-5 mb-4 adjustments"
              ><b-badge variant="secondary">1</b-badge>
              {{ $t("hint.youtube_modal_step1") }}.</b-card-text
            >
            <b-card-text class="mb-3 adjustments"
              ><b-badge variant="secondary">2</b-badge>
              {{ $t("hint.youtube_modal_step2") }}:
              <img
                class="pb-2 pt-2"
                src="@/assets/img/youtube_instructions.png"
                alt=""
            /></b-card-text>
            <b-card-text class="mb-3 adjustments"
              ><b-badge variant="secondary">3</b-badge>
              {{ $t("hint.youtube_modal_step3") }}.</b-card-text
            >
          </b-card>
        </b-modal>
        <!-- modal video -->
      </b-col>
    </b-row>
    <b-row class="mb-4 card-box">
      <b-col>
        <ImageAvatar style="width: 90px" :imagePath="avatarImg" />
      </b-col>
    </b-row>
    <b-row class="card-box mb-4">
      <b-col md="6">
        <div class="avatar-container">
          <ul>
            <!-- avatar -->
            <li>
              <b-dropdown
                split
                split-variant="outline-secondary"
                variant="secondary"
                :text="this.$t('choose_avatar')"
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
                    src="@/assets/img/avatars/user_6.png"
                    alt=""
                    @click="setAvatar('user_6')" /></b-dropdown-item
                ><b-dropdown-item href="#"
                  ><img
                    class="avatar-img"
                    src="@/assets/img/avatars/user_7.png"
                    alt=""
                    @click="setAvatar('user_7')"
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
        <label class="required">{{ $t("alias") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.alias"
        ></b-form-input
      ></b-col>
    </b-row>

    <!-- campos responsive formulario -->
    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3">
        <!-- Country -->
        <label class="required">{{ $t("country") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.country"
        ></b-form-input
      ></b-col>
      <b-col md="6" class="mb-3">
        <!-- City -->
        <label class="required">{{ $t("city") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.city"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3">
        <!-- Postal Code -->
        <label class="required">{{ $t("postal_code") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.postalCode"
        ></b-form-input
      ></b-col>
      <b-col md="6" class="mb-3">
        <!-- Postal Code -->
        <label class="required">{{ $t("phone") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.phone"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col class="mb-3 mt-3">
        <!-- Drone question -->
        <label class="required mb-2">{{ $t("have_drone_question") }}</label>
        <b-form-group>
          <b-form-radio
            v-model="formData.haveDrone"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            :value="true"
            >{{ $t("yes") }}</b-form-radio
          >
          <b-form-radio
            v-model="formData.haveDrone"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            :value="false"
            >{{ $t("no") }}</b-form-radio
          >
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="card-box mb-3" v-if="formData.haveDrone">
      <b-col md="6" class="mb-3">
        <!-- Drone brand -->
        <label class="required">{{ $t("drone_brand") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id"
          :options="options"
          v-model="formData.droneBrand"
          size="sm"
        ></b-form-select>
      </b-col>

      <b-col md="6" class="mb-3" v-if="formData.haveDrone">
        <!-- Drone model -->
        <label class="required">{{ $t("drone_model") }}</label>
        <b-form-select
          class="input-group-text"
          id="subject-id"
          :options="optionsModel"
          v-model="formData.droneModel"
          size="sm"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row class="card-box mb-3" v-if="formData.haveDrone">
      <b-col md="6" class="mb-3">
        <!-- latitude -->
        <label class="required"
          >{{ $t("latitude") }}
          <b-badge
            class="show-pointer"
            @click="modalShow = !modalShow"
            pill
            variant="secondary"
            >?</b-badge
          >
        </label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.latitude"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!--  longitude -->
        <label class="required">{{ $t("longitude") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.longitude"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3" v-if="formData.haveDrone">
      <b-col md="6" class="mb-3">
        <!-- Price -->
        <label class="required">{{ $t("price") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.price"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!-- User URL -->
        <label>{{ $t("website") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.website"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3" v-if="formData.haveDrone">
      <b-col md="6" class="mb-3">
        <!-- Price -->
        <label
          >{{ $t("video_xample") }}
          <b-badge
            class="show-pointer"
            @click="modalVideoShow = !modalVideoShow"
            pill
            variant="secondary"
            >?</b-badge
          ></label
        >
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.video"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!-- User URL -->
        <!-- <label>{{ $t("photo") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.website"
        ></b-form-input> -->
      </b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3">
        <!-- RRSS -->
        <label>{{ $t("social_media") }} </label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.youtube"
          placeholder="YouTube"
        ></b-form-input>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.instagram"
          placeholder="Instagram"
        ></b-form-input>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.tiktok"
          placeholder="Tiktok"
        ></b-form-input>
      </b-col>

      <b-col md="6" class="mb-3">
        <!-- RRSS -->
        <label></label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.facebook"
          placeholder="Facebook"
        ></b-form-input>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.twitter"
          placeholder="Twitter"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mt-5 mb-4">
      <b-col>
        <!-- Price -->
        <label class="mb-3">{{ $t("tell_about_you") }}</label>
        <b-form-textarea
          id="textarea"
          v-model="formData.aboutMe"
          placeholder="Lorem ipsum..."
          rows="3"
          max-rows="6"
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
          :disabled="isDisabled"
          >{{ $t("buttons.send") }}</b-button
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
//import CustomSelect from "@/components/custom-select";
import ImageAvatar from "@/components/ImageAvatar.vue";
export default {
  name: "editProfile",
  components: {
    //CustomSelect,
    ImageAvatar,
  },
  data() {
    return {
      cardFields: [],
      formData: {
        avatar: "user_0",
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
      alertVariant: "",
      alertMessage: "",
      show: true,
      showAlert: false,
      modalShow: false,
      modalVideoShow: false,
      latitude: "",
      longitude: "",
      spinner: false,
      showCoord: false,
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
      console.log(newValue);
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
  computed: {
    isDisabled() {
      if (this.formData.haveDrone === false) {
        return !(
          this.formData.alias &&
          this.formData.country &&
          this.formData.city &&
          this.formData.postalCode &&
          this.formData.phone
        );
      } else {
        return !(
          this.formData.alias &&
          this.formData.country &&
          this.formData.city &&
          this.formData.postalCode &&
          this.formData.phone &&
          this.formData.droneBrand &&
          this.formData.droneModel &&
          this.formData.longitude &&
          this.formData.latitude &&
          this.formData.price
        );
      }
    },
  },
  methods: {
    getCoordinates() {
      this.spinner = true;
      this.$getLocation()
        .then((coordinates) => {
          console.log(coordinates);
          this.latitude = coordinates.lat;
          this.longitude = coordinates.lng;
          this.spinner = false;
          this.showCoord = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setAvatar(value) {
      console.log("avatar", value);
      this.formData.avatar = value;
      this.avatarImg = value;
      let avatarUrl = "@/assets/img/avatars/user_1.png";
      this.selectedAvatar = avatarUrl + value + ".png";
      this.showAvatar = true;
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    saveData() {
      console.log("save");
      //this.$router.push({ name: "user" });
    },
    showToast() {
      this.$toast.info(this.$t("notification.favorite_added"));
    },
    sendForm() {
      console.log("test-send user");
      //let userLoginInfo = this.$store.state.newUser;
      const { username, email, password } = this.$store.state.newUser;

      this.$store
        .dispatch("completeNewUser", {
          username,
          email,
          password,
          avatar: this.formData.avatar,
          alias: this.formData.alias.toLowerCase(),
          country: this.formData.country.toLowerCase(),
          city: this.formData.city.toLowerCase(),
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
          enabled: false,
          status: false,
        })
        .then((response) => {
          console.log("Resp desde FORM", response);
          if (response.status === 200) {
            this.alertMessage = "notification.user_created_success";
            this.alertVariant = "success";
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
              this.$router.push({ name: "login" });
            }, 2000);
          } else {
            console.log(response.status);
            this.alertVariant = "danger";
            this.alertMessage = "errors.error_ocurred";
            this.showAlert = true;
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
.required:after {
  content: " *";
  color: rgb(45, 126, 218);
  font-size: 20px;
}
.avatar-dropdown {
  ul {
    margin-left: 0;
    padding-left: 0 !important;
  }
  :deep(button) {
    min-width: 70px;
  }
}
// .avatar-container {
//   ul {
//     padding: 0 !important;
//   }
//   :deep(button) {
//     padding: 0 !important;
//   }
// }
.form-container {
  padding: toRem(25);
  @include phone-up {
    padding: toRem(45);
  }
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
.customDropdown {
  border: 3px dashed cyan;
  background-color: purple;
}
.card-box {
  //max-width: toRem(700);
  input {
    max-width: 75%;
  }
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
.show-pointer {
  cursor: pointer;
}
.adjustments {
  .badge {
    padding-bottom: 2px;
  }
}
</style>
