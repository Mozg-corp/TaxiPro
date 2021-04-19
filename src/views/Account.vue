<template>
  <div class="container">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import NavBar from '../components/account/NavBar';

export default {
  name: 'Account',
  components: {
    NavBar,
  },
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

</style>
