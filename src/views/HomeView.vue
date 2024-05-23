<script setup>
import AnotherComponent from '../components/AnotherComponent.vue'

defineProps(['page'])
</script>

<template>
  <main>
    <AnotherComponent :page="page" />
  </main>
</template>
