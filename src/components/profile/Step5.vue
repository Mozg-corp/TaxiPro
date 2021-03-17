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
import inputForSteps from '@/components/profile/inputForSteps';
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';

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
      return this.brand
        && this.brand.length > 1
        && this.regBrand(this.brand);
    },
    isValidModel() {
      return this.model
        && this.model.length > 1
        && this.regModel(this.model);
    },
    isValidYear() {
      return this.year
        && this.year.length === 4
        && this.regYear(this.year);
    },
    isValidColor() {
      return this.color
        && this.color.length > 1
        && this.regColor(this.color);
    },
    isValidCarNumber() {
      return this.carNumber
        && this.carNumber.length > 6
        && this.carNumber.length < 10
        && this.regCarNumber(this.carNumber);
    },
    isValidVIN() {
      return this.VIN
        && this.VIN.length > 7
        && this.regVIN(this.VIN);
    },
    isValidNumberCertificate() {
      return this.numberCertificate
        && this.numberCertificate.length > 7
        && this.regNumberCertificate(this.numberCertificate);
    },
    isValidLicense() {
      return this.license
        && this.license.length > 5
        && this.regLicense(this.license);
    },
  },
  methods: {
    regBrand(brand) {
      const reg = /^[A-Za-z-]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(brand);
    },
    regModel(model) {
      const reg = /^[A-Za-z0-9+-]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(model);
    },
    regYear(year) {
      const reg = /^[0-9]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(year);
    },
    regColor(color) {
      const reg = /^[A-Za-z0-9/+#-]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(color);
    },
    regCarNumber(carNumber) {
      const reg = /^[A-Za-zА-Яа-я0-9]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(carNumber);
    },
    regVIN(VIN) {
      const reg = /^[A-Za-z0-9]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(VIN);
    },
    regNumberCertificate(numberCertificate) {
      const reg = /^[0-9#№ ]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(numberCertificate);
    },
    regLicense(license) {
      const reg = /^[0-9]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(license);
    },
  },
  directives: {
    date,
    passportNumbers,
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    inputForSteps,
  },
};
</script>

<style lang="scss">

</style>
