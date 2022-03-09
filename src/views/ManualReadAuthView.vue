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
      <button-back-page />
      <template-manual-read-auth />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import BackPageAnchor from '@/components/BackPageAnchor'
import ManualReadAuth from '@/components/ManualReadAuth.vue'
export default {
  name: 'ManualReadAuthView',
  components: {
    'template-header': Header,
    'template-manual-read-auth': ManualReadAuth,
    'button-back-page': BackPageAnchor
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
