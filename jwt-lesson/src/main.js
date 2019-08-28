import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const whiteList = ['/']
router.beforeEach(async (to, from, next) => {  // 路由渲染流程   勾子执行顺序
  // 设置白名单
  if (whiteList.includes(to.path)) {return next()}
  // 校验当前用户是否登录
  const flag = await store.dispatch('validate')
  if (flag) {
    if(to.name == 'login') {
      next('/')
    } else {
      next() // 登录过而且不是login页面
    }
  } else {
    // 没登录过，如果这个路由需要登录则跳转到登录页面
    const r = to.matched.some(item => item.meta.needLogin)
    if (r) {
      next('/login')
    } else {
      next()
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
