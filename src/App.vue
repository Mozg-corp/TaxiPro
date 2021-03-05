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
@import "./styles/vars", "./styles/mixins";

.el-button {
  color: $Text;
}

.button {
  @include BrandBlueGradient;
  width: 22.5rem;
  height: 2.875rem;
  color: white;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: calc-size(16.875, 22.5, $min-site-width-num, $max-site-width-num);
  }

  @media (max-width: 380px) {
    width: 16.875rem;
  }
}

.list-item {
  width: calc(100% - 30px);
  font-weight: 300;
  position: relative;
  margin-left: 30px;

  &:before {
    @include absolute-left-center(-30px);
    content: '';
    width: 11px;
    height: 11px;
    background: $BrandBlue;
    border-radius: 50%;
    display: block;
  }
}

.text {
  font-weight: 300;
}
</style>
