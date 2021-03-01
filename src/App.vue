<template>
  <header class="header">
    <div class="container header__container">
      <button class="button header__button header__button_menu" @click="switchMenu">Меню</button>

      <LogoSecondary></LogoSecondary>

      <button class="button header__button header__button_account" @click="goToLogin">Войти</button>
    </div>
  </header>

  <main class="main">
    <Menu :isCollapse="isCollapse"></Menu>

    <router-view/>
  </main>

  <footer class="footer">

  </footer>
</template>

<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>
import { mapActions } from 'vuex';
import LogoSecondary from '@/components/svg/LogoSecondary.vue';
import Menu from '@/components/app/Menu.vue';

export default {
  name: 'App',

  components: {
    LogoSecondary,
    Menu,
  },

  data: () => ({
    isCollapse: true,
  }),

  methods: {
    ...mapActions({
      initAuth: 'authorization/init',
    }),

    goToLogin() {
      this.$router.push({ name: 'Login' });
    },

    switchMenu() {
      this.isCollapse = !this.isCollapse;
    },
  },

  watch: {
    $route() {
      this.isCollapse = true;
    },
  },

  created() {
    this.initAuth();
  },
};
</script>

<style lang="scss">
@import "./styles/vars", "./styles/mixins";

.header {
  z-index: 100;
  background: $Background;
  box-shadow: 0 5px 10px $Shadow;
  position: relative;

  &__container {
    @include flex-between-center;
    height: 60px;
    padding: 0;
  }

  &__button {
    @include border-none;
    height: 100%;
    min-width: auto;
    font-weight: 500;
    border-radius: 0;

    &_menu {
      text-transform: uppercase;
    }

    &_account {
      @include border-left;
      color: $Text;
      background: $Background;
    }
  }
}

.main {
  position: relative;
}
</style>
