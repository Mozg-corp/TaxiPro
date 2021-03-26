import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    registrationData: {
      tariffName: {
        type: 'single',
        text: 'Тариф',
        value: '',
      },
      agregators: {
        type: 'image',
        text: 'Агрегаторы',
        value: [],
        path: '',
      },
      passport: {
        type: 'big',
        text: 'Паспортные данные',
        value: [],
      },
      driverLessons: {
        type: 'big',
        text: 'Данные В.У.',
        value: [],
      },
      car: {
        type: 'big',
        text: 'Данные С.Т.',
        value: [],
      },
      license: {
        type: 'single',
        text: 'Данные лицензии',
        value: '',
      },
    },
  },
  mutations,
  actions,
  getters,
};
