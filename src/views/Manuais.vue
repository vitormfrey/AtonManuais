<template>
  <div class="home">
    <template-sidebar
      departamento="getDepartamentosIn"
      manuais="getManuaisIn"
      filtroDepartamento="filterDepartamentoIn"
      getterDepartamento="$getDepartamentosIn"
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
import BarraLateral from '@/components/BarraLateral.vue'
import ManualCardTemplate from '@/components/ManualCard/template/ManualTemplateView.vue'

export default {
  components: {
    'template-sidebar': BarraLateral,
    'template-manual-card': ManualCardTemplate
  }
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-gap: 150px;
  grid-template-areas:
    'sidebar conteudo'
    'sidebar conteudo';
}
.BarraLateral {
  grid-area: sidebar;
}
.conteudo {
  grid-area: conteudo;
  padding-top: 30px;
  /* display: none; */
}
@media screen and (max-width: 649px) {
  .home {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-gap: 30px;
    grid-template-areas:
      'sidebar sidebar'
      'conteudo conteudo';
  }
  .Titulo {
    display: none;
  }
  .conteudo {
    padding: 20px;
  }
}
</style>
