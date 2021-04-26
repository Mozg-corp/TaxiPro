<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item name="1">
      <template #title>
        <img class="el-image collapseImg" src="/assets/images/account/tarif.png" alt="">
        <h6 class="el-fontSize">МОЙ ТАРИФ</h6>
      </template>
      <Tariff
        :isButton="true"
        :item="myTariff"
      />
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <template #title>
        <img class="el-image collapseImg" src="/assets/images/account/taxi.png" alt="">
        <h6 class="el-fontSize">МОЙ АВТОМОБИЛЬ</h6>
      </template>
      <LastStepCard
        :header="Car.text"
        :typeText="Car.type"
        :info="Car"
        :isChanged="true"
      ></LastStepCard>
      <LastStepCard
        :header="license.text"
        :typeText="license.type"
        :info="license"
        :isChanged="true"
      ></LastStepCard>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
// eslint-disable-next-line import/extensions
import LastStepCard from '@/components/profile/LastStepCard';
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import Tariff from '@/components/account/index/components/Tariff';

export default {
  name: 'CollapseMenu',
  components: {
    LastStepCard,
    Tariff,
  },
  data() {
    return {
      activeNames: [],
    };
  },
  computed: {
    ...mapGetters({
      Car: 'profile/getCar',
      license: 'profile/getLicense',
      allTariff: 'profile/getAllTariffs',
      currentTariff: 'profile/getTariffNameToAPI',
    }),
    myTariff() {
      if (this.currentTariff === 'Старт') {
        return this.allTariff[0];
      }
      if (this.currentTariff === 'Комфорт') {
        return this.allTariff[1];
      }
      return this.allTariff[2];
    },
  },
  methods: {},
};
</script>

<style lang="scss">

.el-collapse {
  border: none;
}
.el-collapse-item {
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(50, 50, 50, 0.44);
  margin: 20px;
}
.el-collapse-item__header {
  border-radius: 10px;
  border: 1px solid #eee;
  justify-content: space-between;
  padding: 4px 10px;
  height: auto;
}
.collapseImg {
  height: 75px;
}
.el-collapse-item__arrow {
  margin: 0;
  font-size: 20px;
  color: #48B5E2;
}
.el-fontSize {
  font-size: 18px;
  color: #48B5E2;
}
.el-collapse-item__wrap {
  border-radius: 0 0 10px 10px;
}

.el-collapse-item:last-child {
  margin-bottom: 5px;
}

.el-collapse-item__content {
  padding-bottom: 0;
}

</style>
