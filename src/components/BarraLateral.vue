<template>
  <div class="barra-container BarraLateral">
    <InputFilter />
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
  }
}
</script>

<style scoped>
.barra-container {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  background: #003561;
}
</style>
