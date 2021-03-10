<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>4</strong>/5
    </div>
  </div>
  <div class="insertData">
    <h2 class="insertData__header">Заполните все пустые поля</h2>
    <h5 class="insertData__text">Данные водительского удостоверения</h5>
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
  name: 'Step4',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    inputForSteps,
  },
  data() {
    return {
      data: [
        {
          id: 'driverNumbers',
          placeholder: '2233 444555',
          labelText: 'Сериия и номер В.У.',
        },
        {
          id: 'whenDriverLessonsGive',
          placeholder: '01/01/2020',
          labelText: 'Дата выдачи',
        },
        {
          id: 'whenDriverLessonsClose',
          placeholder: '01/01/2000',
          labelText: 'Срок выдачи',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
