<template>
    <div>
      <div class="myo">
        <div class="mytitle">
          <span>{{mycontent}}</span>
          <span :class="mycolor">{{week}}</span>
        </div>
        <h1>{{myprice}}</h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'order',
  props: ['myprice', 'mycontent', 'week', 'mycolor']
}
</script>

<style scoped>
.myo{
  width: 190px;
  height: 120px;
  border: 1px solid #f5f5f5;
  margin: 30px 10px 50px 20px;
  float: left;
}
  .mytitle{
    height: 40px;
    border-bottom: 1px solid #f5f5f5;
  }
h1{
  color: #5d5d5d;
  font-size: 35px;
  line-height: 80px;
  margin-left: 8px;
}
  .mytitle span{
    font-size: 14px;
  }
.mytitle span:nth-child(1){
  margin-left: 20px;
  line-height: 40px;
}
.mytitle span:nth-child(2){
  float: right;
  margin-right: 20px;
  padding: 0 2px 0 2px;
  margin-top: 10px;
  color: #fff;
  border-radius: 2px;
}
.blue{
  background-color: #2799fb;
}
</style>
