<template>
  <button :class="btnClass" v-on:click="fn">{{btnText}}</button>
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
  },
  methods: {
    fn () {
      this.$emit('fn')
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 2px;
}
.darkGreen {
  background: rgba(35, 58, 77, 1);
}
.darkGreen:hover {
  background: rgba(35, 65, 80, 1);
}
.lightGreen {
  background: rgba(0, 150, 136, 1);
}
.lightGreen:hover {
  background: rgba(0, 160, 140, 1);
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
