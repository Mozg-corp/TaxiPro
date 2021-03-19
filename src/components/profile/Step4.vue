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
                 :class="{'inputForSteps__correct': isValidDriverNumbers,
                 'inputForSteps__error': !isInvalidDriverNumbers}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="driverLessons.driverNumbers"
                 v-passport-numbers
          >
          <span class="inputForSteps__errorText"
                v-if="errorDriverNumbers">
            {{ errorDriverNumbers }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[1].id">{{ data[1].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidWhenDriverLessonsGive,
                 'inputForSteps__error': !isInvalidWhenDriverLessonsGive}"
                 type="text"
                 :id="data[1].id"
                 :placeholder="data[1].placeholder"
                 v-model="driverLessons.whenDriverLessonsGive"
                 v-date
          >
          <span class="inputForSteps__errorText"
                v-if="errorDriverLessonsGive">
            {{ errorDriverLessonsGive }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[2].id">{{ data[2].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidWhenDriverLessonsClose,
                 'inputForSteps__error': !isInvalidWhenDriverLessonsClose}"
                 type="text"
                 :id="data[2].id"
                 :placeholder="data[2].placeholder"
                 v-model="driverLessons.whenDriverLessonsClose"
                 v-date
          >
          <span class="inputForSteps__errorText"
                v-if="errorWhenDriverLessonsClose">
            {{ errorWhenDriverLessonsClose }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="btn_step">
    <router-link :to="{ name: 'Step5' }"  class="button routerLink">
      <button
        @click="setFourStep"
        :disabled="!isAllInputsCorrect"
        class="button routerLink"
      >Далее
      </button>
    </router-link>
  </div>
</div>
</template>

<script>
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';
import {
  isValid,
  regDate,
  regNumbersAndSpace,
} from '@/store/regularExp';
import { errorText, errorDate } from '@/store/errorsText';
import { mapActions } from 'vuex';

export default {
  name: 'Step4',
  directives: {
    date,
    passportNumbers,
  },
  data() {
    return {
      driverLessons: {
        driverNumbers: '',
        whenDriverLessonsGive: '',
        whenDriverLessonsClose: '',
      },
      errorDriverNumbers: '',
      errorDriverLessonsGive: '',
      errorWhenDriverLessonsClose: '',
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
  methods: {
    ...mapActions({
      setFourStepToState: 'profile/setFourStepToState',
    }),
    setFourStep() {
      this.setFourStepToState(this.driverLessons);
    },
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.isValidDriverNumbers
        && this.isValidWhenDriverLessonsGive
        && this.isValidWhenDriverLessonsClose);
    },
    isValidDriverNumbers() {
      return isValid(this.driverLessons.driverNumbers, 10, 15, regNumbersAndSpace);
    },
    isInvalidDriverNumbers() {
      if (this.driverLessons.driverNumbers) {
        if (!isValid(this.driverLessons.driverNumbers, 10, 15, regNumbersAndSpace)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorDriverNumbers = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorDriverNumbers = '';
      return true;
    },
    isValidWhenDriverLessonsGive() {
      return isValid(this.driverLessons.whenDriverLessonsGive, 9, 11, regDate);
    },
    isInvalidWhenDriverLessonsGive() {
      if (this.driverLessons.whenDriverLessonsGive) {
        if (!isValid(this.driverLessons.whenDriverLessonsGive, 9, 11, regDate)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorDriverLessonsGive = errorDate;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorDriverLessonsGive = '';
      return true;
    },
    isValidWhenDriverLessonsClose() {
      return isValid(this.driverLessons.whenDriverLessonsClose, 9, 11, regDate);
    },
    isInvalidWhenDriverLessonsClose() {
      if (this.driverLessons.whenDriverLessonsClose) {
        if (!isValid(this.driverLessons.whenDriverLessonsClose, 9, 11, regDate)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorWhenDriverLessonsClose = errorDate;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorWhenDriverLessonsClose = '';
      return true;
    },
  },
};
</script>

<style scoped>

</style>
