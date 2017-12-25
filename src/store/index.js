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
    isError: false,
    errorMessage: '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
      setIdToken(payload)
    },
    setError(state, payload) {
      state.isError = !payload.success;
      state.errorMessage = payload.message;
    },
    resetError(state) {
      state.isError = false;
      state.errorMessage = '';
    },
    UPDATE_VARIABLE(state, {label, value}) {
      Vue.set(state, label, value);
    }
  },
  actions: {
    login ({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
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
          let { data } = response;
          console.log('get respon : ', data)
          if(!data.success){
            commit('setError', data)
            resolve(false);
  
          } else {
            commit('setToken', data.user.token);
            console.log('login berhasil');
            
            commit('UPDATE_VARIABLE', {
              label: 'user',
              value: data.user,
            });

            resolve(true);
            // router.push('/dashboard');
          }
        }).catch (err => {
          reject(err);
          console.log('Error when login : ', err);
        })
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
    },
    error (state) {
      return {
        isError: state.isError,
        errorMessage: state.errorMessage
      }
    }
  }
})