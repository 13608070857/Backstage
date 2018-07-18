<template>
  <div id="app">
<<<<<<< HEAD
    <myheader class="header"> </myheader>
    <mainNav class="Nav"> </mainNav>
    <router-view class="index"> </router-view>
=======
    <header></header>
    <router-view></router-view>
    <appTable :tableTitles="tableTitles" :tableContents="tableContents"></appTable>
>>>>>>> 23983473252d37429692f8f51a8e9e52d5d1a520
    <footer></footer>
  </div>
</template>

<script>
<<<<<<< HEAD
import nav from './components/index/mainnav'
import index from './components/index/index'
import header from './components/index/header'
=======
import appTable from './components/table'
>>>>>>> 23983473252d37429692f8f51a8e9e52d5d1a520
export default {
  name: 'App',
  data () {
    return {
      // 表格标题
      tableTitles: ['用户id', '等级id', '姓名', '电话号码', '性别', '邮编', '创建时间'],
      // 表格数据
      tableContents: [],
      // 表格请求路由地址
      router: 'getUserInfo.do'
    }
  },
  components: {
<<<<<<< HEAD
    mainNav: nav,
    index: index,
    myheader: header
=======
    appTable
  },
  created () {
    // 发送请求
    this.$axios.get('http://172.16.8.40:8888/' + this.router).then(resp => {
      this.tableContents = resp.data
    })
>>>>>>> 23983473252d37429692f8f51a8e9e52d5d1a520
  }
}
</script>

<style>
<<<<<<< HEAD
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
=======

>>>>>>> 23983473252d37429692f8f51a8e9e52d5d1a520
</style>
