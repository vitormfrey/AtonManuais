<script setup>
import Search from '../Search/index.vue'
import DropDown from '../DropDown/DropDown.vue'
import { defineProps, toRefs } from 'vue'
import { bool } from 'prop-types'
const props = defineProps({ isAuthRoute: { type: bool, default: false } })
const { isAuthRoute } = toRefs(props)
</script>
<template>
  <header class="header">
    <DropDown />
    <Search :isAuthenticated="isAuthRoute" />
  </header>
</template>
<style scoped>
.header {
  width: auto;
  background-color: #003561;
  display: grid;
  grid-template-rows: 80px; /*Era 80px no figma*/
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
  /* justify-content: space-around; */
  justify-items: center;
  align-items: center;
  padding: 0px 60px;
  z-index: 9;
}
.dot {
  width: 50px;
  height: 50px;
  background-color: red;
}
@media screen and (max-width: 650px) {
  #DropDown,
  .dot {
    display: none;
  }
  .header {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 0px 20px;
  }
}
</style>
