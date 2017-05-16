<template>
  <div>
    <h4>1.更好的 Unicode 支持</h4>
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
    let text = "𠮷";

    console.log(text.length);//2

    function codePointLength(text) {
      var result = text.match(/[\s\S]/gu);
      return result ? result.length : 0;
    }

    console.log(codePointLength("你 是 猪 么"))//7

    let txt = "你想说点啥？";
    console.log(txt.indexOf("点"))//返回字符在字符串中的位置，没有则为-1，接受第二个参数
    console.log(txt.lastIndexOf("？")) //从后往前遍历，返回一个指定的字符串值最后出现的位置，接受第二个参数
    /**
     *  includes() 方法，在给定文本存在于字符串中的任意位置时会返回 true ，否则返回 false ；
     *  startsWith() 方法，在给定文本出现在字符串起始处时返回 true ，否则返回 false ；
     *  endsWith() 方法，在给定文本出现在字符串结尾处时返回 true ，否则返回 false 。
     *  均接受第二个参数，即索引位置
     */
    console.log(txt.startsWith("点"))//false
    console.log(txt.includes("点"))//true
    console.log(txt.endsWith("？"))//true

    console.log(txt.startsWith("点",3))//true
    console.log(txt.endsWith("点",3))//false 会从总共
    console.log(txt.includes("点",3))//true

    /**
     * 正则
     */
    
    const re1 = /[0-9a-z]/i;
    const re2 = new RegExp(re1,"g");//相当于复制了一个正则，但如果使用了第二个参数，es5中会报错，因为不可使用第二个参数，es6可以允许使用第二个参数，并且让它覆盖第一个参数中的标志

    console.info(re1.toString())//  /[0-9a-z]/iss
    console.info(re2.toString())//   /[0-9a-z]/g
    console.info(re1.test("12wse")) // true
    console.info(re2.test("12wse")) // true
    console.info(re1.test("W")) // true
    console.info(re2.test("FD地方")) //false

    /**
     * 模板字面量，使用``来包裹字符串，
     */
    let msg = `你说"\`点啥`;
    console.log(msg)
    // const message = `啊哈哈哈哈`;
    // console.info(message)
    // message = `嘿嘿额`;
    // console.error(message)//报错，因为const在一个代码块内定义的是一个常量，不可更改

    let msg1 = [
      "你说把爱渐渐",
      "放下会走更远"
    ].join("\n");

    let msg2 = `你说把爱渐渐
放下会走更远`;
    let msg3 = `你说把爱渐渐
                放下会走更远`;

    console.log(msg1)
    console.log(msg2)
    console.log(msg3)

    /**
     * 制造替换位
     * 替换位由起始的 ${ 与结束的 } 来界定，之间允许放入任意的 JS 表达式。最简单的替换位允许你将本地变量直接嵌入到结果字符串中
     */
    
    let title = "这是替换位置";
    const num = 10;
    const price = 5;
    const result = `结果,${title},${num*price+price}`;
    console.log(result)








  }
}
</script>
