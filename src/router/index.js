import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '../store/Auth'
import HomeClientView from '../views/HomeClientView.vue'

const isMaintenance = false
const routes = [
  {
    path: '/maintenance', //name: 'maintenancePage',
    Name: 'Maintenance',
    component: () => import('../views/MaintenanceView.vue')
  },

  //Home
  {
    path: '/',
    name: 'HomeClientView',
    component: HomeClientView,
    meta: { requiresAuth: false, maintenanceMode: isMaintenance }
  },
  //Manual:id
  {
    path: '/public/read/:id',
    name: 'Post',
    component: () => import('../views/ManualReadPublicView.vue'),
    meta: { requiresAuth: false, maintenanceMode: isMaintenance }
  },
  //Login
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
    meta: { requiresAuth: false, maintenanceMode: isMaintenance }
  },
  {
    path: '/auth/home',
    name: 'Home',
    component: () => import('../views/HomeAuthView.vue'),
    meta: { requiresAuth: true, maintenanceMode: isMaintenance }
  },
  //Manuais Internos
  {
    path: '/auth/manuais',
    name: 'Manuais',
    component: () => import('../views/Admin/ManuaisAuthView.vue'),
    meta: { requiresAuth: true, maintenanceMode: isMaintenance }
  },
  {
    path: '/auth/read/:id',
    name: 'ManuaisRead',
    component: () => import('../views/Admin/ManualReadAuthView.vue'),
    meta: { requiresAuth: true, maintenanceMode: isMaintenance }
  },
  {
    path: '/auth/implantacao',
    name: 'Implantação',
    component: () => import('../views/Admin/ImplantacaoView.vue'),
    meta: { requiresAuth: true, maintenanceMode: isMaintenance }
  },
  {
    path: '/auth/drivers',
    name: 'Drivers',
    component: () => import('../views/Admin/DriversView.vue'),
    meta: { requiresAuth: true, maintenanceMode: isMaintenance }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (useAuthStore().retrieveToken) {
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
    if (useAuthStore().retrieveToken) {
      next('/')
      return
    }
    next()
  } else {
    next()
  }
})
//Maintenance validation
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.maintenanceMode)) {
    if (isMaintenance) {
      next({ path: '/maintenance' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
