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
    <h3>2.参数默认值的暂时性死区</h3>
    <hr>
    <p>
      add:function(first,second = this.getValue(first)){
        return first + second
      }
    <br>
      getValue:function(value){
        return value + 5
      }
    </p>
    <br>
    <p>当函数 add() 第一次执行时， first 与 second 的绑定被加入了特定参数的暂时性死区（类似于 let 声明的行为）。因此 second 可以使用 first 来初始化，因为此处 first 总是已经完成了初始化，但反之则不行。</p>
    <br>
    <p>this.getValue(6) => {{Add.value1}}</p>
    <p>this.add(2,2) => {{Add.value2}}</p>
    <p>this.add(2) => {{Add.value3}}</p>
    <hr>
    <h3>3.扩展运算符</h3>
    <hr>
    <p>
      let value1 = 25,
          value2 = 50,
          valueAry = [2,45,34,23,67,80];
    </p>
    <br>
    <p>Math.max(value1, value2) => {{Maths.value1}}</p>
    <p>es5的数组写法:Math.max.apply(Math,valueAry) => {{Maths.value2}}</p>
    <p>es6的数组写法:Math.max(...valueAry) => {{Maths.value3}}</p>
    <p>传参:Math.max(...valueAry,100) => {{Maths.value4}}</p>
    <p>传参:Math.max(...valueAry,0) => {{Maths.value5}}</p>
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
      Add:{

      },
      Maths:{

      }
    }
  },
  created:function(){
    this.$set(this.Request,"content1",this.makeRequest("我的天"))
    this.$set(this.Request,"content2",this.makeRequest("我的天","ok"))
    this.$set(this.Request,"content3",this.makeRequest("我的天","ok","好吧"))

    // 函数中的暂时性死区
    this.$set(this.Add,"value1",this.getValue(6));
    this.$set(this.Add,"value2",this.add(2,2));
    this.$set(this.Add,"value3",this.add(2));

    //扩展运算符
    let value1 = 25,
        value2 = 50,
        valueAry = [2,45,34,23,67,80];

    this.$set(this.Maths,"value1",Math.max(value1,value2));
    this.$set(this.Maths,"value2",Math.max.apply(Math,valueAry));
    this.$set(this.Maths,"value3",Math.max(...valueAry));
    this.$set(this.Maths,"value4",Math.max(...valueAry,100));
    this.$set(this.Maths,"value5",Math.max(...valueAry,0));
  },
  methods:{
    /**
     * 参数默认值
     */
    makeRequest:function(data1,data2 = "哈哈哈",data3 = "嘿嘿嘿"){
      console.log(arguments)
      return data1 + data2 + data3;
    },
    add:function(first,second = this.getValue(first)){
      return first + second;
    },
    getValue:function(value){
      return value + 5;
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
