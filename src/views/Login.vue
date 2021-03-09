<template>
  <div class="container login" v-loading="isLoading">
    <PhoneForm class="login__form" v-show="!getSms"></PhoneForm>

    <CodeForm class="login__form" v-show="!!getSms"></CodeForm>
  </div>
</template>

<!--suppress JSAnnotator -->
<script>
import { mapGetters } from 'vuex';
import CodeForm from '@/components/login/CodeForm.vue';
import PhoneForm from '@/components/login/PhoneForm.vue';

export default {
  name: 'Login',

  components: {
    CodeForm,
    PhoneForm,
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
      getSms: 'authorization/getSms',
      isLoading: 'authorization/isLoading',
    }),

    hasPhone() {
      return this.phone.length === 10;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/vars", "../styles/mixins";

.login {
  @include flex-center-none;
  flex-grow: 1;

  &__button {
    width: 100%;

    &_resubmit {
      margin-top: 32px;
    }

    &_send {
      margin-top: 24px;
    }
  }

  &__form {
    @include flex-column;
    align-items: center;
  }

  &__caption, &__info, &__timer {
    text-align: center;
  }

  &__caption {
    color: $BrandBlue;
  }

  &__info {
    margin-top: 18px;

    &_red {
      color: $Red;
    }
  }

  &__input-code {
    width: 264px;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    border-bottom: 1px solid $BrandBlue;
    padding: 6px 20px;
  }

  &__label {
    color: $BlackSecondary;

    &_code {
      margin-top: 52px;
    }

    &_phone {
      margin-top: 128px;
    }
  }

  &__timer {
    font-size: 13px;
    font-weight: 300;

    &_resubmit {
      margin-top : 12px;
    }

    &_time {
      font-weight: 400;
    }
  }
}
</style>
