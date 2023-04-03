<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCoachesStore } from '@/stores/coaches'
import { storeToRefs } from 'pinia'
import CoachCard from './CoachCard.vue'

const coachesStore = useCoachesStore()
const { coaches, coachesExist } = storeToRefs(coachesStore)
</script>

<template>
  <section>
    <h1>Coaches</h1>

    <div>Filters</div>
    <button>Refresh</button>
    <RouterLink to="register-coach">Register as Coach</RouterLink>

    <div v-if="coachesExist" class="coaches-container">
      <CoachCard
        v-for="coach in coaches"
        :key="coach.coachId"
        :coach-id="coach.coachId"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :hourly-rate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </div>
    <p v-else>No coaches found</p>
  </section>
</template>

<style scoped>
.coaches-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
}
</style>
