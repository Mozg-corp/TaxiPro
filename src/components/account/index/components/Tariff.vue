<template>
  <div class="myTariff">
    <div class="myTariff__block">
      <div class="myCardTariff">
        <div class="myCardTariff__inside">
          <div class="myCardTariff__top">
            <h4 class="myCardTariff__header">
              {{item.title}}
            </h4>
            <div class="myCardTariff__headerImg"></div>
            <pre class="myCardTariff__text">{{item.description}}</pre>
          </div>
          <div class="myCardTariff__list">
            <ul class="myCardTariff__ul">
              <div class="grid pb10">
                <div class="myCardTariff__circle"></div>
                <li class="myCardTariff__li">
                  {{item.firstList}}
                </li>
              </div>
              <div class="grid pb10">
                <div class="myCardTariff__circle"></div>
                <li class="myCardTariff__li">{{item.secondList}}</li>
              </div>
              <div class="grid pb10">
                <div class="myCardTariff__circle"></div>
                <li class="myCardTariff__li">{{item.thirdList}}</li>
              </div>
            </ul>
          </div>
        </div>
        <router-link
          v-if="isButton"
          :to="{ name: 'ChangeBalance' }"
          class="myTariffBtn"
        >
          Выбрать тариф
          на следующий месяц
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tariff',
  props: {
    item: Object,
    isButton: Boolean,
  },
};
</script>

<style lang="scss">

.myTariffBtn {
  font-size: 17px;
  background: #E2F7FF;
  color: #48B5E2;
  width: 55%;
  border-radius: 18px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin: auto;
  transition: .5s;
  &:hover {
    background: #48B5E2;
    color: #E2F7FF;
  }
}

.myCardTariff {
  font-size: 15px;
  background: #FFFFFF;
  box-shadow: 0px -4px 10px rgba(167, 156, 156, 0.1), 0px 5px 10px rgba(167, 156, 156, 0.2);
  border-radius: 24px;
  padding: 32px 100px;
  position: relative;
  &__ok {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 24px;
    height: 24px;
    border: 1px solid #E1E1E1;
    border-radius: 50%;
    box-sizing: border-box;
  }
  &__top {
    text-align: center;
  }
  &__header {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #000;
    position: relative;
    z-index: 22;
  }
  &__headerImg{
    position: relative;
    width: 136px;
    height: 8px;
    background: url("/assets/images/account/yellowLine.png");
    z-index: 1;
    margin: -16px auto;
  }
  &__text {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &__circle {
    height: 11px;
    width: 11px;
    border-radius: 50%;
    background: #ffdb4d;
    margin-right: 10px;
    margin-top: 3px;
    flex-basis:12px;
  }
  &__li {
    flex-basis: auto;
  }
}
</style>
