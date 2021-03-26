<template>
  <div class="card">
    <div class="stepNumber">
      <div class="stepNumber__text">
        Проверьте данные
      </div>
    </div>
    <div class="center">
      <LastStepCard
      :header="'Номер телефона'"
      :info="'+'+Phone"
      ></LastStepCard>
        <LastStepCard
          v-for="item in Data"
          :key="item"
          :header="item.text"
          :typeText="item.type"
          :info="item.value"
        ></LastStepCard>
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
// eslint-disable-next-line import/extensions
import LastStepCard from '@/components/profile/LastStepCard';

export default {
  name: 'endRegistration',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      Data: 'profile/getRegistrationData',
      Phone: 'authorization/getPhone',
    }),
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LastStepCard,
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
.center {
  padding: 12px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
  font-weight: bold;
}

.item {
  margin-bottom: 18px;
}

.box-card {
}
</style>
