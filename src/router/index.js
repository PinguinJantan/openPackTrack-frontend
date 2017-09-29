import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Auth/Login.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'

import { requireAuth } from '../utils/auth'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/dashboard', name: 'Dashboard', beforeEnter: requireAuth, component: Dashboard }
    ],
    mode: 'history'
})