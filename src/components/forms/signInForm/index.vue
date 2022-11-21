<template>
  <b-container class="mt-4">
    <p class="mb-5">{{ $t("sign_in_title") }}</p>
    <b-form class="mb-4" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-1"
            class="mt-4"
            :label="this.$t('name')"
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
            :label="this.$t('alias')"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.user"
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
              v-model="form.user"
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
              v-model="form.user"
              type="text"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group
                id="input-group-5"
                class="mt-4"
                :label="this.$t('cell_phone')"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="form.user"
                  type="phone"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-6"
                class="mt-4"
                :label="this.$t('postal_code')"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="form.user"
                  type="phone"
                  placeholder=""
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-7"
            class="mt-4"
            :label="this.$t('country')"
            label-for="input-7"
          >
            <b-form-input
              id="input-7"
              v-model="form.user"
              type="text"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-8"
            class="mt-4"
            :label="this.$t('city')"
            label-for="input-8"
          >
            <b-form-input
              id="input-8"
              v-model="form.user"
              type="text"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-9"
            class="mt-4"
            :label="this.$t('drone_brand')"
            label-for="input-9"
          >
            <b-form-input
              id="input-10"
              v-model="form.user"
              type="text"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-10"
            class="mt-4"
            :label="this.$t('drone_model')"
            label-for="input-10"
          >
            <b-form-input
              id="input-10"
              class="mb-4"
              v-model="form.user"
              type="text"
              placeholder=""
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-4">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            <span>{{ $t("terms_of_use") }}</span>
          </b-form-checkbox>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
  <b-button class="col-12 mt-4" type="submit" variant="primary">{{
    $t("buttons.send")
  }}</b-button>
</template>

<script>
export default {
  name: "signInForm",
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
      alert(JSON.stringify(this.form));
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
