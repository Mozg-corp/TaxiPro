<template>
  <div class="backBtn">
    <a class="backBtn__link" @click="$router.back()">
      <img class="backBtn__img" src="/assets/images/account/Vector.png" alt="">назад
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
};
</script>

<style lang="scss">
.backBtn {
  padding: 25px;
  display: inline-block;
  &__link {
    cursor: pointer;
    text-decoration: none;
    color: #48B5E2;
    display: flex;
    font-size: 17px;
  }
  &__img {
    object-fit: contain;
    margin-right: 8px;
  }
}
</style>
