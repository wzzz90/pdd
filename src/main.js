// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LyTab from 'ly-tab';
import 'lib-flexible/flexible.js';

import store from './store/index.js';

import {post,fetch} from './api/ajax';
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;

Vue.config.productionTip = false

Vue.use(LyTab);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
