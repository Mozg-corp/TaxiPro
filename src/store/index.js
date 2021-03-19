import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import authorization from '@/store/authorization';
import profile from '@/store/profile';

const dataState = createPersistedState({
  paths: ['profile'],
});

export default createStore({
  modules: {
    authorization,
    profile,
  },
  plugins: [dataState],
});
