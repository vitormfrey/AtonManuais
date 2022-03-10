s
<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Pesquisa um manual..."
      class="
        rounded-md
        focus:outline-none focus:ring focus:border-blue-300
        p-2
        search-dados
      "
      id="Search"
    />
    <input type="button" value class="search-btn rounded-md" />
  </div>
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
div {
  display: grid;
  grid-auto-flow: column;
}
.search-dados {
  width: 25vw;
  height: 50px;
  border: solid;
  border-color: #00bce5;
}
.search-btn {
  position: relative;
  width: 50px;
  height: 49px;
  right: 50px;
  background: url('../../assets/lupa.svg') no-repeat center;
  background-color: #003561;
  border: solid;
  border-color: #00bce5;
}
@media screen and (max-width: 650px) {
  div {
    grid-template-columns: 1fr;
  }
  .search-dados {
    width: 70vw;
  }
}
</style>
