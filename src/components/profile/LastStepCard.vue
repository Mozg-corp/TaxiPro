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
        v-for="item in info"
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
      v-else-if="(typeText === 'license') || (typeText === 'tariff') || (typeText === 'Phone')"
      class="text">
      {{info}}
    </div>
    <div
      v-else
      >
      <div
        v-for="item in info"
        :key="item"
        class="text item"
      >
        <p>{{item.labelText}}</p>
      {{item.value}}
      </div>
    </div>
  </el-card>
  <el-dialog
    title="Изменить данные"
    v-model="onChangeHandler"
    width="40%">
    <div
      v-if="typeText === 'license'"
    >
      <label :for="info">Номер лицензии</label>
      <input :id="info" type="text" :value="info">
    </div>
    <div
      v-else-if="(typeText === 'passport')
       || (typeText === 'driverLessons')
       || (typeText === 'car')"
    >
      <div
        v-for="item in info"
        :key="item"
      >
        <label :for="item.type">{{item.text}}</label>
        <input :id="item.type" type="text" :value="item.value">
      </div>
    </div>
    <div
      v-else-if="typeText === 'agregators'"
      class="popupFlexLabel"
    >
      <div
        v-for="obj in allAgregators"
        :key="obj"
        class="inlineBlock">
        <input
          type="checkbox"
          class="inputNone"
          :id="obj.htmlId"
          v-model="obj.isChecked"
        >
        <label :for="obj.htmlId">
          <img
            class="imgMiniAgregators"
            :src="obj.img"
            alt=""
          >
        </label>
      </div>
    </div>
    <div
      v-else
      class="popupFlexLabel"
    >
      <div
        class="inlineBlock"
        v-for="tariff in allTariffs"
        :key="tariff.htmlId"
      >
        <input
          type="radio"
          class="inputNone"
          :id="tariff.htmlId"
          v-model="tariffName"
          :value="tariff.title"
        >
        <label
          :for="tariff.htmlId"
          class="labelPopupTariff"
        >
          {{ tariff.title }}
        </label>
      </div>
    </div>
    <template #footer>
    <span class="dialog-footer">
      <el-button type="primary" @click="onChangeHandler = false">Отмена</el-button>
      <el-button type="success" @click="saveChangesHandler">Сохранить</el-button>
    </span>
    </template>
  </el-dialog>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'LastStepCard',
  data() {
    return {
      onChangeHandler: false,
      tariffName: '',
    };
  },
  props: {
    header: String,
    info: String,
    typeText: String,
    isChanged: Boolean,
  },
  methods: {
    ...mapActions({
      setFirstStepToState: 'profile/setFirstStepToState',
    }),
    changeHandler() {
      this.onChangeHandler = true;
    },
    saveChangesHandler(func, data) {
      // this.setFirstStepToState(this.tariffName);
      func(data);
      this.onChangeHandler = false;
    },
  },
  computed: {
    ...mapGetters({
      allTariffs: 'profile/getAllTariffs',
      allAgregators: 'profile/getAllAgregators',
      getTariff: 'profile/getTariff',
    }),
  },
  mounted() {
    this.tariffName = this.getTariff;
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
#gett:checked + label .imgMiniAgregators,{
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
</style>
