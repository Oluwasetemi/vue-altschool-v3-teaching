<script setup>
defineProps(['repo'])
</script>

<template>
  <div>
    <h1>Repo Details</h1>
    <p>Repo ID: {{ repo.name }}</p>
    <p>Repo Owner: {{ repo.owner.login }}</p>
    <p>Repo Description: {{ repo.description }}</p>
  </div>
</template>
