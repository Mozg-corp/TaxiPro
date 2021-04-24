<template>
  <div class="container history">
    <h1>Баланс</h1>
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

  date: () => ({
    balance: null,
  }),
  mounted() {
    this.balance = this.getBalance();
  },
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
@import "../../styles/vars", "../../styles/mixins";

.history {
  @include flex-column;
  padding-top: 44px;
}
</style>
