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
    },

    SET_DEPARTAMENTO(state, payload) {
      state.departamento = payload
      console.log(state.departamento)
    },

    FILTER_DEPARTMENT(state, payload) {
      state.posts = payload
    },

    SET_POST(state, payload) {
      state.post = payload
      state.postConteudo = payload.conteudo
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

    async fetchDepartamento(context) {
      try {
        const { data } = await axios.get('/manuais')
        if (data.length === 0) {
          throw new Error('Api não retorna departamentos')
        }
        //Lógica para popular Arr e ArrEspelho
        const newArr = []
        const arrEspelho = []
        data.forEach(({ departamento }) => {
          newArr.push(departamento)
          arrEspelho.push(departamento)
        })
        // console.log(newArr, 'Espelho: ' + arrEspelho)
        const payload = newArr.filter(
          (este, i) => arrEspelho.indexOf(este) === i
        )
        // console.log(`Payload: ${payload}`)
        context.commit('SET_DEPARTAMENTO', payload)
      } catch (err) {
        alert(err.message.toUpperCase())
      }
    },

    async filtrarDepartamento(context, payload) {
      try {
        const { data } = await axios.get(`/manuais?departamento=${payload}`)
        console.log(`${data} e ${payload}`)
        if (data.length === 0) {
          throw new Error(`Não foi possível encontrar nenhum manual ${payload}`)
        }
        context.commit('FILTER_DEPARTMENT', data)
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
