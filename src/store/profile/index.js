import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    allTariffs: [
      {
        title: 'Старт',
        htmlId: 'start',
      },
      {
        title: 'Комфорт',
        htmlId: 'comfort',
      },
      {
        title: 'Премиум',
        htmlId: 'premium',
      },
    ],
    allAgregators: [
      {
        title: 'gett',
        htmlId: 'gett',
        img: '/assets/images/step2/gett.jpeg',
      },
      {
        title: 'yandexTaxi',
        htmlId: 'yandexTaxi',
        img: '/assets/images/step2/yandexTaxi.jpeg',
      },
      {
        title: 'citymobile',
        htmlId: 'citymobile',
        img: '/assets/images/step2/citymobile.jpeg',
      },
      {
        title: 'uber',
        htmlId: 'uber',
        img: '/assets/images/step2/uber.jpeg',
      },
    ],
    registrationData: {
      tariffName: {
        type: 'tariff',
        text: 'Тариф',
        value: '',
      },
      agregators: {
        type: 'agregators',
        text: 'Агрегаторы',
        value: [],
        path: '',
      },
      passport: {
        type: 'passport',
        text: 'Паспортные данные',
        value: [],
      },
      driverLessons: {
        type: 'driverLessons',
        text: 'Данные В.У.',
        value: [],
      },
      car: {
        type: 'car',
        text: 'Данные С.Т.',
        value: [],
      },
      license: {
        type: 'license',
        text: 'Данные лицензии',
        value: '',
      },
    },
  },
  mutations,
  actions,
  getters,
};
