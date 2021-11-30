<template>
  <div class="container-login">
    <div
      class="
        container-grid
        px-8
        py-5
        rounded-lg
        bg-gradient-to-b
        from-gray-300
        to-gray-300
      "
    >
      <span><img src="../assets/logo.svg" alt="Logo Aton" /></span>
      <form action="" method="post" @submit="handleLogin" class="grid-form">
        <div class="input-form">
          <label for="usuario">E-mail</label>
          <input
            class="
              rounded-sm
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
              rounded-sm
              focus:outline-none focus:ring focus:border-blue-300
            "
            type="password"
            v-model="user.password"
            required
          />
        </div>

        <button
          type="submit"
          class="
            bg-blue-500
            p-2
            w-auto
            rounded-md
            ring-4 ring-blue-500 ring-opacity-50
          "
        >
          Login
        </button>
      </form>
      <span><p class="singup">Solicite para o administrador</p></span>
      <!-- <span><a href="/" class="signup">Registre-se</a></span> -->
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import User from '../models/UserModel'
export default {
  name: 'LoginForm',
  data() {
    return {
      user: new User('', '')
    }
  },
  async created() {
    await this.$store.dispatch('tokenSet')
    if (this.loggedIn) {
      this.$router.push('/interno/manuais')
    }
  },
  methods: {
    async handleLogin(e) {
      e.preventDefault()
      await this.$store.dispatch('login', this.user)
      swal({
        title: 'Sucesso!',
        text: `Login realizado!`,
        icon: 'success',
        buttons: { success: 'Ok!' }
      }).then(() => this.$router.push('/interno/manuais'))
    }
  },
  computed: {
    loggedIn() {
      return this.$store.getters.$getToken
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.container-login {
  height: 100vh;
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  align-content: center;
  background: #f5f5f5;
}
.container-grid {
  display: grid;
  grid-gap: 2.5rem;
}
.grid-form {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2.5rem;
  justify-content: center;
}
.input-form label {
  color: #003561;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  display: block;
}
.input-form input {
  padding: 0.5rem;
}

.signup {
  display: inline-block;
  text-decoration: none;
  color: #003561;
  font-family: 'Montserrat', sans-serif;
}
.signup::after {
  content: '';
  display: block;
  width: 0;
  border-bottom: 1px solid #0966b3;
  margin: 0 auto;
  transition: all 0.3s linear 0s;
}
.signup:hover::after {
  width: 90%;
}
</style>
