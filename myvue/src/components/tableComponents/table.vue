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
      <btn v-for="(searchBtn,index) in searchBtns" :key="index" :btnText="searchBtn.text" :btnClass="searchBtn.className"  v-on:fn="fnObj[searchBtn.fn.fnName](searchBtn.text,searchBtn.fn.fnArg)"></btn>
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
            <btn v-for="(operationBtn,index) in operationBtns" :key="index" :btnText="operationBtn.text" :btnClass="operationBtn.className" v-on:fn="dataFn" :dataIndex="index"></btn>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pop" v-if="popShow">
      <div class="popContent">
        <ul v-if="btnText=='新增'">
          <li v-for="(popC,index) in popContents[0]" :key="index">
            <span class="popTitle">{{popTitles[index].titleName+':'}}</span>
            <div v-if="/[iI][dD]/.test(popTitles[index].titleName)">
              <input type="text" disabled :value="tableData.length+1">
              <span v-if="popTitles[index].isRequired" class="red">*</span>
            </div>
            <div v-else-if="!/img/.test(popC)">
              <input type="text" v-model="popObj[index]">
              <span v-if="popTitles[index].isRequired"  class="red">*</span>
            </div>
            <div v-else class="imgD">
              <img :src="'/api/img/index/N1.jpg'" alt="">
              <input type="file">
              <span v-if="popTitles[index].isRequired"  class="red">*</span>
            </div>
          </li>
        </ul>
        <ul v-else-if="btnText=='查看'">
          <li v-for="(popC,index) in viewObj" :key="index">
            <span class="popTitle">{{popTitles[index]+':'}}</span>
            <div v-if="!/img/.test(popC)"><input type="text" :value="popC" disabled></div>
            <div v-else class="imgD">
              <img :src="'/api/' + popC" alt="">
            </div>
          </li>
        </ul>
        <div class="popBtn">
          <button class="confirm" @click="confirm($event)" disabled>确认</button>
          <button class="cancel" @click="cancel">取消</button>
        </div>
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
      dataIndex: '',
      popShow: false,
      fnObj: {
        query: this.queryParam,
        insert: this.insertInfo,
        delete: this.deleteInfo,
        view: this.viewInfo,
        status: this.statusChange
      },
      operationRouter: '',
      popObj: {},
      btnText: '',
      viewObj: {}
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
    },
    popTitles: {
      type: Object,
      required: true
    }
  },
  components: {
    btn
  },
  created () {
    this.getInfo()
  },
  methods: {
    dataFn (data,index) {
      this.fnObj[this.operationBtns[index].fn.fnName](data,this.operationBtns[index].text,this.operationBtns[index].fn.fnArg)
    },
    getInfo() {
      console.log(this.router)
      this.$axios.get('/api' + this.router).then(resp => {
        console.log(resp)
        this.tableContents = resp.data.getData
        this.tableData = resp.data.getData
        this.popContents = resp.data.getAllData
      })
    },
    queryParam (btnText,arg) {
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
    insertInfo (btnText,arg) {
      this.popShow = true
      this.operationRouter = arg
      this.btnText = btnText
    },
    deleteInfo (data,btnText,fnArg) {
      this.$axios.get('/api' + fnArg, {params: {deleteId: data}}).then(resp => {
        this.getInfo()
      })
    },
    viewInfo (data,btnText,fnArg) {
      this.popShow = true
      this.btnText = btnText
      this.operationRouter = fnArg
      this.viewObj = this.popContents[data-1]
    },
    statusChange (data,btnText,fnArg) {
      this.$axios.get('/api' + fnArg,{params:{id:data,status:btnText}}).then(resp => {
        this.getInfo()
      })
    },
    cancel () {
      this.popShow = false
    },
    confirm (event) {
      console.log(this.operationRouter)
      console.log(this.popObj)
      if(this.operationRouter != '') {
        this.$axios.get('/api' + this.operationRouter,{params:{popObj: this.popObj}}).then(resp => {
          this.popShow = false
          this.operationRouter = ''
          this.getInfo()
          console.log(resp)
        })
      }else {
        this.popShow = false
      }
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

input[type='text'],select {
  border: 1px solid rgba(0, 150, 136, 1);
  padding: 10px 5px;
}
input[type='text'] {
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
}
ul {
  list-style:none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-grow: 1;
  flex-basis: 360px;
  margin-top: 10px;
}
.popContent {
  margin: 40px auto;
  width: 800px;
  height: 500px;
  background: #fff;
  padding: 20px 40px;
  position: relative;
}
.popContent div {
  display: inline-block;
}
.popContent .popTitle {
  margin-right: 10px;
  display: inline-block;
  width: 100px;
  text-align: right;
}
.red {
  margin-left: 2px;
  color: #f00;
}
.popBtn {
  position: absolute;
  bottom: 30px;
  right: 40px;
}
.popBtn button {
  background: rgba(35, 58, 77, 1);
  padding: 10px 30px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 2px;
}
.popBtn .cancel {
  background: rgba(0, 150, 136, 1);
}
.popContent img {
  border: 1px solid rgba(0, 150, 136, 1);
  border-radius: 50%;
  width: 60px;
  display: inline-block;
}
.imgD {
  position: relative;
}
.imgD input {
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 60px;
  overflow: hidden;
  opacity: 0;
}
</style>
