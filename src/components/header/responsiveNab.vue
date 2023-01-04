<template>
  <header class="header">
    <nav class="navbar">
      <RouterLink v-if="$store.state.isLogin" to="/dashboard">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </RouterLink>
      <RouterLink v-else to="/">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </RouterLink>
      <ul class="nav-menu" v-on:click="closeMobileMenu">
        <li class="nav-item">
          <RouterLink to="search">
            {{ $t("search") }}
          </RouterLink>
        </li>
        <li v-if="$store.state.isLogin" class="nav-item">
          <RouterLink to="profile">
            {{ $t("profile") }}
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="about">
            {{ $t("about") }}
          </RouterLink>
        </li>
        <li v-if="$store.state.isLogin" class="nav-item">
          <div class="cursor-pointer" @click="UserLogout()">
            {{ $t("log_out") }}
          </div>
        </li>
        <li v-else class="nav-item">
          <RouterLink to="login">
            {{ $t("log_in") }}
          </RouterLink>
        </li>
      </ul>
      <div class="hamburger" v-on:click="openMobileMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
  <langSwitcher></langSwitcher>
  <!-- modal -->
  <b-modal v-model="modalShow" ok-only title="Log out">
    <p class="my-4">{{ $t("logout_message") }}</p>
  </b-modal>

  <!-- modal -->
</template>

<script>
import langSwitcher from "@/components/langSwitcher/index.vue";
import { mapState } from "vuex";
export default {
  name: "responsiveNab",
  components: { langSwitcher },
  data() {
    return {
      alertMessage: "notification.user_created_success",
      alertVariant: "success",
      showAlert: false,
      modalShow: false,
    };
  },
  computed: mapState(["token"]),
  methods: {
    UserLogout() {
      console.log("User logged out");
      this.$store.commit("SET_LOGOUT");
      this.modalShow = true;
      setTimeout(() => {
        this.modalShow = false;
        this.$router.push({ name: "landing" });
      }, 2000);
    },
    setLanguage(value) {
      this.$i18n.locale = value;
    },
    openMobileMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    },
    closeMobileMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  background: $gunmetal;
  color: $white;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.hamburger {
  display: none;
}

.logo {
  height: 60px;
  transition: all 0.3s ease-in;
  &:hover {
    opacity: 0.7;
  }
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: $white;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
}
.cursor-pointer {
  cursor: pointer;
}

.nav-item {
  font-size: rem(22);
  margin-left: 5rem;
  a {
    color: $white;
    transition: all 0.3s ease-in;
    &:hover {
      opacity: 0.7;
    }
    &:focus {
      color: $greydarken-1;
    }
  }
}

.nav-logo {
  //font-size: 2.1rem;
  //font-weight: 500;
}
@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: toRem(80);
    flex-direction: column;
    //background-color:#1b1c1cfc;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    // box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    // filter: brightness(0.5);
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    background-color: rgba(33, 33, 33, 0.36);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
  }

  @-moz-document url-prefix() {
    .nav-menu {
      background-color: rgb(38, 37, 37) !important;
    }
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
