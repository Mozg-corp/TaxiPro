<template>
  <header class="header">
    <div class="container header__container">
      <button class="button header__button header__button_menu">Меню</button>

      <LogoSecondary></LogoSecondary>

      <button class="button header__button header__button_account">Войти</button>
    </div>
  </header>

  <router-view/>

<!--  <div id="nav">-->
<!--    <router-link to="/">Landing</router-link> |-->
<!--    <router-link to="/login">Login</router-link>-->
<!--  </div>-->
</template>

<script>
import LogoSecondary from '@/components/svg/LogoSecondary.vue';

export default {
  name: 'App',
  components: {
    LogoSecondary,
  },
};
</script>

<style lang="scss">
@import "./styles/vars", "./styles/mixins";

.header {
  background: $Background;
  box-shadow: 0 5px 10px $Shadow;

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
</style>
