// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import VueCookie from 'vue-cookie';
import VueLocalStorage from 'vue-localstorage';
import EventBus from './event-bus/event-bus';
import http from './http';
import App from './App.vue';
import vueMoment from 'vue-moment';
import vuetify from '@/plugins/vuetify';
import Dexie from 'dexie';
import './assets/styles/common.sass';

Vue.config.productionTip = false;

Vue.use(VueCookie);
Vue.use(vueMoment);
Vue.use(VueLocalStorage);

Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get: function () {
      return EventBus;
    }
  }
});

window.$cookie = VueCookie;

Vue.prototype.$http = http;

if (window.indexedDB) {
  Vue.prototype.$db = new Dexie('Database');
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
});
