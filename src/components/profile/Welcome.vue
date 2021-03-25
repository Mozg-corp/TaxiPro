<template>
<div class="card">
  <div class="welcome">
    <h2 class="welcome__header">Добро пожаловать!</h2>
    <p class="welcome__text">Для дальнейшей работы на платформе
      вам необходимо  заполнить все данные
      и загрузить документы.
      <br><br>
      Вы можете заполнить данные сейчас или вернуться к этому позже
    </p>
  </div>
  <div class="needDocuments">
    <h3 class="needDocuments__header">Необходимые документы:</h3>
    <ul class="needDocuments__ul">
      <li class="needDocuments__list">
        <span class="needDocuments__span">паспорт</span>
      </li>
      <li class="needDocuments__list">
        <span class="needDocuments__span">
          водительское удостоверение
        </span>
      </li>
      <li class="needDocuments__list">
        <span class="needDocuments__span">
          свидетельство регистрации автомобиля
        </span>
      </li>
    </ul>
  </div>
  <router-link :to="{ name: 'Step1' }" class="button routerLink">
    <button class="button routerLink">Заполнить</button>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang="scss">
.welcome {
  &__header {
    color: #48B5E2;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }
  &__text {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    margin-bottom: 60px;
  }
}
.needDocuments {
  &__header {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #1D1D1D;
  }
  &__ul {
    margin: 20px 0;
    padding-left: 17px;
  }
  &__list {
    list-style-type: disc;
    color: #48B5E2;
  }
  &__span {
    color: #1D1D1D;
  }
}
</style>
