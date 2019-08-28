<template>
  <div>
    孙子1: {{value}}
    <!-- 调用父组件的input事件 -->
    <button @click="fn()">孙子更改</button>
    {{parent.isSmoke}}
  </div>
</template>
<script>
export default {
  mounted() {
    // 注意： 这里组件执行顺序
    this.$nextTick(() => {
      this.$bus.$emit('cc', 10)
    })
  },
  inject: [
    'parent'
  ],
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    fn() {
      console.log(this.$parent)
      // this.$parent.$emit('update:mny', this.value + 200)
      // this.$parent.test()
      this.$dispatch('update:mny', 200)
      this.parent.isSmoke = 'sssssssssss'
    }
  },
  data() {
    return {

    }
  }
}
</script>