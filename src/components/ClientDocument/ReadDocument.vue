<script setup>
import { usePublicDocumentsStore } from '../../store/PublicDocuments'
import { computed, ref } from 'vue'
import Badge from '../Badge/Badge'
import router from '../../router'
const useStore = usePublicDocumentsStore()
const updated = computed(() => {
  return useStore.document.updated_at
    .substring(0, 10)
    .split('-')
    .reverse()
    .join('-')
})
const isEmpty = ref(Object.keys(useStore.document).length === 0)
const init = () => {
  if (isEmpty.value) {
    let { id } = router.currentRoute.value.params
    useStore.getDocumentById(id)
  }
}
init()
</script>

<template>
  <div class="container">
    <h1 class="titulo">{{ useStore.document.titulo }}</h1>
    <div class="container-infos">
      <h6>Departamento: {{ useStore.document.departamentos.tipo }}</h6>
      <Badge :version="useStore.document.versao" />
    </div>
    <article class="conteudo" v-html="useStore.document.conteudo"></article>
    <span>Atualizado: {{ updated }}</span>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');
.container {
  display: flex;
  flex-direction: column;
}
.container-infos {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  align-self: center;
  margin: 0 0 25px 0;
}
.conteudo {
  display: flex;
  flex-direction: column;
}
.titulo {
  font-family: 'Rubik', sans-serif;
  font-size: 1.75em;
  align-self: center;
}
.container-infos h6 {
  font-family: 'Rubik', sans-serif;
  font-size: 1.2em;
}
.conteudo {
  font-family: 'Roboto Slab', serif;
  word-break: break-word;
}
.container span {
  font-family: 'Rubik', sans-serif;
  font-size: 1em;
  align-self: flex-end;
  margin: 10px 0 0 0;
}
@media screen and (max-width: 650px) {
  .titulo {
    font-size: 1.2em;
  }
}
</style>
