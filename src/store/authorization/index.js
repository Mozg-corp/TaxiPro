import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state: {
    // data
    phone: '',
    sms: null,
    token: 'F63EYKrnXG-witnZzUzU5Xy8PH3Y5qLQ',
    user: null,
    // special
    error: null,
    loading: false,
    // timer
    currentTime: Math.floor(Date.now() / 1000),
    timer: null,
  },
  mutations,
  actions,
  getters,
};
