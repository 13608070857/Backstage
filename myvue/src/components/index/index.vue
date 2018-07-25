<template>
  <div id="index">
    <!--4块数据-->
    <article v-for="(i,index) in arr" :key="index">
      <p>{{i.Title}}</p>
      <span :style="{ background: i.background}">{{i.unit}}</span>
      <h2>{{i.Number}} {{i.Zunit}}</h2>
      <p>{{i.ZTitle}}:</p>
      <p>{{i.ZNumber}} {{i.Zunit}}</p>
    </article>
    <!--折线图-->
    <div id="line" style="width: 65%;height: 400px;float: left;margin-top: 30px"></div>
    <!--与上期增长-->
    <div class="increase" v-for="j in increase" :key="j.h1">
      <h1>{{j.h1}}</h1>
      <p>{{j.p}}</p>
      <div class="Proportion">
        <span><p>{{j.bai}}</p></span>
      </div>
      <span>{{j.time}}</span>
    </div>
    <!--最新上架-->
    <div class="Newest">
      <h3>最新上架</h3>
      <div class="goods" v-for="g in Newestarr" :key="g.goodsImg">
        <h5>{{g.goodsName}}</h5>
        <img :src="/xxm/+g.goodsImg" alt="">
        <p>${{g.goodsPrice}}</p>
        <p>{{g.goods_desc}}</p>
        <span>{{g.ctime}}</span>
      </div>
    </div>
    <!--消费排行-->
    <div class="xf">
      <h3>消费排行</h3>
      <table>
        <tr>
          <th>排行</th>
          <th>用户</th>
          <th>金额</th>
        </tr>
        <tr v-for="(l,index) in consumption" :key="l.u_id">
          <td>{{index+1}}</td>
          <td>{{l.name}}</td>
          <td>{{l.sum}}</td>
        </tr>
      </table>
    </div>
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
          Title: '交易额',
          unit: '年',
          Number: '',
          ZTitle: '总交易额',
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
        data1: [],
        data2: [],
        data3: [],
        data4: []
      },
      increase: [
        {
          h1: '月注册用户',
          p: '同上期增长',
          bai: '45%',
          time: new Date
        },
        {
          h1: '月销售',
          p: '同上期增长',
          bai: '45%',
          time: new Date
        },
        {
          h1: '月订单',
          p: '同上期增长',
          bai: '45%',
          time: new Date
        }
      ],
      consumption: [],
      Newestarr: []
    }
  },
  mounted () {
    this.Line()
  },
  created () {
    this.unit()
    this.Newest()
    this.xf()
  },
  methods: {
    // 折线图
    Line () {
      let line = echarts.init(document.getElementById('line'))
      window.onresize = line.resize
      this.$axios.get('/xxm/Obtain')
        .then(resp => {
          for(let i in resp.data[0][0]){
            this.data.data1.push(resp.data[0][0][i])
          }
          for(let i in resp.data[1][0]){
            this.data.data2.push(resp.data[1][0][i])
          }
          for(let i in resp.data[2][0]){
            this.data.data3.push(resp.data[2][0][i])
          }
          for(let i in resp.data[3][0]){
            this.data.data4.push(resp.data[3][0][i])
          }
          line.setOption({
            title: {
              text: '  商城信息图'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['商城用户', '售后记录', '交易额', '商城订单']
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
                name: '交易额',
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
        })
    },
    // 4块数据
    unit () {
      this.$axios.get('/xxm/index')
        .then(resp => {
          for (let i = 0; i < resp.data.Z.length; i++) {
            this.arr[i].ZNumber = resp.data.Z[i]
          }
          for (let i = 0; i < resp.data.Y.length; i++) {
            this.arr[i].Number = resp.data.Y[i]
          }
        })
    },
    // 最新商品
    Newest () {
      this.$axios.get('/xxm/Newest')
        .then(resp => {
          this.Newestarr = resp.data
        })
    },
    // 消费排行
    xf () {
      this.$axios.get('/xxm/xf')
        .then(resp => {
          this.consumption = resp.data
        })
    }
  }
}
</script>

<style scoped>
#index{
  width: 100%;
  float: right;
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
.increase{
  float: right;
  width: 35%;
  height: 133px;
  color: rgb(95, 95, 95);
}
#index> :nth-child(6){
  margin-top: 30px;
}
.increase>span{
  float: left;
  font-size: 12px;
  color: #1a1a1a;
  padding-top: 10px;
}
.increase h1{
  font-weight: 400;
  margin-left: 5%;
  padding-bottom: 20px;
}
.increase>p{
  font-size: 12px;
  margin-left: 5%;
  padding-bottom: 10px;
}
.Proportion{
  width: 90%;
  height: 20px;
  border-radius: 10px;
  background: rgb(226,226,226);
  margin: 0 auto;
}
.Proportion span{
  width: 45%;
  height: 20px;
  border-radius: 10px;
  background: #5fb878;
  display: block;
}
.Proportion span p{
  color: white;
  font-size: 12px;
  text-align: right;
  line-height: 20px;
}
.Newest{
  width: 70%;
  height: 280px;
  float: left;
  margin-top: 30px;
}
.Newest h3{
  color: rgb(51,51,51);
  text-indent: 1em;
}
.goods{
  /*background: aqua;*/
  width: 24%;
  height: 250px;
  float: left;
  margin-top: 20px;
  margin-left:1%;
}
.goods img{
  display: block;
  width: 80%;
  margin:0 auto;
}
.goods h5{
  text-align: center;
}
.goods p{
  font-size: 14px;
  text-align: center;
  padding-bottom: 5px;
}
.goods span{
  display: block;
  font-size: 10px;
  color: #444444;
  text-align: center;
}
.xf{
  width: 30%;
  height:300px;
  float: right;
  margin-top: 30px;
}
.xf table{
  width: 100%;
  margin-top: 20px;
}
.xf table td{
  text-align: center;
  padding-top: 15px;
}
</style>
