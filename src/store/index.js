import { createStore } from 'vuex'
import axios from '../utils/axios'
export default createStore({
  state: {
    posts: [],
    departamento: [],
    post: {},
    postConteudo: {}
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload
      // console.log(state.posts)
    },

    SET_DEPARTAMENTO(state, payload) {
      state.departamento = payload
      // console.log(state.departamento)
    },

    FILTER_DEPARTMENT(state, payload) {
      state.posts = payload
    },

    SET_POST(state, payload) {
      state.post = payload
      state.postConteudo = payload.conteudo
    },

    CLEAR_POST_MEMORY(state, payload) {
      state.post = payload
      state.postConteudo = payload
    }
  },
  actions: {
    //Puxar todos os manuais
    async fetchPosts(context) {
      try {
        const { data } = await axios.get('/manuais')
        if (data.length === 0) {
          throw new Error(
            'Api não encontrou nenhum manual, volte mais tarde  😉'
          )
        }
        context.commit('SET_POSTS', data)
      } catch (err) {
        alert(err.message.toUpperCase())
      }
    },
    //Puxar todos os departamentos
    async fetchDepartamento(context) {
      try {
        const { data } = await axios.get('/departamentos?_sort=tipo:ASC')
        if (data.length === 0) {
          throw new Error('Api não retorna departamentos')
        }
        context.commit('SET_DEPARTAMENTO', data)
      } catch (err) {
        alert(err.message.toUpperCase())
      }
    },
    //Filtrar manuais com base nos departamentos
    async filtrarDepartamento(context, payload) {
      try {
        const { id, tipo } = payload

        const { data } = await axios.get(`/manuais?departamentos=${id}`)
        // console.log(`${data} e ${payload}`)
        if (data.length === 0) {
          throw new Error(
            `Não foi possível encontrar nenhum manual do departamento: ${tipo}`
          )
        }
        context.commit('FILTER_DEPARTMENT', data)
      } catch (err) {
        alert(err.message.toUpperCase())
      }
    },
    //Selecionar manual por ID
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
    },
    //Limpar memoria do State post
    limparEstado(context) {
      const payload = ''
      context.commit('CLEAR_POST_MEMORY', payload)
    }
  },
  getters: {
    $allPosts(state) {
      return state.posts
    },
    $getDepartamentos(state) {
      return state.departamento
    },
    $selectPost(state) {
      return state.post
    },
    $getPostContent(state) {
      return state.postConteudo
    }
  }
})
