<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        :label="this.$t('country')"
        label-for="input-3"
      >
        <b-form-select
          id="input-1"
          v-model="form.country"
          :options="countries"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        :label="this.$t('city')"
        label-for="input-2"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          placeholder="Introduce una ciudad"
          required
        ></b-form-input>
      </b-form-group>

      <b-button
        class="col-12 mt-4"
        type="submit"
        @click="searchResults()"
        variant="primary"
        >{{ $t("buttons.search") }}</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: "searchForm",
  data() {
    return {
      form: {
        city: "",
        country: null,
      },
      countries: [
        { text: "Selecciona un País", value: null },
        "España",
        "Francia",
        "Brasil",
        "United Kingdom",
      ],
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
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    searchResults() {
      this.$router.push({ name: "results" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
