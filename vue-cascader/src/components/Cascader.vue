<template>
  <div class="cascader" v-click-outside="close">
    <div class="title" @click="toggle">
        {{result}}
    </div>
    <div v-if="isVisible">
        <CascaderItem :options="options" :value="value" :level="0" @change="change"></CascaderItem>
    </div>
  </div>
</template>

<script>
import util from '../directives/clickOutside'
import CascaderItem from './CascaderItem'
// 全局挂载事件 当点击时候校验一下点击的是否是cascader中内容
// 判断当前点击是否在某个元素上
// 如果你希望对某个元素有一些列的操作，你可以封装一个指令 （自定义指令）
export default {
    components: {
        CascaderItem
    },
    props: {
        value: {
            type: Array,
            default: () => []
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        result() {
            return this.value.map(item => item.label).join('/')
        }
    },
    directives: {
        clickOutside: util.clickOutside
    },
    data() {
        return {
            isVisible: false // 下拉显示隐藏
        }
    },
    methods: {
        change(value) {
            this.$emit('input', value)
        },
        close() {
            this.isVisible = false
        },
        toggle() {
            this.isVisible = !this.isVisible
        }
    }
};
</script>

<style lang="stylus">
.cascader
    display inline-block
.title
  width: 150px;
  height: 30px;
  border: 1px solid #ccc;
.content
    display flex
.content-left
    border:1px solid #ccc;
    min-height:150px;
    max-height:150px;
    overflow-y scroll;
.label
    width 80px;
    padding-left 5px;
.label:hover
    background:#999;
    cursor pointer
.title
    line-height 30px;
</style>