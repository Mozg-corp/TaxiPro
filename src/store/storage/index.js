import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    config: {
      smsTimeout: 90000,
    },
    storage: {
      updatedAt: 0,
      token: null,
      phone: null,
      smsTimeLabel: 0,
    },
  },
  mutations,
  actions,
  getters,
};
