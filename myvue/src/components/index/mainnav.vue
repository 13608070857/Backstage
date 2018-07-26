<template>
  <div id="mainNav">
    <ul>
        <router-link tag="li" v-for="(i,index) in arr" :key="index" @click.native="li(i)" :to= "{path:i.to}" :style='{background:i.background}'>
          {{i.name}}
          <ul v-show="i.isShow">
            <router-link tag="li" v-for="(j,index) in i.namearr" :key="index" @click.native.stop="li2" :to="{path:j.to}">{{j.name}}</router-link>
          </ul>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mainnav',
  data () {
    return {
      arr: [
        {
          name: '首页',
          background: 'rgb(40,40,40)',
          isShow: false,
          to: '/index',
          num: 0,
          namearr: [
          ]
        },
        {
          name: '商品管理',
          isShow: false,
          to: '',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {
              name: '商品信息',
              to: '/goodsMsg'
            },
            {
              name: '商品分类',
              to: '/goodscategory'
            },
            {
              name: '商品评论',
              to: '/goodscoomments'
            },
            {
              name: '商品详情图',
              to: '/goodsdetail'
            }
          ]
        },
        {
          name: '用户管理',
          isShow: false,
          to: '',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {
              name: '用户信息',
              to: '/users'
            },
            {
              name: '用户等级',
              to: '/grade'
            },
            {
              name: '用户商品收藏',
              to: '/collection'
            }
          ]
        },
        {
          name: '员工管理',
          isShow: false,
          to: '/staff',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
          ]
        },
        {
          name: '交易管理',
          isShow: false,
          to: '',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {
              name: '订单记录(图)',
              to: '/orderImg'
            },
            {
              name: '订单处理',
              to: '/orderwith'
            },
            {
              name: '退款处理',
              to: '/refundwith'
            },
            {
              name: '支付管理',
              to: '/paymanage'
            }
          ]
        },
        {
          name: '购物车管理',
          isShow: false,
          to: '/',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
          ]
        },
        {
          name: '租赁管理',
          isShow: false,
          to: '',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {
              name: '租赁信息',
              to: '/LeaseTransfer'
            },
            {
              name: '分类管理',
              to: '/'
            },
            {
              name: '定制管理',
              to: '/'}
          ]
        },
        {
          name: '论坛管理',
          isShow: false,
          to: '',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {
              name: '论坛信息',
              to: '/forumInfo'
            },
            {
              name: '评论管理',
              to: '/forumRep'
            }
          ]
        },
        {
          name: '权限管理',
          isShow: false,
          to: '/',
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
          ]
        }
      ]
    }
  },
  methods: {
    li (i) {
      i.num += 1
      if (i.num % 2 === 1) {
        for (var j = 0; j < this.arr.length; j++) {
          this.arr[j].isShow = false
          this.arr[j].num = 0
          this.arr[j].background = 'rgba(40,40,40,0.8)'
        }
        i.isShow = true
        i.num = 1
        i.background = 'rgb(40,40,40)'
      } else {
        i.isShow = false
        i.background = 'rgba(40,40,40,0.8)'
      }
    },
    li2 () {
    }
  }
}
</script>

<style scoped>
#mainNav{
  width: 15%;
  height: 90%;
  float: left;
}
#mainNav>ul{
  margin-top: 20px;
}
#mainNav>ul>li{
  width: 90%;
  margin: 0 auto;
  font-size: 14px;
  text-align: left;
  text-indent: 2.5em;
  color: #f1f1f1;
  line-height: 40px;
  transition: all .2s linear;
  list-style: none;
  background: rgba(40,40,40,.8);
  cursor: pointer;
  margin-top: 15px;
}
#mainNav>ul>li> ul>li{
  color: white;
  font-size: 12px;;
  line-height: 38px;
  background: rgba(40,40,40,0.2);
  /*background: red;*/
  list-style: none;
  border-top: 0.5px solid rgba(183, 183, 183, 0.51);
}
#mainNav>ul>li> ul>li:hover{
  background: #131313;
}
</style>
