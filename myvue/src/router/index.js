import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../components/index/index'
import users from '../components/user/users'
import orderImg from '../components/order/orderImg'
import orderwith from '../components/order/orderwith'
import refundwith from '../components/order/refundwith'
import paymanage from '../components/order/paymanage'
import goodsMsg from '../components/goods/goodsMsg'
import goodscategory from '../components/goods/goodscategory'
import goodscoomments from '../components/goods/goodscoomments'
import goodsdetail from '../components/goods/goodsdetail'
import LeaseTransfer from '../components/LeaseTransfer/LeaseTransfer'
import grade from '../components/user/Grade'
import staff from '../components/user/staff'
import collection from '../components/user/Collection'
// import login from '../components/index/login'
import forumInfo from '../components/forum/forumInfo'
import forumRep from '../components/forum/forumRep'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
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
    },
    {
      path: '/orderwith',
      name: 'orderwith',
      component: orderwith
    },
    {
      path: '/refundwith',
      name: 'refundwith',
      component: refundwith
    },
    {
      path: '/paymanage',
      name: 'paymanage',
      component: paymanage
    },
    {
      path: '/goodsMsg',
      name: 'goodsMsg',
      component: goodsMsg
    },
    {
      path: '/goodscategory',
      name: 'goodscategory',
      component: goodscategory
    },
    {
      path: '/goodscoomments',
      name: 'goodscoomments',
      component: goodscoomments
    },
    {
      path: '/goodsdetail',
      name: 'goodsdetail',
      component: goodsdetail
    },
    {
      path: '/LeaseTransfer',
      name: 'LeaseTransfer',
      component: LeaseTransfer
    },
    {
      path: '/grade',
      name: 'grade',
      component: grade
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/forumInfo',
      name: 'forumInfo',
      component: forumInfo
    },
    {
      path: '/forumRep',
      name: 'forumRep',
      component: forumRep
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff
    }
  ],
  mode: 'history'
})
