/**
 * 组装模块并导出
 * Created by saturn on 2018/1/6.
 */

/*
 Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
 1.应用层级的状态应该集中到单个 store 对象中。
 2.提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
 3.异步逻辑都应该封装到 action 里面。
 只要你遵守以上规则，如何组织代码随你便。
 如果你的 store 文件太大，只需将 action、mutation、和 getters 分割到单独的文件。
 */

import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './type';
import * as func from './axios/';

import Home from './modules/home';
import List from './modules/list';
import Photo from './modules/photo';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    vue_token: null
  },

  getters: {

  },

  actions: {

  },

  mutations: {
    [types.LOGIN]: (state, data) => {
      window.localStorage.setItem('vue_token', data);
      state.vue_token = data;
    },
    [types.LOGOUT]: (state) => {
      window.localStorage.removeItem('vue_token');
      state.vue_token = null
    }
  },

  modules: {
    Home,
    List,
    Photo
  }
});

export default store;
