<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  coachId: string
  firstName: string
  lastName: string
  hourlyRate: number
  areas: Array<string>
}>()

const fullName = computed(() => `${props.firstName} ${props.lastName}`)

const coachDetailsLink = computed(() => ({
  name: 'coach-details',
  params: { coachId: props.coachId }
}))

const contactCoachLink = computed(() => ({
  name: 'contact-coach',
  params: { coachId: props.coachId }
}))
</script>

<template>
  <div class="coach-card">
    <div class="card-header">
      <p class="name">{{ fullName }}</p>
      <p class="rate">{{ `$${props.hourlyRate}/hour` }}</p>
    </div>
    <div class="areas">
      <span v-for="area in props.areas" :key="area" class="area">{{ area }}</span>
    </div>
    <RouterLink :to="coachDetailsLink">Details</RouterLink>
    <RouterLink :to="contactCoachLink">Contact</RouterLink>
  </div>
</template>

<style scoped>
.coach-card {
  width: 100%;
  border: 2px solid black;
  padding: 16px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.name {
  font-size: 18px;
  font-weight: 600;
}

.rate {
  font-size: 12px;
  color: gray;
}

.areas {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-top: -4px;
}

.area {
  font-size: 12px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  background: #6495ed;
  color: #fff;
  margin-left: 8px;
  margin-top: 4px;
}
</style>
