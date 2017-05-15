<template>
  <div>
    <dl class="bar-left">
      <dt>目录</dt>
      <dd><router-link to="前言">前言</router-link></dd>
      <dd><router-link to="块级作用域">块级作用域</router-link></dd>
    </dl>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
dl.bar-left dt{
  text-align:center;
  padding: 20px 0;
  font-size: 18px;
  border-bottom: 1px solid #f4f4f4;
  /*text-align: left;*/
}
dl.bar-left dd{
  margin:0;
  /*padding: 20px 0;*/
  width: 200px;
  color: #fff
}
dl.bar-left dd a{
  text-align: center;
  display: block;
  padding: 20px 0;
}
dl.bar-left dd a:hover{
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
