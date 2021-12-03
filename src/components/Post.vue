<template>
  <div></div>
  <!-- <Loading v-show="loading" />

  <div v-if="!loading" class="container Post">
    <div v-for="post in $allPosts" :key="post.id">
      <article
        class="
          post-container
          px-8
          py-5
          rounded-lg
          transtion
          duration-500
          ease-in-out
          hover:bg-gray-300
          transform
          hover:-translate-y-1 hover:scale-110
        "
        @click="pegarPost(post)"
      >
        <h1 class="post-titulo text-2xl cursor-auto">{{ post.titulo }}</h1>
        <h3 class="post-departamento text-sm cursor-auto">
          Departamento: {{ post.departamentos.tipo }}
        </h3>
        <p class="post-descricao text-sm cursor-auto">{{ post.descricao }}</p>
        <p class="call-to-action text-sm">Ler mais...</p>
        <p>Publicado em {{ post.published_at }}</p> -->
  <!-- </article> -->
  <!-- </div> -->
  <!-- </div>  -->
</template>

<script>
// import Loading from './Loading.vue'
export default {
  name: 'HelloWorld',
  components: {
    // Loading
  },
  props: {
    manuais: { type: String, default: 'fetchPosts' },
    customRoute: { type: String, default: 'Post' },
    getManual: { type: String, default: 'selectPost' }
  },
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    pegarPost(e) {
      const id = e.id
      this.$router.push({ name: this.customRoute, params: { id: id } })
      this.$store.dispatch(this.getManual, id)
    },
    async fetchPosts() {
      await this.$store.dispatch(this.manuais)
      this.loading = false
    }
  },
  computed: {
    $allPosts() {
      //Verificar qual manual precisa trazer, Interno ou Cliente
      const manual =
        this.manuais != 'fetchPosts'
          ? this.$store.getters.$getManuaisIn
          : this.$store.getters.$allPosts
      return manual
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
:root {
  --azul-aton: #003561;
}
.container {
  display: grid;
  grid-template-columns: 800px;
  grid-auto-rows: 250px;
  grid-gap: 3.75rem;
  /* justify-content: center; */
}
.post-container {
  background: #f5f5f5;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
  cursor: pointer;
}
.post-titulo,
.post-departamento,
.call-to-action {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #003561;
  text-align: left;
}
.post-descricao {
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}
@media screen and (max-width: 650px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
    grid-gap: 3.75rem;
    justify-content: center;
  }
}
</style>
