<template>
    <div id="TodoList">
        <template>
            <el-button
                    onclick="document.getElementById('reset').style.display='block';document.getElementById('delete').style.display='none'">
                重置密码
            </el-button>
            <el-button
                    onclick="document.getElementById('reset').style.display='none';document.getElementById('delete').style.display='block'">
                删除医师
            </el-button>


            <div id="reset" style="display:block">
                <el-table
                        ref="filterTable"
                        :data="ResettableData"
                        style="width: 100%"
                        height="600"
                        stripe
                        header-cell-style="center">

                    <el-table-column
                            prop="num"
                            label="编号"
                            sortable
                            width="80"
                            column-key="num"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="name"
                            label="用户名"
                            width="120"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="id"
                            label="用户ID"
                            width="150"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="tel"
                            label="手机号"
                            width="150"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="content"
                            label="申请内容"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="time"
                            label="提交时间"
                            width="200"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="state"
                            label="处理状态"
                            width="180"
                            align="center">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.state === '待处理' ? 'info' : scope.row.state === '已通过' ? 'success':'danger'"
                                    disable-transitions>{{scope.row.state}}
                            </el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column
                            prop="tag"
                            label="操作"
                            width="200">
                        <el-button size="small" type="primary" @click="open">同意</el-button>
                        <el-button size="small" type="danger" @click="open">拒绝</el-button>
                    </el-table-column>

                </el-table>
            </div>

            <div id="delete" style="display: none">
                <el-table
                        ref="filterTable"
                        :data="DeletetableData"
                        style="width: 100%"
                        height="600"
                        stripe
                        header-cell-style="center">

                    <el-table-column
                            prop="num"
                            label="编号"
                            sortable
                            width="80"
                            column-key="num"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="name"
                            label="病人姓名"
                            width="120"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="id"
                            label="病人ID"
                            width="80"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="doctorname"
                            label="医生姓名"
                            width="120"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="doctorid"
                            label="医生ID"
                            width="80"
                            align="center">
                    </el-table-column>


                    <el-table-column
                            prop="content"
                            label="申请内容"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="time"
                            label="提交时间"
                            width="200"
                            align="center">
                    </el-table-column>

                    <el-table-column
                            prop="state"
                            label="处理状态"
                            width="180"
                            align="center">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.state === '待处理' ? 'info' : scope.row.state === '已通过' ? 'success':'danger'"
                                    disable-transitions>{{scope.row.state}}
                            </el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column
                            prop="tag"
                            label="操作"
                            width="200">
                        <el-button size="small" type="primary" @click="open">同意</el-button>
                        <el-button size="small" type="danger" @click="open">拒绝</el-button>
                    </el-table-column>

                </el-table>
            </div>
        </template>


    </div>
</template>

<script>
  export default {
    name: 'TodoList',
    data() {
      return {
        ResettableData: [{
          num: '1',
          name: '123',
          id:'1212312421',
          tel:'1145141919',
          content:'重置密码',
          time:'2020/12/30 15:04:57',
          state:'待处理'
        }, {
          num: '2',
          name: '234',
          id:'1212452421',
          tel:'123123123121',
          content:'重置密码',
          time:'2020/12/30 15:05:04',
          state:'已通过'
        }, {
          num: '3',
          name: '345',
          id:'1212345421',
          tel:'123123123121',
          content:'重置密码',
          time:'2020/12/30 12:04:57',
          state:'不通过'
        }, {
          num: '4',
          name: '456',
          id:'1212313421',
          tel:'123123123121',
          content:'重置密码',
          time:'2020/12/30 11:45:14',
          state:'不通过'
        }],
        DeletetableData: [{
          num: '1',
          name: '123',
          id:'1212312421',
          tel:'1145141919',
          content:'病人取消医师权限',
          time:'2020/12/30 15:04:57',
          state:'待处理'
        }, {
          num: '2',
          name: '234',
          id:'1212452421',
          tel:'123123123121',
          content:'病人取消医师权限',
          time:'2020/12/30 15:05:04',
          state:'已通过'
        }, {
          num: '3',
          name: '345',
          id:'1212345421',
          tel:'123123123121',
          content:'病人取消医师权限',
          time:'2020/12/30 12:04:57',
          state:'不通过'
        }, {
          num: '4',
          name: '456',
          id:'1212313421',
          tel:'123123123121',
          content:'病人取消医师权限',
          time:'2020/12/30 11:45:14',
          state:'不通过'
        }],
      }
    },
    methods: {
      open() {
        this.$confirm('操作后将不可更改, 是否确认?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },
      //   handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // }
    }
  }
</script>

<style scoped>
    .el-dialog .el-dialog__body {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>