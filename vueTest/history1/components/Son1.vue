<template>
  <span>
    Son1接收数据:{{mny}}
    <button @click="$emit('update:mny', mny + 200)">更改</button>
    <Grandson1 :value="mny" @say="say"></Grandson1>
  </span>
</template>
<script>
import Grandson1 from './Grandson1'
export default {
  components: {
    Grandson1
  },
  props: {
    mny: {
      type: Number
    },
    value: {
      type: Number
    }
  },
  methods: {
    say(val) {
      console.log('我好帅' + val)
    },
    test() {
      console.log('你很帅')
    },
    test1() {
      console.log('XXXXX')
    }
  },
  data() {
    return {

    }
  }
}
</script>