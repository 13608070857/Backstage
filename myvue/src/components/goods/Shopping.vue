<script>
import appTable from '../tableComponents/table'
  import tableInfo from '../tableComponents/tableInfo'
export default {
  name: 'shopping',
  data () {
    return {
      // 表单信息标题
      tableInfo: '商品收藏管理',
      // 表标题
      tableTitles: ['ID', '商品ID', '商品数量', '单价', '总价'],
      // 弹出层标题
      popTitles: {
        'shop_ID':  'ID',
        'u_id': '用户ID',
        'goods_ID': '商品ID',
        'goodsNum': '商品数量',
        'toal': '单价',
        'total_of': '总价'
      },
      // node路由地址
      router: '/shopping',
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
        {text: '查看', className: 'small lightGreen', fn: {fnName: 'view', fnArg: ''}}
      ],
      searchBtns: [
        {text: '查询', className: 'large lightGreen', fn: {fnName: 'query', fnArg: ''}}
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

<style>

</style>
