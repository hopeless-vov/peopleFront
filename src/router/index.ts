import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import UserPosts from '@/components/UserPosts/UserPosts.vue'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/users-posts',
    name: 'UserPosts',
    meta:{layout:'main'},
    props: true,
    component: UserPosts,
    
  },
  
  {
    path: '/',
    name: 'UserPage',
    meta:{layout:'main'},
    component: () => import( '@/components/UserPage/UserPage.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    meta:{layout:'empty'},
    props: true,
    component: () => import( '@/views/EmptyLayout/LogIn.vue'),
    
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    meta:{layout:'empty'},
    props: true,
    component: () => import( '@/views/EmptyLayout/CreateAccount/CreateAccount.vue'),
    
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    meta:{layout:'main'},
    props: true,
    component: () => import( '@/components/AboutUs/AboutUs.vue'), 
  },
  {
    path: '/calls',
    name: 'Calls',
    meta:{layout:'main'},
    component: () => import( '@/components/Calls/Calls.vue'),
    props: true
  }, 
  {
    path: '/all-users',
    name: 'AllUsers',
    meta:{layout:'main'},
    component: () => import( '@/components/AllUsers/AllUsers.vue'),
    props: true
  }, 
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name === 'CreateAccount' && !localStorage.getItem('token')){ 
    next()
  }
  else if (to.name === 'Login' && !localStorage.getItem('email')){ 
    next()
  } else if (!localStorage.getItem('email')) {
    next({ name: 'Login' })
  } else next()
})
router.beforeEach((to, from, next) => {
  if (to.name == 'Login' && localStorage.getItem('email')) next({ name: 'UserPage' })
  else next()
})

export default router
