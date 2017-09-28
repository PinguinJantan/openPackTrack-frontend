import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let API_URL = 'http://localhost:3000'

export const store = new Vuex.Store({
  state: {
    
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
      }).catch (err => {
        console.log('Error when login : ', err)
      })
    },
  }
})