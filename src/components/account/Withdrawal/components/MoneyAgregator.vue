<template>
<div class="MoneyAgregator">
  <div class="MoneyAgregator__block">
    <img height="70" :src="item.img" alt="">
  </div>
  <div class="MoneyAgregator__block">
    <input
      class="MoneyAgregator__input"
      :class="isValidate"
      type="text"
      :value="item.value"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="item.balance"
    >
    <p class="MoneyAgregator__inputIcon">₽</p>
  </div>
  <div class="MoneyAgregator__block">
    <p v-if="error" class="MoneyAgregator__errorText">{{error}}</p>
  </div>
</div>
  <div class="line"></div>
</template>

<script>

export default {
  name: 'MoneyAgregator',
  emits: ['update:modelValue'],
  props: {
    item: Object,
    error: String,
    modelValue: String,
    value: String,
  },
  computed: {
    isValidate() {
      console.log(this.modelValue);
      if (this.item.value === '') {
        // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
        this.item.error = '';
        return '';
      }
      if (this.item.value <= this.item.balance) {
        // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
        this.item.error = '';
        return 'MoneyAgregator__input';
      }
      // eslint-disable-next-line max-len
      // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties,no-useless-concat
      this.item.error = '*Недостаточно\n' + 'средств';
      return 'MoneyAgregator__inputError';
    },
  },
};
</script>

<style lang="scss">

.MoneyAgregator {
  padding: 10px;
  display: flex;
  &__block {
    align-self: center;
    width: 33%;
    text-align: center;
    position: relative;
  }
  &__input {
    border: 3px solid #48B5E2;
    border-radius: 10px;
    width: 100%;
  }
  &__inputError {
    border: 3px solid #E30F0F;
  }
  &__inputIcon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #48B5E2;
  }
  &__errorText {
    color: #E30F0F;
    text-align: start;
    padding-left: 10px;
  }
}
.line {
  height: 1px;
  width: 100%;
  background: rgba(72, 181, 226, 0.2);
}

</style>
