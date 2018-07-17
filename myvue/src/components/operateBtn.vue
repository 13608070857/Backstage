<template>
  <div id="operateBtn">
    <btn btnText="查看" btnClass="lightGreen small"></btn>
    <btn btnText="修改" btnClass="lightGreen small"></btn>
    <btn btnText="删除" btnClass="darkGreen small"></btn>
  </div>
</template>

<script>
import btn from './button/button'
export default {
  name: 'operateBtn',
  components: {
    btn
  }
}
</script>

<style scoped>

</style>
