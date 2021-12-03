<template>
  <div class="loader-outer">
    <div class="loader">
      <span class="dot dot-1"></span>
      <span class="dot dot-2"></span>
      <span class="dot dot-3"></span>
      <span class="dot dot-4"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.loader > span {
  width: 20px;
  height: 20px;
  display: block;
  background: #003561;
  border-radius: 50%;
  position: relative;
  margin: 0 5px;
}

.loader {
  margin-top: 10vw;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
}

.dot-1 {
  animation: anim 1s linear 0s infinite;
}

.dot-2 {
  animation: anim 1s linear 0.25s infinite;
}

.dot-3 {
  animation: anim 1s linear 0.5s infinite;
}

.dot-4 {
  animation: anim 1s linear 0.75s infinite;
}

@keyframes anim {
  0% {
    top: 0;
  }

  50% {
    top: 15px;
  }

  100% {
    top: 0;
  }
}
</style>
