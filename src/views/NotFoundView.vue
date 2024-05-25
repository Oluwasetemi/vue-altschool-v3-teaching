<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  resource: {
    type: String,
    required: false
    // default: 'page'
  }
})
console.log('resource:', props.resource)
</script>
<template>
  <h1>Oops!</h1>
  <h3>The {{ props.resource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'Home' }">Back to the home page</router-link>
</template>
