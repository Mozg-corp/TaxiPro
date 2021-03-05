<template>
  <div class="container landing">
    <h1 class="landing__caption">Выгода с ТаксиПро!</h1>

    <p class="text landing__text">
      ТаксиПро - это платформа для подключения к такси, которая помогает экономить на комиссии
      таксопарков
    </p>

    <el-image class="landing__taxi" :src="imgTaxi">
      <template #placeholder>
        <div class="landing__taxi-slot">
          Загрузка<span class="dot">...</span>
        </div>
      </template>
      <template #error>
        <div class="landing__taxi-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </template>
    </el-image>

    <el-button class="button landing__button landing__button_attempt"
               @click="goToLogin">Попробовать</el-button>

    <h2 class="landing__reason-title">Почему ТаксиПро?</h2>

    <ul class="landing__reason-list">
      <li class="list-item landing__reason-item">
        Никаких процентов от заказа - только абонентская плата
      </li>
      <li class="list-item landing__reason-item">Моментальные выплаты без комиссий</li>
      <li class="list-item landing__reason-item">Отсутствие скрытых платежей</li>
      <li class="list-item landing__reason-item">Защита личных данных</li>
      <li class="list-item landing__reason-item">
        Прямое подключение водителей к агрегаторам такси
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Landing',

  data: () => ({
    imgTaxi: '/assets/images/car.jpg',
  }),

  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<!--suppress CssUnknownTarget -->
<style lang="scss">
@import "../styles/vars", "../styles/mixins";

.landing {
  @include flex-column;
  padding-top: 2.75rem;

  &__button {
    margin: 0 auto;

    &_attempt {
      margin-top: 3.5rem;
    }
  }

  &__reason {
    &-title {
      margin-top: 4.875rem;
    }

    &-list {
      margin-top: 0.75rem;
    }

    &-item {
      @include flex-none-center;
      min-height: 2.25rem;
      margin-top: 0.75rem;
    }
  }

  &__taxi {
    overflow: visible;
    width: 100%;
    height: 216px;
    position: relative;
    margin-top: 1.25rem;

    &-slot {
      @include flex-center-center;
      width: 100%;
      height: 100%;
      color: $TextSecondary;
      background: $Border;
    }

    .el-image__placeholder {
      font-size: .875rem;
    }

    .el-image__error {
      font-size: 1.875rem;
    }

    .el-image__inner {
      width: 648px;
      height: 100%;
      position: absolute;
      left: 0;

      @media (max-width: 768px) {
        left: calc-size(-20.5, 0, 380, 768);
      }

      @media (max-width: 380px) {
        left: -328px;
      }
    }
  }

  &__text {
    margin-top: 2.25rem;
  }
}
</style>
