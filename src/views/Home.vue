<template>
  <div class="container-home">
    <template-header />
    <div class="conteudo">
      <template-title />
      <template-manual-card />
    </div>
  </div>
</template>

<script>
import Titulo from '@/components/Titulo.vue'
import Header from '@/components/Header'
import ManualCardTemplate from '../components/ManualCard/template/ManualTemplateView.vue'

export default {
  name: 'Home',
  components: {
    'template-header': Header,
    'template-title': Titulo,
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
}
.Titulo {
  margin-top: 20px;
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
  .Titulo {
    display: none;
  }
}
</style>
