import Vue from 'vue'
import App from './App.vue'
/* ********* */
import Buefy from 'buefy'

import router from './router'

import 'buefy/lib/buefy.css'

Vue.use(Buefy)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
