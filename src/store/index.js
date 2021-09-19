import { createStore } from 'vuex'
import axios from '../utils/axios'
export default createStore({
  state: {
    posts: [],
    post: {}
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload
    },
    SET_POST(state, payload) {
      state.post = payload
    }
  },
  actions: {
    async fetchPosts(context) {
      const { data } = await axios.get('/manuais')
      //console.log(data)
      context.commit('SET_POSTS', data)
    },

    async selectPost(context, payload) {
      const { data } = await axios.get(`/manuais/${payload}`)
      console.log(data)
      context.commit('SET_POST', data)
    }
  },
  getters: {
    $allPosts(state) {
      return state.posts
    },
    $selectPost(state) {
      return state.post
    }
  }
})
