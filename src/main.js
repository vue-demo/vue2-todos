// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BScroll from 'better-scroll'

import App from './App'
import store from './store';
import router from './router'

Vue.config.productionTip = false;

Vue.prototype.BScroll = function (el) {
  el = el ? el : '#app';
  console.log(el);
  return new BScroll(el, {});
};

/* eslint-disable no-new */
window.app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
