<template>
  <div class="card">
    <div class="stepNumber">
      <div class="stepNumber__text">
        Шаг <strong>1</strong>/6
      </div>
    </div>
    <div class="choiceTariff">
      <h3 class="choiceTariff__header">Выберите тариф</h3>
      <ul class="choiceTariff__ul">
        <div class="flex pb10">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6008 2.41018L6.74998 11.5862C6.48445 11.8614 6.13589 12 5.78733 12C5.43878 12 5.09022 11.8614 4.82469 11.5862L0.399419 6.99817C-0.13314 6.44629 -0.13314 5.55397 0.399419 5.00209C0.931728 4.44995 1.79215 4.44995 2.32471 5.00209L5.78733 8.59203L13.6755 0.414105C14.2078 -0.138035 15.0682 -0.138035 15.6008 0.414105C16.1331 0.965987 16.1331 1.85804 15.6008 2.41018Z" fill="#48B5E2"/>
          </svg>
        <li class="choiceTariff__list">Никаких процентов от заказа - только абонентская плата</li>
        </div>
        <div class="flex pb10">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6008 2.41018L6.74998 11.5862C6.48445 11.8614 6.13589 12 5.78733 12C5.43878 12 5.09022 11.8614 4.82469 11.5862L0.399419 6.99817C-0.13314 6.44629 -0.13314 5.55397 0.399419 5.00209C0.931728 4.44995 1.79215 4.44995 2.32471 5.00209L5.78733 8.59203L13.6755 0.414105C14.2078 -0.138035 15.0682 -0.138035 15.6008 0.414105C16.1331 0.965987 16.1331 1.85804 15.6008 2.41018Z" fill="#48B5E2"/>
        </svg>
        <li class="choiceTariff__list">Прямое подключение водителей
          к агрегаторам такси</li>
        </div>
        <div class="flex pb10">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.6008 2.41018L6.74998 11.5862C6.48445 11.8614 6.13589 12 5.78733 12C5.43878 12 5.09022 11.8614 4.82469 11.5862L0.399419 6.99817C-0.13314 6.44629 -0.13314 5.55397 0.399419 5.00209C0.931728 4.44995 1.79215 4.44995 2.32471 5.00209L5.78733 8.59203L13.6755 0.414105C14.2078 -0.138035 15.0682 -0.138035 15.6008 0.414105C16.1331 0.965987 16.1331 1.85804 15.6008 2.41018Z" fill="#48B5E2"/>
        </svg>
        <li class="choiceTariff__list">Защита личных данных</li>
        </div>
      </ul>
    </div>
    <div class="tariffs">
      <Radio
        v-for="item in allTariffs"
        :key="item.title"
        :item="item"
        :value="item.title"
        v-model="tariffName"
      ></Radio>
    </div>
    <div class="btn_step">
      <router-link
        :to="{ name: 'Step2' }"
        class="button routerLink "
      @click="setFirstStep"
      >
        Выбрать тариф {{ tariffName }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import Radio from '@/components/profile/inputs/Radio';

export default {
  name: 'Step1',
  components: {
    Radio,
  },
  data() {
    return {
      tariffName: 'Старт',
    };
  },
  computed: {
    ...mapGetters({
      allTariffs: 'profile/getAllTariffs',
    }),
  },
  methods: {
    ...mapActions({
      setFirstStepToState: 'profile/setFirstStepToState',
    }),
    setFirstStep() {
      this.setFirstStepToState(this.tariffName);
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/vars", "../../styles/mixins";

.stepNumber {
  background: #E2F7FF;
  padding: 25px;
}

.choiceTariff {
  padding: 25px;
  &__header {
    padding-bottom: 30px;
  }
  &__list {
    padding-left: 10px;
  }
}
.tariffs {
  display: flex;
  overflow: scroll;
}
.tariff{
  min-width: 350px;
  margin: 6px;
}
.inputNone{
  display:none;
}
#start:checked + label .tariff .tariff__block .cardTariff {
  background: #48B5E2;
  color: #fff;
}
#start:checked + label .tariff .tariff__block .cardTariff .cardTariff__header {
  color: #fff;
}
#start:checked + label .tariff .tariff__block .cardTariff .cardTariff__ok {
  background: url(/assets/images/step2/Group36.png);
  border: none;
}
#start:checked + label .tariff .tariff__block .cardTariff .cardTariff__circle {
  background: #fff;
}
#comfort:checked + label .tariff .tariff__block .cardTariff {
  background: #48B5E2;
  color: #fff;
}
#comfort:checked + label .tariff .tariff__block .cardTariff .cardTariff__header {
  color: #fff;
}
#comfort:checked + label .tariff .tariff__block .cardTariff .cardTariff__ok {
  background: url(/assets/images/step2/Group36.png);
  border: none;
}
#comfort:checked + label .tariff .tariff__block .cardTariff .cardTariff__circle {
  background: #fff;
}
#premium:checked + label .tariff .tariff__block .cardTariff {
  background: #48B5E2;
  color: #fff;
}
#premium:checked + label .tariff .tariff__block .cardTariff .cardTariff__header {
  color: #fff;
}
#premium:checked + label .tariff .tariff__block .cardTariff .cardTariff__ok {
  background: url(/assets/images/step2/Group36.png);
  border: none;
}
#premium:checked + label .tariff .tariff__block .cardTariff .cardTariff__circle {
  background: #fff;
}
.cardTariff {
  height: 285px;
  background: #FFFFFF;
  box-shadow: 0px -4px 10px rgba(167, 156, 156, 0.1), 0px 5px 10px rgba(167, 156, 156, 0.2);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  &__ok {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 24px;
    height: 24px;
    border: 1px solid #E1E1E1;
    border-radius: 50%;
    box-sizing: border-box;
  }
  &__top {
    text-align: center;
  }
  &__header {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #48B5E2;
  }
  &__text {
    margin-top: 12px;
    margin-bottom: 30px;
  }
  &__circle {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    background: #02BAE8;
    margin-right: 10px;
    margin-top: 3px;
    flex-basis:12px;
  }
  &__li {
    flex-basis: auto;
  }
}

.btn_step {
  text-align: center;
  margin-top: 40px;
}

.flex {
  display: flex;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 10fr;
}
.pb10 {
  padding-bottom: 10px;
}

</style>
