<script setup>
import Titulo from '@/components/Titulo/Titulo'
import Header from '@/components/Header/Header'
import Card from '../components/Card/Card.vue'
import { usePublicDocumentsStore } from '../store/PublicDocuments'
const useStore = usePublicDocumentsStore()
useStore.getDocuments()
</script>

<template>
  <div class="container-home">
    <Header />
    <div class="conteudo">
      <Titulo title="Manuais" />
      <Card
        v-for="document in useStore.documents"
        :key="document.id"
        :documentCard="document"
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
  justify-items: left;
  grid-gap: 1rem;
  padding: 0px 60px;
  margin: 30px 0 0 0;
}
.conteudo div {
  width: 100%;
}
@media screen and (max-width: 649px) {
  .conteudo {
    padding: 0px 20px;
    margin-top: 60px;
  }
  .Titulo {
    display: none;
  }
}
</style>
