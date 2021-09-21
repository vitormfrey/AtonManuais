<template>
  <div class="home">
    <BarraLateral />
    <div class="conteudo">
      <Titulo />
      <Post />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import BarraLateral from '@/components/BarraLateral.vue'
import Titulo from '@/components/Titulo.vue'

export default {
  name: 'Home',
  components: {
    Post,
    BarraLateral,
    Titulo
  },
  created() {
    document.title = 'AtonSystems'
  }
}
</script>
<style scoped>
.home {
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-gap: 150px;
  grid-template-areas:
    'sidebar conteudo'
    'sidebar conteudo';
}
.BarraLateral {
  grid-area: sidebar;
}
.conteudo {
  grid-area: conteudo;
  padding-top: 30px;
}
</style>
