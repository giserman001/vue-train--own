<template>
  <div class="home">
    首页
    <!-- <vue-cascader-sy :options.sync="options" v-model="value" :lazyLoad="lazyLoad"></vue-cascader-sy> -->
    <vue-cascader-sy :options="options" v-model="value"></vue-cascader-sy>
  </div>
</template>

<script>
import vueCascaderSy from 'vue-cascader-sy'
import 'vue-cascader-sy/dist/Cascader.css'
import cityList from "../data.json";
const fetchData = pid => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cityList.filter(item => item.pid == pid));
    }, 100)
  });
};
export default {
  components:{
    vueCascaderSy
  },
  async created() {
    // this.options = await fetchData(0);
  },
  methods: {
    async lazyLoad(id, callback) {
      let children = await fetchData(id)
      callback(children)
    }
  },
  data() {
    return{
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
    }
  }
}
</script>
