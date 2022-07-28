<script setup>
import { defineProps, toRefs } from 'vue'
const props = defineProps({
  title: String
})
const { title } = toRefs(props)
</script>

<template>
  <div class="Titulo">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');
.Titulo h1 {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  text-transform: capitalize;
  color: #003561;
  text-align: left;
  margin-bottom: 30px;
}
</style>
