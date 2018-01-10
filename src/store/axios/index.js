import Vue from 'vue';
import axios from 'axios';
import vueJsonp from 'vue-jsonp'
import * as Api from './api';

Vue.use(vueJsonp);

/**
 * Test axios
 * @param callback
 * @returns null
 */
function getHomeList(callback) {
  axios.get(Api.getHomeList).then(res => {
    if (res.data.code === 200) {
      let data = res.data.data.map(item => {
        return {
          title: item.name
        }
      });
      callback(data);
    }
  });
}

/**
 * Test jsonp
 * @returns Promise
 */
function getNews(callback) {
  return new Promise((resolve, reject) => {
    Vue.jsonp(Api.news).then(data => {
      let arr = data.live.filter(item => {
        return item.addata === null && item.picInfo[0];
      }).map(item => {
        return {
          title: item.title
        }
      });
      resolve(arr);
      callback(arr);
    }).catch(err => {
      reject(err);
    });
  });
}

export {
  getHomeList,
  getNews
}
