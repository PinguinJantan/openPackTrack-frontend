import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Auth/Login.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import Item from '../components/Item/Index.vue'
import InputProduct from '../components/InputProduct/Index.vue'
import InputProductNotA from '../components/InputProduct/GradeNotA.vue'
import User from '../components/User/Index.vue'

import { requireAuth } from '../utils/auth'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/dashboard', name: 'Dashboard', beforeEnter: requireAuth, component: Dashboard },
        { path: '/item', name: 'Item', beforeEnter: requireAuth, component: Item },
        { path: '/input-a', name: 'Input Produk', beforeEnter: requireAuth, component: InputProduct },
        { path: '/input-bukan-a', name: 'Input Produk Bukan A', beforeEnter: requireAuth, component: InputProductNotA },
        { path: '/user', name: 'User', beforeEnter: requireAuth, component: User }
    ],
    mode: 'history',
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-active"
})