import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Auth/Login.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import Item from '../components/Item/Index.vue'
import InputProduk from '../components/InputProduk/Index.vue'
import User from '../components/User/Index.vue'

import { requireAuth } from '../utils/auth'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/login', name: 'Login', component: Login },
        { path: '/dashboard', name: 'Dashboard', beforeEnter: requireAuth, component: Dashboard },
        { path: '/item', name: 'Item', beforeEnter: requireAuth, component: Item },
        { path: '/input', name: 'Input Produk', beforeEnter: requireAuth, component: InputProduk },
        { path: '/user', name: 'User', beforeEnter: requireAuth, component: User }
    ],
    mode: 'history'
})