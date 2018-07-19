<template>
  <div id="app">
    <appTable></appTable>
  </div>
</template>

<script>
import appTable from './table.vue'
export default {
  name: 'App',
  data () {
    return {
      tableTitles: ['测试id', '测试名称', '测试的其他数据'],
      router: '/getUserInfo.do'
    }
  },
  components: {
    appTable
  }
}
</script>

<style>

</style>
