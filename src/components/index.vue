<template>
  <div class="hello">
  ES6 + VUE 的练习
  </div>
</template>

<script>
export default {
  name: 'hello',
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

ul.bar-left{
  list-style-type: none;
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
ul.bar-left li{
  padding: 5px 0;
  width: 200px;
  color: #fff

}
/*li {
  display: inline-block;
  margin: 0 10px;
}*/

a {
  color: #42b983;
}
</style>
