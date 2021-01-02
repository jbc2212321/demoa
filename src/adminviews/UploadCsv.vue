<template>
    <div id="UploadCsv">
        <template>
<!--            <span class="demonstration">科室：</span>-->
<!--            <el-select v-model="value0" placeholder="选择科室" >-->
<!--                <el-option-->
<!--                        v-for="item in offices"-->
<!--                        :key="item.value"-->
<!--                        :label="item.label"-->
<!--                        :value="item.value">-->
<!--                </el-option>-->
<!--            </el-select>-->
        </template>
        <br><br>
        <el-upload
                class="upload-demo"
                action="uploadFile"
                accept=".csv"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handle_success"
                :before-remove="beforeRemove"
                :show-file-list="false"
                :on-exceed="handleExceed">
<!--            <el-button size="small" type="primary" @click="beforeUpload" >点击上传</el-button>-->
<!--            <div slot="tip" class="el-upload__tip">只能上传csv文件</div>-->
            <el-button id="initSlide" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
        </el-upload>

<!--        <input type="file" accept="*.csv">上传-->


    </div>
</template>

<script>
  export default {
    name: 'UploadCsv',
    data() {
      return {
        url:"",
        offices: [{
          value: '口腔科',
          label: '口腔科',
        }, {
          value: '血液科',
          label: '血液科'
        }],
        value0: '',//科室

      };
    },
    mounted() {
      this.$notify({
        title: '提示',
        message: '血液科csv请以B开头命名，口腔科请以T开头命名',
        duration: 0
      });
    },
    methods: {
      handle_success(res){
        // console.log("返回值",res)
        if(res==="命名不正确"){
            this.$message({
              showClose: true,
              message: '命名不正确！',
              type: 'error'
            })
        }
        else if(res==="表名与csv内容冲突"){
          this.$message({
            showClose: true,
            message: '表名与csv内容冲突！',
            type: 'error'
          })
        }
        else if(res==="上传成功"){
          this.$message({
            showClose: true,
            message: '上传成功！',
            type: 'success'
          })
        }
      },
      judge(){
        if (this.value0===""){
          this.$message({
            showClose: true,
            message: '请选择科室！',
            type: 'warning'
          })
          return false
        }
      },
      async beforeUpload () {
        if (this.value0 === "") {
          this.$message({
            showClose: true,
            message: '请选择科室！',
            type: 'warning'
          })
          return;
        }

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {

        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

<style scoped>
        #UploadCsv{
            padding:20px 0 0 20px;
        }
</style>