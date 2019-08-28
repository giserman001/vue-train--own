<template>
  <div>
      <el-input style="width:200px;" v-model="username"></el-input>
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        login() {
            // 派发一个任务
            this.$store.dispatch('login', this.username).then(data => {
                console.log(data)
                this.$router.push('/profile')
            })
        }
    }
}
</script>

<style>

</style>