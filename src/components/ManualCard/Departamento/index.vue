<template>
  <h3 class="post-departamento text-sm cursor-auto">
    Departamento: {{ departamento }}
  </h3>
</template>

<script>
export default {
  name: 'Departments',
  props: {
    departamento: { type: String, default: 'Insira um departamento' }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.post-departamento {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #003561;
  text-align: left;
}
</style>
