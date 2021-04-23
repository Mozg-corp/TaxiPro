<template>
        <input
          class="inputNone"
          type="radio"
          name="direction"
          :id="item.htmlId"
          :value="value"
          :checked="item.isChecked"
          @change="updateInput"
        >
        <label :for="item.htmlId">
        <div class="tariff">
          <div class="tariff__block">
            <div class="cardTariff">
              <div class="cardTariff__ok"></div>
              <div class="cardTariff__inside">
                <div class="cardTariff__top">
                  <h4 class="cardTariff__header">{{item.title}}</h4>
                  <pre class="cardTariff__text">{{item.description}}</pre>
                </div>
                <div class="cardTariff__list">
                  <ul class="cardTariff__ul">
                    <div class="grid pb10">
                      <div class="cardTariff__circle"></div>
                      <li class="cardTariff__li">
                        {{item.firstList}}
                      </li>
                    </div>
                    <div class="grid pb10">
                      <div class="cardTariff__circle"></div>
                      <li class="cardTariff__li">{{item.secondList}}</li>
                    </div>
                    <div class="grid pb10">
                      <div class="cardTariff__circle"></div>
                      <li class="cardTariff__li">{{item.thirdList}}</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    item: Object,
    value: { type: String },
    modelValue: { default: '' },
  },
  emits: ['update:modelValue'],
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style scoped>

</style>
