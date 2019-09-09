<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="(list, index) in lists" :key="index">
      <TodoItem :item="list" :index="index" @say="say"></TodoItem>
    </div>
    <div>{{count}}</div>
    <button @click="fn"> fn</button>
    store.index{{index}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/TodoItem';
import {ITodo} from '../types/todo';
import {State, Mutation, Action} from 'vuex-class';
import { getTest } from '../service/index'
@Component({
  name: 'home',
  components: {
    TodoItem,
  },
})
export default class Home extends Vue {
  @Action('test')
  public fn() {
    console.log('hahah')
  }
  @Mutation('hello')
  public hello() {
    console.log('hahah')
  }
  @State('lists') public lists!: ITodo[]
  @State('index') public index!: number
  // ts中类需要有修饰符  public private protected
  // data上数据
  // 在这里有两种写法  1. lists:ITodo[]  2. llists:Array<ITodo>
  public mounted() {
    // console.log(this.lists);
    this.hello()
    getTest().then((res: any) => {
      console.log(res, '有数据吗')
    })
  }
  // 计算属性 （computed）
  get count() {
    return this.lists.length
  }
  public say(msg: string): void {
    console.log('say:' + msg)
  }
}
</script>
