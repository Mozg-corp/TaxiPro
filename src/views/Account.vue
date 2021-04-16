<template>
  <div class="container account">
    <nav>
      <router-link :to="{ path: '/account' }">Главная</router-link>
      <router-link :to="{ path: '/account/balance' }">Баланс</router-link>
      <router-link :to="{ path: '/account/withdrawal' }">Вывод средств</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Account',

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

.account {
  @include flex-column;
  padding-top: 44px;
}
</style>
