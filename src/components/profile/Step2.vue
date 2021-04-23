<template>
  <div class="card">
    <div @click="setSecondStep" class="stepNumber">
      <div class="stepNumber__text">
        Шаг <strong>2</strong>/6
      </div>
    </div>
    <div class="choiceTaxi">
      <h2 class="choiceTaxi__header">Выберите агрегаторы такси через которые вы будите работать</h2>
      <div class="choiceTaxi__nameAgregators">
        <Checkbox
          v-for="item in allAgregators"
          :key="item.id"
          :id="item.htmlId"
          :value="item.id"
          :img="item.img"
          v-model="agregators"
        ></Checkbox>
      </div>
    </div>
    <div>
      <router-link class="routerLink" :to="{ name: 'Step3' }">
        <button
          @click="setSecondStep"
          :disabled="isEmpty"
          class="button routerLink">
          Выбрать
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import Checkbox from '@/components/profile/inputs/Checkbox';

export default {
  name: 'Step2',
  data() {
    return {
      agregators: [],
    };
  },
  components: {
    Checkbox,
  },
  computed: {
    ...mapGetters({
      allAgregators: 'profile/getAllAgregators',
    }),
    isEmpty() {
      return this.agregators.length === 0;
    },
  },
  methods: {
    ...mapActions({
      secondStepToState: 'profile/secondStepToState',
    }),
    setSecondStep() {
      this.secondStepToState(this.agregators);
    },
  },
};
</script>

<style lang="scss">
.choiceTaxi {
  padding: 20px;
  &__header {
    padding-bottom: 30px;
  }
}
.agregator {
  border-radius: 20px;
  border: 1px solid #C4C4C4;
  text-align: center;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  &__circle {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 24px;
    height: 24px;
    border: 2px solid #E1E1E1;
    border-radius: 50%;
    box-sizing: border-box;
  }
  &__img {
    height: 200px;
  }
}
#gett:checked + label .choiceTaxi__block .agregator,
#uber:checked + label .choiceTaxi__block .agregator,
#yandexTaxi:checked + label .choiceTaxi__block .agregator,
#didi:checked + label .choiceTaxi__block .agregator,
#citymobile:checked + label .choiceTaxi__block .agregator {
  border: 2px solid #48B5E2;
}
#gett:checked + label .choiceTaxi__block .agregator .agregator__circle,
#uber:checked + label .choiceTaxi__block .agregator .agregator__circle,
#yandexTaxi:checked + label .choiceTaxi__block .agregator .agregator__circle,
#citymobile:checked + label .choiceTaxi__block .agregator .agregator__circle,
#didi:checked + label .choiceTaxi__block .agregator .agregator__circle {
  background: url(/assets/images/step2/Group35.png);
  border: none;
}
</style>
