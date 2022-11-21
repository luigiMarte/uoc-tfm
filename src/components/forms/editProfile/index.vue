<template>
  <b-container class="mt-4">
    <b-row class="row-box mb-4">
      <div class="card-box" cols="6">
        <ul>
          <li>
            <b-dropdown
              split
              split-variant="outline-secondary"
              variant="secondary"
              text="Avatar"
              class="m-2"
            >
              <b-dropdown-item href="#"><b-avatar></b-avatar></b-dropdown-item>
              <b-dropdown-item href="#"
                ><b-avatar variant="primary" text="BV"></b-avatar
              ></b-dropdown-item>
              <b-dropdown-item href="#"
                ><b-avatar variant="success" icon="people-fill"></b-avatar
              ></b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </div>
      <div class="card-box" cols="6">
        <ul>
          <li>{{ $t("Joseph Martins") }}</li>
        </ul>
        <ul>
          <li>{{ $t("alias") }}</li>
          <b-form-input class="input-group-text" id="subject-id"></b-form-input>
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
          <li>
            <b-form-input
              class="input-group-text"
              id="subject-id"
            ></b-form-input>
          </li>
        </ul>
      </div>
    </b-row>
    <b-row class="row-box mt-4">
      <div cols="12" class="card-description">
        <ul>
          <li>Description</li>
          <li>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Lorem ipsum..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </li>
        </ul>
      </div>
    </b-row>
    <b-row class="row-box">
      <div cols="12" class="card-description">
        <b-button
          class="col-12 mt-4"
          type="submit"
          @click="saveData()"
          variant="secondary"
          >{{ $t("buttons.save") }}</b-button
        >
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "editProfile",
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
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    saveData() {
      this.$router.push({ name: "user" });
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group-text {
  border-top: transparent;
  border-right: transparent;
  border-left: transparent;
  border-radius: 0px;
  background-color: transparent;
  text-align: start;
}
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
