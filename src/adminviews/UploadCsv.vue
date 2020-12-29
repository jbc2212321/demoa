<template>
    <div id="UploadCsv">
        <template>
            <span class="demonstration">科室：</span>
            <el-select v-model="value0" placeholder="选择科室" >
                <el-option
                        v-for="item in offices"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </template>
        <br><br>
        <el-upload
                class="upload-demo"
                action="http://localhost:8096/uploadFile"
                ref="fileRefs"
                accept=".csv"
                :before-upload="beforeUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :data="value0"
                :limit="10"
                :on-exceed="handleExceed"
                :file-list="fileList">
<!--            <el-button size="small" type="primary" @click="beforeUpload" >点击上传</el-button>-->
<!--            <div slot="tip" class="el-upload__tip">只能上传csv文件</div>-->
            <el-button id="initSlide" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
        </el-upload>



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
        fileList: []
      };
    },
    methods: {
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