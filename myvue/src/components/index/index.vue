<template>
  <div id="index">
    <article v-for="(i,index) in arr" :key="index">
      <p>{{i.Title}}</p>
      <span :style="{ background: i.background}">{{i.unit}}</span>
      <h2>{{i.Number}}Number</h2>
      <p>{{i.ZTitle}}:</p>
      <p>{{i.ZNumber}}ZNumber</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      arr: [
        {
          Title: '商城用户',
          unit: '周',
          Number: '',
          ZTitle: '总用户',
          ZNumber: '',
          background: '#1E9FFF'
        },
        {
          Title: '售后记录',
          unit: '月',
          Number: '',
          ZTitle: '总售后',
          ZNumber: '',
          background: '#2F4056'
        },
        {
          Title: '交易记录',
          unit: '年',
          Number: '',
          ZTitle: '总收入',
          ZNumber: '',
          background: '#009688'
        },
        {
          Title: '商城订单',
          unit: '月',
          Number: '',
          ZTitle: '总订单',
          ZNumber: '',
          background: '#FFB800'
        }
      ]
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
