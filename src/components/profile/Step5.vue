<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>5</strong>/6
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Данные Т.С.</h5>
    <div class="insertData__stepThree">
      <div class="inputStepThree">
        <InputForSteps
          v-for="(item, index) in data"
          :key="item.id"
          :index="index"
          :item="item"
          v-model="item.value"
          :directive="item.directive"
        ></InputForSteps>
      </div>
    </div>
  </div>
  <div>
    <router-link :to="{ name: 'endRegistration' }"  class="button routerLink">
      <button
        @click="setFiveStep"
        :disabled="!isAllInputsCorrect"
        class="button routerLink"
      >Далее
      </button>
    </router-link>
    <div
      v-if="isAllInputsCorrect"
      class="checkData"
    >
      Перед отправкой проверьте
      все данные
    </div>
  </div>
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import InputForSteps from '@/components/profile/inputs/InputForSteps';
import {
  regName,
  regNumbersOnly,
  regLettersNumbersOnly,
  regTextNumberMore,
  regNumbersMore,
} from '@/store/regularExp';
import { mapActions } from 'vuex';

export default {
  name: 'Step5',
  components: {
    InputForSteps,
  },
  data() {
    return {
      data: [
        {
          id: 'brand',
          placeholder: 'KIA',
          text: 'Марка автомобиля',
          value: '',
          errorMessage: '',
          validate: {
            regName,
            min: 1,
            max: 128,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'model',
          placeholder: 'RIO',
          text: 'Модель автомобиля',
          value: '',
          errorMessage: '',
          validate: {
            regName,
            min: 1,
            max: 128,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'year',
          placeholder: '2019',
          text: 'Год автомобиля',
          value: '',
          errorMessage: '',
          validate: {
            regName: regNumbersOnly,
            min: 3,
            max: 5,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'color',
          placeholder: 'черный',
          text: 'Цвет автомобиля',
          value: '',
          errorMessage: '',
          validate: {
            regName: regTextNumberMore,
            min: 1,
            max: 99,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'carNumber',
          placeholder: 'е756уе150',
          text: 'Регистрационный знак ТС',
          value: '',
          errorMessage: '',
          validate: {
            regName: regTextNumberMore,
            min: 6,
            max: 10,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'VIN',
          placeholder: 'vyfu65566fufi76uff6u',
          text: 'VIN',
          value: '',
          errorMessage: '',
          validate: {
            regName: regLettersNumbersOnly,
            min: 7,
            max: 99,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'numberСertificate',
          placeholder: '54 67 № 890909',
          text: 'Номер свидетельства ТС',
          value: '',
          errorMessage: '',
          validate: {
            regName: regNumbersMore,
            min: 7,
            max: 99,
          },
          isCorrect: false,
          directive: 'v-passport-numbers',
        },
        {
          heading: 'Данные лицензии',
          id: 'license',
          placeholder: '0765643',
          text: 'Номер лицензии',
          value: '',
          errorMessage: '',
          validate: {
            regName: regNumbersOnly,
            min: 5,
            max: 20,
          },
          isCorrect: false,
          directive: '',
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
      this.setFiveStepToState(this.data);
      this.setLicenseToState(this.data[7].value);
    },
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.data[0].isCorrect
        && this.data[1].isCorrect
        && this.data[2].isCorrect
        && this.data[3].isCorrect
        && this.data[4].isCorrect
        && this.data[5].isCorrect
        && this.data[6].isCorrect
        && this.data[7].isCorrect
      );
    },
  },
};
</script>

<style lang="scss">

</style>
