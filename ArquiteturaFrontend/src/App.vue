<template>
  <v-app>
    <v-main>
      <router-view />
      <div v-if="loading">Loading...</div>
      <div v-for="user in users" :key="user.id"></div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from './stores/User';

const userStore = useUserStore();

onMounted(() => {
  userStore.getUsers();
})
  
const loading = ref(userStore.loading)
const users = ref(userStore.users)

</script>
