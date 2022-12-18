<template>
  <b-container class="mt-4">
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
                    src="@/assets/img/avatars/user_6.png"
                    alt=""
                    @click="setAvatar('user_4')" /></b-dropdown-item
                ><b-dropdown-item href="#"
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
        ></b-form-input
      ></b-col>
      <b-col md="6">
        <!-- City -->
        <label>{{ $t("city") }}</label>
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
        <label>{{ $t("postal_code") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.postalCode"
        ></b-form-input
      ></b-col>
      <b-col md="6" class="mb-3">
        <!-- Postal Code -->
        <label>{{ $t("phone") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.phone"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col>
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
      <b-col md="6">
        <!-- Drone brand -->
        <label>{{ $t("drone_brand") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.droneBrand"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!-- Drone model -->
        <label>{{ $t("drone_model") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.droneModel"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6">
        <!-- latitude -->
        <label>{{ $t("latitude") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.latitude"
        ></b-form-input
      ></b-col>

      <b-col md="6" class="mb-3">
        <!--  longitude -->
        <label>{{ $t("longitude") }}</label>
        <b-form-input
          class="input-group-text"
          id="subject-id"
          v-model="formData.longitude"
        ></b-form-input
      ></b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6">
        <!-- Price -->
        <label>{{ $t("price") }}</label>
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

    <b-row class="card-box mt-5 mb-4">
      <b-col>
        <!-- Price -->
        <label>{{ $t("") }}</label>
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
          variant="secondary"
          >{{ $t("buttons.save") }}</b-button
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
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
    };
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
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    saveData() {
      console.log("save");
      //this.$router.push({ name: "user" });
    },
    sendForm() {
      console.log("test-send user");
      this.$store
        .dispatch("sendUserData", {
          avatar: this.formData.avatar,
          name: this.formData.name,
          country: this.formData.country,
          city: this.formData.city,
          postalCode: this.formData.postalCode,
          aboutMe: this.formData.aboutMe,
          haveDrone: this.formData.haveDrone,
          droneBrand: this.formData.droneBrand,
          droneModel: this.formData.droneModel,
          price: this.formData.price,
          enabled: false,
          status: false,
        })
        .then((response) => {
          console.log("Resp desde FORM", response);
          // if (response.status === 200) {
          //   this.alertMessage = "notification.user_created_success";
          //   this.alertVariant = "success";
          //   this.showAlert = true;
          //   setTimeout(() => {
          //     this.showAlert = false;
          //     this.$router.push({ name: "login" });
          //   }, 2000);
          // } else {
          //   console.log(response.status);
          //   this.alertVariant = "danger";
          //   this.alertMessage = "errors.error_ocurred";
          //   this.showAlert = true;
          //   setTimeout(() => {
          //     this.showAlert = false;
          //   }, 2000);
          // }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
