<template>
  <b-container class="mt-4">
    <b-row class="row-box mb-4">
      <div class="card-box" cols="6">
        <ul>
          <li><b-avatar text="BV" size="5rem"></b-avatar></li>
        </ul>
      </div>
      <div class="card-box" cols="6">
        <ul>
          <li>{{ $t("Name") }}</li>
          <li>{{ $t("alias") }}</li>
          <li>{{ $t("alias") }}</li>
        </ul>
      </div>
    </b-row>
    <b-row class="row-box">
      <div
        cols="6"
        class="card-box"
        v-for="field in cardFields"
        :key="field.value"
      >
        <ul>
          <li>{{ field.label }}</li>
          <li>{{ field.value }}</li>
        </ul>
      </div>
    </b-row>
    <b-row class="row-box">
      <div cols="12" class="card-description">
        <ul>
          <li>Description</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </li>
        </ul>
      </div>
    </b-row>
    <b-row class="row-box">
      <div cols="12" class="card-description">
        <b-button class="col-12 mt-4" @click="goToEdit()" variant="secondary">{{
          $t("buttons.editProfile")
        }}</b-button>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "userInfoCard",
  data() {
    return {
      cardFields: [
        {
          label: "País",
          value: "España",
        },
        {
          label: "Ciudad",
          value: "Madrid",
        },
        {
          label: "Teléfono",
          value: "695656656",
        },
        {
          label: "Email",
          value: "google.com",
        },
        {
          label: "Código postal",
          value: "35345",
        },
        {
          label: "Drone",
          value: "DJI / Mavic 3",
        },
        {
          label: "Tarifa",
          value: "37 €",
        },
        {
          label: "Contacto",
          value: "phone / telegram",
        },
      ],
    };
  },
  methods: {
    goToEdit() {
      this.$router.push({ name: "edit" });
    },
  },
};
</script>

<style lang="scss" scoped>
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
  width: 50%;
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
