<template>
  <div id="myorder">
    <div class="otitle">交易记录</div>
    <div class="myselect">
      <select id="myselect" @click="week">
        <option value="a">近一周</option>
        <option value="b">近一个月</option>
        <option value="c">近两个月</option>
        <option value="d">近三个月</option>
        <option value="e">今年</option>
        <option value="f">去年</option>
      </select>
    </div>
    <div v-for="(item,index) in myorder" :key="index">
      <order class="myorder" :myprice="item.o_price" mycontent="交易金额" week="周" :mycolor="mycolor"></order>
      <order class="myorder" :myprice="item.total_price" mycontent="订单数量" week="周" :mycolor="mycolor"></order>
      <order class="myorder" :myprice="item.cpay" mycontent="交易成功" week="周" :mycolor="mycolor"></order>
      <order class="myorder" :myprice="item.copay" mycontent="交易失败" week="周" :mycolor="mycolor"></order>
      <order class="myorder" :myprice="item.sprice" mycontent="退款金额" week="周" :mycolor="mycolor"></order>
    </div>
    <!--图表-->
    <div id="myChart"></div>
    <!-- 今年/去年 -->
    <div class="myyear">
      <ul>
        <li class="active" id="active" @click="mythisyear">今年</li>
        <li class="unactive" id="unactive" @click="lastyear">去年</li>
      </ul>
    </div>
  </div>
</template>

