<script setup>
import api from '@/services/api'
import { computed, defineProps, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['id', 'name'])

const router = useRouter()

const id = computed(() => props.id)
const name = computed(() => props.name)

const repo = ref(null)

onMounted(() => {
  api
    .getRepo(name.value, id.value)
    .then((response) => {
      repo.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'repo' }
        })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>

<template>
  <div v-if="repo">
    <h1>{{ id }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'RepoDetails' }">Details</router-link>
      |
      <a target="_blank" :href="repo.html_url">Open on GitHub</a>
      |
      <router-link :to="{ name: 'Home' }">Back to list</router-link>
    </div>
    <router-view :repo="repo" />
  </div>
</template>
