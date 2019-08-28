<template>
  <div class="content">
    <div class="content-left">
      <div v-for="(item, index) in options" :key="index">
        <div class="label" @click="select(item)">{{item.label}}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <CascaderItem :options="lists" :level="level+1" @change="change" :value="value"></CascaderItem>
    </div>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep';
export default {
  name: 'CascaderItem', // 注意：递归组件必须给自己起个名字
  data() {
    return {
      currentSelect: null // 当前点击的对象
    };
  },
  computed: {
    // computed缓存
    lists() {
      // 点击左边算出右边list
      // 注意：这里如果options变化，没有更新视图，因为没有依赖options
      // 去自己那一层找自己的儿子
      if(this.value[this.level] && this.value[this.level].id) {
        let o = this.options.find(item => item.id === this.value[this.level].id)
        return o.children
      }
      // return this.value[this.level] && this.value[this.level].children;
    }
  },
  methods: {
    change(val) {
      this.$emit("change", val);
    },
    select(item) {
      // 通知父親修改value值
      // 把父组件传递的属性拷贝一份
      let cloneValue = cloneDeep(this.value);
      cloneValue[this.level] = item; // 引用地址
      cloneValue.splice(this.level + 1); // 当前点击某一项，就将自己后面 + 1所有删除
      this.$emit("change", cloneValue);
      this.currentSelect = item;
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      required: true
    }
  }
};
</script>
<style lang="stylus">
.content
  display flex
</style>