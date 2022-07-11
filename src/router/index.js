import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',

    component: () => import('../views/Contact.vue')
  },
  {
    path: '/products',
    name: 'products',

    component: () => import('../views/Products.vue')
  },
  {
    path: '/product',
    name: 'product',

    component: () => import('../views/Product.vue')
  },
  {
    path: '/admin',
    name: 'admin',

    component: () => import('../views/Admin.vue')
  },
  {
    path: '/poductslist',
    name: 'productslist',

    component: () => import('../components/ProductsList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
