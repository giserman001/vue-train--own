<template>
  <div>
    <button @click="test">test</button>
    parent组件： {{mny}}-------{{isSmoke}}
    <br/>
    <!-- son1:<Son1 :mny="mny" @input:mny="change"></Son1> -->

    <!-- son1:<Son1 :mny="mny" @input:mny="(value) => {this.mny = value}"></Son1> -->

    <!--
      注意點： 1.这种语法糖：其实会被扩展为 son1:<Son1 :mny="mny" @update:mny="(value) => {this.mny = value}"></Son1>
              2. 触发函数名只能是update() 因此子组件里$emit('update') 只能是 update
    -->
    son1:<Son1 :mny.sync="mny" ref="Son1"></Son1>

    <!--
      一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，
      但是像单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的。model 选项可以用来避免这样的冲突：
      注意： 1. 传递给子组件的属性名只能是value    2.并且传递给子组件的事件名字只能是 input
    -->
    <!-- son1:<Son1 v-model="mny"></Son1> -->
    <Son2 name="珠峰" age="20" address="上海" @son="son"></Son2>
  </div>
</template>
<script>
import Son1 from './Son1'
import Son2 from './Son2'
export default {
  mounted() {
    this.$refs.Son1.test1()
  },
  // provide和reject 互相修改互相印影响
  provide() {
    return {
      parent: this
    }
  },
  components: {
    Son1,
    Son2
  },
  data() {
    return {
      mny: 100,
      isSmoke: true
    }
  },
  methods: {
    test() {
      this.isSmoke = 'hahahhhahahahahhahahah'
    },
    son() {
      console.log('有人点我')
    },
    change(mny) {
      this.mny = mny
    }
  }
}
</script>