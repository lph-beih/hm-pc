import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home }
  ]
})
// router.beforeEach((to, from, next) => {
//   // // 1. 如果是登录路由  放行
//   // if (to.path === '/login') return next()
//   // // 2. 获取用户信息 如果没有 拦截登录
//   // if (!store.getUser().token) return next('/login')
//   // // 3. 放行
//   // next()
//   if (to.path !== '/login') return next('/login')
//   next()
// })
export default router
