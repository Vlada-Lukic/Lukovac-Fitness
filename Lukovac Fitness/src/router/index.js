import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'onlineprogram',
      component: () => import('../views/OnlineProgram.vue')
    },
    {
      path: '/bmicalculator',
      name: 'bmicalculator',
      component: () => import('../views/BMICalculator.vue')
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

