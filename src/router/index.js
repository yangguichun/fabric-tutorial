import Vue from 'vue'
import VueRouter from 'vue-router'
import chapter1 from '../views/chapter1.vue'
import chapter2Animation from '../views/chapter2-animation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chapter1',
    component: chapter1
  },
  {
    path: '/chapter2-animation',
    name: 'Chapter2-animation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/chapter2.vue')
    component: chapter2Animation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
