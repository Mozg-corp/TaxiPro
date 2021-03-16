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
                 :class="{'inputForSteps__correct': isValidSurname}"
                 type="text"
                 :id="data[0].id"
                 :placeholder="data[0].placeholder"
                 v-model="surname"
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[1].id">{{ data[1].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidName}"
                 type="text"
                 :id="data[1].id"
                 :placeholder="data[1].placeholder"
                 v-model="name"
          >
        </div><div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[2].id">{{ data[2].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidPatronymic}"
               type="text"
               :id="data[2].id"
               :placeholder="data[2].placeholder"
               v-model="patronymic"
        >
      </div><div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[3].id">{{ data[3].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidBirthday}"
               type="text"
               :id="data[3].id"
               :placeholder="data[3].placeholder"
               v-model="birthday"
               v-date
        >
      </div><div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[4].id">{{ data[4].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidPassportNumbers}"
               type="text"
               :id="data[4].id"
               :placeholder="data[4].placeholder"
               v-model="passportNumber"
               v-passport-numbers
        >
      </div><div class="inputForSteps">
        <label class="inputForSteps__label" :for="data[5].id">{{ data[5].labelText }}</label>
        <input class="inputForSteps__input"
               :class="{'inputForSteps__correct': isValidPassportWhoGive}"
               type="text"
               :id="data[5].id"
               :placeholder="data[5].placeholder"
               v-model="passportWhoGive"
        >
      </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[6].id">{{ data[6].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidPassportWhenGive}"
                 type="text"
                 :id="data[6].id"
                 :placeholder="data[6].placeholder"
                 v-model="passportWhenGive"
                 v-date
          >
        </div>
        <div class="inputForSteps">
          <label class="inputForSteps__label" :for="data[7].id">{{ data[7].labelText }}</label>
          <input class="inputForSteps__input"
                 :class="{'inputForSteps__correct': isValidAddress}"
                 type="text"
                 :id="data[7].id"
                 :placeholder="data[7].placeholder"
                 v-model="address"
          >
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

<script>
import date from '@/directives/date';
import passportNumbers from '@/directives/passportNumbers';

export default {
  name: 'Step3',
  data() {
    return {
      surname: '',
      name: '',
      patronymic: '',
      birthday: '',
      passportNumber: '',
      passportWhoGive: '',
      passportWhenGive: '',
      address: '',
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
      return this.surname && this.surname.length > 1 && this.regSurname(this.surname);
    },
    isValidName() {
      return this.name && this.name.length > 1 && this.regName(this.name);
    },
    isValidPatronymic() {
      return this.patronymic && this.patronymic.length > 1 && this.regPatronymic(this.patronymic);
    },
    isValidBirthday() {
      return this.birthday && this.birthday.length === 10 && this.regBirthday(this.birthday);
    },
    isValidPassportNumbers() {
      return this.passportNumber && this.passportNumber.length > 9 && this.regPassportNumber(this.passportNumber);
    },
    isValidPassportWhoGive() {
      return this.passportWhoGive && this.passportWhoGive.length > 14 && this.regPassportWhoGive(this.passportWhoGive);
    },
    isValidPassportWhenGive() {
      return this.passportWhenGive
        && this.passportWhenGive.length === 10
        && this.regPassportWhenGive(this.passportWhenGive);
    },
    isValidAddress() {
      return this.address && this.address.length > 14 && this.regAddress(this.address);
    },
  },
  methods: {
    regSurname(surname) {
      const reg = /^\s*[A-ZА-Яa-zа-яёЁ][A-ZА-Яa-zа-яёЁ]+('[a-zа-яёЁ]+|-[A-ZА-Яa-zа-яёЁ][A-ZА-Яa-zа-яёЁ]+)?\s*$/u;
      // eslint-disable-next-line no-unused-vars
      return reg.test(surname);
    },
    regName(name) {
      const reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(name);
    },
    regPatronymic(patronymic) {
      const reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(patronymic);
    },
    regBirthday(birthday) {
      const reg = /^[0-9/]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(birthday);
    },
    regPassportNumber(passportNumber) {
      const reg = /^[0-9 ]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(passportNumber);
    },
    regPassportWhoGive(passportWhoGive) {
      const reg = /^[a-zA-Zа-яА-ЯёЁ'0-9][a-zA-Z-а-яА-ЯёЁ'0-9#№,. ]+[a-zA-Zа-яА-ЯёЁ0-9',.]?$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(passportWhoGive);
    },
    regPassportWhenGive(passportWhenGive) {
      const reg = /^[0-9/]+$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(passportWhenGive);
    },
    regAddress(address) {
      const reg = /^[a-zA-Zа-яА-ЯёЁ'0-9][a-zA-Z-а-яА-ЯёЁ'0-9#№,. ]+[a-zA-Zа-яА-ЯёЁ0-9',.]?$/;
      // eslint-disable-next-line no-unused-vars
      return reg.test(address);
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
}
</style>
