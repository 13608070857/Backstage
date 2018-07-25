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
    <appTable :tableTitles="tableTitles" :router="router" :operationBtns="operationBtns" :searchBtns="searchBtns" :formElement="formElement" :popTitles="popTitles"></appTable>
  </div>
</template>

<script>
  import appTable from '../tableComponents/table'
  import tableInfo from '../tableComponents/tableInfo'
export default {
  name: 'paymanage',
  data () {
    return {
      // 表单信息标题
      tableInfo: '支付管理',
      // 表标题
      tableTitles: ['ID', '支付名称', '状态', '上架时间'],
      // 弹出层标题
      popTitles: {
        'pay_id': 'ID',
        'payName': '支付名称',
        'pay_status': '状态',
        'catetime': '上架时间',
      },
      // node路由地址
      router: '/getpaymsg.do',
      // 表格按钮 text：按钮内容 className：按钮类
      // fn:表示要调用增删改查的函数
      //      其中fnName是函数名字
      //        查看 -- view
      //        修改 -- modify
      //        删除 -- delete
      //        新增 -- insert
      //        查询 -- query
      //        上/下架/发货/退款/加精/置顶/启动/禁用 -- status
      //      其中fnArg为参数（要连接的后台路由地址），没有参数（查看和查询按钮）就直接写fnArg: ''
      // 其中small，large表示按钮大小，lightGreen（浅绿），darkGreen（深绿），gray（下架）表示按钮颜色
      // operationBtns是表格操作部分的按钮是（使用小按钮small类）
      // searchBtns是查询部分的按钮（使用大按钮large类）
      operationBtns: [
        {text: '启用', className: 'small lightGreen', fn: {fnName: 'status', fnArg: '/onpay.do'}},
        {text: '禁用', className: 'small darkGreen', fn: {fnName: 'status', fnArg: '/unpay.do'}}
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
