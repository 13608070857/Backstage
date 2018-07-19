import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../components/index/index'
import users from '../components/user/users'
import orderImg from '../components/order/orderImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/orderImg',
      name: 'orderImg',
      component: orderImg
    }
  ],
  mode: 'history'
})
