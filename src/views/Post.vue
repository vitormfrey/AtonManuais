<template>
  <div class="container-page">
    <template-header></template-header>
    <div class="conteudo">
      <template-back-page />
      <ReadPost />
    </div>
  </div>
</template>
<script>
import ReadPost from '@/components/ReadPost.vue'
import Header from '@/components/Header'
import BackPageAnchor from '@/components/BackPageAnchor'
export default {
  name: 'Post',
  components: {
    ReadPost,
    'template-header': Header,
    'template-back-page': BackPageAnchor
  }
}
</script>

<style scoped>
.container-page {
  display: grid;
}
.conteudo {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 1rem;
  padding: 0px 60px;
  margin-top: 60px;
}
@media screen and (max-width: 650px) {
  .conteudo {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0px 20px;
    margin-top: 20px;
  }
}
</style>
