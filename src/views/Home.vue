<template>
  <div class="home">
    <template-sidebar />
    <div class="conteudo">
      <template-title />
      <template-manual-card />
    </div>
  </div>
</template>

<script>
import BarraLateral from '@/components/BarraLateral.vue'
import Titulo from '@/components/Titulo.vue'
import ManualCardTemplate from '../components/ManualCard/template/ManualTemplateView.vue'

export default {
  name: 'Home',
  components: {
    'template-manual-card': ManualCardTemplate,
    'template-title': Titulo,
    'template-sidebar': BarraLateral
  },
  created() {
    document.title = 'AtonSystems'
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
