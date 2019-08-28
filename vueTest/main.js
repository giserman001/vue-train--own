import Vue from 'vue'
import App from './App'

// eventBus 事件中心 传递数据
Vue.prototype.$bus = new Vue() // $on() $emit()

// $dispatch向上传递  （所有父级组件派发）
// 注意： 这里不能用箭头函数
Vue.prototype.$dispatch = function(eventName, value){
  // 主要因为$parent作用
  // 获取当前调用这个函数的组件的父组件
  let parent = this.$parent
  while(parent){
    parent.$emit(eventName, value)
    parent = parent.$parent
  }
}
Vue.prototype.$broadcast = function(eventName, value){
  // 获取当前调用这个函数的组件的子组件
  const broadcast = (children) => {
    children.forEach(child => {
      child.$emit(eventName, value)
      if(child.$children) {
        broadcast(child.$children)
      }
    })
  }
  broadcast(this.$children)
}
const vm = new Vue({
  el: '#app',
  render: h => h(App)
})