import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'index',
    component: () => import('../components/Index')
  },
  {
    path:'/menus',
    name: 'menus',
    component: () => import('../components/Menuscomponent')
  },
  {
    path:'/story',
    name: 'story',
    component: () => import('../components/Storycomponent')
  },
  {
    path:'/location',
    name: 'location',
    component: () => import('../components/Locationcomponent')
  },
  {
    path:'/reserve',
    name: 'reserve',
    component: () => import('../components/Reservecomponent')
  },
  {
    path:'/edit-reservation/:id',
    name: 'edit-reserve',
    component: () => import('../components/Editreserve')
  },
  {
    path:'/view',
    name: 'view',
    component: () => import('../components/Viewreserve')
  }
  
]
const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})
export default router
