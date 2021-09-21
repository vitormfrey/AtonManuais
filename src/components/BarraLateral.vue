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
  position: fixed;
  height: 100%;
  width: 15vw;
  background: #003561;
}
</style>
