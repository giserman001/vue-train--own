<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="(list, index) in lists" :key="index">
      <TodoItem :item="list" :index="index"></TodoItem>
    </div>
    <div>{{count}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/TodoItem'
import {ITodo} from '../types/todo'
@Component({
  name: 'home',
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  // ts中类需要有修饰符  public private protected
  // data上数据
  // 在这里有两种写法  1. lists:ITodo[]  2. llists:Array<ITodo>
  public lists: Array<ITodo> = [{
    text: '吃饭',
    complete: false,
  }, {
    text: '睡觉',
    complete: true,
  }]
  public mounted() {
    console.log(this.lists);
  }
  // 计算属性 （computed）
  get count() {
    return this.lists.length;
  }
}
</script>
