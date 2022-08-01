<script setup>
import router from '../../router'
import { ref } from 'vue'
import { useAuthStore } from '../../store/Auth'
import { storeToRefs } from 'pinia'

const useStore = useAuthStore()
const { isAuthenticated } = storeToRefs(useStore)
const visibility = ref(router.currentRoute.value.meta.requiresAuth)
</script>

<template>
  <span class="ManualInButton">
    <router-link
      to="/auth/home"
      v-if="!visibility"
      :class="{ isLogged: !isAuthenticated }"
      class="text-gray-700 block px-4 py-2 text-sm"
    >
      Área interna</router-link
    >
    <router-link
      to="/"
      v-else
      :class="{ isLogged: !isAuthenticated }"
      class="text-gray-700 block px-4 py-2 text-sm"
      >Manuais Clientes</router-link
    >
  </span>
</template>

<style scoped>
.ManualInButton {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold !important;
  text-transform: uppercase !important;
  cursor: pointer;
}
.isLogged {
  display: none;
}
</style>
