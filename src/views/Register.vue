<template xmlns:text-align="http://www.w3.org/1999/xhtml">
<div id="Register">
  <br><br><br>
  <h1>注册</h1>
  <div id="layout">
    <el-row>
      <div class="tex"><el-col :span="1" :offset="8">用户名</el-col></div>
      <el-col :span="6" :offset="0"><div><el-input placeholder="请输入用户名" v-model="username" clearable></el-input></div></el-col>
    </el-row>
    <el-row>
      <div class="tex"><el-col :span="1" :offset="8">手机号</el-col></div>
      <el-col :span="6" :offset="0"><div ><el-input placeholder="请输入手机号" v-model="phoneNumber" clearable></el-input></div></el-col>
    </el-row>
    <el-row>
      <div class="tex"><el-col :span="1" :offset="8">输入密码</el-col></div>
      <el-col :span="6" :offset="0"><div ><el-input placeholder="请输入密码" v-model="password" show-password></el-input></div></el-col>
    </el-row>

    <el-row>
      <div class="tex"><el-col :span="1" :offset="8">确认密码</el-col></div>
      <el-col :span="6" :offset="0"><div ><el-input placeholder="请确认密码" v-model="check_password" show-password></el-input></div></el-col>
    </el-row>

    <el-row>
      <div class="tex"><el-col :span="1" :offset="8">选择权限</el-col></div>

      <el-col :span="6" :offset="0"><div id="app6"><template>
        <el-select v-model="value" placeholder="请选择账户类型">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template></div>
      </el-col>
    </el-row>

    <br>
        <el-col :span="10" :offset="9">
          <el-checkbox v-model="checked">我已认真阅读并同意用户协议</el-checkbox>
</el-col>
<el-col :span="4" :offset="14">
  <el-button type="primary" round @click="getRegister">注册</el-button>
</el-col>
<el-col :span="4" :offset="11">
<div text-align:center><el-link type="primary" @click="toLogin">已有账号? 马上登录</el-link></div>
</el-col>
</div>
</div>
</template>

<script>
export default {
name: "Register",
  data() {
    return {
      username:'',
      password:'',
      check_password:'',
      phoneNumber:'',
      checked:false,
      options: [{
        value: '3',
        label: '患者'
      }, {
        value: '2',
        label: '医师'
      }, {
        value: '1',
        label: '管理员'
      }],
      value: ''
    }
  },
  methods:{
    toLogin:function (){
      this.$router.push({
        path:"/"
      })
    },
    clearAll:function (){
      this.username=''
      this.password=''
      this.check_password=''
      this.phoneNumber=''
      this.checked=false
      this.value=''
    },
    getRegister:function (){
      if(!(/^1[34578]\d{9}$/.test(this.phoneNumber))){
        alert("手机号码有误，请重填");
        return ;
      }
      if (this.password!==this.check_password){
        alert("重复密码不正确!")
        return ;
      }
      if (!this.checked){
        alert("请认真阅读并同意用户协议!")
      }
      this.$axios({
        url: "http://localhost:8096/addUser",
        method: "post",
        data:{
          username:this.username,
          password:this.password,
          phone:this.phoneNumber,
          value:this.value,
        }
      }).then(res=>{
        if (res.data==="手机号已被注册!"){
          this.clearAll()
          this.$message({
            message: '改手机号已被注册！',
            type: 'error',
            duration:2000,
          })
        }else {
          this.$message({
            message: '注册成功! 即将跳转至登录界面',
            type: 'success',
            duration:2000,
          })
          this.$router.push({
            path:"/"
          })
        }

      })


    }

  }
}
</script>

<style scoped>
h1{
  font-size:40px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
  padding:1cm 1cm 0 0;
}
.tex{
  font-size:15px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
  padding:0.5cm 1cm 0 0;
}
body{ overflow-x:hidden;}
</style>
