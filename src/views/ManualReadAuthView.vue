<template>
  <div class="container-page">
    <Header :isAuthRoute="true" />
    <div class="conteudo">
      <BackButton />
      <ReadDocument />
    </div>
  </div>
</template>
<script setup>
import Header from '@/components/Header/Header'
import BackButton from '@/components/Button/BackButton'
import ReadDocument from '@/components/AuthDocument/ReadDocument'
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
