<template>
  <div class="container history">
    <h1>Баланс</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Balance',

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
@import "../../styles/vars", "../../styles/mixins";

.history {
  @include flex-column;
  padding-top: 44px;
}
</style>
