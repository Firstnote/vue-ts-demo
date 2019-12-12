import VueRouter from 'vue-router'
import Layout from '../pages/Layout.vue'
import Navbarslot from '../pages/Navbarslot.vue'
import View from '../view/view.vue'
import Nonavbarview from '../view/nonavbarview.vue'
import Navbarview from '../view/navbarview.vue'
import Navbarsimple from '../pages/Navbarsimple.vue'
import Navbarsearch from '../pages/Navbarsearch.vue'
import Navbarpullview from '../view/navbarpullview.vue'

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
      },
      {
        path:'chart',
        component:()=>import('../pages/Chart.vue')
      },
      {
        path:'addresspicker',
        component:()=>import('../pages/Addresspicker.vue')
      }
    ]
  },
  { 
    path: '/navbarpullview',
    component: Navbarpullview
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
      },
      {
        path:'navbarsearch',
        component:Navbarsearch
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
