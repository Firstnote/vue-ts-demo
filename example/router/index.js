import VueRouter from 'vue-router'
import Layout from '../pages/Layout.vue'
import Navbarslot from '../pages/Navbarslot.vue'
import View from '../view/view.vue'
import Nonavbarview from '../view/nonavbarview.vue'
import Navbarview from '../view/navbarview.vue'
import Navbarsimple from '../pages/Navbarsimple.vue'
const routes = [
  {
    path:'/navbar',
    component:Navbarslot
  },
  {
    path:'/view',
    component:View,
  },
  {
    path:'/nonavbarview',
    component:Nonavbarview,
    children:[
      {
        path:'layout',
        component:Layout
      }
    ]
  },
  {
    path:'/navbarview',
    component:Navbarview,
    children:[
      {
        path:'navbarsimple',
        component:Navbarsimple
      },
      {
        path:'navbarslot',
        component:Navbarslot
      }
    ]
  },
  {
    path:'',
    redirect: '/view'
  }
]

const router = new VueRouter({
  routes
})
export default router
