import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/SlViewHome')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/SlViewHome')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/SlViewSignup')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/SlViewAbout')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: {
      name: 'main'
    },
    component: () => import('@/views/SlViewDashboard'),
    beforeEnter: (to, from, next) => {
      if (!to.params.user) next({ name: 'Home' }) // we need user data
      else next()
    },
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('@/views/SlViewMain')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/SlViewProfile')
      },
      {
        path: 'logs',
        name: 'logs',
        component: () => import('@/views/SlViewLogs')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/SlViewSettings')
      }
    ]
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('@/views/SlViewConfirm')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
