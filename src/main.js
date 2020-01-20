import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// CSS
import './assets/css/reset.css'
import './assets/css/bootstrap-grid.min.css'

// Custom SCSS
import './assets/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
