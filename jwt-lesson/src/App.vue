<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/login">登录</router-link>|
      <router-link to="/profile">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {getTest} from './api/index'
  export default {
    mounted() {
      // 防止请求多次调用拦截器
      getTest().then(res => {
        console.log(res)
      })
    },
    data() {
      return {}
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
