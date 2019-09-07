import { Component, Vue, Prop } from 'vue-property-decorator';
import {ITodo} from '../types/todo';
@Component({
  name: 'TodoItem',
})
export default class TodoItem extends Vue {
  @Prop(Object) public item!: ITodo; // 强制认为是对象类型
  @Prop(Number) public index!: number; // 强制认为是对象类型
  public render() {
    return <h3>{this.item.text}</h3>;
  }
}
