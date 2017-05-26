<template>
    <div>
        <p class="list_page">列表页</p>
        <el-table :data="list_page" height="250" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180" ></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="zip" label="zip"></el-table-column>
        </el-table>
        <div style="float: left;">
        <p class="list_page">过滤器filters应用场景1--隐藏手机号前7位:</p>
         <p v-for='tel in telephone'>{{tel | newtel}}</p>
         </div>
         <div style="float: left;margin-left: 30px;">
            <p class="list_page">过滤器filters应用场景2--搜索:</p>
            <el-input placeholder="请输入内容" v-model="search"></el-input>
            <ul v-for="item in searchData ">
                <li>{{item.name}},价格:￥{{item.price}}</li>
            </ul>             
         </div>
         <div id="vue-test">
            <h1>
              第{{ levelText }}关
             </h1>
             <div id="wrapper">
                 <table>
                    <tr v-for="row in table">
                    <td v-for="s in row" @click="choose(s)">{{ textMap[s] }}</td>
                    </tr>
                 </table>
             </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            table:[],
            textMap:['科','抖'],
            level:1,              
            search: '',
            products: [{
              name: '苹果',
              price: 25,
              category: "水果"
            }, {
              name: '香蕉',
              price: 15,
              category: "水果"
            }, {
              name: '雪梨',
              price: 65,
              category: "水果"
            }, {
              name: '宝马',
              price: 2500,
              category: "汽车"
            }, {
              name: '奔驰',
              price: 10025, 
              category: "汽车"
            }, {
              name: '柑橘',
              price: 15,
              category: "水果"
            }, {
              name: '奥迪',
              price: 25,
              category: "汽车"
            }],
            list_page: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
                }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
                }, {
                  date: '2016-05-06',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
                }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
            }],
             telephone: [
                 10000000000,
                 10000000001,
                 10000000002,
                 10000000003,
                 10000000004,
                 10000000005,
                 10000000006,
                 10000000007,
                 10000000008,
                 10000000009,
                 10000000000,
             ],
            }
        },
         computed: {
            searchData: function() {
              var search = this.search;
              if (search) {
                return this.products.filter(function(product) {
                  return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(search) > -1
                  })
                })
              }
              return this.products;
            },
            levelText: function() {
                return this.level > 2 ? this.level : "12345678910".split('')[this.level - 1]
            } 
          },
        filters:{
          newtel(value){
              value = value.toString().substr(7,4)
              value ='*'.repeat(7)+value
              let endMember = value.substr(-1,1)
              if(endMember % 2){
                   value = value+'中奖'
               }else{
                   value = value+'谢谢参与'
               }
               return value
              }
        },
     /*   methods:function(){
           choose:function(s){
              if(s) {
                this.level++
                  this.generateTable()
              }
            },
            generateTable: function() {
                  var size = this.level + 1
                  var table = new Array(size).fill(0).map(function() {
                    return new Array(size).fill(0)
                  })
                  var random = Math.random() * size * size | 0
                  var row = random / size | 0
                  var col = random - row * size
                  table[row][col] = 1
                  this.table = table
          }
    },
        created: function() {
            this.generateTable()
          } 
    }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list_page{
        font-weight: bold;
        line-height: 62px;        
    }
      h1 {
        text-align: center;
      }
      
      #vue-test {}
      
      #wrapper {
        display: flex;
        justify-content: center;
      }
      
      table {
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 8px;
      }
      
      td {
        background: #5bba6e;
        color: #fff;
        font-size: 25px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        vertical-align: middle;
        text-align: center;
      }
</style>
