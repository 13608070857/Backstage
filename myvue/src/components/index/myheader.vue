<template>
  <div id="myheader">
    <div class="left">
      <h2>浅草管理系统</h2>
      <p>QianCao Management System</p>
    </div>
    <div class="right">
      <span><i class="iconfont">&#xe617;</i>
        <div class="hf">
          <div class="kuai" style="background: #effffc" @click="$bg('white')"></div>
          <div class="kuai" style="background: aqua" @click="$bg('aqua')"></div>
          <div class="kuai" style="background: #ff6f47" @click="$bg('#ff6f47')"></div>
          <div class="kuai" style="background: #ffed5e" @click="$bg('#ffed5e')"></div>
          <div class="kuai" style="background: #6bffa5" @click="$bg('#6bffa5')"></div>
          <div class="kuai" style="background: #84aaff" @click="$bg('#84aaff')"></div>
          <div class="kuai" style="background: #ff46f4" @click="$bg('#ff46f4')"></div>
          <div class="kuai" style="background: #a8fff8" @click="$bg('#a8fff8')"></div>
          <div class="kuai" style="background: #b3ffc7" @click="$bg('#b3ffc7')"></div>
          <div class="kuai" style="background: #ffa474" @click="$bg('#ffa474')"></div>
          <div class="kuai" style="background: #ff190f" @click="$bg('#ff190f')"></div>
          <div class="kuai" style="background: #e0ff15" @click="$bg('#e0ff15')"></div>
        </div>
      </span>
      <span><i class="iconfont">&#xe636;</i>
        <ul class="box">
          <!--<li>个人中心</li>-->
          <router-link tag="li" to="/personal" style="border-bottom: 1px solid rgb(208,208,208);">个人中心</router-link>
          <li @click="tuichu()">退出登录</li>
        </ul>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
    }
  },
  methods: {
    tuichu: function () {
      this.$axios.get('/xxm/tuichu')
        .then(resp => {
          this.$login(resp.data)
        })
    }
  }
}

</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';
    src: url('../../assets/font_cqy8kjkxqa/iconfont.eot');
    src: url('../../assets/font_cqy8kjkxqa/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../assets/font_cqy8kjkxqa/iconfont.woff') format('woff'),
    url('../../assets/font_cqy8kjkxqa/iconfont.ttf') format('truetype'),
    url('../../assets/font_cqy8kjkxqa/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:30px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
#myheader{
  width: 100%;
  height: 65px;
  float: left;
}
.left{
  float: left;
  width: 60%;
}
.left h2{
  color: white;
  font-weight: 300;
  line-height: 35px;
  text-indent: 1em;
}
.left p{
  color: white;
  font-size: 12px;
  line-height: 25px;
  text-indent: 2em;
}
.right{
  float: right;
  margin-right: 30px;
}
.right span:nth-child(1){
  line-height: 65px;
  color: white;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
}
.right span:nth-child(2){
  color: white;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  text-align: center;
}
.hf{
  width: 150px;
  height: 50px;
  background: white;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -75px;
  z-index: 2;
  display: none;
}
.box{
  width: 140px;
  height: 90px;
  background: white;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -70px;
  z-index: 2;
  color: #3a3a3a;
  display: none;
  box-shadow: 0px 0px 4px 3px rgba(165, 165, 165, 0.8);
}
.box li{
  height: 45px;
  list-style-type:none;
  font-size: 12px;
  line-height: 45px;
}
.right span:nth-child(1):hover .hf{
  display: block;
}
.right span:nth-child(2):hover .box{
  display: block;
}
.kuai{
  width:15px;
  height: 15px;
  float: left;
  margin-left: 7px;
  margin-top: 5px;
  border: 1px solid #000;
}
</style>
