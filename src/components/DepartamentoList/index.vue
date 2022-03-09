<template>
  <div class="relative inline-block text-left" id="DropDown">
    <div>
      <button
        @click="dropdownOpen = !dropdownOpen"
        class="
          inline-flex
          justify-center
          w-full
          rounded
          border border-gray-300
          shadow-sm
          px-4
          py-2
          bg-white
          text-sm
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-indigo-500
          btnText
        "
      >
        {{ itemSelecionado }}
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      v-show="dropdownOpen"
      class="
        origin-top-right
        absolute
        right-0
        mt-2
        w-56
        rounded
        shadow-lg
        bg-white
        ring-1 ring-black ring-opacity-5
        focus:outline-none
      "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="p-2 btnText" role="none" @click="clearFilterDepartamentos()">
        Todos
      </div>
      <div
        class="p-2 btnText z-40"
        role="none"
        v-for="departamentoOut in $getDepartamentos"
        :key="departamentoOut.id"
        @click="filterManualByDepartamento(departamentoOut)"
      >
        {{ departamentoOut.tipo }}
      </div>
    </div>
  </div>
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
      dropdownOpen: false,
      itemSelecionado: 'Departamentos'
    }
  },
  created() {
    this.$store.dispatch(this.getDepartamento)
  },
  methods: {
    /*Verifica a rota e se é interno ou externo, para trazer os departamentos */
    clearFilterDepartamentos() {
      let path = this.$route.path.substring(0, 16)
      switch (path) {
        case '/':
          this.$store.dispatch(this.getManuais)
          this.dropdownOpen = false
          this.itemSelecionado = 'Departamentos'
          break
        case '/auth/manuais':
          if (this.$route.path === path) this.$store.dispatch(this.getManuais)
          else this.$router.push(`${path}`)
          this.dropdownOpen = false
          this.itemSelecionado = 'Departamentos'
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
        this.dropdownOpen = false
        this.itemSelecionado = event.tipo
      } else {
        this.$router.push('/')
        this.$store.dispatch('limparEstado')
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
.btnText {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold !important;
  text-transform: uppercase !important;
  cursor: pointer;
  color: #003561;
  text-align: center;
}
</style>
