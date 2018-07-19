<template>
  <div id="tableInfo">
    <h1>{{tableInfo}}</h1>
  </div>
</template>

<script>
export default {
  name: 'tableInfo',
  props: {
    tableInfo: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#tableInfo {
  color: #333;
  padding: 0 20px;
}
h1 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(0, 150, 136, 1);
}
</style>
