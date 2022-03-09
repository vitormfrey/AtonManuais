<template>
  <span class="Login mb-4">
    <router-link
      to="/login"
      v-if="verificarRota()"
      :class="{ active: isActive }"
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

<script>
import swal from 'sweetalert'
export default {
  name: 'Login',
  data() {
    return {
      isActive: false
    }
  },
  created() {
    this.verificarPagina()
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      swal({
        title: 'Sucesso!',
        text: `Logout realizado!`,
        icon: 'success',
        buttons: { success: 'Ok!' }
      }).then(() => this.$router.push('/'))
    },
    verificarRota() {
      if (window.location.hash.substring(0, 17) != '#/auth/manuais') {
        return true
      } else {
        return false
      }
    },
    verificarPagina() {
      if (this.verificarRota()) {
        if (localStorage.getItem('token')) {
          this.isActive = true
          return true
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.Login {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold !important;
  text-transform: uppercase !important;
  cursor: pointer;
}
.active {
  display: none;
}
</style>
