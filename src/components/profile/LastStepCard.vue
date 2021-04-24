<template>
<div>
  <el-card shadow="always" class="box-card lastStepCard">
    <div class="card-header">
      <span>{{ header }}</span>
      <el-button
        v-if="isChanged"
        @click="changeHandler"
        class="btn"
        type="text"
      >
        Изменить
      </el-button>
    </div>
    <div
      v-if="typeText === 'agregators'"
      >
      <div
        v-for="item in info.value"
        :key="item"
        class="inlineBlock"
      >
        <img
          class="imgMiniAgregators imgMiniAgregators_borderBlue"
          :src="'/assets/images/step2/'+item+'.jpeg'"
          alt=""
        >
      </div>
    </div>
    <div
      v-else-if="typeText === 'Phone'"
      class="text">
      {{info}}
    </div>
    <div
      v-else-if="(typeText === 'license') || (typeText === 'tariff')"
      class="text">
      {{info.value}}
    </div>
    <div
      v-else
      >
      <div
        v-for="item in info.value"
        :key="item"
        class="text item"
      >
        <p>{{item.text}}</p>
      {{item.value}}
      </div>
    </div>
  </el-card>
  <DialogForCard
    :data="info"
    :typeText="typeText"
    v-model="onChangeHandler"
  />
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import DialogForCard from '@/components/profile/dialog/DialogForCard';

export default {
  name: 'LastStepCard',
  components: {
    DialogForCard,
  },
  data() {
    return {
      onChangeHandler: false,
      license: this.info,
      Data: this.info,
    };
  },
  props: [
    'info',
    'header',
    'typeText',
    'isChanged',
  ],
  methods: {
    changeHandler() {
      this.onChangeHandler = true;
    },
  },
};
</script>

<style lang="scss">

#start:checked + .labelPopupTariff,
#comfort:checked + .labelPopupTariff,
#premium:checked + .labelPopupTariff,{
  background: #48B5E2;
  color: #fff;
}
.labelPopupTariff {
  background: #fff;
  color: #48B5E2;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
}

#uber:checked + label .imgMiniAgregators,
#yandexTaxi:checked + label .imgMiniAgregators,
#citymobile:checked + label .imgMiniAgregators,
#gett:checked + label .imgMiniAgregators,
#didi:checked + label .imgMiniAgregators{
  border: 1px solid #01B6E7;
}

.popupFlexLabel {
  display: flex;
  justify-content: space-around;
}
.lastStepCard {
  margin: 10px 0;
}
.inlineBlock {
  display: inline-block;
}
.imgMiniAgregators {
  object-fit: contain;
  padding: 14px;
  margin: 10px;
  border-radius: 15px;
  border: 1px solid #000;
  height: 63px;
  width: 100px;
  &_borderBlue {
    border: 1px solid #01B6E7;
  }
}
.correctLastStep {
  border: 1px solid limegreen;
}
</style>
