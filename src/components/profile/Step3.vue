<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>3</strong>/5
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
                 :class="{'inputForSteps__correct': isValidSurname,
          'inputForSteps__error': !isInvalidSurname}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="surname"
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
                 v-model="name"
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
               v-model="patronymic"
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
               v-model="birthday"
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
               v-model="passportNumber"
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
               v-model="passportWhoGive"
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
                 v-model="passportWhenGive"
                 v-date
          >
          <span class="inputForSteps__errorText"
                v-if="errorPassportWhenGive">
            {{ errorPassportWhenGive }}
          </span>
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[7].id">{{ data[7].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidAddress,
                 'inputForSteps__error': !isInvalidAddress}"
                 type="text"
                 :id="data[7].id"
                 :placeholder="data[7].placeholder"
                 v-model="address"
          >
          <span class="inputForSteps__errorText"
                v-if="errorAddress">
            {{ errorAddress }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="btn_step">
    <router-link
      :to="{ name: 'Step4' }"
      class="button routerLink"
    >
      <button
        :disabled="!isAllInputsCorrect"
        class="button routerLink"
      >Далее
      </button>
    </router-link>
  </div>
</div>
</template>
<!--suppress JSAnnotator, JSUnusedGlobalSymbols -->
<script>
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';
// eslint-disable-next-line import/named
import {
  isValid,
  regSurname,
  regName,
  regDate,
  regNumbersAndSpace,
  regTextNumberMore,
} from '@/store/regularExp';
import { errorText, errorDate } from '@/store/errorsText';

// eslint-disable-next-line no-unused-vars
export default {
  name: 'Step3',
  data() {
    return {
      surname: '',
      errorSurname: '',
      name: '',
      errorName: '',
      patronymic: '',
      errorPatronymic: '',
      birthday: '',
      errorBirthday: '',
      passportNumber: '',
      errorPassportNumbers: '',
      passportWhoGive: '',
      errorPassportWhoGive: '',
      passportWhenGive: '',
      errorPassportWhenGive: '',
      address: '',
      errorAddress: '',
      data: [
        {
          id: 'surname',
          placeholder: 'Иванов',
          labelText: 'Фамилия',
        },
        {
          id: 'name',
          placeholder: 'Петр',
          labelText: 'Имя',
        },
        {
          id: 'patronymic',
          placeholder: 'Петрович',
          labelText: 'Отчество (если есть)',
        },
        {
          id: 'birthday',
          placeholder: '27/08/1980',
          labelText: 'Дата рождения',
        },
        {
          id: 'passportNumber',
          placeholder: '8807 198022',
          labelText: 'Серия и номер паспорта',
        },
        {
          id: 'passportWhoGive',
          placeholder: 'ТП №1 в гор. округе Тольятти...',
          labelText: 'Кем выдан',
        },
        {
          id: 'passportWhenGive',
          placeholder: '27/08/2019',
          labelText: 'Дата выдачи',
        },
        {
          id: 'address',
          placeholder: 'Россия, г. Тольятти, ул. Индустриальная, д.6, кв.100',
          labelText: 'Адрес регистрации',
        },
      ],
    };
  },
  directives: {
    date,
    passportNumbers,
  },
  computed: {
    isAllInputsCorrect() {
      return !!(this.isValidSurname
        && this.isValidName
        && this.isValidPatronymic
        && this.isValidBirthday
        && this.isValidPassportNumbers
        && this.isValidPassportWhoGive
        && this.isValidPassportWhenGive
        && this.isValidAddress
      );
    },
    isValidSurname() {
      return isValid(this.surname, 1, 99, regSurname);
    },
    isInvalidSurname() {
      if (this.surname) {
        if (!isValid(this.surname, 1, 99, regSurname)) {
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
      return isValid(this.name, 1, 99, regName);
    },
    // eslint-disable-next-line consistent-return,vue/return-in-computed-property
    isInvalidName() {
      if (this.name) {
        if (!isValid(this.name, 1, 99, regName)) {
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
      return isValid(this.patronymic, 1, 99, regName);
    },
    isInvalidPatronymic() {
      if (this.patronymic) {
        if (!isValid(this.patronymic, 1, 99, regName)) {
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
      return isValid(this.birthday, 9, 11, regDate);
    },
    isInvalidBirthday() {
      if (this.birthday) {
        if (!isValid(this.birthday, 9, 11, regDate)) {
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
      return isValid(this.passportNumber, 9, 13, regNumbersAndSpace);
    },
    isInvalidPassportNumbers() {
      if (this.passportNumber) {
        if (!isValid(this.passportNumber, 9, 13, regNumbersAndSpace)) {
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
      return isValid(this.passportWhoGive, 14, 256, regTextNumberMore);
    },
    isInvalidPassportWhoGive() {
      if (this.passportWhoGive) {
        if (!isValid(this.passportWhoGive, 14, 256, regTextNumberMore)) {
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
      return isValid(this.passportWhenGive, 9, 11, regDate);
    },
    isInvalidPassportWhenGive() {
      if (this.passportWhenGive) {
        if (!isValid(this.passportWhenGive, 9, 11, regDate)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorPassportWhenGive = errorDate;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorPassportWhenGive = '';
      return true;
    },
    isValidAddress() {
      return isValid(this.address, 14, 256, regTextNumberMore);
    },
    isInvalidAddress() {
      if (this.address) {
        if (!isValid(this.address, 14, 256, regTextNumberMore)) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.errorAddress = errorText;
          return false;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.errorAddress = '';
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
</style>
