<template>
  <div>
    <Cascader :options="options" v-model="value"></Cascader>
    <!-- <Cascader :options.sync="options" v-model="value" :lazyLoad="lazyLoad"></Cascader> -->
  </div>
</template>

<script>
import cityList from "./data.json";
import Cascader from "./components/Cascader";
const fetchData = pid => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cityList.filter(item => item.pid == pid));
    }, 1000)
  });
};
export default {
  components: {
    Cascader
  },
  name: "app",
  async created() {
    // this.options = await fetchData(0);
  },
  methods: {
    // 难道让用户这么去写？？？？？这里需要組件内部處理
    // async input(value) {
    //   let currentItem = value[value.length - 1] // 引用地址
    //   let children = await fetchData(currentItem.id)
    //   // 这里不需要更新数据源（为啥？）
    //   this.$set(currentItem, 'children', children)
    // },
    async lazyLoad(id, callback) {
      let children = await fetchData(id)
      callback(children)
    }
  },
  data() {
    return {
      value: [],
      options: [
        {
          label: "肉类",
          children: [
            {
              label: "猪肉",
              children: [
                {
                  label: "五花肉"
                },
                {
                  label: "里脊肉"
                }
              ]
            },
            {
              label: "鸡肉",
              children: [
                {
                  label: "鸡腿"
                },
                {
                  label: "鸡翅"
                }
              ]
            }
          ]
        },
        {
          label: "蔬菜",
          children: [
            {
              label: "叶菜类",
              children: [
                {
                  label: "大白菜"
                },
                {
                  label: "小白菜"
                }
              ]
            },
            {
              label: "根茎类",
              children: [
                {
                  label: "萝卜"
                },
                {
                  label: "土豆"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="stylus"></style>
