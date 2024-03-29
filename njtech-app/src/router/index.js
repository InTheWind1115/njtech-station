import Vue from 'vue'
import VueRouter from 'vue-router'
const Buy = () => import('../views/buy/Buy')
const Chat = () => import('../views/chat/Chat')
const Data = () => import('../views/data/Data')
const Friend = () => import('../views/friend/Friend')
const Profile = () => import('../views/profile/Profile')
const Square = () => import('../views/square/Square')
const Register = () => import('../views/register/Register')
const Enroll = () => import('../views/enroll/Enroll')
const Email = () => import('../views/email/Email')
const Us = () => import('../views/us/Us')
const Privacy = () => import('../views/privacy/Privacy')

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
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/enroll',
      component: Enroll
    }, {
      path: '/email',
      component: Email
    }, {
      path: '/us',
      component: Us
    }, {
      path: '/privacy',
      component: Privacy
    }
  ]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/page'
})

export default router