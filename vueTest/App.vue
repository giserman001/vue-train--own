<template>
  <div>
    App
    <!-- <Level slot="aaa" :t="1">标题</Level> -->
    <!-- <Level :t="1">
        <div slot="aaa"> 标题</div>
    </Level> -->
    <Level :t="1">标题</Level>
    <Level :t="2">标题</Level>
    <Level :t="3">标题</Level>
    <Level :t="4">标题</Level>
    <Level :t="5">标题</Level>
    <Level :t="6">标题</Level>
    <list :data="['小家', '苹果', '例子']" :render="render"></list>
    <list1 :data="['小家', '苹果', '例子']">
        <template v-slot:a="{item, index}">
            <li :key="index">{{item}}</li>
        </template>
    </list1>
  </div>
</template>

<script>
// 函数式组件 没有模板 必须要有一个render()函数
// import Level from './components/Level'p
import Level from './components/LevelFuntional.js'
import List from './components/List'
import List1 from './components/List1'
export default {
  components:{
      Level,
      List,
      List1
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      render(h, data) {
          return <span>{data}</span>
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>