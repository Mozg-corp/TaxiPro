<template>
  <div class="CheckboxTariff">
    <input
      class="CheckboxTariff__input"
      type="checkbox"
      :id="item.htmlId"
      :value="value"
      @change="updateInput"
    >
    <label
      class="CheckboxTariff__label"
      :for="item.htmlId">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <div class="circleBorder"><div class="circle"></div></div>
            <h4 class="el-fontSize">{{item.title}}</h4>
          </template>
          <Tariff
            :isButton="false"
            :item="item"
          />
        </el-collapse-item>
      </el-collapse>
    </label>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import Tariff from '@/components/account/index/components/Tariff';

export default {
  name: 'CheckboxTariff',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  components: {
    Tariff,
  },
  emits: ['update:modelValue'],
  props: {
    value: { type: Number },
    modelValue: { default: '' },
    trueValue: { default: true },
    falseValue: { default: false },
    item: Object,
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

<style lang="scss">

.CheckboxTariff {
  &__input {
    display: none;
  }
}
.circleBorder {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  border: 1px solid #48B5E2;
}

#start:checked + label .el-collapse .el-collapse-item div
.el-collapse-item__header .circleBorder .circle,
#comfort:checked + label .el-collapse .el-collapse-item div
.el-collapse-item__header .circleBorder .circle,
#premium:checked + label .el-collapse .el-collapse-item div
.el-collapse-item__header .circleBorder .circle,{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #48B5E2;
  margin: auto;
}

</style>
