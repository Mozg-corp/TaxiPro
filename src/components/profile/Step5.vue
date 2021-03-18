<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>5</strong>/5
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Данные Т.С.</h5>
    <div class="insertData__stepThree">
      <div class="inputStepThree">
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[0].id">{{ data[0].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidBrand}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="brand"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[1].id">{{ data[1].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidModel}"
                 type="text"
                 :id="data[1].id"
                 :placeholder="data[1].placeholder"
                 v-model="model"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[2].id">{{ data[2].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidYear}"
                 type="text"
                 :id="data[2].id"
                 :placeholder="data[2].placeholder"
                 v-model="year"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[3].id">{{ data[3].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidColor}"
                 type="text"
                 :id="data[3].id"
                 :placeholder="data[3].placeholder"
                 v-model="color"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[4].id">{{ data[4].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidCarNumber}"
                 type="text"
                 :id="data[4].id"
                 :placeholder="data[4].placeholder"
                 v-model="carNumber"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[5].id">{{ data[5].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidVIN}"
                 type="text"
                 :id="data[5].id"
                 :placeholder="data[5].placeholder"
                 v-model="VIN"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[6].id">{{ data[6].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidNumberCertificate}"
                 type="text"
                 :id="data[6].id"
                 :placeholder="data[6].placeholder"
                 v-model="numberCertificate"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[7].id">{{ data[7].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidLicense}"
                 type="text"
                 :id="data[7].id"
                 :placeholder="data[7].placeholder"
                 v-model="license"
          >
        </div>
      </div>
    </div>
  </div>
  <div class="btn_step">
    <router-link :to="{ name: 'Step5' }"  class="button routerLink">
      <button
        :disabled="!isAllInputsCorrect"
        class="button routerLink"
      >Далее
      </button>
    </router-link>
  </div>
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';
import {
  isValid,
  regName,
  regNumbersOnly,
  regLettersNumbersOnly,
  regTextNumberMore,
  regNumbersMore,
} from '@/store/regularExp';

export default {
  name: 'Step5',
  data() {
    return {
      brand: '',
      model: '',
      year: '',
      color: '',
      carNumber: '',
      VIN: '',
      numberCertificate: '',
      license: '',
      data: [
        {
          id: 'brand',
          placeholder: 'KIA',
          labelText: 'Марка автомобиля',
        },
        {
          id: 'model',
          placeholder: 'RIO',
          labelText: 'Модель автомобиля',
        },
        {
          id: 'year',
          placeholder: '2019',
          labelText: 'Год автомобиля',
        },
        {
          id: 'color',
          placeholder: 'черный',
          labelText: 'Цвет автомобиля',
        },
        {
          id: 'carNumber',
          placeholder: 'е756уе150',
          labelText: 'Регистрационный знак ТС',
        },
        {
          id: 'VIN',
          placeholder: 'vyfu65566fufi76uff6u',
          labelText: 'VIN',
        },
        {
          id: 'numberСertificate',
          placeholder: '54 67 № 890909',
          labelText: 'Номер свидетельства ТС',
        },
        {
          id: 'license',
          placeholder: '0765643',
          labelText: 'Номер лицензии',
        },
      ],
    };
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.isValidBrand
        && this.isValidModel
        && this.isValidYear
        && this.isValidColor
        && this.isValidCarNumber
        && this.isValidVIN
        && this.isValidNumberCertificate
        && this.isValidLicense
      );
    },
    isValidBrand() {
      return isValid(this.brand, 1, 99, regName);
    },
    isValidModel() {
      return isValid(this.model, 1, 99, regName);
    },
    isValidYear() {
      return isValid(this.year, 3, 5, regNumbersOnly);
    },
    isValidColor() {
      return isValid(this.color, 1, 99, regTextNumberMore);
    },
    isValidCarNumber() {
      return isValid(this.carNumber, 6, 10, regTextNumberMore);
    },
    isValidVIN() {
      return isValid(this.VIN, 7, 99, regLettersNumbersOnly);
    },
    isValidNumberCertificate() {
      return isValid(this.numberCertificate, 7, 99, regNumbersMore);
    },
    isValidLicense() {
      return isValid(this.license, 5, 20, regNumbersOnly);
    },
  },
  directives: {
    date,
    passportNumbers,
  },
};
</script>

<style lang="scss">

</style>
