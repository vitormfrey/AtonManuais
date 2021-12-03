<template>
  <h1 class="post-titulo text-2xl cursor-auto">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: { type: String, default: 'Insira um Titulo' }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.post-titulo {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #003561;
  text-align: left;
}
</style>
