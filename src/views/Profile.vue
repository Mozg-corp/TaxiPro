<template>
  <div class="container profile">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',

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

.profile {
  @include flex-column;
}
</style>
