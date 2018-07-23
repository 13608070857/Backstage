<template>
  <!--最新上架-->
  <div class="Newest">
    <h3>最新上架</h3>
    <div class="goods"></div>
    <div class="goods"></div>
    <div class="goods"></div>
    <div class="goods"></div>
    <div class="goods"></div>
    <div class="goods"></div>
  </div>
</template>

<script>
export default {
  name: 'newest',
  data () {
  },
  created () {
    // 最新商品
    this.$axios.get('http://172.16.8.2:8888/Newest')
      .then(resp => {
        console.log(resp.data)
      })
  }
}
</script>

<style scoped>
.Newest{
    width: 70%;
    height: 500px;
    float: left;
    background: aquamarine;
    margin-top: 30px;
  }
.Newest h3{
    color: rgb(51,51,51);
    text-indent: 1em;
  }
.goods{
    width: 30%;
    height: 200px;
    background: aqua;
    float: left;
    margin-top: 20px;
    margin-left: 20px;
  }
</style>
