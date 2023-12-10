import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Products from './pages/Products.vue'

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/products', component: Products }
]
export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})