<template>
  <div id="index">
    <article v-for="(i,index) in arr" :key="index">
      <p>{{i.Title}}</p>
      <span :style="{ background: i.background}">{{i.unit}}</span>
      <h2>{{i.Number}} {{i.Zunit}}</h2>
      <p>{{i.ZTitle}}:</p>
      <p>{{i.ZNumber}} {{i.Zunit}}</p>
    </article>
    <div id="line" style="width: 750px;height: 400px;float: left;margin-top: 30px"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'index',
  data () {
    return {
      // 数据
      arr: [
        {
          Title: '商城用户',
          unit: '周',
          Number: '',
          ZTitle: '总用户',
          ZNumber: '',
          Zunit: '位',
          background: '#1E9FFF'
        },
        {
          Title: '售后记录',
          unit: '月',
          Number: '',
          ZTitle: '总售后',
          ZNumber: '',
          Zunit: '条',
          background: '#2F4056'
        },
        {
          Title: '交易记录',
          unit: '年',
          Number: '',
          ZTitle: '总交易数',
          ZNumber: '',
          Zunit: '$',
          background: '#009688'
        },
        {
          Title: '商城订单',
          unit: '月',
          Number: '',
          ZTitle: '总订单',
          ZNumber: '',
          Zunit: '笔',
          background: '#FFB800'
        }
      ],
      data: {
        data1: [120, 200, 256, 278, 321, 360, 454, 660, 684, 750, 799, 856],
        data2: [20, 30, 33, 46, 31, 19, 46, 39, 35, 29, 25, 19],
        data3: [99, 150, 177, 198, 245, 290, 277, 311, 350, 322, 369, 377],
        data4: [150, 232, 250, 335, 359, 424, 473, 529, 577, 610, 653, 680]
      }
    }
  },
  mounted () {
    this.Line()
  },
  created () {
    this.unit()
  },
  methods: {
    // 折线图
    Line () {
      let line = echarts.init(document.getElementById('line'))
      line.setOption({
        title: {
          text: '  商城信息图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['商城用户', '售后记录', '交易记录', '商城订单']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '商城用户',
            type: 'line',
            stack: '总量',
            data: this.data.data1
          },
          {
            name: '售后记录',
            type: 'line',
            stack: '总量1',
            data: this.data.data2
          },
          {
            name: '交易记录',
            type: 'line',
            stack: '总量2',
            data: this.data.data3
          },
          {
            name: '商城订单',
            type: 'line',
            stack: '总量3',
            data: this.data.data4
          }
        ]
      })
    },
    // 4数据
    unit () {
      this.$axios.get('http://172.16.8.2:8888/index')
        .then(resp => {
          for (let i = 0; i < resp.data.Z.length; i++) {
            this.arr[i].ZNumber = resp.data.Z[i]
          }
          for (let i = 0; i < resp.data.Y.length; i++) {
            this.arr[i].Number = resp.data.Y[i]
          }
        })
    },
    // 获取折线图数据
    Obtain () {
      this.$axios.get('http://172.16.8.2:8888/Obtain')
        .then(resp => {
        })
    }
  }
}
</script>

<style scoped>
#index{
  width: 85%;
  float: right;
  background: white;
}
#index article{
  font-family: 'Arial Normal', 'Arial';
  width: 22%;
  height: 150px;
  float: left;
  margin-left: 2.3%;
  margin-top: 20px;
  font-size: 13px;
  color: #333;
}
#index article :nth-child(1){
  text-indent: 0.5em;
  display: inline-block;
}
#index article :nth-child(4){
  display: inline-block;
  float: left;
  margin-top: 15px;
}
#index article :nth-child(5){
  display: inline-block;
  float: right;
  margin-top: 15px;
}
#index article span{
  display: block;
  width: 30px;
  height: 20px;
  float: right;
  line-height: 20px;
  text-align: center;
  color: #fff;
  border-radius: 2px;
}
#index article h2{
  font-size: 35px;
  font-weight: 400;
  line-height: 45px;
  color: #666;
  padding-top: 35px;
}
</style>
