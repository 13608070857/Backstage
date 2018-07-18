<template>
  <div id="mainNav">
    <ul>
      <li v-for="(i,index) in arr" :key="index" @click.stop="li(i)" :style='{background:i.background}'>
        {{i.name}}
        <ul v-show="i.isShow">
          <!--<router-link to="/user" tag="li">zi</router-link>-->
          <li v-for="(j,index) in i.namearr" :key="index" @click.stop="li2">
            {{j.name}}
          </li>
        </ul>
      </li>
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
          num: 0,
          namearr: [
          ]
        }, {
          name: '商品管理',
          isShow: false,
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {name: '商品信息'},
            {name: '商品分类'},
            {name: '商品评论'},
            {name: '商品服务评分'}
          ]
        }, {
          name: '用户管理',
          isShow: false,
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {name: '用户信息'},
            {name: '用户等级'}
          ]
        }, {
          name: '租赁管理',
          isShow: false,
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {name: '租赁信息'},
            {name: '分类管理'},
            {name: '定制管理'}
          ]
        }, {
          name: '论坛管理',
          isShow: false,
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {name: '论坛信息'},
            {name: '论坛用户管理'},
            {name: '分类管理'},
            {name: '评论管理'}
          ]
        }, {
          name: '交易管理',
          isShow: false,
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {name: '订单记录'},
            {name: '订单处理'},
            {name: '退款处理'},
            {name: '支付管理'}
          ]
        }, {
          name: '图片管理',
          isShow: false,
          background: 'rgba(40,40,40,0.8)',
          num: 0,
          namearr: [
            {name: '轮播图'}
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
      console.log(11111)
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
  margin-top: 20px;
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
