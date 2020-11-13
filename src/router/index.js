import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    default: index,
    children: [
      { path: '', name: 'index', component: () => import('../views/index') },
      { path: 'mymusic', name: 'mymusic', component: () => import('../views/mymusic') },
      { path: 'search', name: 'searchlist', component: () => import('../views/searchlist/index') },
      { path: 'person', name: 'personindex', component: () => import('../views/person/personIndex') },
      { path: 'songDetail', name: 'songDetail', component: () => import('../views/song/songDetail') },
      { path: 'sheetDetail', name: 'sheetDetail', component: () => import('../views/song/sheetDetail') }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
