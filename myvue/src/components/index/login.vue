<template>
  <div id="login">
    <h2>浅草后台管理系统登录</h2>
    <form @submit.prevent="submit">
      <input v-model="user" type="text" placeholder=" 请输入您的账号">
      <input v-model="pass" type="password" placeholder=" 请输入密码">
      <button>登陆</button>
    </form>
  </div>
</template>
<script>
    export default {
        name: "login",
      data () {
          return{
            user: '',
            pass: '',
            isLogin: ''
          }
      },
      methods: {
          submit: function () {
            this.$axios.post('/xxm/login.do',{user:this.user,pass:this.pass})
              .then(resp =>{
                if(resp.data.length == 1){
                  this.$root.a = false
                }
              })
          },

      }
    }
</script>

<style scoped>
  #login{
    position: fixed;
    /*padding:70px 70px;*/
    background:rgba(255,255,255,.85);
    width: 100%;
    height: 100%;
  }

  #login h2{
    margin-top: 0;
    margin-bottom: 30px;
    color: #7B7446;
    text-align: center;
  }
  #login form{
    width: 60%;
    margin: 0 auto;
  }
  form input{
    display: block;
    padding-right: 0;
    width: 80%;
    margin: 0 auto;
    margin-top: 7%;
    height:40px;
    border: #dedede 1px solid;
    border-radius:5px;
  }
  form button{
    display: block;
    margin: 0 auto;
    padding-right: 0;
    width: 80%;
    height: 50px;
    margin-top:10%;
    background:#7B7446;
    border: none;
    border-radius: 5px;
    color: white;
  }
  form>a{
    float: left;
    margin-left: 10%;
    display: block;
    width: 40%;
    text-align: left;
    margin-top:5%;
    color: #7B7446;
  }
  form>a:hover{
    color: #7B7446;
    text-decoration: none;
  }
</style>
