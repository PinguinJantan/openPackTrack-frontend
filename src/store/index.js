import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import { setIdToken, clearIdToken } from '../utils/auth'

Vue.use(Vuex)

let API_URL = 'http://fansdev.nurulirfan.com'

export const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
    apiUrl: API_URL,
    menu: [
      { name: 'Item', icon: 'cube', color: 'rgb(243, 156, 18)' },
      { name: 'User', icon: 'user', color: '#f0f' },
      { name: 'Input Produk', icon: 'hand-pointer-o', color: '#fac' }
    ]
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      console.log('menjalankan login')
      
      Vue.axios({
        url: API_URL + '/auth/login',
        data: {
          username: payload.username,
          password: payload.password
        },
        method: 'POST'
      }).then (response => {
        console.log('get respon : ', response.data)

        commit('setToken', response.data.user.token)
        setIdToken(response.data.user.token)
      }).then(() => {
        console.log('login berhasil')
        router.push('/dashboard')
      }).catch (err => {
        console.log('Error when login : ', err)
      })
    },
    logout({ commit }, payload) {
      commit('setToken', null)
      clearIdToken()
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    apiUrl (state) {
      return state.apiUrl
    }
  }
})