<template>
  <div id="table">
    <div class="search">
      <div v-if="formElement.isInput">
        <input type="text" :placeholder="formElement.contents" v-model="searchText">
      </div>
      <div v-else>
        <select name="" id="">
          <option value="0">---- 请选择 ----</option>
          <option v-for="(content,index) in formElement.contents" :key="index">{{content}}</option>
        </select>
      </div>
      <btn v-for="(searchBtn,index) in searchBtns" :key="index" :btnText="searchBtn.text" :btnClass="searchBtn.className"  v-on:fn="fnObj[searchBtn.fn.fnName](searchBtn.fn.fnArg)"></btn>
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
              <img :src="'/api/'+tableC" alt="">
            </div>
          </td>
          <td>
            <btn v-for="(operationBtn,index) in operationBtns" :key="index" :btnText="operationBtn.text" :btnClass="operationBtn.className" v-on:fn="fnObj[operationBtn.fn.fnName](operationBtn.fn.fnArg)"></btn>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pop">
      <div class="popContent">
        <ul>
          <li>
            <input type="text">
          </li>
          <li>
            <input type="text">
          </li>
          <li>
            <input type="text">
          </li>
          <li>
            <input type="text">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import btn from './button'
export default {
  name: 'Table',
  data () {
    return {
      searchText: '',
      tableContents: '',
      tableData: '',
      popContents: '',
      fnObj: {
        query: this.queryParam,
        insert: this.insertInfo,
        delete: this.deleteInfo
      }
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
<<<<<<< HEAD
    this.$axios.get('/api' + this.router).then(resp => {
=======
    this.$axios.get('/api/' + this.router).then(resp => {
      console.log(resp.data)
>>>>>>> aa08ec9578b49b2c300b3f403b1c6d987ab829d4
      this.tableContents = resp.data
      this.tableData = resp.data
      this.popContents = resp.data
    })
  },
  methods: {
    queryParam (arg) {
      let newArr = []
      let tableData = this.tableData
      if (arg === '') {
        this.tableContents = tableData
        this.tableContents.filter(value => {
          if (value.name.indexOf(this.searchText) !== -1) {
            newArr.push(value)
          }
          this.tableContents = newArr
        })
      }
    },
    insertInfo (arg) {
      if (arg !== '') {
        // this.$axios.get('/api/' + this.searchBtns[1].fn.fnArg).then(resp => {
        //   console.log(resp)
        // })
      }
    },
    deleteInfo (event,arg) {
      console.log(event)
      // if (arg !== '') {
        
      // }
    }
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
  padding-bottom: 11px;
  position: relative;
  top: -1px;
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
.pop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.4);
  width: 100%;
  height: 100%;
  display: none;
}
ul {
  list-style:none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-grow: 1;
  flex-basis: 240px;
  margin-top: 10px;
}
.popContent {
  margin: 40px auto;
  width: 800px;
  height: 500px;
  background: #fff;
  padding: 20px 40px;
}
</style>
