<template>
  <div>
    <h3 class="login__label login__label_phone">Введите телефон</h3>

    <Phone v-model:phone="phone"></Phone>

    <el-button class="button login__button login__button_send" v-bind:disabled="!hasPhone"
               @click="sendPhoneHandler">Получить код</el-button>
  </div>
</template>

<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>
import { mapActions, mapGetters } from 'vuex';
import Phone from '@/components/login/Phone.vue';

export default {
  name: 'PhoneForm',

  components: {
    Phone,
  },

  data: () => ({
    phone: '',
  }),

  methods: {
    ...mapActions({
      sendPhone: 'authorization/sendPhone',
    }),

    sendPhoneHandler() {
      if (this.phone.length !== 10) return;
      this.sendPhone(`7${this.phone}`);
    },
  },

  computed: {
    ...mapGetters({
      deadline: 'authorization/getDeadlineRemaining',
      resubmitTime: 'authorization/getResubmitTimeRemaining',
    }),

    hasPhone() {
      return this.phone.length === 10;
    },
  },
};
</script>
