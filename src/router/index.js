import { createRouter, createWebHistory } from 'vue-router';
import Account from '@/views/Account.vue';
import History from '@/views/History.vue';
import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Withdrawal from '@/views/Withdrawal.vue';

const routes = [
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/account/history',
    name: 'History',
    component: History,
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/account/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/account/withdrawal',
    name: 'Withdrawal',
    component: Withdrawal,
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/landing',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