<script>
import order from './order'
let allorder=[];
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'orderImg',
  data () {
    return {
      mycolor: 'blue',
      myorder: []
    }
  },
  components: {
    order: order
  },
  mounted () {
    this.myall();
    this.drawLine();
  },
  methods: {
    myall(){
      this.$axios.get('/api/orderthisyear2.do')
        .then(function (resp) {
          allorder.push(resp.data[0].a)
          allorder.push(resp.data[0].b)
          allorder.push(resp.data[0].c)
          allorder.push(resp.data[0].d)
          allorder.push(resp.data[0].e)
          allorder.push(resp.data[0].f)
          allorder.push(resp.data[0].i)
          allorder.push(resp.data[0].j)
          allorder.push(resp.data[0].k)
          allorder.push(resp.data[0].l)
          allorder.push(resp.data[0].m)
          allorder.push(resp.data[0].n)
          console.log(allorder)
          // that.allorder = resp.data
        })
    },
    // 交易记录查询
    week () {
      var myselect = document.getElementById("myselect");
      var sevalue = myselect.options[myselect.selectedIndex].value;
      console.log(sevalue);
      var myorder=document.getElementsByClassName("myorder");
      if (sevalue == 'a') {
        console.log('这是近一周的交易记录')
        for (var i=0;i<myorder.length;i++){
          (myorder[i].firstChild.firstChild.lastChild).innerHTML="周";
          (myorder[i].firstChild.firstChild.lastChild).attributes[1].nodeValue="blue";
        }
        this.myweek();
      } else if (sevalue == 'b') {
        console.log('这是近一个月的交易记录')
        for (var i=0;i<myorder.length;i++){
          (myorder[i].firstChild.firstChild.lastChild).innerHTML="月";
          (myorder[i].firstChild.firstChild.lastChild).attributes[1].nodeValue="black";
        }
        this.myonemonth();
      } else if (sevalue == 'c') {
        console.log('这是近两个月的交易记录')
        for (var i=0;i<myorder.length;i++){
          (myorder[i].firstChild.firstChild.lastChild).innerHTML="月";
          (myorder[i].firstChild.firstChild.lastChild).attributes[1].nodeValue="green";
        }
        this.mytwomonth();
      } else if (sevalue == 'd') {
        console.log('这是近三个月的交易记录')
        for (var i=0;i<myorder.length;i++){
          (myorder[i].firstChild.firstChild.lastChild).innerHTML="月";
          (myorder[i].firstChild.firstChild.lastChild).attributes[1].nodeValue="orgin";
        }
        this.mythreemonth();
      } else if (sevalue == 'e') {
        console.log('这是今年的交易记录')
        for (var i=0;i<myorder.length;i++){
          (myorder[i].firstChild.firstChild.lastChild).innerHTML="今年";
          (myorder[i].firstChild.firstChild.lastChild).attributes[1].nodeValue="green";
        }
        this.mythisyear();
      } else if (sevalue == 'f') {
        console.log('这是去年的交易记录')
        for (var i=0;i<myorder.length;i++){
          (myorder[i].firstChild.firstChild.lastChild).innerHTML="去年";
          (myorder[i].firstChild.firstChild.lastChild).attributes[1].nodeValue="orgin";
        }
        this.lastyear();
      }
    },
    // 近一周
    myweek () {
      var that = this
      console.log(that)
      this.$axios.get('/api/orderweek.do')
        .then(function (resp) {
          console.log(resp.data)
          that.myorder = resp.data
        })
    },
    // 近一个月
    myonemonth () {
      var that = this
      this.$axios.get('/api/orderyear1.do')
        .then(function (resp) {
          console.log(resp.data)
          that.myorder = resp.data
        })
    },
    // 近两个月
    mytwomonth () {
      var that = this
      this.$axios.get('/api/orderyear2.do')
        .then(function (resp) {
          console.log(resp.data)
          that.myorder = resp.data
        })
    },
    // 近三个月
    mythreemonth () {
      var that = this
      this.$axios.get('/api/orderyear3.do')
        .then(function (resp) {
          console.log(resp.data)
          that.myorder = resp.data
        })
    },
    // 今年
    mythisyear () {
      var that = this;
      var active=document.getElementById('active');
      var unactive=document.getElementById('unactive');
      active.setAttribute('class','active')
      unactive.setAttribute('class','unactive')
      this.$axios.get('/api/orderthisyear.do')
        .then(function (resp) {
          console.log(resp.data)
          that.myorder = resp.data
        })
    },
    // 去年
    lastyear () {
      var that = this;
      var active=document.getElementById('active');
      var unactive=document.getElementById('unactive');
      active.setAttribute('class','unactive')
      unactive.setAttribute('class','active')
      this.$axios.get('/api/orderlastyear.do')
        .then(function (resp) {
          console.log(resp.data)
          that.myorder = resp.data
        })
    },
    // 图表
    drawLine () {
      let that=this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '月购买交易订单记录',
          subtext: '实时获取用户订单购买记录',
          textStyle: {
            color: '#2799Fb'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['所有订单', '待付款', '已付款', '待发货']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '所有订单',
            type: 'bar',
            barWidth: 12, // 柱状图宽度
            color: ['#21C4C2'],
            data: [18.9, 0, 0, 0, 0, 59.4, 9.9, 0, 0, 0, 0, 0],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            itemStyle: {
              normal: {
                // 柱形图圆角
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '待付款',
            type: 'bar',
            barWidth: 12, // 柱状图宽度
            color: ['#B199D8'],
            data: [1.6, 3.9, 6.0, 2.4, 8.7, 7.7, 15.6, 82.2, 18.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            itemStyle: {
              normal: {
                // 柱形图圆角
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '已付款',
            type: 'bar',
            barWidth: 12, // 柱状图宽度
            color: ['#53ACEA'],
            data: [2.6, 5.9, 9.0, 2.4, 2.7, 27.7, 55.6, 2.2, 8.7, 8.8, 6.0, 2.3],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            itemStyle: {
              normal: {
                // 柱形图圆角
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '待发货',
            type: 'bar',
            barWidth: 12, // 柱状图宽度
            color: ['#FFAE7A'],
            data: [2.6, 5.9, 9.0, 6.4, 42.7, 7.7, 155.6, 2.2, 4.7, 1.8, 6.0, 2.3],
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            itemStyle: {
              normal: {
                // 柱形图圆角
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      })
    }
  },
  created () {
    var that = this;
    this.$axios.get('/api/orderrecord.do')
      .then(function (resp) {
        console.log(resp.data)
        that.myorder = resp.data
      })
  },
}
</script>

<style scoped>
#myChart{
  overflow: hidden;
  width: 85%;
  height: 550px;
  margin-left: 30px;
  margin-bottom: 100px;
  float: left;
}
#myorder{
  background-color: #fff;
  height: 910px;
}
.otitle{
  font-size: 30px;
  margin-left: 15px;
  margin-top: 30px;
  line-height: 50px;
  border-bottom: 2px solid #008f7f;
}
  .myselect{
    margin-left: 15px;
    margin-top: 20px;
    height: 60px;
    line-height: 60px;
    border-left: 3px solid #008f7f;
    border-bottom: 1px solid #f5f5f5;
  }
  .myselect>select{
    width: 200px;
    height: 40px;
    margin-left: 30px;
    border: 1px solid rgba(0, 150, 136, 1);
    padding: 10px 5px;
  }
  .myyear{
    float: left;
  }
  .myyear>ul{
    list-style: none;
    margin-left: 10px;
  }
.myyear>ul>li{
  float: left;
  padding: 2px 5px;
  font-size: 14px;
}
.myyear>ul>li:nth-child(1){
  border: 1px solid #008876;
}
.myyear>ul>li:nth-child(2){
  border-top: 1px solid #008876;
  border-right: 1px solid #008876;
  border-bottom: 1px solid #008876;
}
.myyear>ul>li:hover{
  background-color: #10C1BB;
  color: #fff;
  cursor: pointer;
}
  .active{
    background-color: #10C1BB;
    color: #FFF;
  }
  .unactive{
    background-color: unset;
  }
</style>
