<template>
  <div id="forumInfo">
    <!-- 引用表单信息标题的组件 -->
    <!-- <tableInfo :tableInfo="tableInfo"></tableInfo>
    <appTable :tableTitles="tableTitles" :router="router" :operationBtns="operationBtns" :searchBtns="searchBtns" :formElement="formElement" :popTitles="popTitles"></appTable> -->
  </div>
</template>

<script>
// import appTable from './tableComponents/table'
// import tableInfo from './tableComponents/tableInfo'
export default {
  name: 'forumInfo'
  // data () {
  //   return {
  //     tableInfo: '论坛管理',
  //     tableTitles: ['帖子id','帖子标题', '帖子图片', '帖子描述', '帖子类别','发帖时间','帖子状态'],
  //     popTitles: {
  //       'postId':  '用户id',
  //       'for_user_gradeId': '论坛等级',
  //       'name': '用户名称',
  //       'tel': '用户电话',
  //       'sex': '用户性别',
  //       'password': '用户密码',
  //       'email': '用户邮箱',
  //       'userImg': '用户头像',
  //       'userStatus': '状态编号',
  //       'createTime': '创建时间',
  //       'User_gradeid': '等级',
  //       'User_ex': '经验',
  //       'User_show': '个性签名',
  //       'rolaName': '等级',
  //       'o_ID': '订单号',
  //     },
  //     router: '/getForumInfo.do',
  //     operationBtns: [
  //       {text: '加精', className: 'small lightGreen', fn: {fnName: 'status', fnArg: '/extract.do'}},
  //       {text: '置顶', className: 'small lightGreen', fn: {fnName: 'status', fnArg: '/setTop.do'}},
  //       {text: '查看', className: 'small lightGreen', fn: {fnName: 'view', fnArg: ''}},
  //       {text: '修改', className: 'small lightGreen', fn: {fnName: 'modify', fnArg: '/modifyForum.do'}},
  //       {text: '删除', className: 'small darkGreen', fn: {fnName: 'delete', fnArg: '/deleteForum.do'}}
  //     ],
  //     searchBtns: [
  //       {text: '查询', className: 'large lightGreen', fn: {fnName: 'query', fnArg: ''}},
  //       {text: '新增', className: 'large darkGreen', fn: {fnName: 'insert', fnArg: '/addForum.do'}}
  //     ],
  //     formElement: {
  //       isInput: true,
  //       contents: '请输入帖子名称'
  //     }
  //   }
  // },
  // components: {
  //   appTable,
  //   tableInfo
  // }
}
</script>

<style>

</style>
