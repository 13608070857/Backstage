<template>
  <div id="myorder">
    <div class="otitle">交易记录</div>
    <order myprice="9,999,666" mycontent="交易金额" week="周" :mycolor="mycolor"></order>
    <order myprice="9,999,666" mycontent="订单数量" week="周" :mycolor="mycolor"></order>
    <order myprice="9,999,666" mycontent="交易成功" week="周" :mycolor="mycolor"></order>
    <order myprice="9,999,666" mycontent="交易失败" week="周" :mycolor="mycolor"></order>
    <order myprice="9,999,666" mycontent="退款金额" week="周" :mycolor="mycolor"></order>
    <!--图表-->
    <div id="myChart"></div>
  </div>
</template>

<script>
import order from './order'
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
      mycolor: 'blue'
    }
  },
  components: {
    order: order
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '月购买交易订单记录',
          subtext: '实时获取订单购买记录'
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
            barWidth: 12,
            color: ['#21C4C2'],
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
            barWidth: 12,
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
            barWidth: 12,
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
            barWidth: 12,
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
  }
}
</script>

<style scoped>
#myChart{
  width: 85%;
  height: 550px;
  margin-left: 50px;
  margin-bottom: 100px;
}
#myorder{
  background-color: #fff;
  height: 900px;
}
.otitle{
  font-size: 30px;
  margin-left: 15px;
  margin-top: 30px;
  line-height: 50px;
  border-bottom: 2px solid #008f7f;
}
</style>
