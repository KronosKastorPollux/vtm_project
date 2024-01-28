import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StartView from '../views/StartView.vue'
import SectsView from '../views/SectsView.vue'
import ClansView from '../views/ClansView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView,
    meta: { transition: 'fade-in-out' },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { transition: 'fade-in-out' },
  },
  {
    path: '/sects',
    name: 'sects',
    component: SectsView,
    meta: { transition: 'fade-in-out' },
  },
  {
    path: '/clans',
    name: 'clans',
    component: ClansView,
    meta: { transition: 'fade-in-out' },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { transition: 'fade-in-out' },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
