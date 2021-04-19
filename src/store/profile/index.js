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
    allAgregators: {
      gett: {
        id: 0,
        title: 'gett',
        htmlId: 'gett',
        img: '/assets/images/step2/0.jpeg',
        isChecked: false,
      },
      yandexTaxi: {
        id: 1,
        title: 'yandexTaxi',
        htmlId: 'yandexTaxi',
        img: '/assets/images/step2/1.jpeg',
        isChecked: false,
      },
      citymobile: {
        id: 2,
        title: 'citymobile',
        htmlId: 'citymobile',
        img: '/assets/images/step2/2.jpeg',
        isChecked: false,
      },
      uber: {
        id: 3,
        title: 'uber',
        htmlId: 'uber',
        img: '/assets/images/step2/3.jpeg',
        isChecked: false,
      },
      didi: {
        id: 4,
        title: 'didi',
        htmlId: 'didi',
        img: '/assets/images/step2/4.jpeg',
        isChecked: false,
      },
    },
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
