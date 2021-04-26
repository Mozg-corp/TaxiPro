<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>3</strong>/6
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Паспортные данные (паспорт РФ)</h5>
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
    <router-link
      :to="{ name: 'Step4' }"
      class="button routerLink"
    >
      <button
        @click="setThirdStep"
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
<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>

// eslint-disable-next-line import/extensions
import InputForSteps from '@/components/profile/inputs/InputForSteps';
import { mapActions, mapGetters } from 'vuex';
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';

export default {
  name: 'Step3',
  components: {
    InputForSteps,
  },
  methods: {
    ...mapActions({
      setThirdStepToState: 'profile/setThirdStepToState',
    }),
    setThirdStep() {
      this.setThirdStepToState(this.data);
    },
  },
  directives: {
    date,
    passportNumbers,
  },
  computed: {
    ...mapGetters({
      data: 'profile/getPassportValue',
    }),
    isAllInputsCorrect() {
      return !!(this.data[0].isCorrect
        && this.data[1].isCorrect
        && this.data[2].isCorrect
        && this.data[3].isCorrect
        && this.data[4].isCorrect
        && this.data[5].isCorrect
        && this.data[6].isCorrect
        && this.data[7].isCorrect
        && this.data[8].isCorrect
        && this.data[9].isCorrect
        && this.data[10].isCorrect
        && this.data[11].isCorrect
      );
    },
  },
};
</script>

<style lang="scss">
.insertData{
  padding: 20px;
  &__text{
    padding: 15px 0;
  }
}

.routerLink {
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin: auto;
  line-height: 45px;
}

.inputStepThree {
  &_flex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}

.inputForSteps {
  margin-bottom: 15px;
  position: relative;
  &__label {
    position: absolute;
    background: #fff;
    font-size: 10px;
    left: 15px;
    top: -6px;
    padding: 0 5px;   }
  &__input {
    width: 100%;
    border: 1px solid #000000;
    border-radius: 6px;
    box-sizing: border-box;
  }
  &__correct {
    border: 1px solid blue;
  }
  &__error {
    border: 1px solid red;
  }
  &__errorText {
    color: red;
  }
}

.checkData {
  text-align: center;
  margin-top: 20px;
  color: #01B6E7;
}
</style>
