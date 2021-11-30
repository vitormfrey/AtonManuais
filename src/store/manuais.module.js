import axios from '../utils/axios'
import swal from 'sweetalert'

export const manuais = {
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
        console.log(data)
        if (data.length === 0) {
          throw new Error(
            'Api não encontrou nenhum manual, volte mais tarde 😉'
          )
        }
        context.commit('SET_POSTS', data)
      } catch (err) {
        swal('Oops!', err.message, 'error')
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
        swal('Oops!', err.message, 'error')
      }
    },
    //Filtrar manuais com base nos departamentos
    async filtrarDepartamento(context, payload) {
      try {
        const { id, tipo } = payload

        const { data } = await axios.get(`/manuais?departamentos=${id}`)

        if (data.length === 0) {
          throw new Error(
            `Não foi possível encontrar nenhum manual do departamento: ${tipo}`
          )
        }
        context.commit('FILTER_DEPARTMENT', data)
      } catch (err) {
        swal('Oops!', err.message, 'error')
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
        swal({
          title: 'Oops!',
          text: `O id: ${this.$route.params.id} não é válido ou não existe!`,
          icon: 'error',
          button: () => this.$router.push('/')
        })
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
}
