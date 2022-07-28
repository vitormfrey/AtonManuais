<template>
  <div class="container-maintenance">
    <img src="../assets/logo-aton-login.png" class="w-1/2" />
    <h1>Este site está em manutenção para melhorias.</h1>
    <p>
      Estamos trabalhando o mais rápido possível. Agradecemos sua compreensão.🤝
    </p>
  </div>
</template>
<script setup></script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');

.container-maintenance {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-maintenance.img {
  width: 350px;
  height: 300px;
}
.container-maintenance h1 {
  font-family: 'Rubik', sans-serif;
  font-size: 1.5em;
}
p {
  font-family: 'Rubik', sans-serif;
}
</style>
