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
    <router-link :to="{ name: 'Step5' }"  class="button routerLink">
      <button
        @click="setFourStep"
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
import {
  regDate,
  regNumbersAndSpace,
} from '@/store/regularExp';
import { mapActions } from 'vuex';
// eslint-disable-next-line import/extensions
import InputForSteps from '@/components/profile/inputs/InputForSteps';

export default {
  name: 'Step4',
  components: {
    InputForSteps,
  },
  data() {
    return {
      data: [
        {
          id: 'driverNumbers',
          placeholder: '2233 444555',
          text: 'Сериия и номер В.У.',
          value: '',
          errorMessage: '',
          validate: {
            regName: regNumbersAndSpace,
            min: 10,
            max: 15,
          },
          isCorrect: false,
          directive: 'v-passport-numbers',
        },
        {
          id: 'whenDriverLessonsGive',
          placeholder: '01/01/2020',
          text: 'Дата выдачи',
          value: '',
          errorMessage: '',
          validate: {
            regName: regDate,
            min: 9,
            max: 11,
          },
          isCorrect: false,
          directive: 'v-date',
        },
        {
          id: 'whenDriverLessonsClose',
          placeholder: '01/01/2000',
          text: 'Срок выдачи',
          value: '',
          errorMessage: '',
          validate: {
            regName: regDate,
            min: 9,
            max: 11,
          },
          isCorrect: false,
          directive: 'v-date',
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      setFourStepToState: 'profile/setFourStepToState',
    }),
    setFourStep() {
      this.setFourStepToState(this.data);
    },
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.data[0].isCorrect
        && this.data[1].isCorrect
        && this.data[2].isCorrect);
    },
  },
};
</script>

<style scoped>

</style>
