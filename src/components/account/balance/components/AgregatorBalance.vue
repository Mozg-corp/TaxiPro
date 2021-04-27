<template>
  <div class="AgregatorBalance">
    <img class="AgregatorBalance__img" :src="img" alt="">
    <div class="AgregatorBalance__balance">{{balance}} ₽</div>
  </div>
</template>

<script>
export default {
  name: 'AgregatorBalance',
  props: {
    img: String,
    balance: Number,
  },
};
</script>

<style lang="scss">
.AgregatorBalance {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #48B5E2;
  border-radius: 15px;
  margin-bottom: 25px;
  &__img {
    height: 50px;
    width: 140px;
    object-fit: contain;
  }
  &__balance {
    font-size: 24px;
    font-weight: 500;
    color: #48B5E2;
    align-self: center;
  }
}
</style>
