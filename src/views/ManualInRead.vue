<template>
  <div class="container-page">
    <template-header
      departamento="getDepartamentosIn"
      manuais="getManuaisIn"
      filtroDepartamento="filterDepartamentoIn"
      getterDepartamento="$getDepartamentosIn"
      searchManual="searchInManual"
    />
    <div class="conteudo">
      <ReadManualIn />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import ReadManualIn from '@/components/ReadManualIn.vue'
export default {
  components: {
    'template-header': Header,
    ReadManualIn
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
