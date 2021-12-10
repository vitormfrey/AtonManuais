<template>
  <div class="sidebar-container BarraLateral">
    <div class="h-full p-2 sideBar-sm sideBar">
      <h3 class="text-xl categoria">Departamentos</h3>
      <app-search :searchIn="searchManual" :getManuais="manuais" />
      <app-call-to-action-manualIn />
      <app-departamento-list
        :getDepartamento="departamento"
        :getManuais="manuais"
        :filtro="filtroDepartamento"
        :showDepartamentos="getterDepartamento"
      />
      <app-login />
    </div>
  </div>
</template>

<script>
import Login from './Login/index.vue'
import ManualInButton from './ManualInButton/index.vue'
import DepartamentoList from './DepartamentoList/index.vue'
import Search from './Search.vue'
export default {
  name: 'BarraLateral',
  components: {
    'app-login': Login,
    'app-call-to-action-manualIn': ManualInButton,
    'app-departamento-list': DepartamentoList,
    'app-search': Search
  },
  props: {
    departamento: { type: String },
    manuais: { type: String },
    filtroDepartamento: { type: String },
    getterDepartamento: { type: String },
    searchManual: { type: String }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.sidebar-container {
  position: fixed;
  height: 100%;
  width: 18rem;
  background: #003561;
}
.categoria {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  color: #fff !important;
  text-align: center !important;
  margin-top: 1rem !important;
}
.sideBar {
  display: grid;
}
.Login {
  align-self: end;
}
#Sidebar-inside {
  max-height: 350px;
  overflow: auto;
}

@media screen and (max-width: 650px) {
  .sidebar-container {
    position: inherit;
    height: 100%;
    width: 100%;
    padding: 10px;
  }
  .sideBar-sm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    justify-content: space-between;
  }
  .titulo:hover {
    color: #f5f5f5;
  }
  .Login,
  .ManualInButton,
  .categoria,
  #Search {
    display: none;
  }
}
</style>
