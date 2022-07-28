import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './Auth'
import axios from '../utils/axios'
import swal from 'sweetalert'
export const usePrivateDocumentsStore = defineStore('privateDocuments', () => {
  /**
   *  @State
   */
  const documents = ref([])
  const document = ref({})
  const departamentos = ref([])

  watch(
    document,
    (value) => {
      localStorage.setItem('privateDocument', JSON.stringify(value))
    },
    { deep: true }
  )

  if (localStorage.getItem('privateDocument')) {
    document.value = JSON.parse(localStorage.getItem('privateDocument'))
  }
  /**
   *  @Actions
   */
  const getDocuments = async () => {
    const API_TOKEN = useAuthStore().apiToken
    try {
      const { data } = await axios.get('/manuais-internos', {
        headers: API_TOKEN
      })
      documents.value = data
    } catch (e) {
      console.log(API_TOKEN)
    }
  }
  const setDocument = (param) => {
    var value = documents.value.filter((x) => x.id == param)[0]
    if (!value)
      swal(
        'Oops!',
        'Parece que tivemos um erro interno, recarregue a página',
        'error'
      )
    document.value = value
  }
  const getDepartamentos = async () => {
    const API_TOKEN = useAuthStore().apiToken
    try {
      const { data } = await axios.get(
        '/departamento-internos?_sort=tipo:ASC',
        { headers: API_TOKEN }
      )
      if (data.length === 0) {
        throw new Error('Api não retorna departamentos')
      }
      departamentos.value = data
    } catch (err) {
      swal('Oops!', err.message, 'error')
    }
  }
  //refatorara parar buscar na Lista
  const filterDepartamento = async (params) => {
    const { id } = params
    var value = documents.value.filter((x) => x.departamentos.id == id)
    documents.value = value
  }
  const searchDocument = async (param) => {
    if (param.split('').length > 2) {
      let pesquisa = ''
      for (let i = 0; i < documents.value.length; i++) {
        pesquisa = await documents.value.filter((e) => {
          return param
            .toLowerCase()
            .split(' ')
            .every((v) => e.titulo.toLowerCase().includes(v))
        })

        if (pesquisa.length > 0) document.value = pesquisa
        else
          return swal(
            'Oops!',
            `Não foi possível encontrar nenhum manual sobre ${param}`,
            'error'
          )
      }
    } else return documents.value
  }
  const getDocumentById = async (param) => {
    try {
      const { data } = await axios.get(`/manuais/${param}`)
      document.value = data
    } catch (e) {
      console.Error(e)
    }
  }

  return {
    getDocuments,
    setDocument,
    getDepartamentos,
    filterDepartamento,
    searchDocument,
    getDocumentById,
    documents,
    document,
    departamentos
  }
})
