<script setup>
defineProps(['repo'])
</script>

<template>
  <div>
    <h1>Single Repo</h1>
    <p>Repo ID: {{ repo.name }}</p>
  </div>
</template>
