<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>5</strong>/5
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Данные Т.С.</h5>
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
    <router-link :to="{ name: 'Step5' }"  class="button routerLink">Далее</router-link>
  </div>
</div>
</template>

<script>
// eslint-disable-next-line import/extensions
import inputForSteps from '@/components/profile/inputForSteps';

export default {
  name: 'Step5',
  data() {
    return {
      data: [
        {
          id: 'brand',
          placeholder: 'KIA',
          labelText: 'Марка автомобиля',
        },
        {
          id: 'model',
          placeholder: 'RIO',
          labelText: 'Модель автомобиля',
        },
        {
          id: 'year',
          placeholder: '2019',
          labelText: 'Год автомобиля',
        },
        {
          id: 'color',
          placeholder: 'черный',
          labelText: 'Цвет автомобиля',
        },
        {
          id: 'carNumber',
          placeholder: 'е756уе150',
          labelText: 'Регистрационный знак ТС',
        },
        {
          id: 'passportWhoGive',
          placeholder: 'ТП №1 в гор. округе Тольятти...',
          labelText: 'Кем выдан',
        },
        {
          id: 'VIN',
          placeholder: 'vyfu65566fufi76uff6u',
          labelText: 'VIN',
        },
        {
          id: 'numberСertificate',
          placeholder: '54 67 № 890909',
          labelText: 'Номер свидетельства ТС',
        },
        {
          id: 'license',
          placeholder: '0765643',
          labelText: 'Номер лицензии',
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

</style>
