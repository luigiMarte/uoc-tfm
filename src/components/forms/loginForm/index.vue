<template>
  <div>
    <p class="mb-5">{{ $t("login_title") }}</p>
    <b-form>
      <b-form-group
        id="input-group-1"
        class="mt-4"
        :label="this.$t('user')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        class="mt-4"
        :label="this.$t('password')"
        label-for="input-2"
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col>
          <b-button class="col-6" variant="primary" @click="clearForm()">{{
            $t("buttons.clear")
          }}</b-button></b-col
        >
        <b-col>
          <b-button class="col-6" variant="primary" @click="sendForm()">{{
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
          console.log("Resp desde login", response);
          if (response.status === 200) {
            this.alertMessage = "notification.user_login_success";
            this.alertVariant = "success";
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
              this.$router.push({ name: "HomeView" });
            }, 2000);
          } else {
            console.log(response.status);
            this.alertVariant = "danger";
            this.alertMessage = "errors.error_login_ocurred";
            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 2000);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
