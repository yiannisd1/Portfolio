import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  // Add additional routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
