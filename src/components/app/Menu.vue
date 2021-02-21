<template>
  <div class="container main__menu">
    <el-menu default-active="/" :collapse="isCollapse" router>
      <el-menu-item index="/account/login">
        <i class="el-icon-user"></i>
        <template #title>Вход</template>
      </el-menu-item>

      <el-menu-item index="/account">
        <i class="el-icon-user-solid"></i>
        <template #title>Личный кабинет</template>
      </el-menu-item>

      <el-menu-item index="/account/profile">
        <i class="el-icon-s-order"></i>
        <template #title>Профиль</template>
      </el-menu-item>

      <el-menu-item index="/account/withdrawal">
        <i class="el-icon-s-finance"></i>
        <template #title>Вывод средств</template>
      </el-menu-item>

      <el-menu-item index="/account/history">
        <i class="el-icon-s-management"></i>
        <template #title>История вывода средств</template>
      </el-menu-item>

      <el-menu-item index="/landing">
        <i class="el-icon-s-platform"></i>
        <template #title>Лэндинг</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  props: {
    isCollapse: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/vars", "../../styles/mixins";
.main__menu {
  @include absolute-top-center;
  padding: 0;

  .el-menu {
    z-index: 100;
    background: $Background;
    border: 1px solid $Border;

    &-item {
      @include flex-none-center;

      i {
        margin-right: 20px;
      }
    }

    &--collapse {
      z-index: 50;
      border: none;
      margin-left: -64px;
    }
  }
}
</style>
