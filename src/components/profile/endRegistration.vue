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
      :isChanged="false"
      :typeText="'Phone'"
      ></LastStepCard>
        <LastStepCard
          v-for="item in Data"
          :key="item"
          :header="item.text"
          :typeText="item.type"
          :info="item.value"
          :isChanged="true"
        ></LastStepCard>
    </div>
    <router-link :to="{ name: 'Step6' }" class="button routerLink">
      <button @click="sendData" class="button routerLink">
        Отправить данные
      </button>
    </router-link>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import LastStepCard from '@/components/profile/LastStepCard';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'endRegistration',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      Data: 'profile/getRegistrationData',
      token: 'authorization/getToken',
      Phone: 'authorization/getPhone',
      tariff: 'profile/getTariffNameToAPI',
      agregatorsObj: 'profile/getAgregatorsToAPI',
    }),
  },
  components: {
    LastStepCard,
  },
  methods: {
    sendData() {
      // eslint-disable-next-line camelcase
      const users_id = 4; // сделать user id
      const body = [];
      this.agregatorsObj.forEach((el, index) => {
        body.push({
          users_id,
          agregators_id: index,
        });
      });
      const agregatorsToApi = JSON.stringify(body);
      console.log(agregatorsToApi);
      axios.post('/api/v1/user-agregator/batch', agregatorsToApi, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
        .then((response) => {
          this.$router.push('/');
          console.log(response);
          const objProfileToAPI = JSON.stringify({
            firstname: this.Data.passport.value[0].value,
            secondname: this.Data.passport.value[1].value,
            lastname: this.Data.passport.value[2].value,
            birthdate: this.Data.passport.value[3].value,
            phone: this.Phone,
            passport_series: this.Data.passport.value[4].value.substring(0, 4),
            passport_number: this.Data.passport.value[4].value.substring(5),
            passport_giver: this.Data.passport.value[5].value,
            passport_date: this.Data.passport.value[6].value,
            registration_address: this.Data.passport.value[7].value,
            license_series: this.Data.driverLessons.value[0].value.substring(0, 4),
            license_number: this.Data.driverLessons.value[0].value.substring(5),
            license_date: this.Data.driverLessons.value[1].value,
            license_expire: this.Data.driverLessons.value[2].value,
            user_id: 14,
          });
          axios.post('/api/v1/profiles', objProfileToAPI)
            // eslint-disable-next-line no-shadow
            .then((response) => {
              console.log(response);
              const objCarToAPI = JSON.stringify({
                brand: this.Data.car.value[0].value,
                model: this.Data.car.value[1].value,
                year: this.Data.car.value[2].value,
                color: this.Data.car.value[3].value,
                registration: this.Data.car.value[4].value,
                vin: this.Data.car.value[5].value,
                sts: this.Data.car.value[6].value,
                license: this.Data.license.value,
                id_users: 14,
              });
              axios.post('/api/v1/cars', objCarToAPI)
                // eslint-disable-next-line no-shadow
                .then((response) => {
                  console.log(response);
                  const objTariffToAPI = JSON.stringify({
                    id_tariffs: this.tariff,
                    id_users: 14,
                  });
                  axios.post('/api/v1/subscriptions', objTariffToAPI)
                    // eslint-disable-next-line no-shadow
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
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
