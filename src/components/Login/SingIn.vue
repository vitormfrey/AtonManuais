<script setup>
import router from '../../router'
import swal from 'sweetalert'
import { useAuthStore } from '../../store/Auth'
import { storeToRefs } from 'pinia'

const useStore = useAuthStore()
const { isAuthenticated } = storeToRefs(useStore)
const logout = async () => {
  await useStore.logout()
  swal({
    title: 'Sucesso!',
    text: `Logout realizado!`,
    icon: 'success',
    buttons: { success: 'Ok!' }
  }).then(() => router.push('/'))
}
</script>

<template>
  <span class="Login mb-4">
    <router-link
      v-if="!isAuthenticated"
      to="/login"
      class="text-gray-700 block px-4 py-2 text-sm"
      >Login</router-link
    >
    <p
      v-else
      @click.prevent="logout()"
      class="text-gray-700 block px-4 py-2 text-sm"
    >
      Logout
    </p>
  </span>
</template>

<style scoped>
.Login {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold !important;
  text-transform: uppercase !important;
  cursor: pointer;
}
</style>
