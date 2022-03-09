<template>
  <div class="ReadPost my-5 p-3" v-if="Object.keys($selectPost).length != 0">
    <h1 class="post-titulo text-4xl cursor-auto">{{ $selectPost.titulo }}</h1>
    <h3 class="post-departamento text-sm cursor-auto">
      Departamento: {{ $selectPost.departamentos.tipo }}
    </h3>
    <section class="body-conteudo" v-html="$getPostContent"></section>
  </div>

  <div class="ReadPost my-5 p-3" v-else>
    <h1 class="post-titulo text-4xl cursor-auto">{{ post.titulo }}</h1>
    <h3 class="post-departamento text-sm cursor-auto">
      Departamento: {{ departamento }}
    </h3>
    <section class="body-conteudo" v-html="post.conteudo"></section>
  </div>
</template>

<script>
import markedIt from 'marked-it-core'
import axios from '../../utils/axios'
import swal from 'sweetalert'

export default {
  name: 'ManualReadPublic',

  data() {
    return {
      post: {},
      departamento: ''
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      try {
        const { data } = await axios.get(`/manuais/${this.$route.params.id}`)
        this.post = data
        const html = markedIt.generate(data.conteudo)
        this.post.conteudo = html.html.text
        this.departamento = data.departamentos.tipo
        return this.post
      } catch (err) {
        swal({
          title: 'Oops!',
          text: `O id: ${this.$route.params.id} não é válido ou não existe!`,
          icon: 'error',
          buttons: { success: 'Ok!' }
        }).then(() => this.$router.push('/'))
      }
    }
  },
  computed: {
    $selectPost() {
      return this.$store.getters.$selectPost
    },
    $getPostContent() {
      const html = markedIt.generate(this.$store.getters.$getPostContent)
      return html.html.text
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

.lista {
  display: grid;
  grid-gap: 1.5rem;
  word-break: break-word;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
}
.lista a {
  color: #0676d1;
}
.lista img {
  border: 2px solid #ccc;
}
.email {
  color: #0676d1;
  cursor: copy;
}

@media screen and (max-width: 650px) {
  .ReadPost {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 20px 1fr;
    grid-gap: 1rem;
  }
  .post-titulo {
    font-size: 1.5em;
  }
  .body-conteudo {
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: row;
  }
  .lista {
    grid-auto-flow: row;
  }
}
</style>
