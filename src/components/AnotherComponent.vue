<script setup>
import { onMounted, reactive, ref, watchEffect, computed } from 'vue'
import api from '../services/api'
import RepoList from './RepoList.vue'
import Pagination from './RepoPagination.vue'
import { parseLinkHeader, extractPageNumber } from '@/utils'

const username = ref('Oluwasetemi')
const github = reactive({
  user: null,
  repos: [],
  links: null,
  totalPages: 0,
  currentPage: 1
})

const props = defineProps(['page'])

const page = computed(() => props.page)

const hasNextPage = computed(() => {
  const totalPages = github.totalPages
  return page.value < totalPages
})

function fetchRepos(page) {
  api.getRepos(username.value, { page }).then((repos) => {
    // github.totalPages = extractPageNumber(parsedLink.last)
    github.repos = repos.data
    github.links = repos.headers.link
  })
}

onMounted(() => {
  console.log('AnotherComponent.vue mounted')
  watchEffect(() => {
    api.getUser(username.value).then((user) => {
      github.user = user.data
    })
    api.getRepos(username.value, { page: page.value }).then((repos) => {
      const parsedLink = parseLinkHeader(repos.headers.link)
      github.totalPages = extractPageNumber(parsedLink?.last) || page
      github.repos = repos.data
      github.link = repos.headers.link
    })
  })
})
</script>

<template>
  <section>
    <h2>Another Component</h2>
    <p>This is another component. It is imported into the HomeView.vue component.</p>

    <form @submit.prevent="">
      <label for="username">Enter a GitHub username:</label>
      <input v-model.lazy="username" type="text" id="username" />
      <!-- <button type="submit">Submit</button> -->
    </form>

    <p v-if="!github">Loading...</p>

    <div v-if="github.user">
      <h2>{{ github.user.login }}</h2>
      <img :src="github.user.avatar_url" alt="User avatar" />

      <div class="pagination">
        <router-link
          id="page-prev"
          :to="{ name: 'Home', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          >&#60; Previous</router-link
        >

        <router-link
          id="page-next"
          :to="{ name: 'Home', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          >Next &#62;</router-link
        >
      </div>

      <RepoList :repos="github.repos" :totalPages="github.totalPages" />

      <Pagination :totalPages="github.totalPages" @fetchRepo="(n) => fetchRepos(n)" />
    </div>
  </section>
</template>

<style scoped>
.pagination {
  display: flex;
}
.pagination a {
  flex: 1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    background-color: transparent;
  }
}

#page-prev {
}

#page-next {
}
</style>
