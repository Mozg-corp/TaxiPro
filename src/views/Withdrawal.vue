<template>
  <div class="withdrawal">
    <div class="container withdrawal__container">
      <h1>Вывод средств</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Withdrawal',

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

.withdrawal {
  &__container {
    @include flex-column;
    padding-top: 44px;
  }
}
</style>
