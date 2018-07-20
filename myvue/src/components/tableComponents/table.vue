<template>
  <div id="table">
    <div class="search">
      <div v-if="formElement.isInput">
        <input type="text" :placeholder="formElement.contents">
      </div>
      <div v-else>
        <select name="" id="">
          <option value="0">---- 请选择 ----</option>
          <option v-for="(content,index) in formElement.contents" :key="index">{{content}}</option>
        </select>
      </div>
      <btn v-for="(searchBtn,index) in searchBtns" :key="index" :btnText="searchBtn.text" :btnClass="searchBtn.className"  v-on:fn="searchBtn.fn"></btn>
    </div>
    <table cellpadding="0" cellspacing="0" width="100%">
      <tr class="tableTitle">
        <th v-for="(tableTitle,index) in tableTitles" :key="index">{{tableTitle}}</th>
        <th v-if="tableContents.length>0">操作</th>
      </tr>
      <tbody>
        <tr v-for="(tableContent,index) in tableContents" :key="index">
          <td v-for="(tableC,i) in tableContent" :key="i">
            <div v-if="!/img/.test(tableC)">{{tableC}}</div>
            <div v-else>
              <img :src="'http://172.16.8.40:8888/'+tableC" alt="">
            </div>
          </td>
          <td>
            <btn v-for="(operationBtn,index) in operationBtns" :key="index" :btnText="operationBtn.text" :btnClass="operationBtn.className" v-on:fn="operationBtn.fn"></btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import btn from './button'
export default {
  name: 'Table',
  data () {
    return {
      tableContents: ''
    }
  },
  props: {
    tableTitles: {
      type: Array,
      required: true
    },
    router: {
      type: String,
      required: true
    },
    operationBtns: {
      type: Array,
      required: true
    },
    searchBtns: {
      type: Array,
      required: true
    },
    formElement: {
      type: Object,
      required: true
    }
  },
  components: {
    btn
  },
  created () {
    this.$axios.get('http://172.16.8.40:8888' + this.router).then(resp => {
      this.tableContents = resp.data
    })
  }
}
</script>

<style scoped>
#table {
  color: #333;
  padding: 0 20px;
}
.tableTitle {
  width: 100%;
  background: #eee;
}
th {
  font-weight: normal;
}
td,th {
  padding: 25px 0;
  text-align: center;
  font-size: 14px;
}
.search {
  margin: 30px 0 20px 0;
  padding: 15px 20px;
  border-left: 3px solid rgba(0, 150, 136, 1);
}
.search>div {
  display: inline-block;
}
.search button {
  margin-left: 0;
  margin-right: 20px;
}
.search button:nth-of-type(1) {
  border-radius: 0 2px 2px 0;
  margin-left: -5px;
}

input,select {
  border: 1px solid rgba(0, 150, 136, 1);
  padding: 10px 5px;
}
input {
  padding-top: 11px;
  width: 240px;
}
select {
  position: relative;
  top: 2px;
  width: auto;
  margin: 0;
  padding: 10px 20px;
  padding-bottom: 9px;
}
option {
  text-align: center;
}
input:focus {
  outline: none;
}
img {
  height: 60px;
  vertical-align: middle;
}
</style>
