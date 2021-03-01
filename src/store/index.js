import { createStore } from 'vuex';
import authorization from '@/store/authorization';

export default createStore({
  modules: {
    authorization,
  },
});
