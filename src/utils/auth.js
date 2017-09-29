import { store } from '../store'

const ID_TOKEN_KEY = 'id_token'

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/login'
    })
  } else {
    setTokenFromLocalStorageToVuex()
    next()
  }
}

// check is already login ?
export function isLoggedIn() {
  const idToken = getIdToken();
  // if have token in localStorage then set it into Vuex
  if (idToken) {
    setTokenFromLocalStorageToVuex()
  }
  return !!idToken;
}

// get token from localStorage
export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

// set token to localStorage
export function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

// set token from localStorage to Vuex to better manage
export function setTokenFromLocalStorageToVuex() {
  let token = getIdToken()
  store.commit('setToken', token)
}