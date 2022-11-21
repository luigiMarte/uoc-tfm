<template>
  <b-container class="mt-4">
    <h3 class="mb-5">{{ $t("results") }}</h3>
    <b-row v-for="result in results" :key="result.user">
      <b-col sm="12" lg="6">
        <RouterLink to="user-contact">
          <b-card
            img-src="https://picsum.photos/150/150"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              <p>
                <strong>{{ result.user }} </strong>
              </p>
              <p>
                {{ result.description }}
              </p>
            </b-card-text>
          </b-card>
        </RouterLink>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "searchResults",
  data() {
    return {
      results: [
        {
          user: "Johannes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
        {
          user: "Juan Pedro",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
