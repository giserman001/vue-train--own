<template>
  <div class="home">
    首页
    <vue-cascader-sy :options.sync="options" v-model="value" :lazyLoad="lazyLoad"></vue-cascader-sy>
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
    this.options = await fetchData(0);
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
      options: []
    }
  }
}
</script>
