<template>
  <div id="app">
    <myheader class="header"> </myheader>
    <mainNav class="Nav"> </mainNav>
    <router-view class="index"> </router-view>
    <test></test>
    <footer></footer>
  </div>
</template>

<script>
import nav from './components/index/mainnav'
import index from './components/index/index'
import header from './components/index/header'
import test from './components/test'
export default {
  name: 'App',
  components: {
    mainNav: nav,
    index: index,
    myheader: header,
    test
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
*{
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
  width: 100%;
}
body{
  position: relative;
  background: url("./assets/bg.png") fixed;
}
#app {
  height: 100%;
}
.index{
  width: 85%;
  float: right;
  margin-top: 65px;
  background: white;
}
.header{
  position: fixed;
}
.Nav{
  position: fixed;
  top: 65px;
}
</style>
