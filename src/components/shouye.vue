<template>
    <div>
        <p class="table">Table</p>
        <div class="search">
            <el-input placeholder="请输入内容" class="search_input"></el-input>
            <el-button type="primary" style="width: 61px;height: 37px;margin-top: 10px;" >查询</el-button>
            <el-button type="primary" style="width: 61px;height: 37px;margin-top: 10px;" @click = "handleAdd">新增</el-button>
        </div>
        <el-table :data="tableData" :default-sort = "{prop: 'date', order: 'descending'}" border tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="生日" width="120">
              <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              sortable
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
             <el-table-column label="操作">
                  <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
            </el-table-column>
        </el-table>
        <!-- 显示编辑页 -->
        <el-dialog title="编辑" :close-on-click-modal="false" v-model="editFormVisible">
            <el-form ref="addform" :model="form">
                <el-form-item label="姓名" prop="name">
                    <el-input auto-complete="off" v-model="form.name" ref = 'input1'></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期" :picker-options="pickerOptions">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>
        <!--显示新增页-->
        <el-dialog title="新增信息" :close-on-click-modal="false" v-model="addFormVisible">
            <el-form ref="form" :model="form">
                <el-form-item label="姓名" prop="name">
                    <el-input auto-complete="off" v-model="addform.name"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker v-model="addform.date" type="date" placeholder="选择日期" :picker-options="pickerOptions">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input type="textarea" v-model="addform.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click="addSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>
        <el-button type="danger" style="margin-top: 5px;" @click="batchDelect" :disabled="this.val.length===0">批量删除</el-button>
    </div>
</template>

<script>
    var tr=document.getElementsByTagName("tr");
    var input = document.getElementsByTagName("input");
  export default {
    data() {
      return {
        form:{
            name:"",
            date:"",
            address:""
        },
        addform:{
          name:"",
          date:"",
          address:""
        },
        val: [],
        editFormVisible:false,
        addFormVisible:false,
        editLoading: false,
        pickerOptions: {
          disabledDate(time) {
            //return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1:'',
        tableData: [{
          date: '2016-05-03',
          name: '王小二1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王雅婷2',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王雅婷3',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王雅婷4',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小驴5',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小雅6',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小猫7',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-03',
          name: '王小虎8',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小猪9',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小狗10',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小马11',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小驴12',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小雅13',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小猫14',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.val = val;
      },
      handleEdit(index, row) {
        console.log(index,row);
        this.editFormVisible = true;
        this.form={
            name:row.name,
            date:row.date,
            address:row.address
        }
      },
      handleAdd:function(){
          this.addFormVisible = true;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('确定删除此条信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index,1);
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
      batchDelect(){
       for(let i=0;i<input.length;i++){
            for(let j=0;j<tr.length;j++){
                if(input[i+1].checked){
                    this.$delete(this.tableData,j)
                }
            }
        }
      },
      editSubmit(){
        //this.editLoading = true;
        console.log(this.tableData);
        this.tableData[0].name=this.$refs.input1.value;
      },
      addSubmit:function(){
        console.log(validate())
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table{
        font-weight: bold;
        line-height: 62px;
    }
    .search{
        width: 100%;
        background: #F9FAFC;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
    }
    .search_input{
        width: 200px;
        padding: 10px;
    }
</style>
