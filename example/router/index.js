import VueRouter from 'vue-router'
import Layout from '../pages/Layout.vue'

const routes = [
  {
    path:'/layout',
    component:Layout
  }
]

const router = new VueRouter({
  routes
})
export default router
