<template>
  <div class="card">
    <div @click="setSecondStep" class="stepNumber">
      <div class="stepNumber__text">
        Шаг <strong>2</strong>/5
      </div>
    </div>
    <div class="choiceTaxi">
      <h2 class="choiceTaxi__header">Выберите агрегаторы такси через которые вы будите работать</h2>
      <div class="choiceTaxi__nameAgregators">
        <input
          class="inputNone"
          type="checkbox"
          id="gett"
          v-model="agregators"
          value="gett">
        <label for="gett">
          <div class="choiceTaxi__block">
            <div class="agregator">
              <div class="agregator__circle"></div>
              <img class="agregator__img" src="/assets/images/step2/gett.jpeg" alt="gett">
            </div>
          </div>
        </label>
        <input
          class="inputNone"
          type="checkbox"
          id="uber"
          v-model="agregators"
          value="uber">
        <label for="uber">
        <div class="choiceTaxi__block">
          <div class="agregator">
            <div class="agregator__circle"></div>
            <img class="agregator__img" src="/assets/images/step2/uber.jpeg" alt="uber">
          </div>
        </div>
        </label>
        <input
          class="inputNone"
          type="checkbox"
          id="yandexTaxi"
          v-model="agregators"
          value="yandexTaxi">
        <label for="yandexTaxi">
        <div class="choiceTaxi__block">
          <div class="agregator">
            <div class="agregator__circle"></div>
            <img
              class="agregator__img"
              src="/assets/images/step2/yandexTaxi.jpeg"
              alt="Яндекс Такси"
            >
          </div>
        </div>
        </label>
        <input
          class="inputNone"
          type="checkbox"
          id="citymobile"
          v-model="agregators"
          value="citymobile">
        <label for="citymobile">
        <div class="choiceTaxi__block">
          <div class="agregator">
            <div class="agregator__circle"></div>
            <img class="agregator__img" src="/assets/images/step2/citymobile.jpeg" alt="ситимобил">
          </div>
        </div>
        </label>
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
import { mapActions } from 'vuex';

export default {
  name: 'Step2',
  data() {
    return {
      agregators: [],
    };
  },
  computed: {
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
#gett:checked + label .choiceTaxi__block .agregator {
  border: 2px solid #48B5E2;
}
#gett:checked + label .choiceTaxi__block .agregator .agregator__circle {
  background: #48B5E2;
}
#uber:checked + label .choiceTaxi__block .agregator {
  border: 2px solid #48B5E2;
}
#uber:checked + label .choiceTaxi__block .agregator .agregator__circle {
  background: #48B5E2;
}
#yandexTaxi:checked + label .choiceTaxi__block .agregator {
  border: 2px solid #48B5E2;
}
#yandexTaxi:checked + label .choiceTaxi__block .agregator .agregator__circle {
  background: #48B5E2;
}
#citymobile:checked + label .choiceTaxi__block .agregator {
  border: 2px solid #48B5E2;
}
#citymobile:checked + label .choiceTaxi__block .agregator .agregator__circle {
  background: #48B5E2;
}
</style>
