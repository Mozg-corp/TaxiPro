<template>
  <div class="container withdrawal">
    <BackButton />
    <div class="chooseAgr">
      <h3 class="chooseAgr__header">Выберите агрегатор</h3>
      <div class="chooseAgr__balance">
        <MoneyAgregator
          v-for="item in Data"
          :key="item"
          :item="item"
          :error="item.error"
          :value="item.value"
          v-model="item.value"
        />
      </div>
      <h3 class="chooseAgr__header">Выберите, куда переводить</h3>
      <div class="chooseAgr__creditCard">
        <el-collapse v-model="activeNames">
          <el-collapse-item
            :name="1"
          >
            <template v-if="!activeNames.length" #title>
              <div class="circleBorder"><div class="creditCardCircle"></div></div>
              <h4 class="el-fontSize">
                {{CurrentCard.bank}} {{CurrentCard.name}} {{CurrentCard.numbers}}
              </h4>
            </template>
            <template v-else #title>
              <h4 class="el-fontSize">
                выбрать карту
              </h4>
            </template>
            <div class="allCreditCards">
              <div
                v-for="item in CreditCards"
                :key="item"
                class="oneCreditCard"
              >
                <input
                  v-model="checked"
                  @change="changeCard"
                  :value="item.id"
                  :id="item.htmlId+item.id"
                  type="radio"
                  class="oneCreditCard__input"
                >
                <label :for="item.htmlId+item.id" class="oneCreditCard__label">
                  <div class="circleBorder"><div class="circle"></div></div>
                  <div class="oneCreditCard__name">
                    {{item.bank}} {{item.name}} {{item.numbers}}
                  </div>
                  <span @click="openPopup(item.id)"
                        class="oneCreditCard__delete">x</span>
                </label>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="chooseAgr__totalPrice">
        <div class="totalPrice">
          <div class="totalPrice__block">общая сумма </div>
          <div class="totalPrice__block">{{totalPrice}} ₽</div>
        </div>
        <div class="commission">
          <div class="commission__block">комиссия</div>
          <div class="commission__block">{{commission}} ₽</div>
        </div>
      </div>
    </div>
    <router-link
        :to="{ name: 'Balance' }"
        class="button routerLink"
      >
        <button
          @click="giveMeMoney"
          :disabled="!isCorrect"
          class="button routerLink"
        >Вывести {{totalPrice}} ₽
        </button>
      </router-link>

    <el-dialog
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <template #title>
        Удаление карты
      </template>
      <span style="align-self: center" v-loading="loading">
        Вы уверены, что хотите удалить карту?
      </span>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">Отмена</el-button>
      <el-button
        type="danger" @click="deleteCard(deleteId)">Удалить</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

// eslint-disable-next-line import/extensions
import BackButton from '@/components/account/button/BackButton';
import { mapActions, mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import MoneyAgregator from '@/components/account/Withdrawal/components/MoneyAgregator';

export default {
  name: 'Withdrawal',

  data: () => ({
    loading: false,
    deleteId: null,
    dialogVisible: false,
    checked: 0,
    activeNames: [],
    PROCENT: 1, // нужно вычислять процент в зависимости от тарифа
    Data: [
      {
        img: '/assets/images/step2/0.jpeg',
        balance: 500,
        error: null,
        value: null,
      },
      {
        img: '/assets/images/step2/3.jpeg',
        balance: 1000,
        error: null,
        value: null,
      },
    ],
    CurrentCard: {},
    CreditCards: [
      {
        id: 0,
        htmlId: 'card_',
        bank: 'Сбер',
        name: 'зелёная',
        numbers: '****9999',
      },
      {
        id: 1,
        bank: 'Тинькофф',
        htmlId: 'card_',
        name: 'чёрная',
        numbers: '****5555',
      },
    ],
  }),
  components: {
    BackButton,
    MoneyAgregator,
  },
  mounted() {
    // eslint-disable-next-line prefer-destructuring
    this.CurrentCard = this.CreditCards[this.checked];
  },
  methods: {
    ...mapActions({
      //
    }),
    openPopup(id) {
      this.deleteId = id;
      this.dialogVisible = true;
    },
    deleteCard(id) {
      this.loading = true;
      setTimeout(() => {
        console.log(id);
        this.loading = false;
        this.dialogVisible = false;
      }, 2000);
      // удаляем карту на сервере
    },
    handleClose() {
      this.dialogVisible = false;
    },
    giveMeMoney() {
      // отправить запрос на бэк
    },
    changeCard(e) {
      this.CurrentCard = this.CreditCards[e.target.value];
    },
  },

  computed: {
    ...mapGetters({
      //
    }),
    isCorrect() {
      return !!((this.Data[0].value || this.Data[1].value)
        && !this.Data[0].error && !this.Data[1].error);
    },
    totalPrice() {
      if (this.Data[0].value && this.Data[1].value) {
        return (+this.Data[0].value) + (+this.Data[1].value);
      }
      if (!this.Data[0].value && this.Data[1].value) {
        return this.Data[1].value;
      }
      if (!this.Data[1].value && this.Data[0].value) {
        return this.Data[0].value;
      }
      return 0;
    },
    commission() {
      // eslint-disable-next-line no-mixed-operators
      return this.totalPrice / 100 * this.PROCENT;
    },
  },
};
</script>

<style lang="scss">
@import "../../../styles/vars", "../../../styles/mixins";

.withdrawal {
  @include flex-column;
  padding-top: 44px;
}
.chooseAgr {
  &__header {
    font-size: 16px;
    font-weight: 600;
    color: #48B5E2;
  }
  &__balance {
    margin-bottom: 25px;
  }
  &__creditCard {
    margin: 25px 0 35px;
  }
  &__totalPrice {
    margin: 25px 0;
  }
}
.commission,
.totalPrice {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.commission {
  &__block {
    font-size: 16px;
    font-weight: 400;
    color: #C4C4C4;
  }
}
.totalPrice {
  &__block {
    font-size: 17px;
    font-weight: 400;
    color: #4D4D4D;
  }
}
.creditCardCircle,
#card_0:checked + label .circleBorder .circle,
#card_1:checked + label .circleBorder .circle,
{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #48B5E2;
  margin: auto;
}

.oneCreditCard {
  &__input {
    display: none;
  }
  &__label {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &__delete {
    line-height: 20px;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
    height: 20px;
    width: 20px;
    cursor: pointer;
    color: white;
    background: #E30F0F;
    border-radius: 50%;
  }
  &__name {
    margin-inline-end: auto;
    margin-left: 10px;
  }
}

.el-dialog__body {
  text-align: center;
}

</style>
