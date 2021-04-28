<template>
  <div>
    <h3>Агрегаторы</h3>
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
          @change="eventInput(obj, agregator)"
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Agregators',
  computed: {
    ...mapGetters({
      allAgregators: 'profile/getAllAgregators',
      agregator: 'profile/getAgregatorsToAPI',
    }),
  },
  methods: {
    ...mapActions({
      secondStepToState: 'profile/secondStepToState',
    }),
    eventInput(data, d) {
      const index = d.indexOf(data.id);
      if (data.isChecked) {
        // eslint-disable-next-line vue/no-mutating-props
        this.agregator.push(data.id);
      } else {
        // eslint-disable-next-line vue/no-mutating-props
        this.agregator.splice(index, 1);
      }
      this.saveAgregators(this.agregator);
      return this.data;
    },
    saveAgregators(agr) {
      this.secondStepToState(Object.values(agr));
    },
  },
};
</script>

<style scoped>
.imgMiniAgregators {
  cursor: pointer;
}
</style>
