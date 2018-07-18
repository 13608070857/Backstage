<template>
  <div id="app">
    <header></header>
    <router-view></router-view>
    <appTable :tableTitles="tableTitles" :tableContents="tableContents"></appTable>
    <footer></footer>
  </div>
</template>

<script>
import appTable from './components/table'
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
    appTable
  },
  created () {
    // 发送请求
    this.$axios.get('http://172.16.8.40:8888/' + this.router).then(resp => {
      this.tableContents = resp.data
    })
  }
}
</script>

<style>

</style>
