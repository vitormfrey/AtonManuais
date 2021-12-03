<template>
  <p class="post-descricao text-sm cursor-auto">{{ descricao }}</p>
</template>

<script>
export default {
  name: 'Description',
  props: {
    descricao: { type: String, default: 'Insira uma descricao' }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.post-descricao {
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}
</style>
