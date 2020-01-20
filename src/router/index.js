import Vue from 'vue'
import VueRouter from 'vue-router'

// Lazy load routes
const Characters = () => import('@/views/Characters.vue')
const Detail = () => import('@/views/Detail.vue')
const Home = () => import('@/views/Home.vue')
const Planets = () => import('@/views/Planets.vue')
const Starships = () => import('@/views/Starships.vue')

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
  routes,
  scrollBehavior () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            x: 0,
            y: 0
          }
        )
      }, 750)
    })
  }
})

export default router
