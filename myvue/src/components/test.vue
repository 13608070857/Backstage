<template>
  <div id="test">
    <!-- 引用表单信息标题的组件 -->
    <tableInfo :tableInfo="tableInfo"></tableInfo>
    <!--引用表格的组件
          tableTitles：表标题
          router：node路由地址
          operationBtns：操作按钮
          searchBtns：搜索和新增按钮
          formElement：表单元素（input和select）
     -->
    <appTable :tableTitles="tableTitles" :router="router" :operationBtns="operationBtns" :searchBtns="searchBtns" :formElement="formElement"></appTable>
  </div>
</template>

<script>
import appTable from './table.vue'
import tableInfo from './tableComponents/tableInfo'
export default {
  name: 'Test',
  data () {
    return {
      // 表单信息标题
      tableInfo: '用户管理',
      // 表标题
      tableTitles: ['测试id', '测试名称', '测试的其他数据', '测试添加'],
      // node路由地址
      router: '/getUserInfo.do',
      // 表格按钮 text：按钮内容 className：按钮类
      // fn:表示函数名字，但必须使用this.函数名
      // 其中small，large表示按钮大小，lightGreen（浅绿），darkGreen（深绿），gray（下架）表示按钮颜色
      // operationBtns是表格操作部分的按钮是（使用小按钮small类）
      // searchBtns是查询部分的按钮（使用大按钮large类）
      operationBtns: [
        {text: '修改', className: 'small lightGreen', fn: this.hello},
        {text: '删除', className: 'small darkGreen', fn: this.hellow}
      ],
      searchBtns: [
        {text: '查询', className: 'large lightGreen', fn: this.hello},
        {text: '新增', className: 'large darkGreen', fn: this.hello}
      ],
      // 表单元素信息，isInput：是否是input元素，如果是select就写false
      // content：是传送的内容
      // 如果是input就是描述文字
      // 如果是select就写一个对象，传你的value值
      formElement: {
        isInput: true,
        contents: '请输入商品名称' // --input传值
        // contents: ['新品', '优惠', '其他值']
      }
    }
  },
  components: {
    appTable,
    tableInfo
  },
  methods: {
    hello () {
      alert(1)
    },
    hellow () {
      alert('llalalla')
    }
  }
}
</script>

<style>

</style>
