<script setup>
import swal from 'sweetalert'
import { defineProps } from 'vue'
import router from '../../router'
const props = defineProps({ categoria: String, route: String })
const handleClickEvent = () => {
  if (props.route == null)
    return swal(
      'Oops!',
      'Sem rota definida, necessário definir uma.',
      'warning'
    )
  router.push(props.route)
}
</script>
<template>
  <div class="card-container slide-effect" @click="handleClickEvent()">
    <p>{{ props.categoria ?? 'Sem categoria' }}</p>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');
.card-container {
  width: 460px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 3px;
  background-color: #adb5bd;
}

.slide-effect,
p {
  cursor: pointer;
  -webkit-transition: ease-out 0.9s;
  -moz-transition: ease-out 0.9s;
  transition: ease-out 0.9s;
}
.slide-effect:hover {
  box-shadow: 0.3em 0.3em #003561;
  background-color: #d9dbf1;
}
.slide-effect:hover p {
  color: #003561;
}

div p {
  font-size: 4em;
  font-family: 'Rubik', sans-serif;
  color: #3e6381;
}
</style>
