<template>
  <div id="search">
    <input type="text">
    <btn btnText="查询" btnClass="lightGreen large search"></btn>
    <btn btnText="新增" btnClass="darkGreen large add"></btn>
  </div>
</template>

<script>
import btn from './button/button'
export default {
  name: 'search',
  components: {
    btn
  }
}
</script>

<style scoped>
.add {
  margin-left: 30px;
}
input {
  border: 1px solid #439B66;
  padding: 10px 5px;
  width: 240px;
  padding-top: 11px;
}
input:focus {
  outline: none;
}
.search {
  margin-left: -8px;
}
</style>
