<template>
    <div id="MyData">
        <el-form ref="form" :model="form" label-width="80px" >

            <el-form-item label="姓名"><el-col :span="7" >
                <el-input v-model="form.patientName" disabled="true"></el-input>
            </el-col></el-form-item>

            <el-form-item label="联系电话"><el-col :span="7">
                <el-input v-model="form.phoneNo" disabled="true"></el-input>
            </el-col></el-form-item>

            <el-form-item label="病人账户"><el-col :span="7">
                <el-input v-model="form.paccountNo" disabled="true"></el-input>
            </el-col></el-form-item>

            <el-form-item label="病人编号"><el-col :span="7">
                <el-input v-model="form.patientID" disabled="true"></el-input>
            </el-col></el-form-item>

            <el-form-item label="性别"><el-col :span="7">
                <el-select v-model="form.sex" placeholder="选择性别">
                    <el-option label="男性" value="m"></el-option>
                    <el-option label="女性" value="f"></el-option>
                </el-select>
            </el-col></el-form-item>

            <el-form-item label="出生日期"><el-col :span="7">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
            </el-col></el-form-item>

            <el-col :span="7" :offset="2">
            <el-button type="primary" @click="onSubmit">提交修改</el-button>
            <el-button type="danger">清空</el-button></el-col>

        </el-form>

    </div>
</template>

<script>
  export default {
    name: 'MyData',
    data() {
      return {
        form: {
          patientID: '114514',
          paccountNo: '1919810',
          patientName: '田所浩二君',
          phoneNo: '13911451419',
          birthday: '',
          sex: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
    #MyData {
        padding: 1cm 0 0 12cm
    }
</style>