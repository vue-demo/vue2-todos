/**
 * Created by saturn on 2017/8/8.
 */

import * as types from '../type/';
import * as axios from '../axios/';

const state = {
  page: 5,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

const getters = {

};

const actions = {
  getHomeNews({commit}, payload) {
    commit(types.Home_News, payload);
  }
};

const mutations = {
  [types.Home_News](state, payload){
    state.news = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
