import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('../views/Home.vue')
//
const Tools = () => import('../views/content/Tools.vue')
const Demos = () => import('../views/content/Demos.vue')
const Components = () => import('../views/content/Components.vue')
const Hotevents = () => import('../views/content/HotEvents.vue')
const Grasses = () => import('../views/content/grasses.vue')
const Chong = () => import('../views/content/Chong.vue')
//
const Slideshow = () => import('../views/webManage/Slideshow.vue')
const Notice = () => import('../views/webManage/Notice.vue')
const Blogrolls = () => import('../views/webManage/Blogrolls.vue')
const TagClouds = () => import('../views/webManage/TagClouds.vue')
const WebsiteMessage = () => import('../views/webManage/WebsiteMessage.vue')
const Loves = () => import('../views/webManage/Loves.vue')
//
const Personage = () => import('../views/crm/Personage.vue')
const OtherUsers = () => import('../views/crm/OtherUsers.vue')
//
const Logs = () => import('../views/logs/Logs.vue')
//
const Others = () => import('../views/others/Others.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/content'
  },
  // 内容管理
  {
    path: '/content',
    name: 'Content',
    component: Home,
    meta: { title: '内容管理', icon: 'file-text' },
    children: [
      {
        path: '/content/tools',
        name: 'Tools',
        component: Tools,
        meta: { title: '在线工具' }
      },
      {
        path: '/content/demos',
        name: 'Demos',
        component: Demos,
        meta: { title: '个人作品' }
      },
      {
        path: '/content/components',
        name: 'Components',
        component: Components,
        meta: { title: '封装组件' }
      },
      {
        path: '/content/hotevents',
        name: 'Hotevents',
        component: Hotevents,
        meta: { title: '热门事件' }
      },
      {
        path: '/content/grasses',
        name: 'Grasses',
        component: Grasses,
        meta: { title: '百草' }
      },
      {
        path: '/content/chong',
        name: 'Chong',
        component: Chong,
        meta: { title: '百虫' }
      }
    ]
  },
  //  网站管理
  {
    path: '/webManage',
    name: 'WebManage',
    component: Home,
    meta: { title: '网站管理', icon: 'code' },
    children: [
      {
        path: '/webManage/slideshow',
        name: 'Slideshow',
        component: Slideshow,
        meta: { title: '轮播' }
      },
      {
        path: '/webManage/notice',
        name: 'Notice',
        component: Notice,
        meta: { title: '公告' }
      },
      {
        path: '/webManage/blogrolls',
        name: 'Blogrolls',
        component: Blogrolls,
        meta: { title: '友情链接' }
      },
      {
        path: '/webManage/tagClouds',
        name: 'TagClouds',
        component: TagClouds,
        meta: { title: '标签' }
      },
      {
        path: '/webManage/websiteMessage',
        name: 'WebsiteMessage',
        component: WebsiteMessage,
        meta: { title: '网站信息' }
      },
      {
        path: '/webManage/loves',
        name: 'Loves',
        component: Loves,
        meta: { title: '猜你喜欢' }
      }
    ]
  },
  // 用户管理
  {
    path: '/crm',
    name: 'Crm',
    component: Home,
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: '/crm/personage',
        name: 'Personage',
        component: Personage,
        meta: { title: '个人' }
      },
      {
        path: '/crm/otherUsers',
        name: 'OtherUsers',
        component: OtherUsers,
        meta: { title: '其他用户' }
      }
    ]
  },
  // 日志系统
  {
    path: '/logs',
    name: 'Logs',
    component: Home,
    meta: { title: '日志系统', icon: 'fund' },
    children: [
      {
        path: '/logs/log',
        name: 'Log',
        component: Logs,
        meta: { title: '日志' }
      }
    ]
  },
  // 其他
  {
    path: '/others',
    name: 'Others',
    component: Home,
    meta: { title: '其他', icon: 'more' },
    children: [
      {
        path: '/others/other',
        name: 'Other',
        component: Others,
        meta: { title: '其他' }
      }
    ]
  }
  // 备份
  // {
  //   path: '/backup',
  //   name: 'Backup',
  //   meta: { title: '备份' }
  // },
  // // 退出
  // {
  //   path: '/logout',
  //   name: 'Logout',
  //   meta: { title: '退出' }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
