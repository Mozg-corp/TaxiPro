import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    // data
    phone: null,
    sms: null,
    token: null,
    user: null,
    // special
    error: null,
    loading: false,
    // timer
    currentTime: Date.now(),
    timer: null,
  },
  mutations,
  actions,
  getters,
};
