import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routerConfig from './router.config.js'

import './assets/css/animate.min.css'

Vue.use(VueRouter);

const router = new VueRouter(routerConfig);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
