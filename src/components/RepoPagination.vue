<script setup>
import { range } from '@/utils'
import { defineProps } from 'vue'

defineProps({
  totalPages: {
    type: Number,
    required: true,
    default: 0
  }
})
</script>

<template>
  <section>
    <nav aria-label="Pagination">
      <ul>
        <li v-for="page in range(1, totalPages + 1)" :key="page">
          <button @click="$emit('fetchRepo', page)">{{ page }}</button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
</style>
