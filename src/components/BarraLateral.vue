<template>
  <div class="barra-container BarraLateral">
    <div class="h-full">
      <h3 class="text-xl categoria">Departamentos</h3>
      <ul class="barra-inside h-full">
        <li
          class="transition duration-700 ease-in-out hover:bg-white w-full"
          v-for="departamento in $getDepartamentos"
          :key="departamento.id"
          @click="filtrarDepartamento(departamento)"
        >
          <p class="text-lg hover:text-blue-700">
            {{ departamento.tipo }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import InputFilter from '@/components/InputFilter.vue'
export default {
  name: 'BarraLateral',
  props: {},
  created() {
    this.$store.dispatch('fetchDepartamento')
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.barra-container {
  position: fixed;
  height: 100%;
  width: 15vw;
  background: #003561;
}
.barra-inside {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 30px;
  justify-items: center;
  align-items: center;
  align-content: center;
}
.categoria {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  color: #fff !important;
  text-align: center !important;
  margin-top: 1rem !important;
}

.barra-inside li {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  color: #fff !important;
  cursor: pointer;
  text-align: center;
}
</style>
