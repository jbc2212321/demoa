<template>
<div id="UserManagement">
  <!-- 账户过滤器 -->

  <el-table
    ref="filterTable"
    :data="PageData"
    @filter-change="handleFilterChange"
    stripe
    style="width: 100%">
    <el-table-column
      prop="num"
      label="编号"
      sortable
      width="180"
      column-key="num">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="手机号">
    </el-table-column>
    <el-table-column
      ref="choose"
      column-key="status"
      prop="tag"
      label="账户类型"
      width="180"
      :filters="filters"
      :filter-method="filterTag">
      <template slot-scope="scope">
        <el-tag

          :type="scope.row.tag === '病患' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="tag"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, PageData)"
          size="small">
          查看
        </el-button>
        &nbsp;&nbsp;&nbsp;
        <el-button
          @click.native.prevent="deleteRow(scope.$index, PageData)"
          size="small"
          type="danger">
          移除
        </el-button>
      </template>
    </el-table-column>

  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 10, 20, 50]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tableData.length"

  >
  </el-pagination>
</div>
</template>

<script>
export default {
name: "UserManagement",
  data() {
    return {
      currentPage:1,//默认开始页面
      count:0,//筛选
      pagesize:10,
      AllAccount:[],
      filters:[{ text: '病患', value: '病患' }, { text: '医师', value: '医师' }],
      filter:"",
    }
  },
  computed:{
      tableData:function (){
        return this.AllAccount.filter(item => {

          if (this.filter.length===1) {
            // console.log("标签"+this.filter[0])
            // console.log(item["tag"])
            if (item["tag"]!==this.filter[0]) {
              return false
            }
          }
          return true
        })
      },
    PageData:function (){
        return this.tableData.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    }
  },
  mounted () {
    this.$axios({
      url: "http://localhost:8096/getAllDocAndPatient",
      method: "get",
    }).then(res=>{
      this.AllAccount=res.data
    })

  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    deleteRow(index, tableData){},
    handleSizeChange(val) {
      this.currentPage = 1
      this.pagesize=val
    },
    handleCurrentChange(val) {
      this.currentPage=val
    },
    handleFilterChange(value) {
      this.filter=value.status
      // console.log(value.status)
    }
  }
}
</script>

<style scoped>

</style>
