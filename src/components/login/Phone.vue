<template>
  <div class="login-phone">
    <span class="login-phone__prefix">+7</span>

    <input class="login-phone__input" v-restrict.numbers v-phone-mask>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import phoneMask from '@/directives/phoneMask';
import restrict from '@/directives/restrictKeys';

export default {
  name: 'Phone',

  directives: {
    phoneMask,
    restrict,
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
@import "../../styles/vars", "../../styles/mixins";

.login-phone {
  margin-top: 10px;

  &__input, &__prefix {
    font-size: 24px;
    font-weight: 500;
  }

  &__input {
    width: 264px;
    font-family: "Montserrat", monospace;
    padding: 8px 10px;
  }

  &__prefix {
    padding-left: 20px;
  }
}
</style>
