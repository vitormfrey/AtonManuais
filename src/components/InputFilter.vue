<template>
  <!-- <div>
    <div class="bg-white flex items-center rounded-lg shadow-xl">
      <input
        type="search"
        name=""
        id=""
        class="
          rounded-l-full
          w-full
          py-4
          px-6
          text-gray-700
          leading-tight
          focus:outline-none
        "
        placeholder="Pesquisar..."
      />
    </div>
  </div> -->
  <div class="p-8">
    <div class="bg-white flex items-center rounded-lg shadow-xl">
      <input
        class="
          rounded-lg
          w-full
          py-4
          px-6
          text-gray-700
          leading-tight
          focus:outline-none
        "
        id="search"
        type="text"
        placeholder="Search"
      />

      <div class="p-4">
        <button
          class="
            bg-blue-500
            text-white
            rounded-lg
            p-2
            hover:bg-blue-400
            focus:outline-none
            w-12
            h-12
            flex
            items-center
            justify-center
          "
        >
          icon
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputFilter',
  props: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
.input {
  width: 230px;
  height: 50px;
  background: #f5f5f5;
  border: 3px solid #00bce6;
  border-radius: 8px;
}
</style>
