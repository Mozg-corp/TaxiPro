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
        :info="item"
        :isChanged="true"
      ></LastStepCard>
    </div>
    <a class="button routerLink">
      <button @click="sendData" class="button routerLink">
        Отправить данные
      </button>
    </a>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import LastStepCard from '@/components/profile/LastStepCard';
import { mapGetters } from 'vuex';
import axios from 'axios';
import { getFromStorage } from '@/store/libs';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

export default {
  name: 'endRegistration',
  data() {
    return {
      Phone: getFromStorage('phone'),
    };
  },
  computed: {
    ...mapGetters({
      Data: 'profile/getRegistrationData',
      token: 'authorization/getToken',
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
      const users_id = getFromStorage('users_id');
      const body = [];
      // eslint-disable-next-line no-unused-vars
      let idTariffs = null;
      if (this.tariff === 'Старт') {
        idTariffs = 1;
      } else if (this.tariff === 'Комфорт') {
        idTariffs = 2;
      } else {
        idTariffs = 3;
      }
      this.agregatorsObj.forEach((el) => {
        body.push({
          users_id,
          agregators_id: el,
        });
      });
      axios.post('/api/v1/user-agregator/batch', body, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
        .then((response) => {
          const birthdate = this.Data.passport.value[3].value.replace(/[\/]/g, '.');
          // eslint-disable-next-line camelcase
          const passport_date = this.Data.passport.value[6].value.replace(/[\/]/g, '.');
          // eslint-disable-next-line camelcase
          const license_date = this.Data.driverLessons.value[1].value.replace(/[\/]/g, '.');
          // eslint-disable-next-line camelcase
          const license_expire = this.Data.driverLessons.value[2].value.replace(/[\/]/g, '.');
          console.log(response);
          const objProfileToAPI = {
            firstname: this.Data.passport.value[0].value,
            secondname: this.Data.passport.value[1].value ? this.Data.passport.value[1].value : 'Иванович',
            lastname: this.Data.passport.value[2].value ? this.Data.passport.value[2].value : 'Иванов',
            birthdate,
            phone: this.Phone,
            passport_series: this.Data.passport.value[4].value.substring(0, 4),
            passport_number: this.Data.passport.value[4].value.substring(5),
            passport_giver: this.Data.passport.value[5].value,
            passport_date,
            registration_address: this.Data.passport.value[7].value
            + this.Data.passport.value[8].value + this.Data.passport.value[9].value
              + this.Data.passport.value[10].value + this.Data.passport.value[11].value,
            license_series: this.Data.driverLessons.value[0].value.substring(0, 4),
            license_number: this.Data.license.value,
            license_date,
            license_expire,
            user_id: users_id,
          };
          console.log(JSON.stringify(objProfileToAPI));
          axios.post('/api/v1/profiles', objProfileToAPI, {
            headers: { Authorization: `Bearer ${this.token}` },
          })
            // eslint-disable-next-line no-shadow
            .then((response) => {
              console.log(response);
              const objCarToAPI = {
                brand: this.Data.car.value[0].value,
                model: this.Data.car.value[1].value,
                year: this.Data.car.value[2].value,
                color: this.Data.car.value[3].value,
                registration: this.Data.car.value[4].value,
                vin: this.Data.car.value[5].value,
                sts: this.Data.car.value[6].value,
                license: this.Data.license.value,
                id_users: users_id,
              };
              axios.post('/api/v1/cars', objCarToAPI, {
                headers: { Authorization: `Bearer ${this.token}` },
              })
                // eslint-disable-next-line no-shadow
                .then((response) => {
                  console.log(response);
                  const objTariffToAPI = {
                    id_tariffs: idTariffs,
                    id_users: users_id,
                  };
                  console.log(objTariffToAPI);
                  axios.post('/api/v1/subscriptions', objTariffToAPI, {
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
                })
                .catch((error) => {
                  console.log(error.response);
                });
            })
            .catch((error) => {
              console.log(error.response);
            });
        })
        .catch((error) => {
          console.log(error.response);
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
