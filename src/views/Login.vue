<template xmlns:text-align="http://www.w3.org/1999/xhtml">
<div id="Login">
  <br>
  <br>
  <br>
  <h1>登录</h1>
      <el-row >
        <el-col :span="6" :offset="9"><div id="app"><el-input placeholder="请输入账号" minlength="11" maxlength="11" v-model="username" clearable></el-input></div></el-col>
      </el-row>
      <br>
      <el-row >
        <el-col :span="6" :offset="9"><div class="grid-content bg-purple"><div id="app2"><el-input placeholder="请输入密码" minlength="6" maxlength="16" v-model="password" show-password></el-input></div></div></el-col>
      </el-row>
      <br>
      <el-row>
        <el-col :span="6" :offset="9"><div id="app6"><template>
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
      <el-row>
        <el-col :span="6" :push="12" ><div class="grid-content bg-purple">
          <el-button type="primary" round @click="submit">提交</el-button>
          <el-button type="primary" round @click="reset">重置</el-button>
      </div></el-col>
      </el-row>
      <br>
      <el-row >
        <el-col :span="4" :offset="11">
          <div text-align:center><el-link type="primary" @click="toRegister">没有账号? 马上注册</el-link></div>
        </el-col>
      </el-row>

</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      options: [{
        value: '2',
        label: '患者'
      }, {
        value: '3',
        label: '医师'
      }, {
        value: '1',
        label: '管理员'
      }],
      value: ''
    }
  },
  mounted () {
  },
  methods: {
    submit: function () {
      if (this.username===""){
        this.$message({
          showClose: true,
          message: '用户名不能为空！',
          type: 'warning'
        })
        return
      }
      if (this.password===""){
        this.$message({
          showClose: true,
          message: '密码不能为空！',
          type: 'warning'
        })
        return
      }
      if (this.value===""){
        this.$message({
          showClose: true,
          message: '请选择权限！',
          type: 'warning'
        })
        return
      }
      this.$axios({
        url: "http://localhost:8096/checkUser",
        method: "post",
        data:{
          phone:this.username,
          password:this.password,
          value:this.value,
        }
      }).then(res=>{
        console.log(res)
        if (!res.data){
          alert("用户名或密码错误!")
        }else {
          this.changeLogin(this.value)
          this.$session.set("phone",this.username)
          switch (this.value) {
            case '1':
              this.$router.push({
                path: 'admin/UserManagement'
              })
              break
            case '2':
              console.log(this.value)
              this.$router.push({
                path: 'patient/MyDoctor'
              }).catch(() =>{})
              break
            case '3':
              console.log(this.value)
              this.$router.push({
                path: 'doctor/MyPatient'
              }).catch(() =>{})
              break
          }

        }
      })
    },
    reset: function () {
      this.username = ''
      this.password = ''
    },
    changeLogin: function (state) {
      this.$store.commit('Login')
      this.$store.commit('UserLogin',state)
    },
    toRegister:function (){
      this.$router.push({
        path:'register'
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
body{
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
