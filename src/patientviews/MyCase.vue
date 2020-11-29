<template>
    <div id="MyCase">
        <template>
            <!-- 点击查询病历弹出的对话框 -->
            <el-dialog
                    :visible.sync="dialogVisible"
                    width="39%"
                    height="600px"
                    :before-close="handleClose">
      <span>
        <template>
          <span class="demonstration">科室：</span>
          <el-select v-model="value" placeholder="选择科室" @change="selectChanged">
            <el-option
                    v-for="item in offices"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </template>
        <template>
          <span class="demonstration">&#8194; 体检项目：</span>
          <el-select v-model="value1" multiple placeholder="选择项目" @change="selectProject">
            <el-option
                    v-for="item in types"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
          <br><br>
          <span class="demonstration">选择需要添加筛选条件的项目：</span>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
                    v-for="item in screen"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
          <br><br>
          <span class="demonstration">筛选区间</span>
          <el-input-number size="mini" v-model="min" @change="handleChange" :min="0" :max="999" label="最小值"></el-input-number>
          <span class="demonstration">至</span>
          <el-input-number size="mini" v-model="max" @change="handleChange" :min="0" :max="999" label="最大值" value="999"></el-input-number>
            <span class="demonstration"></span>
          <el-button type="primary" @click="screenSubmit" size="mini">提交筛选</el-button>
        </template>
        <br><br>
        <template>
          <div class="block">
            <span class="demonstration" >时间区间</span>
            <el-date-picker
                    size="mini"
                    v-model="date1"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions">
            </el-date-picker>

            <span class="demonstration">至</span>
            <el-date-picker
                    size="mini"
                    v-model="date2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions">
            </el-date-picker>
          </div>
        </template>
        <br>
        <el-col :span="4" :offset="18"><el-button @click="submit"  type="primary">提交</el-button></el-col>
        <br><br>

      </span>
            </el-dialog>

            <!-- 主界面 -->
            <el-button @click="dialogVisible = true">查询病历</el-button>
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    height="600">

                <el-table-column
                        prop="num"
                        label="体检单号"
                        sortable
                        width="120"
                        column-key="num">
                </el-table-column>

                <el-table-column
                        prop="tag"
                        label="科室"
                        width="180">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.tag === '口腔科' ? 'primary' : 'success'"
                                disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>

                <el-table-column
                        prop="date"
                        label="体检日期">
                    <!-- :formatter="formatter"> -->
                </el-table-column>

                <!-- 操作按键（查看）此部分后续可能需要更改 -->
                <el-table-column
                        prop="tag"
                        label="操作"
                        width="200">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </template>

        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    import qs from "qs"
  const typesoptions1 = [{label:'红细胞',value:'红细胞'},{label:'白细胞',value:'白细胞'},{label:'血小板',value:'血小板'}];
  const typesoptions2 = [{label:'叩痛',value:'叩痛'},{label:'松动度',value:'松动度'},{label:'牙石',value:'牙石'}];
  export default {
    name: 'MyCase',
    data(){
      return {
        offices: [{
          value: '口腔科',
          label: '口腔科',
        }, {
          value: '血液科',
          label: '血液科'
        }],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        date1: '',
        date2: '',
        min:'',
        max:'999',
        value: '',//科室
        value1: [],//项目
        value2: '',//项目
        screen  :[],  //筛选
        screenJson:[],
        // value2, //筛选项目
        // type:typesoptions1,
        types:"",  //选择对应科室的相关项目，对应复选框内的选项
        tableData: [{
          num: '114',
          date:'2020-11-28',
          tag: '口腔科',
        }, {
          num: '514',
          date:'2020-11-27',
          tag: '血液科',
        }, {
          num: '1919',
          date:'2020-11-26',
          tag: '血液科',
        }, {
          num: '810',
          date:'2020-11-25',
          tag: '口腔科',
        }],
        dialogVisible: false
      }
    },
    methods: {
      selectChanged(){   //通过选择科室有不同的列表
        if (this.value==="口腔科"){
          this.types= typesoptions2
        }else if (this.value==="血液科"){
          this.types= typesoptions1
        }
      },
      selectProject(){
        var json = [];
        for (let i = 0; i <this.value1.length ; i++) {
          var row = {};
          row.label= this.value1[i];
          row.value =  this.value1[i];
          json.push(row)
        }
        this.screen=json
      },
      screenSubmit(){
        var row={}
        row["筛选项目"]=this.value2
        row["下限"]=this.min
        row["上限"]=this.max
        this.screenJson.push(row)
        // this.screenJson[this.value2]=row
        // console.log(this.screenJson)
        // console.log(JSON.stringify(this.screenJSon))
      },
      submit(){
        console.log("*************************")
        console.log(typeof this.screenJson)

        this.$axios({
          url:"http://localhost:8096/selectPatientCase",
          method:"post",
          headers:{
            "Content-Type":'application/json; charset=UTF-8'
          },
          data:{
              "表名":this.value,
              "病人id":this.$session.get("phone"),
              "开始日期":this.date1,
              "结束日期":this.date2,
              value:this.screenJson,
            // value:["叩痛": {"下限": 0, "上限": 999}],
            // value:["ndm":{"下线"}]
          }
        })

        // this.$axios.post("http://localhost:8096/selectPatientCase",qs.stringify({
        //   "表名":this.value,
        //   "病人id":this.$session.get("phone"),
        //   "开始日期":this.date1,
        //   "结束日期":this.date2,
        //   value:this.screenJson,
        // }))
      },
      open() {
        this.$confirm('此操作将永久删除该条目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>

</style>