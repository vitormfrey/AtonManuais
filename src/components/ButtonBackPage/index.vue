<template>
  <router-link :to="rota" class="back-page">
    <img src="../../assets/seta-pequena-esquerda.svg" />
  </router-link>
</template>

<script>
export default {
  name: 'ButtonBackPage',
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
      if (rotaAtual.includes('/auth/manuais')) this.rota = '/auth/manuais'
      else this.rota = '/'
    }
  }
}
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
