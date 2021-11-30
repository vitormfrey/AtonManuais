import axios from '../utils/axios'
import swal from 'sweetalert'
import User from '../models/UserModel'

export const auth = {
  state: {
    userRegister: {},
    user: new User(),
    api_token: ''
  },
  mutations: {
    SET_API_TOKEN(state, payload) {
      state.api_token = payload
    }
  },

  actions: {
    async login(context, payload) {
      const { email, password } = payload
      let res = {}
      try {
        res = await axios.post('/auth/local', {
          identifier: email,
          password: password
        })
      } catch (res) {
        swal('Oops!', 'Usuário ou senha inválido', 'error')
      }
      await localStorage.setItem('token', JSON.stringify(res.data.jwt))
      context.commit('SET_API_TOKEN', res.data.jwt)
    },
    async logout(context) {
      await localStorage.removeItem('token')
      context.commit('SET_API_TOKEN', '')
    },
    async tokenSet(context) {
      const token = await localStorage.getItem('token')
      if (token === undefined || token === null) {
        return
      }
      context.commit('SET_API_TOKEN', token)
    }
  },
  getters: {
    $getToken(state) {
      return state.api_token
    }
  }
}
