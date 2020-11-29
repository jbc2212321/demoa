<template>
  <div id="Doctor">
    <el-container>
      <el-aside width="18">
        <el-aside>
          <el-menu :default-openeds="['2']">
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>智慧医疗-医师</template>
              <el-menu-item index="2-1">数据查询</el-menu-item>
              <el-menu-item index="2-2">病患列表</el-menu-item>
              <router-link to="DoctorData"><el-menu-item index="2-3">个人资料</el-menu-item></router-link>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-aside>
      <el-container>
        <el-header><h1>智慧医疗数据管理系统</h1></el-header>
<!--        <el-main>Main</el-main>-->
        <div style="overflow: auto"><router-view></router-view></div>
        <el-footer><br><br><br>Copyright 发际线与我作队</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'DoctorHome'
}
</script>

<style scoped>
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
    background-color:  #ffffff;
    color: #333;
    text-align: left;
    line-height: 818px;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 760px;
  }
  h1{
    font-size:25px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
