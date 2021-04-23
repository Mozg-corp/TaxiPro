<template>
          <input
            class="inputNone"
            type="checkbox"
            :id="id"
            :checked="isChecked"
            :value="value"
            @change="updateInput">
          <label :for="id">
            <div class="choiceTaxi__block">
              <div class="agregator">
                <div class="agregator__circle"></div>
                <img class="agregator__img" :src="img" :alt="id">
              </div>
            </div>
          </label>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    value: { type: Number },
    modelValue: { default: '' },
    trueValue: { default: true },
    falseValue: { default: false },
    id: String,
    img: String,
  },
  emits: ['update:modelValue'],
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      const isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style scoped>

</style>
