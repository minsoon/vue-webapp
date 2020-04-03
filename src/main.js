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
import './assets/styles/common.sass';

Vue.config.productionTip = false;

window.$cookie = VueCookie;

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

Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
});
