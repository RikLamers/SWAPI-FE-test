import Vue from 'vue'
import VueRouter from 'vue-router'

import Characters from '@/views/Characters.vue'
import Detail from '@/views/Detail.vue'
import Home from '@/views/Home.vue'
import Planets from '@/views/Planets.vue'
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
    path: '/characters/:id',
    name: 'character detail',
    component: Detail
  },
  {
    path: '/planets',
    name: 'planets',
    component: Planets
  },
  {
    path: '/planets/:id',
    name: 'planet detail',
    component: Detail
  },
  {
    path: '/starships',
    name: 'starships',
    component: Starships
  },
  {
    path: '/starships/:id',
    name: 'starship detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
