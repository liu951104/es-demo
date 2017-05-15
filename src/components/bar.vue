<template>
  <div>
    <dl class="bar-left">
      <dt>目录</dt>
      <dd><router-link to="demo1">es6起步</router-link></dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd><dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
      <dd>es6起步</dd>
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
