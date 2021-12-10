<template>
  <input
    type="text"
    v-model="searchQuery"
    placeholder="Pesquisa um manual..."
    class="rounded-sm focus:outline-none focus:ring focus:border-blue-300 p-2"
    id="Search"
  />
</template>

<script>
export default {
  name: 'Search',
  props: {
    searchIn: { type: String, default: 'search' },
    getManuais: { type: String, default: 'fetchPosts' }
  },
  data() {
    return {
      searchQuery: null
    }
  },
  // computed: {
  //   manual() {
  //     return this.$store.getters.$allPosts
  //   }
  // },
  // created() {
  //   this.$store.dispatch('fetchPosts')
  // },
  methods: {
    searchManual(e) {
      this.$store.dispatch(this.searchIn, e)
    }
  },
  watch: {
    searchQuery: function (newStringValue, oldStringValue) {
      if (newStringValue != oldStringValue) {
        if (
          newStringValue == null ||
          newStringValue == undefined ||
          newStringValue == ''
        ) {
          return this.$store.dispatch(this.getManuais)
        } else {
          return this.searchManual(newStringValue)
        }
      }
    }
  }
}
</script>

<style scoped>
input {
  max-width: 15rem;
  height: 50px;
  justify-self: center;
}
</style>
