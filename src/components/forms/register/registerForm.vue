<template>
  <b-container class="mt-4">
    <div></div>
    <b-row>
      <b-col class="text-center">
        <h3 class="mb-3">
          {{ $t("account_create_top_text") }}
        </h3>
        <p>
          {{ $t("account_create_second_text") }}
        </p>
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
              :disabled="isDisabled"
              @click="isEmailValid()"
              >{{ $t("buttons.send") }}</b-button
            >
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
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
      disabledButton: true,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    };
  },

  computed: {
    isDisabled() {
      return !(this.username && this.email && this.password);
    },
  },

  methods: {
    isEmailValid: function () {
      return this.email == ""
        ? ""
        : this.reg.test(this.email)
        ? this.sendForm()
        : this.$toast.error(this.$t("error.enter_valid_email"));
    },

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
    },

    showState() {
      let state = this.$store.state.userData;
      console.log("state", state);
    },
  },
};
</script>

<style lang="scss" scoped></style>
