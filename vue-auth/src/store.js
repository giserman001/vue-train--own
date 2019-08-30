import Vue from "vue";
import Vuex from "vuex";
import axios from './lib/axios'
import { authRoutes } from './router'
Vue.use(Vuex)

// 数组扁平化  菜单树立体化 (递归处理)
const getTreeList = (menuList) => {
  let menu = []
  let routeMap = {}
  let auths = [] // 权限
  menuList.forEach((m) => {
    auths.push(m.auth)
    m.children = [] // 孩子列表
    routeMap[m.id] = m
    if(m.pid == -1) {
      menu.push(m)
    } else {
      if(routeMap[m.pid]) { // 找到对应的父亲
        routeMap[m.pid].children.push(m)
      }
    }
  })
  return {menu, auths}
}

const formatList = (authRoutes, auths) => {
  return authRoutes.filter(route => {
    if(auths.includes(route.name)) {
      if(route.children) {
        route.children = formatList(route.children, auths)
      }
      return true
    }
  })
}

export default new Vuex.Store({
  state: {
    hasPermission: false,
    menuList: [],
    btnPermission: {
      'edit': true,
      'add': false
    }
  },
  mutations: {
    setMenuList(state, menu) {
      state.menuList = menu
    },
    setPermission(state) {
      state.hasPermission = true
    }
  },
  actions: {
    async getNewRoute({commit, dispatch}) { // 发起请求，获取用户权限
      let { menuList } = await axios.request({url:'/roleAuth'})
      let {menu, auths} = getTreeList(menuList)
      commit('setMenuList', menu)
      let needRoutes = formatList(authRoutes, auths)
      commit('setPermission')
      return needRoutes
    }
  }
});
