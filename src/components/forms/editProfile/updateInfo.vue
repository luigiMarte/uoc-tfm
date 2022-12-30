<template>
  <b-container class="mt-4 form-container">
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <b-alert v-model="showAlert" :variant="alertVariant">{{
          $t(alertMessage)
        }}</b-alert>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
    <b-row>
      <b-col v-if="showAvatar && avatarImg" md="6">
        <img
          class="avatar-img"
          :src="require(`@/assets/img/avatars/${avatar}.png`)"
          alt="avatar"
        />
        <!-- <img
            class="avatar-img"
            src="@/assets/img/avatars/user_1.png"
            alt="avatar"
          /> -->
      </b-col>
    </b-row>
    <b-row class="card-box mb-3">
      <b-col md="6">
        <div>
          <ul>
            <!-- avatar -->
            <li>
              <b-dropdown
                split
                split-variant="outline-secondary"
                variant="secondary"
                text="Avatar"
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
                    src="@/assets/img/avatars/user_7.png"
                    alt=""
                    @click="setAvatar('user_7')"
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
    <b-row class="card-box mb-3">
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

    <b-row class="card-box mb-3">
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
        <!-- Postal Code -->
        <label>{{ $t("phone") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.phone"
          :placeholder="userDetails.phone"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col class="mb-3 mt-3">
        <!-- Drone question -->
        <b-form-group label="Do you have a drone">
          <b-form-radio
            v-model="formData.haveDrone"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            :value="true"
            >Si</b-form-radio
          >
          <b-form-radio
            v-model="formData.haveDrone"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            :value="false"
            >No</b-form-radio
          >
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3">
        <!-- Drone brand -->
        <label>{{ $t("drone_brand") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.droneBrand"
          :placeholder="userDetails.droneBrand"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!-- Drone model -->
        <label>{{ $t("drone_model") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.droneModel"
          :placeholder="userDetails.droneModel"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
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

    <b-row class="card-box mb-3">
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
        <!-- User URL -->
        <label>{{ $t("website") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.website"
          :placeholder="userDetails.website"
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
          variant="secondary"
          >{{ $t("buttons.update_profile") }}</b-button
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "editProfile",
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
    };
  },
  computed: {
    ...mapState({
      userDetails: "userInfo",
    }),
  },
  methods: {
    setAvatar(value) {
      console.log("avatar", value);
      this.formData.avatar = value;
      this.avatarImg = value;
      let avatarUrl = "@/assets/img/avatars/user_1.png";
      this.selectedAvatar = avatarUrl + value + ".png";
      this.showAvatar = true;
    },

    sendForm() {
      //const { username, email, password } = this.$store.state.newUser;
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
          website: this.formData.website,
        })
        .then((response) => {
          console.log("Resp desde FORM", response);
          if (response.status === 200) {
            this.alertMessage = "notification.user_created_success";
            this.alertVariant = "success";
            this.showAlert = true;
            this.showAlert = false;
            this.$router.push({ path: "dashboard" });
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
.form-container {
  padding: toRem(55);
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
  max-width: toRem(700);
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
</style>
