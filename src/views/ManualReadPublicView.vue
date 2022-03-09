<template>
  <div class="container-page">
    <template-header></template-header>
    <div class="conteudo">
      <button-back-page />
      <template-manual-read-public />
    </div>
  </div>
</template>
<script>
import ManualReadPublic from '@/components/ManualReadPublic'
import Header from '@/components/Header'
import ButtonBackPage from '@/components/ButtonBackPage'
export default {
  name: 'Post',
  components: {
    'template-manual-read-public': ManualReadPublic,
    'template-header': Header,
    'button-back-page': ButtonBackPage
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
