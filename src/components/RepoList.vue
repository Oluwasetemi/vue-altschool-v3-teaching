<script setup>
import { defineProps } from 'vue'
defineProps({
  repos: {
    type: Array,
    required: true,
    default() {
      return []
    }
  }
})
</script>

<template>
  <section>
    <h2>Repo List</h2>
    <p>This is the RepoList component, it is showing a paginate list of components</p>

    <p v-if="!repos.length">No repositories found.</p>

    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <router-link
          :to="{ name: 'SingleRepoView', params: { id: repo.name, name: repo.owner.login } }"
        >
          {{ repo.name }}
        </router-link>
        <!-- <a :href="repo.html_url">{{ repo.name }}</a> -->
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
