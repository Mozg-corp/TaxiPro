<template>
  <div class="card">
    <div class="stepNumber">
      <div class="stepNumber__text">
        Проверьте данные
      </div>
    </div>
    <div class="allData">
      <div v-for="item in Data"
           :key="item"
           class="card">
        {{item}}
      </div>
    </div>
    <router-link :to="{ name: 'endRegistration' }" class="button routerLink">
      <button @click="sendData" class="button routerLink">
        Отправить данные
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'endRegistration',
  computed: {
    ...mapGetters({
      Data: 'profile/getRegistrationData',
    }),
  },
  methods: {
    sendData() {
      const str = JSON.stringify(this.Data);
      // eslint-disable-next-line no-undef
      axios.post('', str)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style lang="scss">

</style>
