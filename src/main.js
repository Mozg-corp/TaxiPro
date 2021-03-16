import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import Vuelidate from 'vuelidate';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(Vuelidate)
  .mount('#app');
