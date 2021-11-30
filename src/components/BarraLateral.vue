<template>
  <div class="barra-container BarraLateral">
    <div class="h-full barra-lateral-sm">
      <h3 class="text-xl categoria">Departamentos</h3>

      <span class="login">
        <router-link to="/login" v-if="verificarRota()">Login</router-link>
        <router-link to="/" v-else @click.prevent="logout()"
          >Logout</router-link
        >
      </span>

      <ul class="barra-inside h-full">
        <li
          class="transition duration-700 ease-in-out hover:bg-white w-full"
          @click="mostrarDepartamentos()"
        >
          <p class="text-lg hover:text-blue-700" v-if="verificarRota()">
            Todos
          </p>
          <router-link to="/" class="text-lg hover:text-blue-700" v-else
            >Manuais Cliente</router-link
          >
        </li>
        <li
          v-show="verificarRota()"
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
      <!-- Responsividade -->
      <h3 class="text-xl titlo cursor-pointer" @click="mostrarDepartamentos()">
        AtonSystems
      </h3>
      <select
        @change="filtrarDepartamento($event.target.value)"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarraLateral',
  props: {
    departamento: String,
    manuais: String
  },
  created() {
    this.$store.dispatch(this.departamento)
  },
  methods: {
    filtrarDepartamento(event) {
      if (typeof event === 'object') {
        this.$store.dispatch('filtrarDepartamento', event)
      } else {
        const e = JSON.parse(event)
        this.$store.dispatch('filtrarDepartamento', e)
      }
    },
    mostrarDepartamentos() {
      if (this.$route.path === '/') {
        this.$store.dispatch(this.manuais)
      } else {
        console.log(this.$route.path)
        this.$router.push('/')
        this.$store.dispatch('limparEstado')
      }
    },
    logout() {
      this.$store.dispatch('logout')
    },
    verificarRota() {
      if (window.location.hash.substring(0, 17) != '#/interno/manuais') {
        return true
      } else {
        return false
      }
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
.login {
  display: block;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold !important;
  text-transform: uppercase !important;
  color: #fff !important;
  cursor: pointer;
}
@media screen and (max-width: 650px) {
  .barra-container {
    position: inherit;
    height: 100%;
    width: 100%;
    padding: 10px;
  }
  .barra-lateral-sm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    justify-content: space-between;
  }
  .titlo {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    align-self: center;
  }
  .titulo:hover {
    color: #f5f5f5;
  }

  .barra-inside,
  .categoria {
    display: none;
  }
  .login {
    display: none;
  }
}
</style>
