<template>
  <div v-for="manual in manuais" :key="manual.id">
    <article
      class="
        post-container
        px-8
        py-5
        rounded-lg
        transtion
        duration-500
        ease-in-out
        hover:bg-gray-300
        transform
        hover:-translate-y-1 hover:scale-110
      "
      @click.prevent="getManual(manual)"
    >
      <app-title :title="manual.titulo" />
      <app-department :departamento="manual.departamentos.tipo" />
      <app-description :descricao="manual.descricao" />
      <p class="call-to-action text-sm">Ler mais...</p>
    </article>
  </div>
</template>

<script>
import Title from '../Titulo/index.vue'
import Department from '../Departamento/index.vue'
import Description from '../Descricao/index.vue'

export default {
  name: 'Manual',
  components: {
    'app-title': Title,
    'app-department': Department,
    'app-description': Description
  },
  props: {
    manuais: { type: Array },
    customRoute: { type: String, default: 'Post' },
    getManualById: { type: String, default: 'selectPost' }
  },
  methods: {
    getManual(event) {
      const id = event.id
      this.$router.push({ name: this.customRoute, params: { id: id } })
      this.$store.dispatch(this.getManualById, id)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.post-container {
  background: #f5f5f5;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  cursor: pointer;
}
.call-to-action {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #003561;
  text-align: left;
}
</style>
