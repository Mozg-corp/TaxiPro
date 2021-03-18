import { createStore } from 'vuex';
import authorization from '@/store/authorization';
import profile from '@/store/profile';

export default createStore({
  modules: {
    authorization,
    profile,
  },
});
