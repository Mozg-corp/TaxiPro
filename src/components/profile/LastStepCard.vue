<template>
<div>
  <el-card shadow="always" class="box-card lastStepCard">
    <div class="card-header">
      <span>{{ header }}</span>
      <el-button class="btn" type="text">Изменить</el-button>
    </div>
    <div
      v-if="Array.isArray(info)"
      v-for="item in info"
      :key="item"
      class="flex">
      <img class="imgMiniAgregators" width="100" :src="'/assets/images/step2/'+item+'.jpeg'" alt="">
    </div>
    <div
      v-else-if="info.length"
      class="text">
      {{info}}
    </div>
    <div
      v-else
      v-for="item in info"
      :key="item"
      class="text item">
      {{item}}
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'LastStepCard',
  props: {
    header: String,
    info: String,
  },
};
</script>

<style scoped>
.lastStepCard {
  margin: 10px 0;
}
.flex {
  display: inline-block;
}
.imgMiniAgregators {
  padding: 14px;
  margin: 10px;
  border: 1px solid #01B6E7;
  border-radius: 15px;
}
</style>
