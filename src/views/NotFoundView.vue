<script setup>
import { defineProps } from 'vue'

defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>
<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'Home' }">Back to the home page</router-link>
</template>
