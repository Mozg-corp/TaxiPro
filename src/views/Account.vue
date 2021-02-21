<template>
  <div class="account">
    <div class="container account__container">
      <h1>Личный кабинет</h1>
    </div>
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
  &__container {
    @include flex-column;
    padding-top: 44px;
  }
}
</style>
