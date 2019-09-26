<template>
  <div class="home">
    <h1 style="text-align:center;">全局store</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="(list, index) in lists" :key="index">
      <TodoItem :item="list" :index="index" @say="say"></TodoItem>
    </div>
    <div>{{count}}</div>
    <button @click="fn"> fn</button>
    store.index{{index}}
    <hr />
    <h1 style="text-align:center;">模块化store</h1>
    <div @click="test">测试Mutation{{islogin}}</div>
    <ul>
      <li v-for="li in list" :key="li.value">{{li.name}}</li>
    </ul>
    <button @click="actionFn">action</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/TodoItem';
import {ITodo} from '../types/todo';
import {State, Mutation, Action, namespace} from 'vuex-class';
import { getTest } from '../service/index'
import {Ilist} from '../store/module/home'
// const userModule = namespace('User')
const homeModule = namespace('Home')
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
    this.hello()
    // getTest().then((res: any) => {
    //   console.log(res, '有数据吗')
    // })
  }
  // 计算属性 （computed）
  get count() {
    return this.lists.length
  }
  public say(msg: string): void {
    console.log('say:' + msg)
  }
  @homeModule.State('isLogin') public islogin!: boolean
  @homeModule.State public list!: Ilist[]
  @homeModule.Mutation('SET_LOGIN') public setlogin: any
  public test(): void {
    this.setlogin({isLogin: true})
  }
  @homeModule.Action('getList') public baz: any
  public actionFn() {
    // this.baz([{name: '111', value: 111}])
    this.$store.dispatch('Home/getList', [{name: '111', value: 111}])
  }
}
</script>
