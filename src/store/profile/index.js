import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    registrationData: {
      tariffName: '',
      agregators: [],
      passport: {},
      driverLessons: {},
      car: {},
      license: '',
    },
  },
  mutations,
  actions,
  getters,
};
