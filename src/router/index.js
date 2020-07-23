import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('../views/Home.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/content'
  },
  {
    path: '/content',
    name: 'Content',
    component: Home
  },
  {
    path: '/webManage',
    name: 'WebManage',
    component: WebManage
  },
  {
    path: '/crm',
    name: 'Crm',
    component: Crm
  },
  {
    path: '/logs',
    name: 'Logs',
    component: Logs
  },
  {
    path: '/others',
    name: 'Others',
    component: Others
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
