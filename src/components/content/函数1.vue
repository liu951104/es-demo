<template>
  <div>
    <h3>1.参数默认值</h3>
    <hr>
    <p>makeRequest:function(data1,data2 = "哈哈哈",data3 = "嘿嘿嘿"){
      return data1 + data2 + data3
    }</p>
    <br>
    <p>makeRequest("我的天嗯嗯") => {{Request.content1}}</p>
    <p>makeRequest("我的天嗯嗯","ok") => {{Request.content2}}</p>
    <p>makeRequest("我的天嗯嗯","ok","好吧") => {{Request.content3}}</p>
    <hr>
    <h3>2.参数默认值</h3>
    <hr>
    <p>makeRequest("我的天嗯嗯") => {{Request.content1}}</p>
    <p>makeRequest("我的天嗯嗯","ok") => {{Request.content2}}</p>
    <p>makeRequest("我的天嗯嗯","ok","好吧") => {{Request.content3}}</p>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是第一个demo',
      Request:{
        
      },
      content:''
    }
  },
  created:function(){
    this.$set(this.Request,"content1",this.makeRequest("我的天"))
    this.$set(this.Request,"content2",this.makeRequest("我的天","ok"))
    this.$set(this.Request,"content3",this.makeRequest("我的天","ok","好吧"))
  },
  methods:{
    /**
     * 参数默认值
     */
    makeRequest:function(data1,data2 = "哈哈哈",data3 = "嘿嘿嘿"){
      console.log(arguments)
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
