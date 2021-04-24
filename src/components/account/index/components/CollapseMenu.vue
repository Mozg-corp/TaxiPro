<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item name="1">
      <template #title>
        <img class="el-image" src="/assets/images/account/tarif.png" alt="">
        <h6 class="el-fontSize">МОЙ ТАРИФ</h6>
      </template>
      <div>more...</div>
    </el-collapse-item>
    <el-collapse-item title="Feedback" name="2">
      <template #title>
        <img class="el-image" src="/assets/images/account/taxi.png" alt="">
        <h6 class="el-fontSize">МОЙ АВТОМОБИЛЬ</h6>
      </template>
      <div>more...</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'CollapseMenu',
  data() {
    return {
      activeNames: [],
    };
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
.el-image {
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

</style>
