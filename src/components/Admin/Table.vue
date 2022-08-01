<template>
  <div class="container-table">
    <table class="table-auto shadow-lg border-separate select-none">
      <thead>
        <tr>
          <th
            class="border-blue-600 capitalize p-1 bg-blue-400 rounded-sm"
            v-for="col in cols"
            :key="col"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in rows" :key="info.id" class="hover:bg-blue-200">
          <td class="p-1 rounded">{{ info.empresa }}</td>
          <td class="p-1 rounded">{{ info.modelo }}</td>
          <td class="p-1 rounded">
            <a target="_blank" :href="info.download">Baixar</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="container-filter">
      <input
        type="text"
        v-model="query"
        placeholder="Pesquisar..."
        class="
          shadow-lg
          rounded-sm
          p-1
          focus:outline-none focus:ring-2 focus:ring-blue-600
        "
      />
      <select
        v-model="column"
        class="
          p-1
          ml-1
          focus:outline-none focus:ring-2 focus:ring-blue-600
          shadow-lg
          rounded-sm
          capitalize
        "
      >
        <option :value="null" disabled>Selecione</option>
        <option v-for="col in cols" :key="col">{{ col }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, toRefs } from 'vue'
const props = defineProps({ dados: Array })
const { dados } = toRefs(props)
const query = ref('')
const column = ref(null)
const cols = computed(() => {
  let col = dados.value.length >= 1 ? Object.keys(dados.value[0]) : []
  col.shift()
  return col
})
const rows = computed(() => {
  if (!dados.value.length) {
    return []
  }

  return dados.value.filter((item) => {
    let props =
      query.value && column.value ? [item[column.value]] : Object.values(item)

    return props.some(
      (prop) =>
        !query.value ||
        (typeof prop === 'string'
          ? prop.toLowerCase().includes(query.value.toLowerCase())
          : prop.toString(10).toLowerCase().includes(query.value.toLowerCase()))
    )
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&family=Rubik&display=swap');
.container-table {
  display: flex;
  flex-direction: row;
}
.container-table > table,
input,
select {
  font-family: 'Rubik', sans-serif;
}
.container-filter {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.container-filter label {
  justify-self: end;
}
</style>
