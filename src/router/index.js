import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Characters from '@/views/Characters.vue'
import Starships from '@/views/Starships.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
    path: '/starships',
    name: 'starships',
    component: Starships
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
