<template>
  <div class="home">
    <BarraLateral />
    <Post />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import BarraLateral from '@/components/BarraLateral.vue'
//import Titulo from '@/components/Titulo.vue'

export default {
  name: 'Home',
  components: {
    Post,
    BarraLateral
    //Titulo
  },
  created() {
    document.title = 'AtonSystems'
  }
}
</script>
<style scoped>
.home {
  display: grid;
  grid-template-columns: 15vw auto;
  /* grid-gap: 60px; */
  grid-template-areas:
    'sidebar conteudo'
    'sidebar conteudo';
}
.BarraLateral {
  grid-area: sidebar;
}
.Post {
  grid-area: conteudo;
}
</style>
