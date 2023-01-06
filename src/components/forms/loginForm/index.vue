<template>
  <div class="custom-form-container">
    <h3 class="mb-5">{{ $t("login_title") }}</h3>
    <b-form class="custom-form">
      <b-form-group id="input-group-1" class="mt-4">
        <label for="input-1">{{ $t("user") }}</label>
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          :placeholder="this.$t('hint.email')"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" class="mt-4">
        <label for="input-2">{{ $t("password") }}</label>
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          :placeholder="this.$t('hint.password')"
          required
        ></b-form-input>
      </b-form-group>

      <b-row class="mt-5">
        <b-col>
          <b-button class="buttons" variant="secondary" @click="clearForm()">{{
            $t("buttons.clear")
          }}</b-button>
          <b-button class="buttons" variant="primary" @click="sendForm()">{{
            $t("buttons.send")
          }}</b-button></b-col
        >
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { userLogin } from "@/services/api/auth";

export default {
  name: "loginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async sendForm2() {
      await userLogin({
        email: this.form.email,
        password: this.form.password,
      });
      this.$router.push({ name: "user" });
    },
    sendForm() {
      console.log("test-send");
      this.$store
        .dispatch("userLogin", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.$toast.success(this.$t("notification.user_login_success"));
            this.$store.dispatch("getUserbyId");
            setTimeout(() => {
              this.$router.push({ name: "search" });
            }, 1500);
          } else {
            let message = response.response.data.message;
            this.$toast.error(this.$t(message));
            setTimeout(() => {
              message === "error.user_not_found"
                ? this.$toast.info(this.$t("error.error_login_user"))
                : this.$toast.info(this.$t("error.error_login_password"));
            }, 1000);
          }
        });
    },
    clearForm() {
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  width: toRem(120);
  margin-right: toRem(30);
}

.custom-form {
  label {
    font-size: toRem(18);
    margin-bottom: toRem(15);
  }
}
</style>
