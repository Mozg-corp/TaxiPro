<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <div>
    <h2 class="login__caption">На Ваш телефон<br>поступит звонок</h2>

    <p class="login__info">
      Введите последние 4 цифры номера телефона<br>
      Например, позвонил:<br>
      <b>
        +7 (999) 123-<span class="login__info_red">45</span>-<span class="login__info_red">67</span>
        - код <span class="login__info_red">4567</span>
      </b>
    </p>

    <h3 class="login__label login__label_code">Введите код</h3>

    <input class="login__input-code" v-restrict.numbers maxlength="4" v-model="code">
    <router-link :to="{ name: 'Welcome' }">
      <button
        class="button login__button login__button_send"
        v-bind:disabled="sendDisabled"
        @click="sendCodeHandler"
      >
        {{ sendTitle }}
      </button>
    </router-link>

    <p class="login__timer login__timer_resubmit" v-show="resubmitTime > 0">
      Вы сможете запросить код повторно через:<br>
      <span class="login__timer_time">{{ getResubmitTime }}</span>
    </p>

    <el-button class="button login__button login__button_resubmit" v-show="resubmitTime === 0"
               @click="resetCodeHandler">Запросить код повторно</el-button>
  </div>
</template>

<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>
import { mapActions, mapGetters } from 'vuex';
import restrict from '@/directives/restrictKeys';
import { convertTimeToMinutesStr } from '@/store/libs';

export default {
  name: 'CodeForm',

  directives: {
    restrict,
  },

  data: () => ({
    code: '',
  }),

  methods: {
    ...mapActions({
      reset: 'authorization/reset',
      sendCode: 'authorization/sendCode',
    }),

    resetCodeHandler() {
      this.reset();
      this.code = '';
    },

    sendCodeHandler() {
      if (this.code.length !== 4) return;
      if (this.deadline === 0) return;

      this.sendCode(this.code);
      this.code = '';
    },
  },

  computed: {
    ...mapGetters({
      attempts: 'authorization/getAttempts',
      deadline: 'authorization/getDeadlineRemaining',
      resubmitTime: 'authorization/getResubmitTimeRemaining',
    }),

    getResubmitTime() {
      if (!this.resubmitTime) return '';
      return convertTimeToMinutesStr(this.resubmitTime);
    },

    hasCode() {
      return this.code.length === 4;
    },

    sendDisabled() {
      return this.deadline < 1 || this.attempts < 1 || !this.hasCode;
    },

    sendTitle() {
      if (this.attempts < 1) return 'Попытки исчерпаны';
      if (this.deadline < 1) return 'Время истекло';
      return 'Отправить';
    },
  },
};
</script>
