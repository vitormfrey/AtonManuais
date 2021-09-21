<template>
  <div class="ReadPost" v-if="Object.keys($selectPost).length != 0">
    <h1 class="post-titulo text-4xl cursor-auto">{{ $selectPost.titulo }}</h1>
    <h3 class="post-departamento text-sm cursor-auto">
      Departamento: {{ $selectPost.departamento }}
    </h3>

    <section class="body-conteudo" v-html="$getPostContent"></section>
  </div>
  <div v-else></div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'ReadPost',
  props: {},
  data() {
    return {
      teste: '### hg'
    }
  },
  computed: {
    $selectPost() {
      return this.$store.getters.$selectPost
    },
    $getPostContent() {
      return marked(this.$store.getters.$getPostContent)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
.ReadPost {
  width: 100%;
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: 40px 20px 1fr;
  grid-gap: 1.5rem;
}
.post-titulo,
.post-departamento {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #003561;
}
.body-conteudo {
  text-align: left;
}
.body-conteudo h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #003561;
}
.body-conteudo p,
li {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
}
</style>
