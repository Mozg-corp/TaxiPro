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
      <input
        :id="info"
        type="text"
        v-model="license"
        :class="{'correctLastStep': isValidLicense,
                 'inputForSteps__error': !isInvalidLicense}"
      >
      <div style="text-align: end">
        <span class="dialog-footer">
          <el-button type="primary" @click="onChangeHandler = false">Отмена</el-button>
          <el-button
            type="success"
            @click="saveLicense(license)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
    <div
      v-else-if="(typeText === 'passport')
      || (typeText === 'car')
      || (typeText === 'driverLessons')"
    >
      <div
        v-for="item in info"
        :key="item"
      >
        <label :for="item.type">{{item.text}}</label>
        <input :id="item.type" type="text" v-model="item.value">
      </div>
      <div style="text-align: end">
        <span class="dialog-footer">
          <el-button type="primary" @click="onChangeHandler = false">Отмена</el-button>
          <el-button
            type="success"
            @click="savePassport(Data)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
    <div
      v-else-if="typeText === 'agregators'"
    >
      <div class="popupFlexLabel">
        <div
          v-for="obj in allAgregators"
          :key="obj"
          class="inlineBlock">
          <input
            type="checkbox"
            class="inputNone"
            :id="obj.htmlId"
            v-model="obj.isChecked"
            @change="eventInput(obj, info)"
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
      <div style="text-align: end">
        <span class="dialog-footer">
          <el-button type="primary" @click="onChangeHandler = false">Отмена</el-button>
          <el-button
            type="success"
            @click="saveAgregators(Data)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
    <div
      v-else
    >
      <div class="popupFlexLabel">
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
      <div style="text-align: end; margin-top: 30px">
        <span class="dialog-footer">
          <el-button type="primary" @click="onChangeHandler = false">Отмена</el-button>
          <el-button
            type="success"
            @click="saveTariff(tariffName)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
  </el-dialog>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { isValid, regNumbersOnly } from '@/store/regularExp';
import { errorText } from '@/store/errorsText';

export default {
  name: 'LastStepCard',
  data() {
    return {
      onChangeHandler: false,
      tariffName: '',
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
    eventInput(data, d) {
      const index = d.indexOf(data.id);
      if (data.isChecked) {
        this.Data.push(data.id);
      } else {
        this.Data.splice(index, 1);
      }
      return this.Data;
    },
    ...mapActions({
      setFirstStepToState: 'profile/setFirstStepToState',
      secondStepToState: 'profile/secondStepToState',
      setThirdStepToState: 'profile/setThirdStepToState',
      setFourStepToState: 'profile/setFourStepToState',
      setFiveStepToState: 'profile/setFiveStepToState',
      setLicenseToState: 'profile/setLicenseToState',
    }),
    changeHandler() {
      this.onChangeHandler = true;
    },
    saveTariff(tariff) {
      this.setFirstStepToState(tariff);
      this.onChangeHandler = false;
    },
    saveAgregators(agr) {
      this.secondStepToState(Object.values(agr));
      this.onChangeHandler = false;
    },
    saveLicense(data) {
      this.setLicenseToState(data);
      this.onChangeHandler = false;
    },
    savePassport(data) {
      if (data.length === 12) {
        this.setThirdStepToState(data);
      } else if (data.length === 3) {
        this.setFourStepToState(data);
      } else {
        this.setFiveStepToState(data);
      }
      this.onChangeHandler = false;
    },
  },
  computed: {
    ...mapGetters({
      allTariffs: 'profile/getAllTariffs',
      allAgregators: 'profile/getAllAgregators',
      getTariff: 'profile/getTariff',
    }),
    isValidLicense() {
      return isValid(this.license, 5, 20, regNumbersOnly);
    },
    isInvalidLicense() {
      if (this.license) {
        if (!isValid(this.license, 5, 20, regNumbersOnly)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorLicense = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorLicense = '';
      return true;
    },
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
