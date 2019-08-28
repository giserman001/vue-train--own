import Vue from 'vue';
import Vuex from 'vuex';
import {login, validate} from './api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    async validate({commit}) {
      const r = await validate()
      console.log(r)
      if (r.code == 1) {
        return false
      }
      commit('setUsername', r.username)
      localStorage.setItem('token', r.token)
      return true
    },
    async login({commit}, username) {
      const r = await login(username)
      if (r.code == 1) {
        return Promise.reject(r)
      }
      localStorage.setItem('token', r.token)
      commit('setUsername', r.username)
      // Promise.resolve(r)  如果希望回调函数返回请求值则直接return 请求回来的值，为啥不用
      // Promise.resolve(r)，因为async await 使用
      return r
    }
  },
});
