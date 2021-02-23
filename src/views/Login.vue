<template>
  <div class="container login">
    <h4>Введите телефон</h4>

    <Phone></Phone>

    <button class="button login__button login__button_send">Получить код</button>

    <Consent></Consent>
  </div>
</template>

<script>
import Consent from '@/components/login/Consent.vue';
import Phone from '@/components/login/Phone.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Login',

  components: {
    Phone,
    Consent,
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
@import "../styles/vars", "../styles/mixins";

.login {
  @include flex-column;
  align-items: center;
  padding-top: 44px;

  &__button {
    width: 100%;

    &_send {
      margin-top: 24px;
    }
  }
}
</style>
