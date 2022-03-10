<template>
  <div class="home">
    <app-header />
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'PageTeste',
  components: {
    'app-header': Header
  }
}
</script>
<style scoped>
.home {
  background-color: gray;
  height: 100vh;
}
</style>
