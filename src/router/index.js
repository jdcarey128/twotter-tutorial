import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { users } from '../assets/users.js'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//routerGuard
router.beforeEach(async (to, from, next) => {
  // store.state.User.user instead of store.state.user b/c of the namespaced module

  // if there is no user, fetch user (normally)
  var userId = to.params.userId || 0

    // add User before /setUser b/c of namepaced module
  await store.dispatch('User/setUser', users[userId])
  
  const isAdmin = false; 
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'Home'})
  else next();
})

export default router
