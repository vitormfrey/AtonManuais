import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from '../utils/axios'
import swal from 'sweetalert'

export const usePublicDocumentsStore = defineStore('publicDocuments', () => {
  /**
   *  @State
   */
  const documents = ref([])
  const document = ref({})
  const departamentos = ref([])

  watch(
    document,
    (value) => {
      localStorage.setItem('publicDocument', JSON.stringify(value))
    },
    { deep: true }
  )

  if (localStorage.getItem('publicDocument')) {
    document.value = JSON.parse(localStorage.getItem('publicDocument'))
  }
  /**
   *  @Actions
   */
  const getDocuments = async () => {
    try {
      const { data } = await axios.get('/manuais?_sort=id:desc')
      documents.value = data
    } catch (e) {
      console.Error(e)
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
    try {
      const { data } = await axios.get('/departamentos?_sort=tipo:ASC')
      if (data.length === 0) {
        throw new Error('Api não retorna departamentos')
      }
      departamentos.value = data
    } catch (err) {
      swal('Oops!', err.message, 'error')
    }
  }
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

        if (pesquisa.length > 0) documents.value = pesquisa
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
