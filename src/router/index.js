import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Signin from '../components/Auth/Signin.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/signin', name: 'Signin', component: Signin }
    ],
    mode: 'history'
})