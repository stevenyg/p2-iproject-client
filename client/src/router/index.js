import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProfilePage from '../views/ProfilePage'
import CoinDetailPage from '../views/CoinDetailPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/coin/:id',
    name: 'CoinDetailPage',
    component: CoinDetailPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.access_token
  console.log(to.name);
  switch (to.name) {
    case 'ProfilePage':
      if (token) {
        next()
      } else {

        next({ name: 'HomePage' })
      }
      break;
    default:
      next()
      break;
  }

})

export default router
