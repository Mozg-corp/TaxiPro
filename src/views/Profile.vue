<template>
  <div class="container profile">
    <Step1></Step1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Step1 from '@/components/profile/Step1';

export default {
  name: 'Profile',

  date: () => ({
    //
  }),

  components: {
    Step1,
  },

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
