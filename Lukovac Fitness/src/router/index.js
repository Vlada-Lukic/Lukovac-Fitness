import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/mentorstvo',
      name: 'mentorstvo',
      component: () => import('../views/MentorstvoView.vue')
    },
    {
      path: '/galerija',
      name: 'galerija',
      component: () => import('../views/GalerijaView.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import('../views/KontaktView.vue')
    }
  ]
})

export default router
