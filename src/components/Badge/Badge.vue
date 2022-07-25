<template>
  <div>
    <p class="version">{{ version ?? 0 }}</p>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'
const props = defineProps({
  version: String
})
const { version } = toRefs(props)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');
div {
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #327ff1;
  border-radius: 3px;
  margin: 0 0 0 10px;
}
.version {
  font-weight: bold;
  color: #f5f5f5;
  font-size: 0.85em;
  font-family: 'Rubik', sans-serif;
}
</style>
