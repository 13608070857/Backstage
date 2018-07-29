<template>
  <div id="personal">
    <form class="personal" @submit.prevent="showData()">
      <h1>个人中心
        <span>欢迎你超级管理员</span>
      </h1>
      <label>
        <span>ID :</span>
        <input type="text" v-model="ID"  readonly="readonly"/>
      </label>
      <label>
        <span>用户名 :</span>
        <input type="text" v-model="name" placeholder="请输入您的用户名" />
      </label>
      <label>
        <span>账号 :</span>
        <input type="text" v-model="A_number" readonly="readonly"/>
      </label>
      <label>
        <span>密码 :</span>
        <input type="text" v-model="password" placeholder="请输入您的密码" />
      </label>
      <label>
        <span>电话 :</span>
        <input type="text" v-model="tel" placeholder="请输入您的电话" />
      </label>
      <label>
        <span>Email :</span>
        <input type="email" v-model="email" placeholder="请输入您的Email" />
      </label>
      <label>
        <span>QQ :</span>
        <input type="text" v-model="qq" placeholder="请输入您的QQ" />
      </label>
      <label>
        <span>性别 :</span>
        <input type="text" v-model="sex" placeholder="请输入您的性别" />
      </label>
      <label>
        <span></span>
        <!--<input type="button" class="button" value="确认修改" />-->
        <button class="button">确认修改</button>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      ID: '',
      name: '',
      A_number: '',
      password: '',
      tel: '',
      email: '',
      qq: '',
      sex: ''
    }
  },
  created () {
    this.$axios.get('/xxm/personal')
      .then(resp => {
        console.log(resp.data)
        this.ID = resp.data[0].ID
        this.name = resp.data[0].name
        this.A_number = resp.data[0].A_number
        this.password = resp.data[0].password
        this.tel = resp.data[0].tel
        this.email = resp.data[0].email
        this.qq = resp.data[0].qq
        this.sex = resp.data[0].sex
      })
  },
  methods: {
    showData: function () {
      console.log(1);
      this.$axios.get('/xxm/upload', {params: {ID: this.ID, name: this.name, A_number: this.A_number, password: this.password, tel: this.tel, email: this.email, qq: this.qq, sex: this.sex}})
    }
  }
}
</script>
<style scoped>
#personal{
  background: #F7F7F7;
}
.personal {
  width: 98.5%;
  background: #F7F7F7;
  padding: 25px 0 0 0;
  font: 12px Georgia, "Times New Roman", Times, serif;
  color: #888;
  text-shadow: 1px 1px 1px #FFF;
  border:1px solid #E4E4E4;
  border-right: none;
}
.personal h1 {
  font-size: 25px;
  padding: 0px 0px 10px 30px;
  display: block;
  border-bottom:1px solid #E4E4E4;
  margin: -10px -15px 30px 0;
  color: #888;
}
.personal h1>span {
  display: block;
  font-size: 11px;
  margin-top: 10px;
}
.personal label {
  display: block;
  margin: 0px;
}
.personal label>span {
  float: left;
  width: 5%;
  text-align: right;
  padding-right: 10px;
  margin-top: 10px;
  color: #888;
  margin-left: 5%;
}
.personal input{
  border: 1px solid #DADADA;
  color: #888;
  height: 30px;
  margin-bottom: 16px;
  margin-right: 6px;
  margin-top: 2px;
  outline: 0 none;
  padding: 3px 3px 3px 5px;
  width: 20%;
  font-size: 12px;
  line-height:15px;
  box-shadow: inset 0px 1px 4px #ECECEC;
  -moz-box-shadow: inset 0px 1px 4px #ECECEC;
  -webkit-box-shadow: inset 0px 1px 4px #ECECEC;
}

.personal .button {
  width:10%;
  margin-left: 5%;
  background: #E27575;
  border: none;
  padding: 10px 25px 10px 25px;
  color: #FFF;
  box-shadow: 1px 1px 5px #B6B6B6;
  border-radius: 3px;
  text-shadow: 1px 1px 1px #9E3F3F;
  cursor: pointer;
}
.personal .button:hover {
  background: #CF7A7A
}
</style>
