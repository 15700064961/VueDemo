<template>
  <div class="hello">
        <div class="right_box">
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
 import shouye from '../components/shouye'
 import zhuce from '../components/zhuce'
 import denglu from '../components/denglu'
 import guanyu from '../components/guanyu'
export default {
  name: 'hello',
  data () {
    return {
      msg: '张xx'
    }
  },
 components: {
      shouye,zhuce,denglu,guanyu
    }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
#conter{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    box-sizing: border-box;
}
#conter ul{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
.right_box{
    width: 1673px;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    padding-left: 20px;
}
</style>
