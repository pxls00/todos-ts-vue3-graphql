import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/todo/:id',
      name: 'todo-item',
      component: () => import('@/views/todo/id.vue')
    }
  ]
})

export default router
