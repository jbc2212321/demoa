<template>
    <div class="AdminHome">
        <el-container>

            <!--        <el-aside >-->
            <!--          <el-menu :default-openeds="['1']">-->
            <!--            <el-row class="tac" align="top">-->
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    border-right-width="0px"
                    @open="handleOpen111"
                    @close="handleClose111"
                    background-color="#2F4050"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :collapse="isCollapse"
            >

                <router-link to="/admin/UserManagement" class="a">
                    <el-menu-item index="2">
                        <i class="el-icon-s-custom"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                </router-link>

                <router-link to="/admin/LogManagement" class="a">
                    <el-menu-item index="3" class="a">
                        <i class="el-icon-document"></i>
                        <span slot="title">日志管理</span>
                    </el-menu-item>
                </router-link>

                <router-link to="UploadCsv" class="a">
                    <el-menu-item index="4">
                        <i class="el-icon-upload2"></i>
                        <span slot="title">上传加密</span>
                    </el-menu-item>
                </router-link>

                <router-link to="TodoList" class="a">
                <el-menu-item index="5" >
                    <i class="el-icon-message-solid"></i>
                    <span slot="title">待办事项</span>
                </el-menu-item>
                </router-link>
            </el-menu>

            <el-container>

                <el-header>
                    <el-col :span="4">
                        <el-row :gutter="15">
                            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                                <el-radio-button :label="false">展开</el-radio-button>
                                <el-radio-button :label="true">收起</el-radio-button>
                            </el-radio-group>
                        </el-row>
                    </el-col>

                    <el-col :span="5" :offset="15">
                        <el-row :gutter="15">
                            <el-col :span="5">
                                <el-dropdown>
                <span class="el-dropdown-link">
                  {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>
                                            <el-button @click="outLogin">登出</el-button>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-header>
                <div style="height: 800px;overflow: auto">
                    <router-view></router-view>
                </div>
                <!--                <el-main ><router-view></router-view></el-main>-->
                <el-footer><br><br><br>Copyright 发际线与我作队</el-footer>
            </el-container>
        </el-container>
        <!--    <el-button type="primary" round @click="submit">跳转</el-button>-->


    </div>
</template>

<script>


  export default {
    name: 'AdminHome',
    data () {
      return {
        userName: '',
        isCollapse: true
      }
    },
    mounted () {
      this.$axios({
        url: 'http://localhost:8096/getAdminName',
        method: 'post',
        data: {
          phone: this.$session.get('phone')
        }
      }).then(res => {
        this.userName = res.data
      })
    },
    methods: {
      outLogin () {
        this.$axios({
          url:"http://localhost:8096/userLoginOut",
          method:"post",
          data:{
            phone:this.$session.get("phone"),
            state:this.$store.state.identity
          }
        }).then(res=>{
          this.$session.remove("phone")
          this.$store.commit("OutLogin")
          this.$router.push({
            path: '/'
          })
        })

      },
      handleOpen111 (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose111 (key, keyPath) {
        console.log(key, keyPath)
      },
      submit: function () {
        this.$router.push({
          path: 'admin'
        })
      }
    },
    components: {}
  }
</script>
<style scoped>
    .a {
        text-decoration: none;
    }

    .el-header {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 20px;
    }

    .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 10px;
    }

    .el-aside {
        background-color: #2F4050;
        color: #333;
        text-align: left;
        line-height: 818px;
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 0;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #439bf3;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    h1 {
        font-size: 25px;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>

<style>
    h3 {
        color: #f0ebe7;
    }

    .el-menu {
        border-right-style: none;
        border-right-width: 0;
    }

    .el-menu-vertical-demo.el-menu--collapse.el-menu {
        border-right-style: solid;
        border-right-width: 4px;
    }

    .el-menu-vertical-demo.el-menu {
        border-right-style: solid;
        border-right-width: 4px;
    }
</style>
