import Vue from 'vue';
import Vuex from 'vuex';
import {ITodo} from './types/todo';
Vue.use(Vuex);

interface Ilist {
  lists: ITodo[];
  index: number;
}

export default new Vuex.Store<Ilist>({
  state: {
    lists: [{
      text: '吃饭',
      complete: false,
    }, {
      text: '睡觉',
      complete: true,
    }],
  index: 0,
},
  mutations: {
    hello(state) {
      state.index += 1;
    },
  },
  actions: {
    test({commit}, data) {
      setTimeout(() => {
        commit('hello');
      }, 2000);
    },
  },
});
