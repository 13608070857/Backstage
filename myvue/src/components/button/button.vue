<template>
  <button :class="btnClass">{{btnText}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    // 按钮值
    btnText: {
      type: String,
      required: true,
      default: '默认'
    },
    // 按钮颜色
    btnClass: ''
  }
}
</script>

<style scoped>
button {
  border: none;
  color: #fff;
  cursor: pointer;
}
.darkGreen {
  background: #1F482F;
}
.darkGreen:hover {
  background: #15301F;
}
.lightGreen {
  background: #439B66;
}
.lightGreen:hover {
  background: #388357;
}
.large {
  padding: 10px 30px;
}
.small {
  padding: 5px 10px;
}
button:focus {
  outline: none;
}
</style>
