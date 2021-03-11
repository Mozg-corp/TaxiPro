<template>
<div class="inputForSteps">
  <label class="inputForSteps__label" :for="id">{{ labelText }}</label>
  <input class="inputForSteps__input"
         type="text"
         :id="id"
         :placeholder="placeholder"
         v-model="inputBody"
  >
</div>
</template>

<script>
export default {
  data() {
    return {
      inputBody: '',
    };
  },
  name: 'inputForSteps',
  props: {
    key: Number,
    id: String,
    labelText: String,
    placeholder: String,
  },
  watch: {
    inputBody() {
      console.log(this.id)
      let el = document.getElementById(this.id)
      if (this.inputBody && this.inputBody.length > 1) {
        el.classList.add("inputForSteps__correct")
      } else {
        el.classList.remove("inputForSteps__correct")
      }
    }
  },
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
  &__correct {
    border: 1px solid blue;
  }
}
</style>
