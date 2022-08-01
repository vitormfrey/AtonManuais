<template>
  <div>
    <Header :isAuthRoute="true" />
    <div class="conteudo">
      <Titulo title="Drivers" />
      <Table :dados="dados" />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header/Header'
import Table from '@/components/Admin/Table'
import Titulo from '../../components/Titulo/Titulo.vue'
import axios from '../../utils/axios'
import { useAuthStore } from '../../store/Auth'
import { ref } from 'vue'
const API_TOKEN = useAuthStore().apiToken
const dados = ref([])
const initAsync = async () => {
  let { data } = await axios.get('/drivers', { headers: API_TOKEN })
  dados.value = data[0].informacoes
}
initAsync()
</script>

<style scoped>
.conteudo {
  margin: 20px;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Titulo {
  justify-self: flex-start;
  align-self: flex-start;
}
</style>
