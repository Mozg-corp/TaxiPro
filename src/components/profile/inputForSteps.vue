<template>
<div class="inputForSteps">
  <label class="inputForSteps__label" :for="id">{{ labelText }}</label>
  <input class="inputForSteps__input" type="text" :id="id" :placeholder="placeholder">
</div>
</template>

<script>
export default {
  name: 'inputForSteps',
  props: ['id', 'labelText', 'placeholder'],
};
</script>

<style lang="scss">
.inputForSteps {
  margin-bottom: 15px;
  position: relative;
  &__label {
    position: absolute;
    background: #fff;
    font-size: 10px;
    left: 15px;
    top: -6px;
    padding: 0 5px;   }
  &__input {
    width: 100%;
    border: 1px solid #000000;
    border-radius: 6px;
    box-sizing: border-box;
  }
}
</style>
