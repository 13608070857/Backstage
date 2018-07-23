<template>
 <div id="add">
   <p>租赁套餐修改</p>
   <div>
     <div class="leftFrame">
      <leaseFrameBox :imgsrc="imgsrc" :goodsID="goodsID" :goodsName="goodsName" :goodsPrice="goodsPrice">

      </leaseFrameBox>
     </div>
     <div class="FrameButton">
       <button class="leftButton">左</button>
       <button class="rightButton">右</button>
     </div>
     <div class="rightFrame"></div>
   </div> 
   <button class="Determine" type="button">确定</button>
 </div>
</template>

<script>
  import leaseFrameBox from './leaseFrameBox'
export default {
  name: 'LeaseTransfer',
  data(){
    return{
      // productArr:[]
      imgsrc: '/imm',
      goodsID: 1,
      goodsName: 'sjj0',
      goodsPrice: 20
    }
  },
  components:{
    leaseFrameBox:leaseFrameBox
  },
  created(){
    var that=this;
    // this.$axios.get('http://172.16.8.30:8888/leaseTransfer.do')
    //   .then(function (resp) {
    //     console.log(resp.data);
    //     that.leaseFrameBoxArr=resp.data;
    //   })
  }
}
</script>

<style scoped>
  .leftFrame{
    width: 42%;
    height: 540px;
    float: left;
    border: 1px solid red;
    margin-left: 5%;
  }
  .rightFrame{
    width: 42%;
    height: 540px;
    float: left;
    border: 1px solid red;
    margin-left: 2%;

  }
  .Determine{
    width: 160px;
    height: 40px;
    background: aqua;
    border: none;
    margin-left: 43%;
    margin-top: 40px;
  }
  .FrameButton{
    padding-left: 8px;
    height: 240px;
    width: 40px;
    margin: 0 auto;
    padding-top: 20%;
    float: left;
  }
  .leftButton{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: aqua;
    border: none;
  }
  .rightButton{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: aqua;
    margin-top: 24px;
    border: none;
  }
</style>
