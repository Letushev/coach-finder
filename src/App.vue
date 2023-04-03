<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.main-content {
  padding: 24px;
}
</style>
