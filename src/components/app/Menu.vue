<template>
  <div class="container main__menu" :class="{'main__menu_hide': isCollapse}">
    <el-menu default-active="/" :collapse="isCollapse" router>
      <el-menu-item index="/account/login">
        <template #title>Вход</template>
      </el-menu-item>

      <el-menu-item index="/account">
        <template #title>Личный кабинет</template>
      </el-menu-item>

      <el-menu-item index="/account/profile">
        <template #title>Профиль</template>
      </el-menu-item>

      <el-menu-item index="/account/withdrawal">
        <template #title>Вывод средств</template>
      </el-menu-item>

      <el-menu-item index="/account/history">
        <template #title>История вывода средств</template>
      </el-menu-item>

      <el-menu-item index="/landing">
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

  &_hide {
    display: none;
  }

  .el-menu {
    z-index: 100;
    background: $Background;
    border: 1px solid $Border;

    &-item {
      @include flex-none-center;
      font-weight: 600;

      &:before {
        content: '';
        width: 20px;
        display: block;
      }
    }
  }
}
</style>
