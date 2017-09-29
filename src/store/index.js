import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router'
import { setIdToken } from '../utils/auth'

Vue.use(Vuex)

let API_URL = 'http://localhost:3000'

export const store = new Vuex.Store({
  state: {
    user: null,
    token: null
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
        router.push({ path: '/dashboard' })
      }).catch (err => {
        console.log('Error when login : ', err)
      })
    }
  }
})