<template>
<div id="Error404">
  <div class="auto">
  <div class="container">
    <div class="settings">
      <i class="icon"></i>
      <h4>很抱歉！没有找到您要访问的页面！</h4>
      <!-- <p><span id="num">5</span> 秒后将自动跳转到首页</p> -->
      <div>
        <a  title="返回首页" @click="outLogin">返回登录</a>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Error404',
  data(){
    return{

    }
  },
  methods:{
    outLogin(){

      this.$router.push({
        path: '/'
      })
    },
  }
}
</script>

<style scoped>
  body {
    background-color: #fff;
  }
  .auto {
    width: 1000px;
    margin: 230px auto;
  }
  .container {
    background: url(../assets/images/404-bg.png) no-repeat 560px top;
  }
  .settings {
    padding-left: 200px;
    padding-bottom: 50px;
  }
  .settings .icon {
    display: block;
    width: 242px;
    height: 106px;
    background: url(../assets/images/404.png) no-repeat 0 0;
  }
  .settings h4 {
    margin: 30px 0 15px 0;
    font-size: 18px;
    color: #2cb7fd;
  }
  .settings p {
    font-size: 14px;
    color: #999;
  }
  .settings > div {
    margin-top: 40px;
    font-size: 0;
  }
  .settings > div a {
    display: inline-block;
    padding: 10px 40px;
    border: 1px solid #2cb7fd;
    font-size: 15px;
    color: #2cb7fd;
    text-decoration: none;
  }
  .settings > div a:first-child {
    margin-right: 20px;
    color: #fff;
    background-color: #2cb7fd;
  }
</style>
