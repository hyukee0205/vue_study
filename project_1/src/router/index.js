import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/compat/app'

Vue.use(Router)


const router = new VueRouter({ })
router.befroeEach((to, from, next) => {})



export default router



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
