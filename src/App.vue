<template>
  <v-header></v-header>
  <main class="main">
    <router-view/>
  </main>

  <footer class="footer">

  </footer>
</template>

<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>
import { mapActions } from 'vuex';
import vHeader from '@/components/app/Header.vue';

export default {
  name: 'App',

  components: {
    vHeader,
  },

  methods: {
    ...mapActions({
      initAuth: 'authorization/init',
    }),
  },

  created() {
    this.initAuth();
  },
};
</script>

<style lang="scss">
@import './styles/basic.scss';
@import './styles/elements.scss';
@import './styles/main.scss';
</style>
