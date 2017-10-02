import Vue from 'vue'
import App from './App.vue'
/* ********* */
import Buefy from 'buefy'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import { store } from './store'

import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
