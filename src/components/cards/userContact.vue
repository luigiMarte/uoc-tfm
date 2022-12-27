<template>
  <h4>Perfil de {{ selectedPilot.userName }}</h4>
  <b-container class="mt-4 profile-container">
    <b-row class="card-box mb-3 mt-4">
      <b-col class="mb-3 card-text">
        <p>
          <strong>{{ selectedPilot.alias }}</strong>
        </p>
        <ImageAvatar style="width: 100px" :imagePath="selectedPilot.avatar" />
      </b-col>
      <b-col class="mb-3 card-text">
        <p>
          <strong>{{ $t("drone") }} : </strong>
          <span>
            {{ selectedPilot.droneBrand }} {{ selectedPilot.droneModel }}</span
          >
        </p>
        <ImageUrl style="width: 120px" :imagePath="selectedPilot.droneBrand" />
      </b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="12" class="mb-3 card-text">
        <p>
          <strong>{{ $t("about_me") }}</strong>
        </p>
        <p>{{ selectedPilot.aboutMe }}</p>
      </b-col>
    </b-row>

    <!-- campos responsive -->
    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3 card-text">
        <!-- Country -->
        <p>
          <strong>{{ $t("country") }}</strong>
        </p>
        <p>{{ selectedPilot.country }}</p>
      </b-col>
      <b-col md="6" class="mb-3 card-text">
        <!-- City -->
        <p>
          <strong>{{ $t("city") }}</strong>
        </p>
        <p>{{ selectedPilot.city }}</p>
      </b-col>
    </b-row>

    <!-- campos responsive -->
    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3 card-text">
        <!-- phone -->
        <p>
          <strong>{{ $t("contact") }}</strong>
        </p>
        <p>{{ selectedPilot.phone }}</p>
      </b-col>
      <b-col md="6" class="mb-3 card-text">
        <!-- price -->
        <p>
          <strong>{{ $t("price_hour") }}</strong>
        </p>
        <p>{{ selectedPilot.price }} €</p>
      </b-col>
    </b-row>

    <b-row class="card-box mb-3">
      <b-col md="6" class="mb-3 card-text">
        <!-- phone -->
        <p><strong>Mandar mensaje por whatsApp</strong></p>
        <b-badge variant="success" class="whatapp-badge">
          <a :href="'https://wa.me/' + selectedPilot.phone">WathsApp</a>
        </b-badge>
      </b-col>
      <b-col md="6" class="mb-3 card-text">
        <div v-if="selectedPilot.webpage">
          <p>
            <strong>{{ $t("visit my webpage") }}</strong>
          </p>
          <p>{{ selectedPilot.webpage }}</p>
        </div>

        <b-badge @click="favoritesAdd" variant="warning" class="">
          Añadir a favoritos
        </b-badge>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import ImageAvatar from "@/components/ImageAvatar.vue";
import ImageUrl from "@/components/Image.vue";
export default {
  name: "userContact",
  components: {
    ImageUrl,
    ImageAvatar,
  },
  data() {
    return {
      cardFields: [],
      phone: "",
    };
  },
  computed: {
    ...mapState({
      selectedPilot: "selectedPilot",
    }),
  },
  methods: {
    favoritesAdd() {
      console.log("favoritesAdd");
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
  width: 100%;
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
.whatapp-badge {
  cursor: pointer;
  height: toRem(30);
  width: toRem(100);
  font-size: toRem(17);
}
.profile-container {
  padding: toRem(55);
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}
</style>
