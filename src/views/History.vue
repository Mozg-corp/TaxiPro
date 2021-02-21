<template>
  <div class="history">
    <div class="container history__container">
      <h1>История вывода средств</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'History',

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

.history {
  &__container {
    @include flex-column;
    padding-top: 44px;
  }
}
</style>
