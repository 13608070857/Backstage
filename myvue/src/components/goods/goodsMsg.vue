<template>
  <div>
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
  import appTable from '../tableComponents/table'
  import tableInfo from '../tableComponents/tableInfo'
export default {
  name: 'goodsMsg',
  data () {
    return {
      // 表单信息标题
      tableInfo: '商品信息',
      // 表标题
      tableTitles: ['商品编号', '商品名称', '商品价格', '商品类别', '上架时间', '状态'],
      // node路由地址
      router: '/getgoodsmsg.do',
      // 表格按钮 text：按钮内容 className：按钮类
      // fn:表示要调用增删改查的函数
      //      其中fnName是函数名字
      //      其中fnArg为参数（要连接的后台路由地址），没有参数（查看和查询按钮）就直接写fnArg: ''
      // 其中small，large表示按钮大小，lightGreen（浅绿），darkGreen（深绿），gray（下架）表示按钮颜色
      // operationBtns是表格操作部分的按钮是（使用小按钮small类）
      // searchBtns是查询部分的按钮（使用大按钮large类）
      operationBtns: [
        {text: '上架', className: 'small lightGreen', fn: {fnName: 'hello', fnArg: ''}},
        {text: '查看', className: 'small lightGreen', fn: {fnName: 'hello', fnArg: ''}},
        {text: '修改', className: 'small lightGreen', fn: {fnName: 'hello', fnArg: ''}},
        {text: '删除', className: 'small darkGreen', fn: {fnName: 'hellow', fnArg: 'sss'}}
      ],
      searchBtns: [
        {text: '查询', className: 'large lightGreen', fn: {fnName: 'query', fnArg: ''}},
        {text: '新增', className: 'large darkGreen', fn: {fnName: 'insert', fnArg: '/addUserInfo.do'}}
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
  }
}
</script>

<style scoped>

</style>
