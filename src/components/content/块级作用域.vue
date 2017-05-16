<template>
  <div>
    <h4>1.数据绑定</h4>
    <p style="padding:10px 0">{{msg}}</p>
    <textarea v-model="msg" id="" cols="60" rows="10"></textarea>
    <div style="padding:5px 0">result:{{result}}</div>
    <div><h4>最佳实践</h4>{{best}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result:'',
      msg: '这是第一个demo',
      best:''
    }
  },
  created:function(){
    /**
     * 三种定义变量方式
     * 1.var 无论其实际声明位置在何处，都会被视为声明于所在函数的顶部 即变量提升
     * 2.let 块级作用域，仅当前代码块可用，不会出现变量提升的问题
     * 3.const 使用 const 声明的变量会被认为是常量（ constant ），意味着它们的值在被设置完成后就不能再被改变。
     */
    //定义常量
    const q = "想啥呢";
    this.msg = q;

    setTimeout(() =>{
      this.result = "延迟";
      console.log(resVar()) // undefined;
      console.log(resVar("变量")) //变量 
      console.log(letVar()) //res2 is not defined
      console.log(letVar("获取")) //获取
    },1000)

    /**
     * var 的变量定义方式
     * @param  {String} str 入参
     * @return {[type]}     [description]
     */
    const resVar = (str) => {
      if(str){
        var res = str;
        this.result = res;
        return this.result;
      }else{
        const q = 123;
        this.result = res;
        return this.result;
      }
    }

    /**
     * let 的变量定义方式
     * @param  {String} str 入参
     * @return {[type]}     [description]
     */
    const letVar = (str) => {
      if(str){
        let res1 = str;
        let res2 = "let";
        this.result = res1;
        return this.result;
      }else{
        // const q = 123;
        // this.result = res1;
        return res2;
      }
    }

    /**
     * var定义变量会出现变量提升，且serTimeout为异步方法
     * 当 console.log 被调用的时候，匿名函数保持对外部变量i的引用，此时for循环已经结束，i的值被修改成了10.
     */
    for (var i = 0; i < 10; i++) {
      setTimeout(()=>{
        console.log(i)
        //10个10
      },100)
    }


    /**
     * let是块级作用，仅在当前块使用
     */
    for (let i = 0; i < 10; i++) {
      setTimeout(()=>{
        console.log(i)
        //0,1,2.....10
      },100)
    }

    const about = "在默认情况下使用 const ，而只在你知道变量值需要被更改的情况下才使用 let 。这在代码中能确保基本层次的不可变性，有助于防止某些类型的错误";
    this.best = about;
  }
}
</script>
