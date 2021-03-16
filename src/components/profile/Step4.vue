<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>4</strong>/5
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Данные водительского удостоверения</h5>
    <div class="insertData__stepThree">
      <div class="inputStepThree">
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[0].id">{{ data[0].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidDriverNumbers}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="driverNumbers"
                 v-passport-numbers
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[1].id">{{ data[1].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidWhenDriverLessonsGive}"
                 type="text"
                 :id="data[1].id"
                 :placeholder="data[1].placeholder"
                 v-model="whenDriverLessonsGive"
                 v-date
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[2].id">{{ data[2].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidWhenDriverLessonsClose}"
                 type="text"
                 :id="data[2].id"
                 :placeholder="data[2].placeholder"
                 v-model="whenDriverLessonsClose"
                 v-date
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
  name: 'Step4',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    inputForSteps,
  },
  directives: {
    date,
    passportNumbers
  },
  data() {
    return {
      driverNumbers: '',
      whenDriverLessonsGive: '',
      whenDriverLessonsClose: '',
      data: [
        {
          id: 'driverNumbers',
          placeholder: '2233 444555',
          labelText: 'Сериия и номер В.У.',
        },
        {
          id: 'whenDriverLessonsGive',
          placeholder: '01/01/2020',
          labelText: 'Дата выдачи',
        },
        {
          id: 'whenDriverLessonsClose',
          placeholder: '01/01/2000',
          labelText: 'Срок выдачи',
        },
      ],
    };
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.isValidDriverNumbers
        && this.isValidWhenDriverLessonsGive
        && this.isValidWhenDriverLessonsClose);
    },
    isValidDriverNumbers() {
      return this.driverNumbers
        && this.driverNumbers.length > 10
        && this.regDriverNumbers(this.driverNumbers);
    },
    isValidWhenDriverLessonsGive() {
      return this.whenDriverLessonsGive
        && this.whenDriverLessonsGive.length === 10
        && this.regWhenDriverLessonsGive(this.whenDriverLessonsGive);
    },
    isValidWhenDriverLessonsClose() {
      return this.whenDriverLessonsClose
        && this.whenDriverLessonsClose.length === 10
        && this.regWhenDriverLessonsClose(this.whenDriverLessonsClose);
    },
  },
  methods: {
    regDriverNumbers(driverNumbers) {
      const reg = /^[0-9 ]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(driverNumbers);
    },
    regWhenDriverLessonsGive(whenDriverLessonsGive) {
      const reg = /^[0-9/]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(whenDriverLessonsGive);
    },
    regWhenDriverLessonsClose(whenDriverLessonsClose) {
      const reg = /^[0-9/]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(whenDriverLessonsClose);
    },
  },
};
</script>

<style scoped>

</style>
