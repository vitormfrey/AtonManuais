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
  }
}
</script>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 20vh 1fr;
  grid-template-rows: 55px calc(100vh - 55px);
  grid-template-areas:
    'sidebar conteudo'
    'sidebar conteudo';
  justify-items: center;
}
.BarraLateral {
  grid-area: sidebar;
}
.ReadPost {
  grid-area: conteudo;
}
</style>
