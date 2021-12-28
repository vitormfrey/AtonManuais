<template>
  <header class="header">
    <app-drop-down></app-drop-down>
    <app-search :searchIn="searchManual" :getManuais="manuais"></app-search>
    <app-departamento-list
      :getDepartamento="departamento"
      :getManuais="manuais"
      :filtro="filtroDepartamento"
      :showDepartamentos="getterDepartamento"
    ></app-departamento-list>
  </header>
</template>

<script>
import Search from '../Search.vue'
import DropDown from '../DropDown/index.vue'
import DepartamentoList from '../DepartamentoList/index.vue'

export default {
  name: 'Header',
  components: {
    'app-search': Search,
    'app-drop-down': DropDown,
    'app-departamento-list': DepartamentoList
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
.header {
  width: auto;
  background-color: #003561;
  display: grid;
  grid-template-rows: 80px; /*Era 80px no figma*/
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
  /* justify-content: space-around; */
  justify-items: center;
  align-items: center;
  padding: 0px 60px;
  z-index: 9;
}
.dot {
  width: 50px;
  height: 50px;
  background-color: red;
}
@media screen and (max-width: 650px) {
  #DropDown,
  .dot {
    display: none;
  }
  .header {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0px 20px;
  }
}
</style>
