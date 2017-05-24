<template>
  <div>
    <!-- <h4>1.数据绑定</h4> -->
    <p>{{content}}</p>
    <!-- <textarea v-model="msg" id="" cols="30" rows="10"></textarea> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是第一个demo',
      content:''
    }
  },
  created:function(){
    this.content = this.makeRequest("嗯嗯嗯");
  },
  methods:{
    /**
     * 参数默认值
     */
    makeRequest:function(data1,data2 = "哈哈哈",data3 = "嘿嘿嘿"){
      return data1 + data2 + data3;
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}

dl.bar-left{
  list-style-type: none;
  margin:0;
  padding: 0;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction:column;
  width: 200px;
  background: #ccc;
  float: left;
}
dl.bar-left dd{
  margin:0;
  padding: 20px 0;
  width: 200px;
  color: #fff
}
dl.bar-left dd:hover{
  cursor: pointer;
  background: #75aa34;
}
/*li {
  display: inline-block;
  margin: 0 10px;
}*/

a {
  color: #42b983;
}
</style>
