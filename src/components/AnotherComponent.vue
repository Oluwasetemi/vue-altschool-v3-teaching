<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import api from '../services/api'

const username = ref('Oluwasetemi')
const github = ref(null)

onMounted(() => {
  console.log('AnotherComponent.vue mounted')
  watchEffect(() => {
    api.getUser(username.value).then((user) => {
      console.log('User:', user.data)
      github.value = user.data
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

    <div v-if="github">
      <h3>{{ github.login }}</h3>
      <img :src="github.avatar_url" alt="User avatar" />
    </div>
  </section>
</template>
