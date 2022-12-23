<script setup>
import responsiveNab from "./components/header/responsiveNab.vue";
import AppFooter from "./components/footer/index.vue";
</script>

<template>
  <div class="app">
    <header>
      <responsiveNab></responsiveNab>
    </header>
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  margin: 0;
  position: relative;
  padding-bottom: toRem(50);
}
.logo {
  display: block;
  margin: 0 auto 2rem;
  margin: 0 2rem 0 0;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
