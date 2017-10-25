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
    apiUrl: API_URL
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      console.log('menjalankan login')
      console.log('username: ' + payload.username)
      console.log('password: ' + payload.password)
      
      Vue.axios({
        url: API_URL + '/auth/login',
        data: {
          username: payload.username,
          password: payload.password
        },
        method: 'POST'
      }).then (response => {
        console.log('get respon : ', response.data)

        commit('setToken', response.data.token)
        setIdToken(response.data.token)
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