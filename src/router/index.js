import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Planets from '@/views/Planets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/planets',
    name: 'planets',
    component: Planets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
