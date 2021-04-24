<template>
  <h5
    class="insertData__text"
    v-if="item.heading"
  >
    {{item.heading}}
  </h5>
  <div class="inputForSteps" :class="item.class">
    <label
      class="inputForSteps__label"
      :for="item.id">{{ item.text }}
    </label>
    <input
      v-if="directive === 'v-passport-numbers'"
      class="inputForSteps__input"
           :class="isValidate"
           type="text"
           :id="item.id"
           :placeholder="item.placeholder"
           :value="item.value"
           @input="$emit('update:modelValue', $event.target.value)"
      v-passport-numbers
    >
    <input
      v-else-if="directive === 'v-date'"
      class="inputForSteps__input"
           :class="isValidate"
           type="text"
           :id="item.id"
           :placeholder="item.placeholder"
           :value="item.value"
           @input="$emit('update:modelValue', $event.target.value)"
      v-date
    >
    <input
      v-else
      class="inputForSteps__input"
           :class="isValidate"
           type="text"
           :id="item.id"
           :placeholder="item.placeholder"
           :value="item.value"
           @input="$emit('update:modelValue', $event.target.value)"
    >
    <span class="inputForSteps__errorText"
          v-if="item.errorMessage">
            {{ item.errorMessage.errorText }}
          </span>
  </div>
</template>

<script>
import { isValid } from '@/store/regularExp';
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';
import errorsText from '@/store/errorsText';

export default {
  name: 'InputForSteps',
  emits: ['update:modelValue'],
  props: {
    item: Object,
    modelValue: String,
    directive: String,
    index: Number,
  },
  directives: {
    date,
    passportNumbers,
  },
  computed: {
    isValidate() {
      if (this.item.value === '') {
        // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
        this.item.errorMessage = '';
        return '';
      }
      if (isValid(this.item.value,
        this.item.validate.min,
        this.item.validate.max,
        this.item.validate.regName)
      ) {
        // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
        this.item.isCorrect = true;
        // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
        this.item.errorMessage = '';
        return 'inputForSteps__correct';
      }
      // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
      this.item.errorMessage = errorsText;
      // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
      this.item.isCorrect = false;
      return 'inputForSteps__error';
    },
  },
};
</script>

<style lang="scss">
.inputHouse {
  width: 49%;
  display: inline-block;
  margin-right: 1%;
}
.inputFlat {
  width: 49%;
  display: inline-block;
  margin-left: 1%;
}
</style>
