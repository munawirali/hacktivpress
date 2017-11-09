import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import jwtDecode from 'jwt-decode'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.use(Vuex)

const state = {
  articles: []
}

const mutations = {
  setArticle (state, payload) {
    state.articles = payload
  }
}

const actions = {
  getAllArticle ({ commit }) {
    http.get('/articles')
    .then(({ data }) => {
      commit('setArticle', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  signIn ({ commit }, data) {
    http.post('/users', data)
    .then(({ data }) => {
      // commit('setArticle', data.data)
      console.log('Login Sukses')
    })
    .catch(err => {
      console.log(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
