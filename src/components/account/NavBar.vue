<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo account"
    mode="horizontal"
    background-color="#E2F7FF"
    text-color="#000"
    active-text-color="#000"
    router="true"
  >
    <el-menu-item index="/account">
      Мои данные
    </el-menu-item>
    <el-menu-item index="/account/balance">
      Баланс
    </el-menu-item>
    <el-menu-item index="/account/withdrawal">
      Вывод средств
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  name: 'NavBar',
  mounted() {
  },
};
</script>

<style lang="scss">
@import "../../styles/vars", "../../styles/mixins";

.account {
  @include flex-between-center;
  & li a {
    text-decoration: none;
  }
}
</style>
