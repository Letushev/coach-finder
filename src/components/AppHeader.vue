<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <h1>Coach finder</h1>
    <nav>
      <RouterLink to="coaches"> Coaches </RouterLink>
      <RouterLink to="requests"> Requests </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  height: 72px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  text-decoration: none;
  margin-left: 16px;
  padding: 8px 12px;
  border: 2px solid black;
  text-transform: uppercase;
  color: black;
  font-weight: 500;
}

a:hover {
  background: #e2e5de;
}

a.router-link-active {
  background: gold;
}
</style>
