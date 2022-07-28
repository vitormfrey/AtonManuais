import User from '../models/UserModel'
import axios from '../utils/axios'
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
export const useAuthStore = defineStore('auth', () => {
  /**
   * @State
   */
  const user = ref(new User())
  const token = ref(null)
  const isAuthenticated = ref(false)
  if (localStorage.getItem('token')) {
    token.value = JSON.parse(localStorage.getItem('token'))
    isAuthenticated.value = true
  }

  watch(
    token,
    (value) => {
      localStorage.setItem('token', JSON.stringify(value))
    },
    { deep: true }
  )

  /**
   * @Actions
   */
  const login = async (params) => {
    const { email, password } = params.value
    let response = {}
    const json = JSON.stringify({ identifier: email, password: password })
    try {
      response = await axios.post('/auth/local', json, {
        headers: { 'Content-Type': 'application/json' }
      })
      token.value = response.data.jwt
      isAuthenticated.value = true
      return {
        status: 'success',
        title: 'Sucesso!',
        msg: 'Login realizado!',
        route: '/auth/manuais',
        isSuccess: true
      }
    } catch (e) {
      return {
        status: 'error',
        title: 'Ops!',
        msg: 'Usuário ou senha inválido',
        route: '/login',
        isSuccess: false
      }
    }
  }
  const logout = () => {
    localStorage.removeItem('token')
    token.value = null
    isAuthenticated.value = false
  }
  /**
   * @Computed
   */
  const apiToken = computed(() => {
    return { Authorization: 'Bearer ' + token.value }
  })
  const retrieveToken = computed(() => {
    return token.value
  })
  return {
    user,
    isAuthenticated,
    apiToken,
    login,
    logout,
    retrieveToken
  }
})
