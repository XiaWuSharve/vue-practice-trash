import RecommandView from '@/views/RecommandView.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/recommand',
    name: 'recommand',
    component: RecommandView
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThemeView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
