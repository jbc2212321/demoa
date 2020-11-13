import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import store from '../store'
import Chart from '@/views/Chart'
import Error404 from '@/views/Error404'
import AdminHome from '@/views/AdminHome'
import UserManagement from '@/adminviews/UserManagement'
import Register from '@/views/Register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"/admin/UserManagement",
        component:UserManagement
      }
    ],
    meta: { // 加一个自定义obj
      requireAuth: true // 这个参数 true 代表需要登录才能进入A
    }
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome,
    meta: {
      requireAuth: true,
      identity:0
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.identity!==store.state.identity){
        alert("用户身份不匹配!")
        console.log("???")
        next({ path: '/' })
      }else {
        next()
      }
    }
  },
  {
    path: '/admin/UserManagement',
    name: 'UserManagement',
    component: UserManagement,
    meta: {
      requireAuth: true,
      identity:0
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.identity!==store.state.identity){
        alert("用户身份不匹配!")
        next({ path: '/' })
      }else {
        next()
      }
    }
  },
  {
    path: '/patient',
    name: 'PatientHome',
    component: () => import(/* webpackChunkName: "patient" */ '../views/PatientHome.vue'),
    meta: {
      requireAuth: true,
      identity:1
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.identity!==store.state.identity){
        alert("用户身份不匹配!")
        next({ path: '/' })
      }else {
        next()
      }
    }
  },
  {
    path: '/doctor',
    name: 'DoctorHome',
    component: () => import(/* webpackChunkName: "doctor" */ '../views/DoctorHome.vue'),
    meta: {
      requireAuth: true,
      identity:2
    },
    beforeEnter: (to, from, next) => {
      if (to.meta.identity!==store.state.identity){
        alert("用户身份不匹配!")
        console.log("???")
        next({ path: '/' })
      }else {
        next()
      }
    }
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/chart',
    name: 'chart',
    component: Chart
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/*',
    name: 'Error404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.isLogin) {
      next()
    } else {
      console.log("why")
      next({ path: '/' })
    }
  } else {
    next()
  }
})
export default router
