<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>4</strong>/6
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Данные водительского удостоверения</h5>
    <div class="insertData__stepThree">
      <div class="inputStepThree">
        <div class="inputForSteps">
          <label
            class="inputForSteps__label"
            :for="data[0].id">{{ data[0].labelText }}
          </label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidDriverNumbers,
                 'inputForSteps__error': !isInvalidDriverNumbers}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="driverLessons[0].value"
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
                 v-model="driverLessons[1].value"
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
                 v-model="driverLessons[2].value"
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
  <div>
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
      driverLessons: [
        {
          text: 'Сериия и номер В.У.',
          value: '',
        },
        {
          text: 'Дата выдачи',
          value: '',
        },
        {
          text: 'Срок выдачи',
          value: '',
        },
      ],
      errorDriverNumbers: '',
      errorDriverLessonsGive: '',
      errorWhenDriverLessonsClose: '',
      data: [
        {
          id: 'driverNumbers',
          placeholder: '2233 444555',
          labelText: 'Сериия и номер В.У.',
          value: '',
        },
        {
          id: 'whenDriverLessonsGive',
          placeholder: '01/01/2020',
          labelText: 'Дата выдачи',
          value: '',
        },
        {
          id: 'whenDriverLessonsClose',
          placeholder: '01/01/2000',
          labelText: 'Срок выдачи',
          value: '',
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
      return isValid(this.driverLessons[0].value, 10, 15, regNumbersAndSpace);
    },
    isInvalidDriverNumbers() {
      if (this.driverLessons[0].value) {
        if (!isValid(this.driverLessons[0].value, 10, 15, regNumbersAndSpace)) {
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
      return isValid(this.driverLessons[1].value, 9, 11, regDate);
    },
    isInvalidWhenDriverLessonsGive() {
      if (this.driverLessons[1].value) {
        if (!isValid(this.driverLessons[1].value, 9, 11, regDate)) {
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
      return isValid(this.driverLessons[2].value, 9, 11, regDate);
    },
    isInvalidWhenDriverLessonsClose() {
      if (this.driverLessons[2].value) {
        if (!isValid(this.driverLessons[2].value, 9, 11, regDate)) {
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
