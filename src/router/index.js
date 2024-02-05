// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import Signup from '../views/SignUp.vue';
import StockList from '../views/StockList.vue';
const routes = [
  { path: '/LoginPage', component: LoginPage },
  { path: '/SignUp', component: Signup },
  { path: '/StockList', component: StockList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
