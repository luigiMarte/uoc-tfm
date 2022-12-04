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
              <!-- <select v-model="$i18n.locale">
                <option
                  v-for="locale in $i18n.availableLocales"
                  :key="`locale-${locale}`"
                  :value="locale"
                >
                  {{ locale }} 22
                </option>
              </select> -->
              <b-dropdown-item
                v-model="$i18n.locale"
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
                @click="setLanguage(locale)"
                >{{ $t(locale === "en_GB" ? "lang_en" : "lang_sp") }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    setLanguage(value) {
      this.$i18n.locale = value;
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
