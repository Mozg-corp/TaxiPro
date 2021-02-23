<template>
  <div class="container account">
    <h1>Личный кабинет</h1>
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
