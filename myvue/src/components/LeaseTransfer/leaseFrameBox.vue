<template>
    <figure>
      <img :src="imgsrc" alt="">
      <figcaption>
        <p>商品编号:{{goodsID}}</p>
        <p>商品名称:{{goodsName}}</p>
        <p>商品价格:{{goodsPrice}}</p>
        <input type="checkbox">
      </figcaption>
    </figure>
</template>

<script>
    export default {
        name: "leaseFrameBox",
      data(){
          return{}
      },
      props:['imgsrc','goodsID','goodsName','goodsPrice']
    }
</script>

<style scoped>

</style>
