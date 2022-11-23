<template>
  <section class="navigation">
    <div
      class="nav-container d-flex justify-content-between align-items-center"
    >
      <div class="brand">
        <RouterLink to="/"
          ><img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="30"
            height="30"
        /></RouterLink>
      </div>
      <nav class="nav-subcontainer">
        <ul class="nav-list d-flex flex-direction-row">
          <li class="pr-2">
            <RouterLink to="login">
              {{ $t("log_in") }}
            </RouterLink>
          </li>
          <li class="pr-2">
            <RouterLink to="signIn">
              {{ $t("sign_in") }}
            </RouterLink>
          </li>
          <li class="pr-2">
            <b-nav-item-dropdown text="Lang">
              <b-dropdown-item
                v-for="option in languages.options"
                :key="option.value"
                @click="setLanguage(option.value)"
                >{{ $t(option.text) }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
// import { createI18n } from "vue-i18n";
export default {
  name: "NavBar",
  data() {
    return {
      selectedLanguage: "",
      languages: {
        selectedOption: "",
        options: [
          {
            value: "en_GB",
            text: "lang_en",
          },
          {
            value: "es_SP",
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
      //createI18n.locale = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  background-color: $gunmetal;
  height: toRem(60);
  .nav-subcontainer {
    padding-right: toRem(30);
  }
}
.brand {
  padding-left: toRem(30);
}

.nav-list {
  list-style-type: none;
  margin: 0;
  a {
    color: $white !important;
    padding-right: toRem(20);
  }

  :deep(.btn-content) {
    color: $white !important;
    padding-right: toRem(10);
  }
  :deep(.dropdown-toggle::after) {
    color: $white !important;
  }
}
</style>
