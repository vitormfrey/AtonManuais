<template>
  <div class="ReadPost">
    <h1 class="post-titulo text-2xl cursor-auto">{{ $selectPost.titulo }}</h1>
    <h3 class="post-departamento text-sm cursor-auto">
      Departamento: {{ $selectPost.departamento }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'ReadPost',
  props: {},
  data() {
    return {}
  },
  computed: {
    $selectPost() {
      return this.$store.getters.$selectPost
    }
  }
}
</script>

<style scoped></style>
