import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type Coaches = Array<{
  coachId: string
  firstName: string
  lastName: string
  areas: Array<string>
  description: string
  hourlyRate: number
}>

export const useCoachesStore = defineStore('coaches', () => {
  const coaches = ref<Coaches>([
    {
      coachId: 'c1',
      firstName: 'Oleksiy',
      lastName: 'Letushev',
      areas: ['frontend', 'backend'],
      description: 'Hello',
      hourlyRate: 30
    },
    {
      coachId: 'c2',
      firstName: 'Anna',
      lastName: 'Harshyna',
      areas: ['fronend', 'qa'],
      description: 'My girl',
      hourlyRate: 40
    }
  ])

  const coachesExist = computed(() => coaches.value.length > 0)

  return { coaches, coachesExist }
})
