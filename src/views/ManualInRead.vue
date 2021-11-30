<template>
  <div class="post">
    <BarraLateral departamento="fetchDepartamento" manuais="fetchPosts" />
    <ReadManualIn />
  </div>
</template>

<script>
import BarraLateral from '@/components/BarraLateral.vue'
import ReadManualIn from '@/components/ReadManualIn.vue'
export default {
  components: {
    BarraLateral,
    ReadManualIn
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

@media screen and (max-width: 650px) {
  .post {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-gap: 0.5rem;
    grid-template-areas:
      'sidebar sidebar'
      'conteudo conteudo';
  }
}
</style>
