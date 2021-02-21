<template>
  <div class="login">
    <div class="container login__container">
      <h1>Вход в личный кабинет</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',

  date: () => ({
    //
  }),

  methods: {
    ...mapActions({
      //
    }),
  },

  computed: {
    ...mapGetters({
      //
    }),
  },
};
</script>

<style lang="scss">
@import "../styles/vars", "../styles/mixins";

.login {
  &__container {
    @include flex-column;
    padding-top: 44px;
  }
}
</style>
