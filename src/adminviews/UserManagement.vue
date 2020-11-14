<template>
<div id="UserManagement">
  <!-- 账户过滤器 -->
  <el-button @click="resetTagFilter">清除账户过滤器</el-button>
  <el-table
    ref="filterTable"
    :data="AllAccount"
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
      <!-- :formatter="formatter"> -->
    </el-table-column>
    <el-table-column
      prop="tel"
      label="手机号">
      <!-- :formatter="formatter"> -->
    </el-table-column>
    <el-table-column
      prop="tag"
      label="账户类型"
      width="180"
      :filters="[{ text: '病患', value: '病患' }, { text: '医师', value: '医师' }]"
      :filter-method="filterTag">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '病患' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="tag"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          size="small">
          查看
        </el-button>
        &nbsp;&nbsp;&nbsp;
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          size="small"
          type="danger">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
export default {
name: "UserManagement",
  data() {
    return {
      AllAccount:[]
    }
  },
  mounted () {
    this.$axios({
      url: "http://localhost:8096/getAllDocAndPatient",
      method: "get",
    }).then(res=>{
      this.AllAccount=res.data
      console.log(res.data)
    })

  },
  methods: {
    resetTypeFilter() {
      this.$refs.filterTable.clearFilter('tag');
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    deleteRow(index, tableData){},
  }
}
</script>

<style scoped>

</style>
