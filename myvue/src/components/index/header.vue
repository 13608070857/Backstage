<template>
  <div id="header">
    <div class="left">
      <h2>浅草管理系统</h2>
      <p>QianCao Management System</p>
    </div>
    <div class="right">
      <span @click="span">换肤</span>
      <span>管理员</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',
  methods: {
    span () {
      console.log(11)
    }
  }
}

</script>

<style scoped>
#header{
  width: 100%;
  height: 65px;
  float: left;
}
.left{
  float: left;
  width: 60%;
}
.left h2{
  color: white;
  font-weight: 300;
  line-height: 35px;
  text-indent: 1em;
}
.left p{
  color: white;
  font-size: 12px;
  line-height: 25px;
  text-indent: 2em;
}
.right{
  float: right;
}
.right span{
  line-height: 65px;
  color: white;
  margin-right: 20px;
}
</style>
