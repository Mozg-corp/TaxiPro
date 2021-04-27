<template>
<div>
  <BackButton />
  <el-collapse v-model="activeNames">
    <el-collapse-item name="1">
      <template #title>
        <img class="el-image collapseImg" src="/assets/images/account/tarif.png" alt="">
        <h6 class="el-fontSize">МОЙ ТАРИФ</h6>
      </template>
      <Tariff
        :isButton="false"
        :item="myTariff"
      />
    </el-collapse-item>
  </el-collapse>
  <div class="changeTariffForNextMonth">
    <div class="changeTariffForNextMonth__header">
      <h2 class="changeTariffForNextMonth__heading">Изменить текущий тариф</h2>
      <p class="changeTariffForNextMonth__text">
        *Тариф будет изменён с 1 числа следующего месяца
      </p>
    </div>
    <div class="changeTariffForNextMonth__collapse">
      <CheckboxTariff
        v-for="item in notMyTariff"
        v-model="tariff"
        :value="item.title"
        :key="item"
        :item="item"
      />
    </div>
    <router-link
      :to="{ name: 'index' }"
      class="button routerLink"
    >
      <button
        @click="setTariffToNextMonth"
        :disabled="!isAllInputsCorrect"
        class="button routerLink"
      >Сохранить новый тариф
      </button>
    </router-link>
  </div>
</div>
</template>

<script>

// eslint-disable-next-line import/extensions
import BackButton from '@/components/account/button/BackButton';
// eslint-disable-next-line import/extensions
import Tariff from '@/components/account/index/components/Tariff';
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import CheckboxTariff from '@/components/account/CheckboxTariff';

export default {
  name: 'ChangeBalance',
  data() {
    return {
      activeNames: ['1'],
      tariff: [],
    };
  },
  components: {
    BackButton,
    Tariff,
    CheckboxTariff,
  },
  computed: {
    ...mapGetters({
      allTariff: 'profile/getAllTariffs',
      currentTariff: 'profile/getTariffNameToAPI',
    }),
    isAllInputsCorrect() {
      if (this.tariff.length === 1) {
        return true;
      }
      return false;
    },
    myTariff() {
      if (this.currentTariff === 'Старт') {
        return this.allTariff[0];
      }
      if (this.currentTariff === 'Комфорт') {
        return this.allTariff[1];
      }
      return this.allTariff[2];
    },
    notMyTariff() {
      if (this.currentTariff === 'Старт') {
        return [this.allTariff[1], this.allTariff[2]];
      }
      if (this.currentTariff === 'Комфорт') {
        return [this.allTariff[0], this.allTariff[2]];
      }
      return [this.allTariff[0], this.allTariff[1]];
    },
  },
  methods: {
    setTariffToNextMonth() {
      console.log(this.tariff);
    },
  },
};
</script>

<style lang="scss">

.changeTariffForNextMonth {
  padding: 25px;
  &__header {
    width: 345px;
  }
  &__text {
    font-size: 15px;
    margin: 5px 0;
  }
  &__collapse {
    margin: 20px 0;
  }
}

</style>
