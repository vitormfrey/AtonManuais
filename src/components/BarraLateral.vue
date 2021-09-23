<template>
  <div class="barra-container BarraLateral">
    <InputFilter />
    <ul v-for="(departamento, index) in $getDepartamentos" :key="index">
      <li @click="filtrarDepartamento(departamento)">{{ departamento }}</li>
    </ul>
  </div>
</template>

<script>
import InputFilter from '@/components/InputFilter.vue'
export default {
  name: 'BarraLateral',
  props: {},
  components: {
    InputFilter
  },
  data() {
    return {}
  },
  methods: {
    filtrarDepartamento(e) {
      this.$store.dispatch('filtrarDepartamento', e)
    }
  },
  computed: {
    $getDepartamentos() {
      return this.$store.getters.$getDepartamentos
    }
  }
}
</script>

<style scoped>
.barra-container {
  position: fixed;
  height: 100%;
  width: 15vw;
  background: #003561;
}
</style>
