<template>
  <div class="container-login">
    <div class="col-1">
      <div class="img-login">
        <img src="../../assets/user_circle.svg" alt="Logo usuário" />
        <p>ÁREA RESTRITA</p>
      </div>
    </div>
    <div class="col-2">
      <img
        src="../../assets/logo-aton-login.png"
        alt="Logo AtonSystems Soluções em Ti"
        loading="lazy"
      />

      <form action="" method="post" @submit="handleLogin" class="form-login">
        <div class="input-form">
          <label for="usuario">E-mail</label>
          <input
            class="
              rounded-md
              focus:outline-none focus:ring focus:border-blue-300
            "
            type="email"
            v-model="user.email"
            required
          />
        </div>
        <div class="input-form">
          <label for="password">Senha</label>
          <input
            class="
              rounded-md
              focus:outline-none focus:ring focus:border-blue-300
            "
            type="password"
            v-model="user.password"
            required
          />
        </div>

        <button
          type="submit"
          class="p-2 w-3/4 rounded-md ring-4 ring-blue-500 ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import User from '../../models/UserModel'
export default {
  name: 'LoginForm',
  data() {
    return {
      user: new User('', '')
    }
  },

  /** Essa função dispara uma action para gravar o token no localstorage */
  async created() {
    await this.$store.dispatch('tokenSet')
    if (this.authToken) {
      this.$router.push('/auth/manuais')
    }
  },
  methods: {
    /**
     * Realiza o evento de login
     *
     * @Fires handleLogin
     */
    async handleLogin(e) {
      /**
       * handleLogin evento de login que dispara uma action aguardando o retorno
       *
       * @event handleLogin
       * @
       */

      e.preventDefault()
      await this.$store.dispatch('login', this.user)
      swal({
        title: 'Sucesso!',
        text: `Login realizado!`,
        icon: 'success',
        buttons: { success: 'Ok!' }
      }).then(() => this.$router.push('/auth/manuais'))
    }
  },
  computed: {
    /** Essa função verifica o localstorage para retornar o Token de autenticação. */
    authToken() {
      return this.$store.getters.$getToken
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
/* CSS Container */
.container-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.col-1,
.col-2 {
  height: 100vh;
  width: 50vw;
}

/* CSS Col-1 */
.col-1 {
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: row;
  align-items: center;
  background-color: #003561;
}
.img-login {
  justify-self: center;
}
.img-login p {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 2em;
  color: #fff;
}

/* CSS Col-2*/
.col-2 {
  display: grid;
  justify-content: center;
  align-content: flex-start;
  grid-template-rows: 250px auto;
  grid-template-columns: minmax(250px, 350px);
  grid-gap: 3rem;
}

/* CSS Form */
.form-login {
  display: grid;
  grid-auto-rows: auto auto 60px;
  grid-auto-flow: row;
  grid-gap: 2rem;
}
.form-login button {
  justify-self: center;
  background: #5f90d9;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}
.input-form input {
  background-color: #f5f5f5;
  border: 2px solid #00bce5;
  width: 100%;
  height: 60px;
  padding-left: 1rem;
}
.input-form label {
  color: #003561;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  display: block;
}
</style>
