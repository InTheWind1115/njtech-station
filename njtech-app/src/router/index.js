import Vue from 'vue'
import VueRouter from 'vue-router'
const Buy = () => import('../views/buy/Buy')
const Chat = () => import('../views/chat/Chat')
const Data = () => import('../views/data/Data')
const Friend = () => import('../views/friend/Friend')
const Profile = () => import('../views/profile/Profile')
const Square = () => import('../views/square/Square')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Square
    }, {
      path: '/buy',
      component: Buy
    }, {
      path: '/chat',
      component: Chat
    }, {
      path: '/data',
      component: Data
    }, {
      path: '/friend',
      component: Friend
    }, {
      path: '/profile',
      component: Profile
    }, {
      path: '/square',
      component: Square
    }
  ]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
