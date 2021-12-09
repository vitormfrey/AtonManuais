import swal from 'sweetalert'
import axios from '../utils/axios'
import { authHeader } from '../utils/auth.header'
export const manuaisInternos = {
  state: {
    manuais: [''],
    departamentosInternos: [],
    manual: {},
    manualConteudo: ''
  },
  mutations: {
    SET_MANUAIS_IN(state, payload) {
      state.manuais = payload
    },
    SET_MANUAL(state, payload) {
      state.manual = payload
      state.manualConteudo = payload.conteudo
    },
    SET_DEPARTAMENTO_IN(state, payload) {
      state.departamentosInternos = payload
    },
    FILTER_DEPARTMENT_IN(state, payload) {
      state.manuais = payload
    }
  },

  actions: {
    async getManuaisIn(context) {
      const API_KEY = authHeader()
      try {
        const { data } = await axios.get('/manuais-internos', {
          headers: API_KEY
        })
        // console.log(data)
        if (data.length === 0) {
          throw new Error('Api não retorna Manual')
        }
        context.commit('SET_MANUAIS_IN', data)
      } catch (err) {
        swal('Oops!', err.message, 'error')
      }
    },
    //Selecionar manual por ID
    async getManualInById(context, payload) {
      const API_KEY = authHeader()
      try {
        const { data } = await axios.get(`/manuais-internos/${payload}`, {
          headers: API_KEY
        })
        // console.log(data)
        if (data.id != payload) {
          throw new Error(`O id: ${payload} não é válido ou não existe!`)
        }
        context.commit('SET_MANUAL', data)
      } catch (err) {
        swal({
          title: 'Oops!',
          text: `O id: ${this.$route.params.id} não é válido ou não existe!`,
          icon: 'error',
          buttons: () => this.$router.push('/manuais-internos')
        })
      }
    },

    async getDepartamentosIn(context) {
      const API_KEY = authHeader()
      try {
        const { data } = await axios.get(
          '/departamento-internos?_sort=tipo:ASC',
          {
            headers: API_KEY
          }
        )
        if (data.length === 0) {
          throw new Error('Api não retorna departamentos')
        }
        context.commit('SET_DEPARTAMENTO_IN', data)
      } catch (err) {
        swal('Oops!', err.message, 'error')
      }
    },

    //Implementar esse filtro pra pro manual interno
    async filterDepartamentoIn(context, payload) {
      const API_KEY = authHeader()
      try {
        const { id, tipo } = payload

        const { data } = await axios.get(
          `manuais-internos?departamentos=${id}`,
          {
            headers: API_KEY
          }
        )

        if (data.length === 0) {
          throw new Error(
            `Não foi possível encontrar nenhum manual do departamento: ${tipo}`
          )
        }
        context.commit('FILTER_DEPARTMENT_IN', data)
      } catch (err) {
        swal('Oops!', err.message, 'error')
      }
    },
    async searchInManual({ commit, state }, payload) {
      //Verifico se o payload é maior que 2 pra começar a pesquisar
      if (payload.split('').length > 2) {
        let pesquisa = ''
        //Percorre o array de manuais e faz o match
        for (let i = 0; i < state.manuais.length; i++) {
          pesquisa = await state.manuais.filter((e) => {
            return payload
              .toLowerCase()
              .split(' ')
              .every((v) => e.titulo.toLowerCase().includes(v))
          })
          //Verifica se o Match retornou algum resultado e faz o commit
          if (pesquisa.length > 0) {
            commit('SET_MANUAIS_IN', pesquisa)
          } else {
            //Caso não existir, informa o cliente que não foi encontrado
            return swal(
              'Oops!',
              `Não foi possível encontrar nenhum manual sobre ${payload}`,
              'error'
            )
          }
        }
      } else {
        return this.posts
      }
    }
  },
  getters: {
    $getManuaisIn(state) {
      return state.manuais
    },
    $getManualInById(state) {
      return state.manual
    },
    $getDepartamentosIn(state) {
      return state.departamentosInternos
    },
    $getContentManual(state) {
      return state.manualConteudo
    }
  }
}
