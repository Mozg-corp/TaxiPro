<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <div class="login-phone">
    <span class="login-phone__prefix">+7</span>

    <input class="login-phone__input" v-restrict.numbers v-phone-mask
           @input="$emit('update:phone', $event.target.dataset.number)">
  </div>
</template>

<!--suppress JSAnnotator -->
<script>
import { mapGetters, mapActions } from 'vuex';
import phoneMask, { convertNumberToPhone } from '@/directives/phoneMask';
import restrict from '@/directives/restrictKeys';

export default {
  name: 'Phone',

  directives: {
    phoneMask,
    restrict,
  },
  computed: {
    ...mapGetters({
      getPhone: 'authorization/getPhone',
    }),
  },
  methods: {
    ...mapActions({
      fixedPhone: 'authorization/fixedPhone',
    }),
  },
  mounted() {
    console.log(this.getPhone);
    if (this.getPhone === null) {
      this.fixedPhone('');
    }
    console.log(this.getPhone);
    const el = this.$el.querySelector('.login-phone__input');
    el.dataset.number = this.getPhone.substr(1);
    el.dataset.phone = convertNumberToPhone(el.dataset.number);
    el.value = el.dataset.phone;
    this.$emit('update:phone', el.dataset.number);
  },
};
</script>

<style lang="scss">
@import "../../styles/vars", "../../styles/mixins";

.login-phone {
  margin-top: .625rem;
  border-bottom: 1px solid $BrandBlue;

  &__input, &__prefix {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__input {
    width: 264px;
    font-family: "Montserrat", sans-serif;
    padding: .5rem .625rem;

    &[data-number=""]:not(:focus) {
      color: $Silver;
    }
  }

  &__prefix {
    padding-left: 1.25rem
  }
}
</style>
