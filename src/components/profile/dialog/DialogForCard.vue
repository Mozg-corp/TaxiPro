<template>
  <el-dialog
    :before-close="handleClose"
    title="Изменить данные"
    width="40%">
    <div
      v-if="typeText === 'license'"
    >
      <InputForSteps
        :directive="data.directive"
        :item="data"
        v-model="data.value"
      ></InputForSteps>
      <div style="text-align: end">
        <span class="dialog-footer">
          <el-button type="primary" @click="closeDialog">Отмена</el-button>
          <el-button
            type="success"
            @click="saveLicense(data.value)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
    <div
      v-else-if="(typeText === 'passport')
      || (typeText === 'car')
      || (typeText === 'driverLessons')"
    >
      <div
        v-for="item in data.value"
        :key="item"
      >
        <InputForSteps
          :directive="item.directive"
          :item="item"
          v-model="item.value"
        ></InputForSteps>
      </div>
      <div style="text-align: end">
        <span class="dialog-footer">
          <el-button type="primary" @click="closeDialog">Отмена</el-button>
          <el-button
            type="success"
            @click="savePassport(data.value)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
    <div
      v-else-if="typeText === 'agregators'"
    >
      <div class="popupFlexLabel">
        <div
          v-for="obj in allAgregators"
          :key="obj"
          class="inlineBlock">
          <input
            type="checkbox"
            class="inputNone"
            :id="obj.htmlId"
            v-model="obj.isChecked"
            @change="eventInput(obj, data.value)"
          >
          <label :for="obj.htmlId">
            <img
              class="imgMiniAgregators"
              :src="obj.img"
              alt=""
            >
          </label>
        </div>
      </div>
      <div style="text-align: end">
        <span class="dialog-footer">
          <el-button type="primary" @click="closeDialog">Отмена</el-button>
          <el-button
            type="success"
            @click="saveAgregators(data.value)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
    <div
      v-else
    >
      <div class="popupFlexLabel">
        <div
          class="inlineBlock"
          v-for="tariff in allTariffs"
          :key="tariff.htmlId"
        >
          <input
            type="radio"
            class="inputNone"
            :id="tariff.htmlId"
            v-model="tariffName"
            :value="tariff.title"
          >
          <label
            :for="tariff.htmlId"
            class="labelPopupTariff"
          >
            {{ tariff.title }}
          </label>
        </div>
      </div>
      <div style="text-align: end; margin-top: 30px">
        <span class="dialog-footer">
          <el-button type="primary" @click="closeDialog">Отмена</el-button>
          <el-button
            type="success"
            @click="saveTariff(tariffName)"
          >
            Сохранить
          </el-button>
        </span>
      </div>
    </div>
  </el-dialog>
</template>

<script>
// eslint-disable-next-line import/extensions
import InputForSteps from '@/components/profile/inputs/InputForSteps';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'DialogForCard',
  emits: ['update:modelValue'],
  props: [
    'typeText',
    'data',
  ],
  data() {
    return {
      onChangeHandler: this.modelValue,
      tariffName: '',
      license: this.data.value,
    };
  },
  mounted() {
    this.tariffName = this.getTariff;
  },
  components: {
    InputForSteps,
  },
  methods: {
    ...mapActions({
      setFirstStepToState: 'profile/setFirstStepToState',
      secondStepToState: 'profile/secondStepToState',
      setThirdStepToState: 'profile/setThirdStepToState',
      setFourStepToState: 'profile/setFourStepToState',
      setFiveStepToState: 'profile/setFiveStepToState',
      setLicenseToState: 'profile/setLicenseToState',
    }),
    saveAgregators(agr) {
      this.secondStepToState(Object.values(agr));
      this.closeDialog();
    },
    saveTariff(tariff) {
      this.setFirstStepToState(tariff);
      this.closeDialog();
    },
    savePassport(data) {
      if (data.length === 12) {
        this.setThirdStepToState(data);
      } else if (data.length === 3) {
        this.setFourStepToState(data);
      } else {
        this.setFiveStepToState(data);
      }
      this.closeDialog();
    },
    eventInput(data, d) {
      const index = d.indexOf(data.id);
      if (data.isChecked) {
        // eslint-disable-next-line vue/no-mutating-props
        this.data.value.push(data.id);
      } else {
        // eslint-disable-next-line vue/no-mutating-props
        this.data.value.splice(index, 1);
      }
      return this.data;
    },
    saveLicense(data) {
      this.setLicenseToState(data);
      this.closeDialog();
    },
    closeDialog() {
      this.$emit('update:modelValue', false);
    },
    handleClose() {
      this.closeDialog();
    },
  },
  computed: {
    ...mapGetters({
      allTariffs: 'profile/getAllTariffs',
      allAgregators: 'profile/getAllAgregators',
      getTariff: 'profile/getTariff',
    }),
  },
};
</script>

<style scoped>

</style>
