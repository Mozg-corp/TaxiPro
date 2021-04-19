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
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[0].id">{{ data[0].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{
            'inputForSteps__correct': isValidSurname,
            'inputForSteps__error': !isInvalidSurname}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model.lazy="data[0].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorSurname">
            {{ errorSurname }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[1].id">{{ data[1].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidName,
                  'inputForSteps__error': !isInvalidName}"
                 type="text"
                 :id="data[1].id"
                 :placeholder="data[1].placeholder"
                 v-model.lazy="data[1].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorName">
            {{ errorName }}
          </span>
        </div>
        <div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[2].id">{{ data[2].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidPatronymic,
               'inputForSteps__error': !isInvalidPatronymic}"
               type="text"
               :id="data[2].id"
               :placeholder="data[2].placeholder"
               v-model.lazy="data[2].value"
        >
          <span class="inputForSteps__errorText"
                v-if="errorPatronymic">
            {{ errorPatronymic }}
          </span>
      </div>
        <div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[3].id">{{ data[3].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidBirthday,
               'inputForSteps__error': !isInvalidBirthday}"
               type="text"
               :id="data[3].id"
               :placeholder="data[3].placeholder"
               v-model.lazy="data[3].value"
               v-date
        >
          <span class="inputForSteps__errorText"
                v-if="errorBirthday">
            {{ errorBirthday }}
          </span>
      </div>
        <div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[4].id">{{ data[4].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidPassportNumbers,
               'inputForSteps__error': !isInvalidPassportNumbers}"
               type="text"
               :id="data[4].id"
               :placeholder="data[4].placeholder"
               v-model.lazy="data[4].value"
               v-passport-numbers
        >
          <span class="inputForSteps__errorText"
                v-if="errorPassportNumbers">
            {{ errorPassportNumbers }}
          </span>
      </div>
        <div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[5].id">{{ data[5].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidPassportWhoGive,
               'inputForSteps__error': !isInvalidPassportWhoGive}"
               type="text"
               :id="data[5].id"
               :placeholder="data[5].placeholder"
               v-model.lazy="data[5].value"
        >
          <span class="inputForSteps__errorText"
                v-if="errorPassportWhoGive">
            {{ errorPassportWhoGive }}
          </span>
      </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[6].id">{{ data[6].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidPassportWhenGive,
                 'inputForSteps__error': !isInvalidPassportWhenGive}"
                 type="text"
                 :id="data[6].id"
                 :placeholder="data[6].placeholder"
                 v-model.lazy="data[6].value"
                 v-date
          >
          <span class="inputForSteps__errorText"
                v-if="errorPassportWhenGive">
            {{ errorPassportWhenGive }}
          </span>
        </div>
        <h5 class="insertData__text">Адрес регистрации</h5>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[7].id">{{ data[7].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidCity,
                 'inputForSteps__error': !isInvalidCity}"
                 type="text"
                 :id="data[7].id"
                 :placeholder="data[7].placeholder"
                 v-model.lazy="data[7].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorCity">
            {{ errorCity }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[8].id">{{ data[8].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidRegion,
                 'inputForSteps__error': !isInvalidRegion}"
                 type="text"
                 :id="data[8].id"
                 :placeholder="data[8].placeholder"
                 v-model.lazy="data[8].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorRegion">
            {{ errorRegion }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[9].id">{{ data[9].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidStreet,
                 'inputForSteps__error': !isInvalidStreet}"
                 type="text"
                 :id="data[9].id"
                 :placeholder="data[9].placeholder"
                 v-model.lazy="data[9].value"
          >
          <span class="inputForSteps__errorText"
                v-if="errorStreet">
            {{ errorStreet }}
          </span>
        </div>
        <div class="inputStepThree_flex">
          <div class="inputForSteps">
            <label class="inputForSteps__label" :for="data[10].id">{{ data[10].labelText }}</label>
            <input class="inputForSteps__input"
                   :class="{'inputForSteps__correct': isValidHouse,
                 'inputForSteps__error': !isInvalidHouse}"
                   type="text"
                   :id="data[10].id"
                   :placeholder="data[10].placeholder"
                   v-model.lazy="data[10].value"
            >
            <span class="inputForSteps__errorText"
                  v-if="errorHouse">
            {{ errorHouse }}
          </span>
          </div>
          <div class="inputForSteps">
            <label class="inputForSteps__label" :for="data[11].id">{{ data[11].labelText }}</label>
            <input class="inputForSteps__input"
                   :class="{'inputForSteps__correct': isValidFlat,
                 'inputForSteps__error': !isInvalidFlat}"
                   type="text"
                   :id="data[11].id"
                   :placeholder="data[11].placeholder"
                   v-model="data[11].value"
            >
            <span class="inputForSteps__errorText"
                  v-if="errorFlat">
            {{ errorFlat }}
          </span>
          </div>
        </div>
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
import { errorText, errorDate } from '@/store/errorsText';
import {
  isValid,
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

// eslint-disable-next-line no-unused-vars
export default {
  name: 'Step3',
  data() {
    return {
      errorSurname: '',
      errorName: '',
      errorPatronymic: '',
      errorBirthday: '',
      errorPassportNumbers: '',
      errorPassportWhoGive: '',
      errorPassportWhenGive: '',
      errorCity: '',
      errorRegion: '',
      errorStreet: '',
      errorHouse: '',
      errorFlat: '',
      data: [
        {
          id: 'surname',
          placeholder: 'Иванов',
          labelText: 'Фамилия',
          value: '',
        },
        {
          id: 'name',
          placeholder: 'Петр',
          labelText: 'Имя',
          value: '',
        },
        {
          id: 'patronymic',
          placeholder: 'Петрович',
          labelText: 'Отчество (если есть)',
          value: '',
        },
        {
          id: 'birthday',
          placeholder: '27/08/1980',
          labelText: 'Дата рождения',
          value: '',
        },
        {
          id: 'passportNumber',
          placeholder: '8807 198022',
          labelText: 'Серия и номер паспорта',
          value: '',
        },
        {
          id: 'passportWhoGive',
          placeholder: 'ТП №1 в гор. округе Тольятти...',
          labelText: 'Кем выдан',
          value: '',
        },
        {
          id: 'passportWhenGive',
          placeholder: '27/08/2019',
          labelText: 'Дата выдачи',
          value: '',
        },
        {
          id: 'city',
          placeholder: 'Тольятти',
          labelText: 'Город',
          value: '',
        },
        {
          id: 'region',
          placeholder: 'Московская',
          labelText: 'Регион/Область (если есть)',
          value: '',
        },
        {
          id: 'street',
          placeholder: 'Индустриальная',
          labelText: 'Улица',
          value: '',
        },
        {
          id: 'house',
          placeholder: '50',
          labelText: 'Дом',
          value: '',
        },
        {
          id: 'flat',
          placeholder: '44',
          labelText: 'Квартира',
          value: '',
        },
      ],
    };
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
      return !!(this.isValidSurname
        && this.isValidName
        && this.isValidBirthday
        && this.isValidPassportNumbers
        && this.isValidPassportWhoGive
        && this.isValidPassportWhenGive
        && this.isValidCity
        && this.isValidStreet
        && this.isValidHouse
      );
    },
    isValidSurname() {
      return isValid(this.data[0].value, 1, 99, regSurname);
    },
    isInvalidSurname() {
      if (this.data[0].value) {
        if (!isValid(this.data[0].value, 1, 99, regSurname)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorSurname = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorSurname = '';
      return true;
    },
    // eslint-disable-next-line consistent-return,vue/return-in-computed-property
    isValidName() {
      return isValid(this.data[1].value, 1, 99, regName);
    },
    // eslint-disable-next-line consistent-return,vue/return-in-computed-property
    isInvalidName() {
      if (this.data[1].value) {
        if (!isValid(this.data[1].value, 1, 99, regName)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorName = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorName = '';
      return true;
    },
    isValidPatronymic() {
      return isValid(this.data[2].value, 0, 99, regPatronymic);
    },
    isInvalidPatronymic() {
      if (this.data[2].value) {
        if (!isValid(this.data[2].value, 0, 99, regPatronymic)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorPatronymic = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorPatronymic = '';
      return true;
    },
    isValidBirthday() {
      return isValid(this.data[3].value, 9, 11, regDate);
    },
    isInvalidBirthday() {
      if (this.data[3].value) {
        if (!isValid(this.data[3].value, 9, 11, regDate)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorBirthday = errorDate;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorBirthday = '';
      return true;
    },
    isValidPassportNumbers() {
      return isValid(this.data[4].value, 9, 13, regNumbersAndSpace);
    },
    isInvalidPassportNumbers() {
      if (this.data[4].value) {
        if (!isValid(this.data[4].value, 9, 13, regNumbersAndSpace)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorPassportNumbers = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorPassportNumbers = '';
      return true;
    },
    isValidPassportWhoGive() {
      return isValid(this.data[5].value, 14, 256, regTextNumberMore);
    },
    isInvalidPassportWhoGive() {
      if (this.data[5].value) {
        if (!isValid(this.data[5].value, 14, 256, regTextNumberMore)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorPassportWhoGive = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorPassportWhoGive = '';
      return true;
    },
    isValidPassportWhenGive() {
      return isValid(this.data[6].value, 9, 11, regDate);
    },
    isInvalidPassportWhenGive() {
      if (this.data[6].value) {
        if (!isValid(this.data[6].value, 9, 11, regDate)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorPassportWhenGive = errorDate;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorPassportWhenGive = '';
      return true;
    },
    isValidCity() {
      return isValid(this.data[7].value, 1, 25, regName);
    },
    isInvalidCity() {
      if (this.data[7].value) {
        if (!isValid(this.data[7].value, 1, 25, regName)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorAddress = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorAddress = '';
      return true;
    },
    isValidRegion() {
      return isValid(this.data[8].value, 0, 25, regPatronymic);
    },
    isInvalidRegion() {
      if (this.data[8].value) {
        if (!isValid(this.data[8].value, 0, 25, regPatronymic)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorRegion = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorRegion = '';
      return true;
    },
    isValidStreet() {
      return isValid(this.data[9].value, 1, 50, regStreet);
    },
    isInvalidStreet() {
      if (this.data[9].value) {
        if (!isValid(this.data[9].value, 1, 50, regStreet)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorStreet = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorStreet = '';
      return true;
    },
    isValidHouse() {
      return isValid(this.data[10].value, 0, 10, regHouseNumber);
    },
    isInvalidHouse() {
      if (this.data[10].value) {
        if (!isValid(this.data[10].value, 0, 10, regHouseNumber)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorHouse = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorHouse = '';
      return true;
    },
    isValidFlat() {
      return isValid(this.data[11].value, 0, 10, regNumbersOnly);
    },
    isInvalidFlat() {
      if (this.data[11].value) {
        if (!isValid(this.data[11].value, 0, 10, regNumbersOnly)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorFlat = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorFlat = '';
      return true;
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
