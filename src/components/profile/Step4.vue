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
          v-for="(item, index) in driverLessons"
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

// eslint-disable-next-line import/extensions
import InputForSteps from '@/components/profile/inputs/InputForSteps';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Step4',
  components: {
    InputForSteps,
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
    ...mapGetters({
      driverLessons: 'profile/getDriverLessonsValue',
    }),
    isAllInputsCorrect() {
      return !!(this.driverLessons[0].isCorrect
        && this.driverLessons[1].isCorrect
        && this.driverLessons[2].isCorrect);
    },
  },
};
</script>

<style scoped>

</style>
