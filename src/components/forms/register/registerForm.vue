<template>
  <b-container class="mt-4">
    <p class="mb-5">{{ $t("sign_in_title") }}</p>

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

      show: true,
    };
  },

  created() {
    // this.showResponse();
    // this.showState();
    //this.test();
  },
  methods: {
    // test() {
    //   let post = {
    //     username: "test luis4",
    //     email: "testluis4@gmail.com",
    //     password: "12345",
    //   };
    //   axios
    //     .post("http://localhost:3000/api/auth/sign_up", post)
    //     .then((result) => {
    //       console.log("test-post", result);
    //     });
    // },
    sendForm() {
      console.log("test-send");
      // await createUser({
      //   username: this.username,
      //   email: this.email,
      //   password: this.password,
      // });
      this.$store.dispatch("createNewUser", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    },
    async showResponse() {
      await getUsers().then((response) => {
        console.log("Resp", response);
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
