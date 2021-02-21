<template>
  <div class="container landing">
    <h1 class="landing__caption">Выгода с ТаксиПро!</h1>

    <p class="text landing__text">
      ТаксиПро - это платформа для подключения к такси, которая помогает экономить на комиссии
      таксопарков
    </p>

    <div class="landing__image landing__image_car">
      <img src="@/assets/images/car.jpg" alt="car" />
    </div>

    <button class="button landing__button landing__button_attempt" @click="goToLogin">
      Попробовать
    </button>

    <h2 class="landing__title landing__title_why">Почему ТаксиПро?</h2>

    <ul class="landing__why-list">
      <li class="list-item landing__why-list-item">
        Никаких процентов от заказа - только абонентская плата
      </li>
      <li class="list-item landing__why-list-item">
        Моментальные выплаты без комиссий</li>
      <li class="list-item landing__why-list-item">Отсутствие скрытых платежей
      </li>
      <li class="list-item landing__why-list-item">
        Защита личных данных
      </li>
      <li class="list-item landing__why-list-item">
        Прямое подключение водителей к агрегаторам такси
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Landing',

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
  padding-top: 44px;

  &__button {
    margin: 0 auto;

    &_attempt {
      margin-top: 56px;
    }
  }

  &__image {
    overflow: hidden;

    &_car {
      height: 216px;
      position: relative;
      margin: 20px -20px 0;

      img {
        height: 100%;
        position: absolute;
        left: min(-230px, max(-310px, calc(-310px + (100vw - 380px) / 2)));
      }
    }
  }

  &__text {
    margin-top: 36px;
  }

  &__title {
    &_why {
      margin-top: 78px;
    }
  }

  &__why-list {
    margin-top: 12px;

    &-item {
      min-height: 36px;
      margin-top: 12px;
    }
  }
}
</style>
