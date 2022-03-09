<template>
  <router-link :to="rota" class="back-page"> voltar</router-link>
</template>

<script>
export default {
  name: 'BackPageAnchor',
  data() {
    return {
      rota: ''
    }
  },
  created() {
    this.verificarRotaAtua()
  },
  methods: {
    verificarRotaAtua() {
      let rotaAtual = window.location.hash
      if (rotaAtual.includes('/interno/manuais')) this.rota = '/interno/manuais'
      else this.rota = '/'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.back-page {
  color: #003561;
  display: inline-block;
  justify-self: start;
  font-size: 1.3em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold;
}
</style>
