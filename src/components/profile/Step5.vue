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
                 :class="{'inputForSteps__correct': isValidBrand,
                 'inputForSteps__error': !isInvalidBrand}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="car[0].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorBrand">
            {{ errorBrand }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[1].id">{{ data[1].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidModel,
                 'inputForSteps__error': !isInvalidModel}"
                 type="text"
                 :id="data[1].id"
                 :placeholder="data[1].placeholder"
                 v-model="car[1].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorModel">
            {{ errorModel }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[2].id">{{ data[2].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidYear,
                 'inputForSteps__error': !isInvalidYear}"
                 type="text"
                 :id="data[2].id"
                 :placeholder="data[2].placeholder"
                 v-model="car[2].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorYear">
            {{ errorYear }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[3].id">{{ data[3].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidColor,
                 'inputForSteps__error': !isInvalidColor}"
                 type="text"
                 :id="data[3].id"
                 :placeholder="data[3].placeholder"
                 v-model="car[3].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorColor">
            {{ errorColor }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[4].id">{{ data[4].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidCarNumber,
                 'inputForSteps__error': !isInvalidCarNumber}"
                 type="text"
                 :id="data[4].id"
                 :placeholder="data[4].placeholder"
                 v-model="car[4].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorCarNumber">
            {{ errorCarNumber }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[5].id">{{ data[5].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidVIN,
                 'inputForSteps__error': !isInvalidVIN}"
                 type="text"
                 :id="data[5].id"
                 :placeholder="data[5].placeholder"
                 v-model="car[5].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorVIN">
            {{ errorVIN }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[6].id">{{ data[6].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidNumberCertificate,
                 'inputForSteps__error': !isInvalidNumberCertificate}"
                 type="text"
                 :id="data[6].id"
                 :placeholder="data[6].placeholder"
                 v-model="car[6].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorNumberCertificate">
            {{ errorNumberCertificate }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[7].id">{{ data[7].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidLicense,
                 'inputForSteps__error': !isInvalidLicense}"
                 type="text"
                 :id="data[7].id"
                 :placeholder="data[7].placeholder"
                 v-model="license"
          >
          <span class="inputForSteps__errorText"
                v-if="errorLicense">
            {{ errorLicense }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="btn_step">
    <router-link :to="{ name: 'endRegistration' }"  class="button routerLink">
      <button
        @click="setFiveStep"
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
import { errorText, errorDate } from '@/store/errorsText';
import { mapActions } from 'vuex';

export default {
  name: 'Step5',
  data() {
    return {
      car: [
        {
          text: 'Марка автомобиля',
          value: '',
        },
        {
          text: 'Модель автомобиля',
          value: '',
        },
        {
          text: 'Год автомобиля',
          value: '',
        },
        {
          text: 'Цвет автомобиля',
          value: '',
        },
        {
          text: 'Регистрационный знак ТС',
          value: '',
        },
        {
          text: 'VIN',
          value: '',
        },
        {
          text: 'Номер свидетельства Т.С.',
          value: '',
        },
      ],
      errorBrand: '',
      errorModel: '',
      errorYear: '',
      errorColor: '',
      errorCarNumber: '',
      errorVIN: '',
      errorNumberCertificate: '',
      license: '',
      errorLicense: '',
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
  methods: {
    ...mapActions({
      setFiveStepToState: 'profile/setFiveStepToState',
      setLicenseToState: 'profile/setLicenseToState',
    }),
    setFiveStep() {
      this.setFiveStepToState(this.car);
      this.setLicenseToState(this.license);
    },
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
      return isValid(this.car[0].value, 1, 99, regName);
    },
    isInvalidBrand() {
      if (this.car[0].value) {
        if (!isValid(this.car[0].value, 1, 99, regName)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorBrand = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorBrand = '';
      return true;
    },
    isValidModel() {
      return isValid(this.car[1].value, 1, 99, regName);
    },
    isInvalidModel() {
      if (this.car[1].value) {
        if (!isValid(this.car[1].value, 1, 99, regName)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorModel = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorModel = '';
      return true;
    },
    isValidYear() {
      return isValid(this.car[2].value, 3, 5, regNumbersOnly);
    },
    isInvalidYear() {
      if (this.car[2].value) {
        if (!isValid(this.car[2].value, 3, 5, regNumbersOnly)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorYear = errorDate;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorYear = '';
      return true;
    },
    isValidColor() {
      return isValid(this.car[3].value, 1, 99, regTextNumberMore);
    },
    isInvalidColor() {
      if (this.car[3].value) {
        if (!isValid(this.car[3].value, 1, 99, regTextNumberMore)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorColor = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorColor = '';
      return true;
    },
    isValidCarNumber() {
      return isValid(this.car[4].value, 6, 10, regTextNumberMore);
    },
    isInvalidCarNumber() {
      if (this.car[4].value) {
        if (!isValid(this.car[4].value, 6, 10, regTextNumberMore)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorCarNumber = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorCarNumber = '';
      return true;
    },
    isValidVIN() {
      return isValid(this.car[5].value, 7, 99, regLettersNumbersOnly);
    },
    isInvalidVIN() {
      if (this.car[5].value) {
        if (!isValid(this.car[5].value, 7, 99, regLettersNumbersOnly)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorVIN = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorVIN = '';
      return true;
    },
    isValidNumberCertificate() {
      return isValid(this.car[6].value, 7, 99, regNumbersMore);
    },
    isInvalidNumberCertificate() {
      if (this.car[6].value) {
        if (!isValid(this.car[6].value, 7, 99, regNumbersMore)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorNumberCertificate = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorNumberCertificate = '';
      return true;
    },
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
  directives: {
    date,
    passportNumbers,
  },
};
</script>

<style lang="scss">

</style>
