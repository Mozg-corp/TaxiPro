<template>
  <div class="container balance">
    <div class="totalBalance">
      <div class="totalBalance__info">
        <div class="totalBalance__header">Общий баланс</div>
        <div class="totalBalance__sum">{{balance}} ₽</div>
        <div class="totalBalance__footer">на модерации {{waitingSumma}} ₽</div>
      </div>
      <div class="totalBalance__icon">
        <img src="/assets/images/account/balance.png" alt="" class="totalBalance__img">
      </div>
    </div>
    <div class="miniBalance">
      <AgregatorBalance
        v-for="item in Data"
        :key="item.img"
        :img="item.img"
        :balance="item.balance"
      />
    </div>
    <router-link
      :to="{ name: 'Withdrawal' }"
      class="button routerLink"
    >
      <button
        :disabled="!isAllInputsCorrect"
        class="button routerLink"
      >Вывести деньги
      </button>
    </router-link>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import { getFromStorage } from '@/store/libs';
// eslint-disable-next-line import/extensions
import AgregatorBalance from '@/components/account/balance/components/AgregatorBalance';

export default {
  name: 'Balance',
  data: () => ({
    // Hardcode Data
    Data: [
      {
        img: '/assets/images/step2/0.jpeg',
        balance: 500,
      },
      {
        img: '/assets/images/step2/3.jpeg',
        balance: 1000,
      },
    ],
    balance: 0,
    waitingSumma: 0,
  }),
  components: {
    AgregatorBalance,
  },
  // mounted() {
  //   this.balance = this.getBalance();
  // },
  methods: {
    getBalanceEachAgregator() {
      //
    },
    getBalance() {
      const usersId = getFromStorage('users_id');
      axios.get(`/api/v1/balance/${usersId}`, null, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
        // eslint-disable-next-line no-shadow
        .then((response) => {
          console.log(response);
          router.push({ name: 'Step6' });
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    ...mapActions({
      //
    }),
  },

  computed: {
    ...mapGetters({
      //
    }),
    isAllInputsCorrect() {
      return this.balance !== 0;
    },
  },
};
</script>

<style lang="scss">

.balance {
  margin-top: 20px;
}
.miniBalance {
  margin: 30px 0;
}
.totalBalance {
  margin-top: 20px;
  color: white;
  background: linear-gradient(122deg,
    rgba(24,156,215,1) 0%,
    rgba(74,183,227,1) 49%,
    rgba(109,219,244,1) 100%);
  border-radius: 17px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  &__info {
    margin-left: 20px;
  }
  &__header, &__footer {
    font-weight: 600;
    font-size: 20px;
  }
  &__sum {
    font-size: 38px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 30px;  }
}

</style>
