<script setup>
import SingIn from '../Login/SingIn.vue'
import Preferences from '../DropDownPreferences/Preferences.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div class="relative inline-block text-left" id="DropDown">
    <div>
      <button
        @click="isOpen = !isOpen"
        class="
          inline-flex
          justify-center
          w-full
          rounded
          border border-gray-300
          shadow-sm
          px-4
          py-2
          bg-white
          text-sm
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-indigo-500
          btnText
        "
      >
        Preferências
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      v-show="isOpen"
      class="
        origin-top-right
        absolute
        right-0
        mt-2
        w-56
        rounded
        shadow-lg
        bg-white
        ring-1 ring-black ring-opacity-5
        focus:outline-none
      "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <SingIn />
        <Preferences />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');

.btnText {
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
