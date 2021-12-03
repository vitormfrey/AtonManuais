<template>
  <ul class="h-full Sidebar" id="Sidebar-inside">
    <li
      class="transition duration-700 ease-in-out hover:bg-white w-full"
      @click="clearFilterDepartamentos()"
    >
      <!-- Limpa o filtro departamento -->
      <p class="text-lg hover:text-blue-700">Todos</p>
    </li>
    <!-- Mostra os departamentos e filtra por departamento selecionado  -->
    <li
      class="transition duration-700 ease-in-out hover:bg-white w-full"
      v-for="departamentoOut in $getDepartamentos"
      :key="departamentoOut.id"
      @click="filterManualByDepartamento(departamentoOut)"
    >
      <p class="text-lg hover:text-blue-700">
        {{ departamentoOut.tipo }}
      </p>
    </li>
  </ul>
  <!-- Responsividade -->
  <h3
    class="text-xl titulo cursor-pointer"
    :class="{ active: isActive }"
    id="Home"
    @click="clearFilterDepartamentos()"
  >
    AtonSystems
  </h3>
  <select
    @change="filterManualByDepartamento($event.target.value)"
    class="
      block
      appearance-none
      bg-white
      border border-gray-400
      hover:border-gray-500
      px-4
      py-2
      pr-8
      rounded
      shadow
      leading-tight
      focus:outline-none focus:shadow-outline
    "
    :class="{ active: isActive }"
  >
    <option disabled selected class="teste">Departamento</option>
    <option
      v-for="departamento in $getDepartamentos"
      :key="departamento.id"
      :value="JSON.stringify(departamento)"
    >
      {{ departamento.tipo }}
    </option>
  </select>
  <!-- Responsividade fim-->
</template>

<script>
export default {
  name: 'DepartamentoList',
  props: {
    //Passo pra essa prop se vai ser filtrado o interno ou externo
    getDepartamento: { type: String, default: 'fetchDepartamento' },
    filtro: { type: String, default: 'filtrarDepartamento' },
    getManuais: { type: String, default: 'fetchPosts' },
    showDepartamentos: { type: String, default: '$getDepartamentos' }
  },
  data() {
    return {
      isActive: true
    }
  },
  created() {
    this.getWidthPage()
    this.$store.dispatch(this.getDepartamento)
  },
  methods: {
    /*Verifica a rota e se é interno ou externo, para trazer os departamentos */
    clearFilterDepartamentos() {
      let path = this.$route.path.substring(0, 16)
      switch (path) {
        case '/':
          this.$store.dispatch(this.getManuais)
          break
        case '/interno/manuais':
          if (this.$route.path === path) this.$store.dispatch(this.getManuais)
          else this.$router.push(`${path}`)
          break
        default:
          this.$router.push('/')
          this.$store.dispatch('limparEstado')
          break
      }
    },
    filterManualByDepartamento(event) {
      if (typeof event === 'object') {
        this.$store.dispatch(this.filtro, event)
      } else {
        this.$router.push('/')
        this.$store.dispatch('limparEstado')
      }
    },
    getWidthPage() {
      const view =
        window.screen.availWidth - (window.outerWidth - window.innerWidth)
      if (view <= 650) {
        this.isActive = false
      }
    }
  },
  computed: {
    $getDepartamentos() {
      const manual =
        this.showDepartamentos != '$getDepartamentos'
          ? this.$store.getters.$getDepartamentosIn
          : this.$store.getters.$getDepartamentos
      return manual
    }
  }
}
</script>

<style scoped>
#Sidebar-inside {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 30px;
  justify-items: center;
  align-items: center;
}
#Sidebar-inside li {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  color: #fff !important;
  cursor: pointer;
  text-align: center;
}
.active {
  display: none;
}

@media screen and (max-width: 650px) {
  .titulo {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    align-self: center;
  }
  .titulo:hover {
    color: #f5f5f5;
  }
  #Sidebar-inside {
    display: none;
  }
}
</style>
