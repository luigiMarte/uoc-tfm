<template>
  <b-container class="mt-4">
    <div></div>
    <b-row>
      <b-col class="text-center">
        <h3 class="mb-3">Crate your user account</h3>
        <p>Complete the form to create your user account</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <b-alert v-model="showAlert" :variant="alertVariant">{{
          $t(alertMessage)
        }}</b-alert>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>

    <b-form class="mb-4 vh-100 text-center" align-v="center">
      <b-row>
        <b-col md="3"></b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-1"
            class="mt-4"
            :label="this.$t('name')"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="username"
              type="text"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            class="mt-4"
            :label="this.$t('email')"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="email"
              type="email"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            class="mt-4"
            :label="this.$t('password')"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              class="mb-4"
              v-model="password"
              type="password"
              placeholder=""
              required
            ></b-form-input>
            <b-button
              class="col-12 mt-4"
              type="submit"
              variant="primary"
              @click="sendForm()"
              >{{ $t("buttons.send") }}</b-button
            >
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { getUsers } from "@/services/api/auth";

//import { createUser } from "@/services/api/auth";
//import axios from "axios";

export default {
  name: "registerForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      form: {
        username: "",
        email: "",
        password: "",
      },
      alertVariant: "",
      alertMessage: "",
      show: true,
      showAlert: false,
    };
  },

  created() {
    // this.showResponse();
    // this.showState();
  },
  methods: {
    sendForm() {
      console.log("test-send");
      this.$store
        .dispatch("createNewUser", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          setTimeout(() => {
            this.showAlert = false;
            this.$router.push({ name: "completeProfile" });
          }, 2000);
        });
      // .then((response) => {
      //   console.log("Resp desde FORM", response);
      //   if (response.status === 200) {
      //     this.alertMessage = "notification.user_created_success";
      //     this.alertVariant = "success";
      //     this.showAlert = true;
      //     setTimeout(() => {
      //       this.showAlert = false;
      //       this.$router.push({ name: "login" });
      //     }, 2000);
      //   } else {
      //     console.log(response.status);
      //     this.alertVariant = "danger";
      //     this.alertMessage = "errors.error_ocurred";
      //     this.showAlert = true;
      //     setTimeout(() => {
      //       this.showAlert = false;
      //     }, 2000);
      //   }
      // });
    },
    async showResponse() {
      await getUsers().then((response) => {
        console.log("Resp", response);
        if (response.status === 200) {
          console.log("Do something");
          this.router.push({ name: "login" });
          //show confirmation
        } else {
          //show error
        }
      });
    },
    showState() {
      let state = this.$store.state.userData;
      console.log("state", state);
    },
    // onSubmit(event) {
    //   event.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
    // onReset(event) {
    //   event.preventDefault();
    //   // Reset our form values
    //   this.form.user = "";
    //   this.form.password = "";
    //   this.form.checked = [];
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped></style>
