<template>
  <div id="forumInfo">
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
  name: 'forumInfo',
  data () {
    return {
      // 表单信息标题
      tableInfo: '论坛管理',
      // 表标题
      tableTitles: ['帖子id','帖子标题', '帖子图片', '帖子类别','发帖时间','帖子状态'],
      // 弹出层标题
      popTitles: {
        // 'postId':  '用户id',
        // 'for_user_gradeId': '论坛等级',
        // 'name': '用户名称',
        // 'tel': '用户电话',
        // 'sex': '用户性别',
        // 'password': '用户密码',
        // 'email': '用户邮箱',
        // 'userImg': '用户头像',
        // 'userStatus': '状态编号',
        // 'createTime': '创建时间',
        // 'User_gradeid': '等级',
        // 'User_ex': '经验',
        // 'User_show': '个性签名',
        // 'rolaName': '等级',
        // 'o_ID': '订单号',
      },
      // node路由地址
      router: '/getForumInfo.do',
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
        {text: '加精', className: 'small lightGreen', fn: {fnName: 'status', fnArg: '/extract.do'}},
        {text: '置顶', className: 'small lightGreen', fn: {fnName: 'status', fnArg: '/setTop.do'}},
        {text: '查看', className: 'small lightGreen', fn: {fnName: 'view', fnArg: ''}},
        {text: '修改', className: 'small lightGreen', fn: {fnName: 'modify', fnArg: '/modifyForum.do'}},
        {text: '删除', className: 'small darkGreen', fn: {fnName: 'delete', fnArg: '/deleteForum.do'}}
      ],
      searchBtns: [
        {text: '查询', className: 'large lightGreen', fn: {fnName: 'query', fnArg: ''}},
        {text: '新增', className: 'large darkGreen', fn: {fnName: 'insert', fnArg: '/addForum.do'}}
      ],
      // 表单元素信息，isInput：是否是input元素，如果是select就写false
      // content：是传送的内容
      // 如果是input就是描述文字
      // 如果是select就写一个对象，传你的value值
      formElement: {
        isInput: true,
        contents: '请输入类别名称' // --input传值
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

<style>

</style>
