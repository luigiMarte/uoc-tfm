<template>
  <div>
    <p class="mb-5">{{ $t("login_title") }}</p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        class="mt-4"
        :label="this.$t('user')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.user"
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

      <b-button class="col-12 mt-4" type="submit" variant="primary">{{
        $t("buttons.send")
      }}</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      form: {
        user: "",
        password: null,
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      //alert(JSON.stringify(this.form));
      this.userLogin();
    },
    userLogin() {
      this.$router.push({ name: "user" });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.user = "";
      this.form.password = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
