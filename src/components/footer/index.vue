<template>
  <footer class="pt-4 pb-4">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex justify-content-around pb-2 width-icons">
        <a href="https://github.com/luigiMarte" target="_blank_">
          <IconGithub class="mr-2"
        /></a>
        <a href="https://github.com/luigiMarte" target="_blank_">
          <IconTwitter class="ml-2"
        /></a>
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
a {
  color: $white;
}

a:visited {
  color: $white;
}

a:focus {
  color: $white;
}

a:hover {
  color: rgb(163, 215, 243);
}

a:active {
  color: $white;
}
.width-icons {
  width: toRem(50);
}
</style>
