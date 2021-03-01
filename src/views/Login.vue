<template>
  <div class="container login">
    <h4>Введите телефон</h4>

    <Phone></Phone>

    <button class="button login__button login__button_send"
            @click="sendPhoneHandler">Получить код</button>

    <button class="button login__button login__button_send"
            @click="sendCodeHandler">Отправить код</button>

    <Consent></Consent>

    <p>token {{ getToken }}</p>
  </div>
</template>

<!--suppress JSAnnotator -->
<script>
import { mapActions, mapGetters } from 'vuex';
import Consent from '@/components/login/Consent.vue';
import Phone from '@/components/login/Phone.vue';

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
      sendPhone: 'authorization/sendPhone',
      sendCode: 'authorization/sendCode',
    }),

    sendPhoneHandler() {
      this.sendPhone(79991239999);
    },

    sendCodeHandler() {
      this.sendCode('0000');
    },
  },

  computed: {
    ...mapGetters({
      getError: 'authorization/getError',
      getCurrentTime: 'authorization/getCurrentTime',
      getPhone: 'authorization/getPhone',
      getSMS: 'authorization/getSMS',
      getTimerId: 'authorization/getTimerId',
      getToken: 'authorization/getToken',
      getUser: 'authorization/getUser',
      isError: 'authorization/isError',
      isLoading: 'authorization/isLoading',
      getDeadline: 'authorization/getDeadline',
      getRequestTime: 'authorization/getRequestTime',
      getResubmitTime: 'authorization/getResubmitTime',
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
