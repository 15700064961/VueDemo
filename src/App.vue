<template>
  <div id="app">
    <div class="name_welcome el-icon-setting">欢迎:{{ msg }}</div>
    <div class="title">VUEDEMO</div>    
    <div id="conter">
      <div class="left_box">
          <ul>
            <li class="el-icon-message"><router-link to="/"><p class="tit">Table页</p></router-link></li>
            <li class="el-icon-document"><router-link to="/zhuce"><p class="tit">Form页</p></router-link></li>
             <li class="el-icon-menu"><router-link to="/guanyu"><p class="tit">echarts</p></router-link></li>
            <li class="el-icon-circle-check"><router-link to="/denglu"><p class="tit">list页</p></router-link></li>
          </ul>       
      </div>  
        <hello></hello>
    </div>
  </div>
</template>

<script>
import Hello from '@/components/hello'
  export default {
    name: 'app',
    data () {
      return {
          msg: '某某某'
      }
    },
    components: {
      Hello
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
.tit{
  display: inline-block;
  padding-left: 5px;
}
*{
  margin: 0;
  padding: 0;
}
.logo{
  float: left;
}
ul li{
  list-style: none;
}
#conter{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
}
#conter ul{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
#conter .left_box{
    height: 100%;
    width: 20%;
    border:1px solid #efefef;
    background: #eef1f6;
    box-sizing: border-box;
}
.left_box li{
   padding: 20px;
   text-align: center;
}

.name_welcome{
  width: 10%;
  float: right;
  padding-top: 10px;
  color: #fff;
}
.title{
  height: 100%;
  padding: 20px;
  background: #20A0FF;
  font-size: 22px;
  color: #fff;
}
</style>