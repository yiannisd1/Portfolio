import { createRouter, createWebHistory } from 'vue-router';
import HomeSection from '@/sections/HomeSection.vue'; // New parent component

const routes = [
  { path: '/', component: HomeSection }, // Single root route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
