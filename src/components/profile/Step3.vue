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
        <inputForSteps v-for="(item, index) in data"
        :key="index"
        :id="item.id"
        :placeholder="item.placeholder"
        :labelText="item.labelText"
        ></inputForSteps>
      </div>
    </div>
  </div>
  <div class="btn_step">
    <router-link :to="{ name: 'Step4' }"  class="button routerLink">Далее</router-link>
  </div>
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import inputForSteps from '@/components/profile/inputForSteps';

export default {
  name: 'Step3',
  data() {
    return {
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
  components: {
    // eslint-disable-next-line vue/no-unused-components
    inputForSteps,
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
</style>
