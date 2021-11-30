<template>
  <div class="ReadPost my-5 p-3">
    <h1 class="post-titulo text-4xl cursor-auto">{{ manual.titulo }}</h1>
    <h3 class="post-departamento text-sm cursor-auto">
      Departamento: {{ departamento }}
    </h3>
    <section class="body-conteudo" v-html="manual.conteudo"></section>
  </div>
</template>

<script>
import markedIt from 'marked-it-core'
import axios from '../utils/axios'
import swal from 'sweetalert'

export default {
  name: 'ReadPost',

  data() {
    return {
      manual: {},
      departamento: ''
    }
  },
  async created() {
    await this.getManualIn()
  },
  methods: {
    async getManualIn() {
      const API_KEY = JSON.parse(localStorage.getItem('token'))
      try {
        const { data } = await axios.get(
          `/manuais-internos/${this.$route.params.id}`,
          {
            headers: { Authorization: 'Bearer ' + API_KEY }
          }
        )
        this.manual = data
        const html = markedIt.generate(data.conteudo)
        this.manual.conteudo = html.html.text
        this.departamento = data.departamentos.tipo
        return this.manual
      } catch (err) {
        swal({
          title: 'Oops!',
          text: `O id: ${this.$route.params.id} não é válido ou não existe!`,
          icon: 'error',
          buttons: { success: 'Ok!' }
        }).then(() => this.$router.push('/interno/manual'))
      }
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

@media screen and (max-width: 650px) {
  .ReadPost {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px 20px 1fr;
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
