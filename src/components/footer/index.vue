<template>
  <footer class="pt-4 pb-4">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex justify-content-around pb-2 width-icons">
        <IconGithub class="mr-2" />
        <IconTwitter class="ml-2" />
      </div>
      <div>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  bottom: 0;
  position: absolute;
  height: auto;
  height: toRem(80);
  background: $gunmetal;
  color: $white;
  width: 100%;
  font-size: toRem(14);
}
.width-icons {
  width: toRem(50);
}
</style>
