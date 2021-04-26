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
        <InputForSteps
          :item="licence"
          v-model="licence.value"
          :directive="licence.directive"
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Step5',
  components: {
    InputForSteps,
  },
  methods: {
    ...mapActions({
      setFiveStepToState: 'profile/setFiveStepToState',
      setLicenseToState: 'profile/setLicenseToState',
    }),
    setFiveStep() {
      this.setFiveStepToState(this.data);
      this.setLicenseToState(this.licence.value);
    },
  },
  computed: {
    ...mapGetters({
      data: 'profile/getCarValue',
      licence: 'profile/getLicense',
    }),
    isAllInputsCorrect() {
      return !!(this.data[0].isCorrect
        && this.data[1].isCorrect
        && this.data[2].isCorrect
        && this.data[3].isCorrect
        && this.data[4].isCorrect
        && this.data[5].isCorrect
        && this.data[6].isCorrect
        && this.licence.isCorrect
      );
    },
  },
};
</script>

<style lang="scss">

</style>
