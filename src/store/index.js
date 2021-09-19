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
      try {
        const { data } = await axios.get('/manuais')
        if (data.length === 0) {
          throw new Error('Api não encontrou nenhum manual!!!')
        }
        context.commit('SET_POSTS', data)
      } catch (err) {
        alert(err.message.toUpperCase())
      }
    },

    async selectPost(context, payload) {
      try {
        const { data } = await axios.get(`/manuais/${payload}`)
        if (data.id != payload) {
          throw new Error(`O id: ${payload} não é válido ou não existe!`)
        }
        context.commit('SET_POST', data)
      } catch (err) {
        alert(err.message.toUpperCase())
      }
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
