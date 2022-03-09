<template>
  <div><template-login-form /></div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'LoginView',
  components: {
    'template-login-form': LoginForm
  }
}
</script>

<style scoped></style>
