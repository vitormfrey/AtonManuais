<script setup>
import router from '../../router'
import Badge from '../Badge/Badge.vue'
import { bool } from 'prop-types'
import { defineProps, toRefs } from 'vue'
import { usePublicDocumentsStore } from '../../store/PublicDocuments'
import { usePrivateDocumentsStore } from '../../store/PrivateDocuments'

const props = defineProps({
  documentCard: Object,
  isAuthenticated: { type: bool, default: false }
})
const { documentCard, isAuthenticated } = toRefs(props)
const usePublicStore = usePublicDocumentsStore()
const usePrivateStore = usePrivateDocumentsStore()
/**
 * @Event
 * @param { id }
 */
const handleClickEvent = (event) => {
  if (!isAuthenticated.value) {
    usePublicStore.setDocument(event)
    router.push({ name: 'Post', params: { id: event } })
  } else {
    usePrivateStore.setDocument(event)
    router.push({ name: 'ManuaisRead', params: { id: event } })
  }
}
</script>

<template>
  <div
    class="container slide-effect"
    @click="handleClickEvent(documentCard.id)"
  >
    <h3>{{ documentCard.titulo }}</h3>
    <h4>Departamento: {{ documentCard.departamentos.tipo }}</h4>
    <Badge :version="documentCard.versao" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');
.container {
  max-width: 700px;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5f5;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
h3,
h4 {
  font-family: 'Rubik', sans-serif;
  flex: 1;
}

.slide-effect:hover {
  box-shadow: 0.3em 0.3em #003561;
}
.slide-effect {
  cursor: pointer;
  -webkit-transition: ease-out 0.9s;
  -moz-transition: ease-out 0.9s;
  transition: ease-out 0.9s;
}
</style>
