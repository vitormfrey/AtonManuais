import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  //Home
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  },
  //Post:id
  {
    path: '/post/:id',
    name: 'Post',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Post.vue'),
    meta: { requiresAuth: false }
  },
  //Login
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: { requiresAuth: false }
  },
  //Manuais Internos
  {
    path: '/interno/manuais',
    name: 'Manuais',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Manuais.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/interno/manuais/:id',
    name: 'ManuaisRead',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ManualInRead.vue'),
    meta: { requiresAuth: true }
  }
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
