/**
 * Created by saturn on 2017/8/8.
 */

import * as types from '../type/';
import * as axios from '../axios/';

const state = {
  menu: [{
    option: ['风格', '简约', '美式', '英式']
  }, {
    option: ['户型', '3室2厅', '2室1厅', '1室1厅']
  }, {
    option: ['面积', '120平', '80平', '60平']
  }],
  dataArr: [{
    title: '简约',
    type: '3室2厅',
    area: '120平',
    pic: '/static/01.jpg'
  }, {
    title: '简约',
    type: '2室1厅',
    area: '120平',
    pic: '/static/01.jpg'
  }, {
    title: '简约',
    type: '1室1厅',
    area: '120平',
    pic: '/static/01.jpg'
  }, {
    title: '美式',
    type: '2室1厅',
    area: '80平',
    pic: '/static/02.jpg'
  }, {
    title: '美式',
    type: '1室1厅',
    area: '60平',
    pic: '/static/03.jpg'
  }]
};

const getters = {
  home_list: state => state.list
};

const actions = {
  getHomeList({commit}, payload) {
    commit(types.Home_List, payload);
  },
  getNav({commit}, payload) {
    commit(types.Home_Nav, payload);
  }
};

const mutations = {
  [types.Home_List](state, payload){
    state.list = payload;
  },
  [types.Home_Nav](state, payload){
    state.options = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
