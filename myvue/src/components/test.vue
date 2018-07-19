<template>
  <div id="test">
    <appTable :tableTitles="tableTitles" :router="router"></appTable>
  </div>
</template>

<script>
import appTable from './table.vue'
export default {
  name: 'Test',
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
