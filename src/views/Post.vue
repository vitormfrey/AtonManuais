<template>
  <div class="post">
    <h1>Post {{ $route.params.id }}</h1>
    <BarraLateral />
    <ReadPost />
  </div>
</template>
<script>
import ReadPost from '@/components/ReadPost.vue'
import BarraLateral from '@/components/BarraLateral.vue'
export default {
  name: 'Post',
  components: {
    ReadPost,
    BarraLateral
  },
  created() {
    document.title = 'AtonSystems'
  }
}
</script>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 15vw auto;
  grid-gap: 3.75rem;
  grid-template-areas:
    'sidebar conteudo'
    'sidebar conteudo';
}
.BarraLateral {
  grid-area: sidebar;
}
.ReadPost {
  grid-area: conteudo;
}
</style>
