import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        description: 'This is the home page'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    // {
    //   path: '/user',
    //   name: 'user',
    //   children: [
    //     {
    //       path: 'profile',
    //       name: 'profile',
    //       component: () => import('../views/ProfileView.vue')
    //     }
    //   ],
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
