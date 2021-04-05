<template>
<div class="card">
  <div class="stepNumber">
    <div class="stepNumber__text">
      Шаг <strong>6</strong>/6
    </div>
  </div>
  <div class="addImg">
    <h1 class="addImg__header">Добавьте фотографии</h1>
    <div class="addImg__passport">
      <div class="downloadPassport">
        <h2 class="downloadPassport__header">Паспорт</h2>
        <div class="downloadPassport__body">
          <div class="downloadPassport__img">
            <input type="file" class="downloadPassport__input">
            <img src="#" alt="" class="downloadPassport__imgOnInput">
          </div>
          <div class="downloadPassport__img">
            <input type="file" class="downloadPassport__input">
            <img src="#" alt="" class="downloadPassport__imgOnInput">
          </div>
        </div>
      </div>
    </div>
    <div class="addImg__driverLesson">
      <div class="downloadDriverLesson">
        <h2 class="downloadDriverLesson__header">Паспорт</h2>
        <div class="downloadDriverLesson__body">
          <div class="downloadDriverLesson__img">
            <input type="file" class="downloadDriverLesson__input">
            <img src="#" alt="" class="downloadDriverLesson__imgOnInput">
          </div>
          <div class="downloadDriverLesson__img">
            <input type="file" class="downloadDriverLesson__input">
            <img src="#" alt="" class="downloadDriverLesson__imgOnInput">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  name: 'Step6',
};
</script>

<style scoped>

</style>
