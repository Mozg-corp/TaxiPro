<template>
  <div class="container profile">
    <Step2></Step2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Step1 from '@/components/profile/Step1';
import Step2 from '@/components/profile/Step2';

export default {
  name: 'Profile',

  date: () => ({
    //
  }),

  components: {
    Step1,
    Step2,
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
