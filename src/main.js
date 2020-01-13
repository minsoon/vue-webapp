// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import { Vuetify, VApp, VSnackbar, VBtn, VProgressCircular, VDialog, VIcon, VCard, VTextField } from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';
import VueCookie from 'vue-cookie';
import VueLocalStorage from 'vue-localstorage';
import EventBus from './event-bus/event-bus';
import http from './http';
import App from './App.vue';
import vueMoment from 'vue-moment';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css';
import './less/common.less';

Vue.config.productionTip = false;

Vue.use(vueMoment);
Vue.use(Vuetify, {
  components: {
    VApp, VSnackbar, VBtn, VProgressCircular, VDialog, VIcon, VCard, VTextField
  },
  directives: {
    Ripple
  }
});

window.$cookie = VueCookie;

Vue.use(VueCookie);

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
  components: { App },
  template: '<App/>'
});
