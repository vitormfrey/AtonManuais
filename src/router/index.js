import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import HomePublicView from '../views/HomePublicView.vue'

const routes = [
  //Home
  {
    path: '/',
    name: 'HomePublicView',
    component: HomePublicView,
    meta: { requiresAuth: false }
  },
  //Manual:id
  {
    path: '/public/read/:id',
    name: 'Post',
    component: () => import('../views/ManualReadPublicView.vue'),
    meta: { requiresAuth: false }
  },
  //Login
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  //Manuais Internos
  {
    path: '/auth/manuais',
    name: 'Manuais',
    component: () => import('../views/HomeAuthView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/auth/read/:id',
    name: 'ManuaisRead',
    component: () => import('../views/ManualReadAuthView.vue'),
    meta: { requiresAuth: true }
  }
  // {
  //   path: '/teste',
  //   name: 'PageTeste',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/PageTeste.vue'),
  //   meta: { requiresAuth: false }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.$getToken) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.$getToken) {
      next('/')
      return
    }
    next()
  } else {
    next()
  }
})

export default router
