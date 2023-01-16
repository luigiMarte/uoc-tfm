<template>
  <h4>{{ $t("user_card_title") }} {{ selectedPilot.userName }}</h4>
  <b-container class="mt-4 profile-container">
    <b-row class="card-box mb-3 mt-4">
      <b-col class="mb-3 card-text">
        <p>
          <strong>{{ selectedPilot.alias }}</strong>
        </p>
        <ImageAvatar style="width: 120px" :imagePath="selectedPilot.avatar" />
      </b-col>
      <b-col class="mb-3 card-text">
        <p>
          <strong>{{ $t("drone") }} : </strong>
          <span>
            {{ selectedPilot.droneBrand }}
            {{ formatText(selectedPilot.droneModel) }}</span
          >
        </p>
        <ImageUrl style="width: 150px" :imagePath="selectedPilot.droneModel" />
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
          <strong>{{ $t("phone") }}</strong>
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
        <p>
          <strong>{{ $t("whatsApp_msg") }}</strong>
        </p>
        <b-badge variant="success" class="whatapp-badge">
          <a :href="'https://wa.me/' + selectedPilot.phone" target="blank_">{{
            $t("whatsApp")
          }}</a>
        </b-badge>
      </b-col>
      <b-col md="6" class="mb-3 card-text">
        <div v-if="selectedPilot.webpage">
          <p>
            <strong>{{ $t("visit_webpage") }}</strong>
          </p>
          <p>
            <a :href="selectedPilot.webpage" target="_blank">{{
              selectedPilot.webpage
            }}</a>
          </p>
        </div>

        <b-badge
          @click="favoritesAdd"
          variant="warning"
          class="favorites-badge"
        >
          {{ $t("favorites_add") }}
        </b-badge>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h2>videpplayer</h2>
        <VideoPlayer></VideoPlayer>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import ImageAvatar from "@/components/ImageAvatar.vue";
import ImageUrl from "@/components/Image.vue";
import { removeDashes } from "@/utils/removeDashes.js";
import { addFavorite } from "@/services/api/user";
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
      userInfo: "userInfo",
      pilotInfo: "pilotInfo",
    }),
  },
  methods: {
    formatText(text) {
      return removeDashes(text);
    },
    async favoritesAdd() {
      try {
        let stateUserId = this.$store.state.userId;
        let stateToken = this.$store.state.token;
        const pilotData = {
          id: this.selectedPilot.id,
          droneBrand: this.selectedPilot.droneBrand,
          droneModel: this.selectedPilot.droneModel,
          alias: this.selectedPilot.alias,
          price: this.selectedPilot.price,
        };
        const resp = await addFavorite(pilotData, stateUserId, stateToken);
        this.$toast.info(this.$t("notification.favorite_added"));
        return resp;
      } catch (error) {
        return error;
      }
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
.favorites-badge {
  cursor: pointer;
}
.profile-container {
  padding: toRem(55);
  box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -webkit-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
  -moz-box-shadow: -4px 16px 18px 0px rgba(51, 50, 50, 0.75);
}
</style>
