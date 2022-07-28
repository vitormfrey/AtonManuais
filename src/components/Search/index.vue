<script setup>
import { bool } from 'prop-types'
import { ref, defineProps, watch, toRefs } from 'vue'
import { usePrivateDocumentsStore } from '../../store/PrivateDocuments'
import { usePublicDocumentsStore } from '../../store/PublicDocuments'

const usePublicStore = usePublicDocumentsStore()
const usePrivateStore = usePrivateDocumentsStore()
const props = defineProps({ isAuthenticated: { type: bool, default: false } })
const { isAuthenticated } = toRefs(props)
const searchQuery = ref('')

const search = (query) => {
  if (!isAuthenticated.value) usePublicStore.searchDocument(query)
  else usePrivateStore.searchDocument(query)
}
const pullDocuments = () => {
  if (!isAuthenticated.value) usePublicStore.getDocuments()
  else usePrivateStore.getDocuments()
}
watch(searchQuery, (newValue, oldValue) => {
  if (newValue != oldValue) {
    if (newValue == null || newValue == undefined || newValue == ``) {
      return pullDocuments()
    } else search(newValue)
  }
})
</script>

<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Pesquisa um manual..."
      class="
        rounded-md
        focus:outline-none focus:ring focus:border-blue-300
        p-2
        search-dados
      "
      id="Search"
    />
    <input type="button" value class="search-btn rounded-md" />
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-auto-flow: column;
}
.search-dados {
  width: 25vw;
  height: 50px;
  border: solid;
  border-color: #00bce5;
}
.search-btn {
  position: relative;
  width: 50px;
  height: 49px;
  right: 50px;
  background: url('../../assets/lupa.svg') no-repeat center;
  background-color: #003561;
  border: solid;
  border-color: #00bce5;
}
@media screen and (max-width: 650px) {
  div {
    grid-template-columns: 1fr;
  }
  .search-dados {
    width: 70vw;
  }
}
</style>
