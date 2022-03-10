<template>
  <div class="container-home">
    <template-header
      departamento="getDepartamentosIn"
      manuais="getManuaisIn"
      filtroDepartamento="filterDepartamentoIn"
      getterDepartamento="$getDepartamentosIn"
      searchManual="searchInManual"
    />
    <div class="conteudo">
      <template-manual-card
        manuais="getManuaisIn"
        customRouteIn="ManuaisRead"
        getManualByIdIn="getManualInById"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ManualCardTemplate from '@/components/ManualCard/template/ManualTemplateView.vue'

export default {
  name: 'HomeAuthView',
  components: {
    'template-header': Header,
    'template-manual-card': ManualCardTemplate
  }
}
</script>

<style scoped>
.container-home {
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

@media screen and (max-width: 649px) {
  .home {
    display: grid;
    justify-content: center;
  }
  .conteudo {
    padding: 0px 20px;
    margin-top: 60px;
  }
}
</style>
