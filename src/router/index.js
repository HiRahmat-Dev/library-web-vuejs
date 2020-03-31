import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Main/Dashboard.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
