<template>
  <header class="header">
    <div class="container header__container">
      <el-button class="header__button header__button_menu" plain v-show="isLogged"
                 @click="switchMenu">Меню</el-button>

      <v-logo-secondary class="header__logo"></v-logo-secondary>

      <el-button class="header__button header__button_signin" plain v-show="!isLogged"
                 @click="goToLogin">Войти</el-button>

      <v-menu :isCollapse="isCollapse"></v-menu>
    </div>
  </header>
</template>

<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>
import { mapGetters } from 'vuex';
import vLogoSecondary from '@/components/svg/LogoSecondary.vue';
import vMenu from '@/components/app/Menu.vue';

export default {
  name: 'App',

  components: {
    vLogoSecondary,
    vMenu,
  },

  data: () => ({
    isCollapse: true,
  }),

  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },

    switchMenu() {
      this.isCollapse = !this.isCollapse;
    },
  },

  computed: {
    ...mapGetters({
      isLogged: 'authorization/isLogged',
    }),
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/vars", "../../styles/mixins";

.header {
  z-index: 100;
  background: $Background;
  box-shadow: $Shadow;

  &__button {
    height: 100%;
    min-width: auto;
    font-weight: 500;
    border-color: $Background;
    border-radius: 0;

    &_menu {
      text-transform: uppercase;
    }

    &_menu, &_signin {
      border-left-color: $Border;
    }
  }

  &__container {
    @include flex-right-center;
    height: 60px;
    padding: 0;
    position: relative;
  }

  &__logo {
    @include absolute-center;
  }
}
</style>
