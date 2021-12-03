<template>
  <app-loading v-show="loading" />
  <div v-if="!loading" class="container Post">
    <app-manual
      :manuais="$getManuais"
      :customRoute="customRouteIn"
      :getManualById="getManualByIdIn"
    />
  </div>
</template>

<script>
import Manual from '../Manual/index.vue'
import Loading from '../../Loading.vue'

export default {
  name: 'ManualCardTemplate',
  components: {
    'app-loading': Loading,
    'app-manual': Manual
  },
  props: {
    manuais: { type: String, default: 'fetchPosts' },
    customRouteIn: { type: String },
    getManualByIdIn: { type: String }
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.fetchPosts()
  },

  methods: {
    async fetchPosts() {
      await this.$store.dispatch(this.manuais)
      this.loading = false
    }
  },

  computed: {
    $getManuais() {
      //Verificar qual manual precisa trazer, Interno ou Cliente
      const manual =
        this.manuais != 'fetchPosts'
          ? this.$store.getters.$getManuaisIn
          : this.$store.getters.$allPosts
      return manual
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.container {
  display: grid;
  grid-template-columns: 800px;
  grid-auto-rows: 250px;
  grid-gap: 3.75rem;
  /* justify-content: center; */
}

@media screen and (max-width: 650px) {
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
    grid-gap: 3.75rem;
    justify-content: center;
  }
}
</style>
