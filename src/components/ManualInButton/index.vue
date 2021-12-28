<template>
  <span class="ManualInButton">
    <router-link
      to="/interno/manuais"
      v-if="verificarPagina()"
      class="text-gray-700 block px-4 py-2 text-sm"
      >Manuais Internos</router-link
    >
    <router-link
      to="/"
      v-if="backExterno()"
      class="text-gray-700 block px-4 py-2 text-sm"
      >Manuais Clientes</router-link
    >
  </span>
</template>

<script>
export default {
  name: 'ManualInButton',
  created() {
    this.verificarRota()
  },
  methods: {
    verificarRota() {
      if (window.location.hash.substring(0, 17) != '#/interno/manuais') {
        return true
      } else {
        return false
      }
    },
    verificarPagina() {
      if (this.verificarRota()) {
        if (localStorage.getItem('token')) {
          return true
        }
      } else {
        return false
      }
    },

    backExterno() {
      if (!this.verificarRota()) {
        if (localStorage.getItem('token')) {
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
.ManualInButton {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold !important;
  text-transform: uppercase !important;
  cursor: pointer;
}
</style>
