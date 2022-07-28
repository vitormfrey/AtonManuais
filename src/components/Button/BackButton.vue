<template>
  <router-link :to="route" class="back-page">
    <img src="../../assets/seta-pequena-esquerda.svg" />
  </router-link>
</template>

<script setup>
import { ref } from 'vue'
import router from '../../router'

const isAuthenticatedRoute = ref(router.currentRoute.value.meta.requiresAuth)
const route = ref('/')
const verificarRota = () => {
  if (isAuthenticatedRoute.value) route.value = '/auth/manuais'
}
verificarRota()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.back-page {
  display: inline-block;
  justify-self: start;
  text-transform: uppercase;
  font-weight: bold;
  width: 60px;
  height: 60px;
}
@media screen and (max-width: 650px) {
  .back-page {
    width: 30px;
    height: 30px;
  }
}
</style>
