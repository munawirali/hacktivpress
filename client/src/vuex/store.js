import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.use(Vuex)

const state = {
  articles: [],
  userLogin: [],
  article: {}
}

const mutations = {
  setArticles (state, payload) {
    state.articles = payload
  },
  setUserLogin (state, payload) {
    state.userLogin = payload
  },
  setArticle (state, payload) {
    state.article = payload
  },
  addArticle (state, payload) {
    state.articles.push(payload)
  },
  removeArticle (state, payload) {
    let idx = state.articles.findIndex((article) => article._id === payload._id)
    state.articles.splice(idx, 1)
  },
  updateArticle (state, payload) {
    let idx = state.articles.findIndex((article) => article._id === payload._id)
    state.articles.splice(idx, 1, payload)
  }
}

const actions = {
  getAllArticle ({ commit }) {
    http.get('/articles')
    .then(({ data }) => {
      commit('setArticles', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getArticleByAuthor ({ commit }, id) {
    http.get('/articles/user/' + id)
    .populate('author')
    .then(({ data }) => {
      console.log('ini article id by author', data.data)
      commit('setArticles', data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  signIn ({ commit }, data) {
    http.post('/users/signin', data)
    .then(({ data }) => {
      localStorage.setItem('HCKPRS-Token', data.token)
      alert(data.message)
      let decoded = jwtDecode(data.token)
      commit('setUserLogin', decoded)
    })
    .catch(err => {
      console.log(err)
    })
  },
  addUser ({ commit }, newUser) {
    http.post('users/signup', newUser)
    .then(({ data }) => {
      alert('Signup Sukeses')
    })
    .catch(err => {
      console.log(err)
    })
  },
  getUserActive ({ commit }) {
    if (localStorage.getItem('HCKPRS-Token') != null) {
      let decoded = jwtDecode(localStorage.getItem('HCKPRS-Token'))
      commit('setUserLogin', decoded)
    } else {
      commit('setUserLogin', '')
    }
  },
  getDetailArticle ({ commit }, id) {
    http.get('/articles/' + id)
    .then(({data}) => {
      commit('setArticle', data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  addArticle ({ commit }, data) {
    http.post('/articles/', data)
    .then(({data}) => {
      commit('addArticle', data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  removeArticle ({ commit }, id) {
    var s = confirm('Are you sure to delete this data?')

    if (s === true) {
      // confirm('Are you sure to delete this data')
      http.delete('/articles/' + id)
      .then(({data}) => {
        commit('removeArticle', data.data)
        // alert(data.message)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  updateArticle ({ commit }, dataArticle) {
    http.put('/articles/' + dataArticle._id, dataArticle)
    .then(({ data }) => {
      commit('updateArticle', dataArticle)
    })
    .catch((err) => {
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
