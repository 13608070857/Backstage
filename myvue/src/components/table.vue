<template>
  <div id="table">
    <search></search>
    <table cellpadding="0" cellspacing="0" width="100%">
      <tr class="tableTitle">
        <th v-for="(tableTitle,index) in tableTitles" :key="index">{{tableTitle}}</th>
        <th>操作</th>
      </tr>
      <tbody>
        <tr v-for="(tableContent,index) in tableContents" :key="index">
          <td v-for="(tableC,i) in tableContent" :key="i">{{tableC}}</td>
          <td>
            <btn btnText="查看" btnClass="lightGreen small"></btn>
            <btn btnText="修改" btnClass="lightGreen small"></btn>
            <btn btnText="删除" btnClass="darkGreen small"></btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import search from './search'
import btn from './button/button'
export default {
  name: 'Table',
  props: {
    tableTitles: {
      type: Array,
      required: true
    },
    tableContents: {
      type: Array,
      required: true
    }
  },
  methods: {
    getD () {
      console.log(this.tableContents)
    }
  },
  components: {
    search,
    btn
  }
}
</script>

<style scoped>
table {
  margin-top: 20px;
}
.tableTitle {
  width: 100%;
  background: #eee;
}
th {
  font-weight: normal;
}
tr {
  line-height: 40px;
  text-align: center;
  color: #333;
}
</style>
