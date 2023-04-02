import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'coaches'
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: () => import('@/pages/CoachesPage.vue')
    },
    {
      path: '/coaches/:coachId',
      name: 'coach-details',
      component: () => import('@/pages/coach-details/CoachDetails.vue'),
      children: [
        {
          path: 'contact',
          name: 'contact-coach',
          component: () => import('@/pages/coach-details/ContactCoach.vue')
        }
      ]
    },
    {
      path: '/register-coach',
      name: 'register-coach',
      component: () => import('@/pages/RegisterCoach.vue')
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('@/pages/RequestsPage.vue')
    },
    {
      path: '/:notFound(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})

export default router
