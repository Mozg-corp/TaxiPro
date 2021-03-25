import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    registrationData: {
      tariffName: {
        text: 'Тариф',
        value: '',
      },
      agregators: {
        text: 'Агрегаторы',
        value: [],
        path: '',
      },
      passport: {
        text: 'Паспортные данные',
        value: {},
      },
      driverLessons: {
        text: 'Данные В.У.',
        value: {},
      },
      car: {
        text: 'Данные С.Т.',
        value: {},
      },
      license: {
        text: 'Данные лицензии',
        value: '',
      },
    },
  },
  mutations,
  actions,
  getters,
};
