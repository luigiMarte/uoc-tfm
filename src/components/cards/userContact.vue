<template>
  <b-container class="mt-4">
    <b-row class="row-box mb-4">
      <b-col cols="12" class="mb-4">
        <b-row>
          <b-col cols="6"><b-avatar text="BV" size="5rem"></b-avatar></b-col>
          <b-col cols="6">
            <p>
              <strong>{{ $t("name") }}</strong>
            </p>
            <p>{{ "John Pérez" }}</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="mb-2 mt-4">
        <b-row>
          <b-col cols="12"
            ><p>
              <strong>{{ $t("drone") }}</strong>
            </p></b-col
          >
          <b-col cols="12"
            ><img src="https://picsum.photos/150/150" alt=""
          /></b-col>
        </b-row>
      </b-col>
      <b-col cols="12" class="mb-2 mt-4">
        <b-row>
          <b-col cols="12"
            ><p><strong>Descripción</strong></p></b-col
          >
          <b-col cols="12"
            ><p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p></b-col
          >
        </b-row>
      </b-col>
      <b-col cols="sm-6" class="mb-2">
        <b-row>
          <b-col cols="12"
            ><p><strong>Localización</strong></p></b-col
          >
          <b-col cols="12"><p>Loren ipsum</p></b-col>
        </b-row>
      </b-col>
      <b-col cols="sm-6" class="mb-2">
        <b-row>
          <b-col cols="12"
            ><p><strong>Marca drone</strong></p></b-col
          >
          <b-col cols="12"><p>Loren ipsum</p></b-col>
        </b-row>
      </b-col>
      <b-col cols="sm-6" class="mb-2">
        <b-row>
          <b-col cols="12"
            ><p><strong>Modelo drone</strong></p></b-col
          >
          <b-col cols="12"><p>Loren ipsum</p></b-col>
        </b-row>
      </b-col>
      <b-col cols="sm-6" class="mb-2">
        <b-row>
          <b-col cols="12"
            ><p><strong>Tarifa</strong></p></b-col
          >
          <b-col cols="12"><p>00 €</p></b-col>
        </b-row>
      </b-col>
      <b-col cols="sm-6" class="mb-2">
        <b-row>
          <b-col cols="12"
            ><p><strong>Contacto</strong></p></b-col
          >
          <b-col cols="12"><p>656554565</p></b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "userContact",
  data() {
    return {
      cardFields: [],
    };
  },
  methods: {},
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
