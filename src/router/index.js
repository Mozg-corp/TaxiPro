import { createRouter, createWebHistory } from 'vue-router';
import Account from '@/views/Account.vue';
import Balance from '@/views/Balance.vue';
import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
import Withdrawal from '@/views/Withdrawal.vue';
// eslint-disable-next-line import/extensions
import Step1 from '@/components/profile/Step1';
// eslint-disable-next-line import/extensions
import Step2 from '@/components/profile/Step2';
// eslint-disable-next-line import/extensions
import Step3 from '@/components/profile/Step3';
// eslint-disable-next-line import/extensions
import Step4 from '@/components/profile/Step4';
// eslint-disable-next-line import/extensions
import Step5 from '@/components/profile/Step5';
// eslint-disable-next-line import/extensions
import endRegistration from '@/components/profile/endRegistration';
// eslint-disable-next-line import/extensions
import Welcome from '@/components/profile/Welcome';
// eslint-disable-next-line import/extensions
import Step6 from '@/components/profile/Step6';
// eslint-disable-next-line import/extensions
import Index from '@/components/account/Index';

const routes = [
  {
    path: '/account',
    name: 'Account',
    component: Account,
    children: [
      {
        path: '/account',
        name: 'index',
        component: Index,
      },
      {
        path: '/account/balance',
        name: 'Balance',
        component: Balance,
      },
      {
        path: '/account/withdrawal',
        name: 'Withdrawal',
        component: Withdrawal,
      },
    ],
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
    children: [
      {
        path: '/account/profile/welcome',
        name: 'Welcome',
        component: Welcome,
      },
      {
        path: '/account/profile/step-1',
        name: 'Step1',
        component: Step1,
      },
      {
        path: '/account/profile/step-2',
        name: 'Step2',
        component: Step2,
      },
      {
        path: '/account/profile/step-3',
        name: 'Step3',
        component: Step3,
      },
      {
        path: '/account/profile/step-4',
        name: 'Step4',
        component: Step4,
      },
      {
        path: '/account/profile/step-5',
        name: 'Step5',
        component: Step5,
      },
      {
        path: '/account/profile/endRegistration',
        name: 'endRegistration',
        component: endRegistration,
      },
      {
        path: '/account/profile/step-6',
        name: 'Step6',
        component: Step6,
      },
    ],
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
