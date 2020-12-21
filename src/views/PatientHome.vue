<template>
  <div id="Patient">
    <el-container>
      <el-aside width="18">
        <el-aside>
          <el-menu :default-openeds="['3']">
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>智慧医疗-病患</template>
              <router-link to="MyCase"><el-menu-item index="3-1">数据查询</el-menu-item></router-link>
              <router-link to="MyDoctor"> <el-menu-item index="3-2">我的医师</el-menu-item></router-link>
              <router-link to="MyAppointment"><el-menu-item index="3-3">我的预约</el-menu-item></router-link>
              <router-link to="MyData"><el-menu-item index="3-4">个人资料</el-menu-item></router-link>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-aside>
      <el-container>
        <el-header><h1>智慧医疗数据管理系统</h1></el-header>
<!--        <el-main>Main</el-main>-->
        <div style="height: 700px;overflow: auto"><router-view></router-view></div>
        <el-footer><br><br><br>Copyright 发际线与我作队</el-footer>
      </el-container>
    </el-container>


  </div>
</template>

<script>
export default {
  name: 'PatientHome',
  data(){
    return {
      
    }
  }
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
  background-color: #ffffff;
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

h1 {
  font-size: 25px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
