<template>
<div>
  <el-card shadow="always" class="box-card lastStepCard">
    <div class="card-header">
      <span>{{ header }}</span>
      <el-button class="btn" type="text">Изменить</el-button>
    </div>
    <div
      v-if="typeText === 'image'"
      v-for="item in info"
      :key="item"
      class="flex">
      <img class="imgMiniAgregators" width="100" :src="'/assets/images/step2/'+item+'.jpeg'" alt="">
    </div>
    <div
      v-else-if="typeText === 'big'"
      v-for="item in info"
      :key="item"
      class="text item">
      {{item.text}}
      <p>{{item.value}}</p>
    </div>
    <div
      v-else
      class="text">
      {{info}}
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
    typeText: String,
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
  object-fit: contain;
  padding: 14px;
  margin: 10px;
  border: 1px solid #01B6E7;
  border-radius: 15px;
  height: 63px;
}
</style>
