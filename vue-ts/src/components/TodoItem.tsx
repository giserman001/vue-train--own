import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import {ITodo} from '../types/todo';
@Component({
  name: 'TodoItem',
})
export default class TodoItem extends Vue {
  public num: number = 1;
  @Prop(Object) public item!: ITodo; // 强制认为是对象类型
  @Prop(Number) public index!: number; // 强制认为是对象类型
  @Emit('say')
  public save() {
    // 传递参数
    return 'aaaa';
  }
  public mounted() {
    // console.log('111111111111111');
  }
  // watch监听数据变化
  @Watch('num')
  public watchNum() {
    console.log('i变化了');
  }
  // public save() {
  //   // 第一种写法
  //   this.$emit('say');
  // }
  public increment() {
    this.num += 1;
  }
  public render() {
    // 注意在jsx中写点击事件
    return <h3>{this.item.text}
    <button on-click={this.save}>提交</button>
    <button on-click={this.increment}>增加</button>
    {this.num}
    </h3>;
  }
}
