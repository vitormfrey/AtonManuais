<script setup>
import Header from '@/components/Header/Header'
import Card from '@/components/Admin/Card'
import { usePrivateDocumentsStore } from '../store/PrivateDocuments'
const useStore = usePrivateDocumentsStore()
useStore.getDocuments()
</script>

<template>
  <div class="container-home">
    <Header :isAuthRoute="true" />
    <div class="conteudo">
      <Card categoria="Manuais" :route="'/auth/manuais'" />
      <Card categoria="Implantação" />
      <Card categoria="Importador" />
      <Card categoria="Drivers" :route="'/auth/drivers'" />
    </div>
  </div>
</template>

<style scoped>
.container-home {
  display: grid;
}
.conteudo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 60px;
  padding: 0px 60px;
}

@media screen and (max-width: 649px) {
  .home {
    display: grid;
    justify-content: center;
  }
  .conteudo {
    padding: 0px 20px;
    margin-top: 60px;
  }
}
</style>
