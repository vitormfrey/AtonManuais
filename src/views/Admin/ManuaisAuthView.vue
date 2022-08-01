<script setup>
import Header from '@/components/Header/Header'
import Card from '@/components/Card/Card'
import { usePrivateDocumentsStore } from '../../store/PrivateDocuments'
const useStore = usePrivateDocumentsStore()
useStore.getDocuments()
</script>

<template>
  <div class="container-home">
    <Header :isAuthRoute="true" />
    <div class="conteudo">
      <Card
        v-for="document in useStore.documents"
        :key="document.id"
        :documentCard="document"
        :isAuthenticated="true"
      ></Card>
    </div>
  </div>
</template>

<style scoped>
.container-home {
  display: grid;
}
.conteudo {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 1rem;
  padding: 0px 60px;
  margin-top: 60px;
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
