<template>
  <div class="container history">
    <h1>История вывода средств</h1>
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
  @include flex-column;
  padding-top: 44px;
}
</style>
