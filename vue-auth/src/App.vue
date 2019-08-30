<template>
  <div id="app">
    <router-view></router-view>
    <Menu></Menu>
    <el-button v-has="'edit'">编辑</el-button>
    <el-button v-has="'add'">添加</el-button>
    <el-input ></el-input>
  </div>
</template>
<script>
import Menu from "./components/Menu";
export default {
  name: 'app',
  directives: {
    has: {
      inserted(el, bindings, vnode) { //  vnode.context表示当前组件实例
        let flag = vnode.context.$store.state.btnPermission[bindings["value"]];
        !flag && el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
  components: {
    Menu
  }
};
</script>