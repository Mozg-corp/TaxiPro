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
import { mapActions } from 'vuex';
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';
import {
  regSurname,
  regName,
  regDate,
  regNumbersAndSpace,
  regTextNumberMore,
  regPatronymic,
  regStreet,
  regNumbersOnly,
  regHouseNumber,
} from '@/store/regularExp';
// eslint-disable-next-line import/extensions
import InputForSteps from '@/components/profile/InputForSteps';

// eslint-disable-next-line no-unused-vars
export default {
  name: 'Step3',
  data() {
    return {
      data: [
        {
          id: 'surname',
          placeholder: 'Иванов',
          text: 'Фамилия',
          value: '',
          errorMessage: '',
          validate: {
            regName: regSurname,
            min: 1,
            max: 32,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'name',
          placeholder: 'Петр',
          text: 'Имя',
          value: '',
          errorMessage: '',
          validate: {
            regName,
            min: 1,
            max: 32,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'patronymic',
          placeholder: 'Петрович',
          text: 'Отчество (если есть)',
          value: '',
          errorMessage: '',
          validate: {
            regName: regPatronymic,
            min: 0,
            max: 32,
          },
          isCorrect: true,
          directive: '',
        },
        {
          id: 'birthday',
          placeholder: '27/08/1980',
          text: 'Дата рождения',
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
          id: 'passportNumber',
          placeholder: '8807 198022',
          text: 'Серия и номер паспорта',
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
          id: 'passportWhoGive',
          placeholder: 'ТП №1 в гор. округе Тольятти...',
          text: 'Кем выдан',
          value: '',
          errorMessage: '',
          validate: {
            regName: regTextNumberMore,
            min: 10,
            max: 64,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'passportWhenGive',
          placeholder: '27/08/2019',
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
          id: 'city',
          placeholder: 'Тольятти',
          text: 'Город',
          value: '',
          errorMessage: '',
          validate: {
            regName,
            min: 1,
            max: 32,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'region',
          placeholder: 'Московская',
          text: 'Регион/Область (если есть)',
          value: '',
          errorMessage: '',
          validate: {
            regName: regPatronymic,
            min: 0,
            max: 32,
          },
          isCorrect: true,
          directive: '',
        },
        {
          id: 'street',
          placeholder: 'Индустриальная',
          text: 'Улица',
          value: '',
          errorMessage: '',
          validate: {
            regName: regStreet,
            min: 1,
            max: 64,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'house',
          placeholder: '50',
          text: 'Дом',
          value: '',
          errorMessage: '',
          validate: {
            regName: regHouseNumber,
            min: 0,
            max: 10,
          },
          isCorrect: false,
          directive: '',
        },
        {
          id: 'flat',
          placeholder: '44',
          text: 'Квартира',
          value: '',
          errorMessage: '',
          validate: {
            regName: regNumbersOnly,
            min: 0,
            max: 10,
          },
          isCorrect: true,
          directive: '',
        },
      ],
    };
  },
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
