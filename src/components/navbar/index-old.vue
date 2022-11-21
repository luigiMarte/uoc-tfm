<template>
  <b-nav class="navbar navbar-dark bg-dark pl-3 pr-3">
    <b-nav-item>
      <RouterLink to="/"
        ><img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="50"
          height="50"
      /></RouterLink>
    </b-nav-item>
    <b-nav-item right
      ><RouterLink to="login">
        {{ $t("log_in") }}
      </RouterLink>
    </b-nav-item>
    <b-nav-item right
      ><RouterLink to="signIn">
        {{ $t("sign_in") }}
      </RouterLink>
    </b-nav-item>
    <b-nav-item-dropdown text="Lang" right>
      <b-dropdown-item
        v-for="option in languages.options"
        :key="option.value"
        @click="setLanguage(option.value)"
        >{{ $t(option.text) }}</b-dropdown-item
      >
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      selectedLanguage: "",
      languages: {
        selectedOption: "",
        options: [
          {
            value: "en",
            text: "lang_en",
          },
          {
            value: "es",
            text: "lang_sp",
          },
        ],
      },
    };
  },
  methods: {
    setLanguage(value) {
      console.log(value);
      this.selectedLanguage = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar.navbar-dark .bg-dark {
  background-color: $gunmetal !important;
}
.navbar li a {
  color: $white !important;
}
:deep(.nav-link) {
  color: $white !important;
}
</style>
