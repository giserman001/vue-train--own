<template>
  <div>
    App组件
    <br/>
    我是parent组件： <Parent></Parent>
  </div>
</template>
<script>
import Parent from './components/Parent'
export default {
  mounted(){
    this.$broadcast('say', 200)
  },
  components: {
    Parent
  },
  data() {
    return {

    }
  }
}
</script>