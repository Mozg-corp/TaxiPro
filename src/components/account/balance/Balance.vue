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
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import { getFromStorage } from '@/store/libs';

export default {
  name: 'Balance',
  data: () => ({
    balance: 0,
    waitingSumma: 0,
  }),
  // mounted() {
  //   this.balance = this.getBalance();
  // },
  methods: {
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
  },
};
</script>

<style lang="scss">

.balance {
  margin-top: 20px;
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
