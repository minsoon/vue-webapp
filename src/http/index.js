import axios from 'axios';
import EventBus from '../event-bus/event-bus';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.API_BASE_URL;

axios.interceptors.request.use(config => {
  // API 호출시 headers 정리
  EventBus.$emit('loading', true);
  // let gdSessionId = window.$cookie.get(process.env.GD_SESSION_KEY);
  // let getAppInfo = window.localStorage.getAppInfo;
  // if (config.url.indexOf('adservice.') === -1) {
  //   if (gdSessionId) {
  //     config.headers.gdSessionId = gdSessionId;
  //   }
  //   if (getAppInfo) {
  //     getAppInfo = JSON.parse(getAppInfo);
  //     config.터.appId = getAppInfo.appId;
  //     config.headers.appVersionCode = window.golfdaddyApp ? getAppInfo.appVersionCode : '';
  //     config.headers.appVersionName = getAppInfo.appVersion;
  //     config.headers.osName = window.golfdaddyApp ? getAppInfo.platform.indexOf('ios') > -1 ? 'IOS' : 'AOS' : 'WEB';
  //     config.headers.userAgent = window.golfdaddyApp ? 'com.golfzon.gdaddy' : 'com.golfzon';
  //   }
  // } else {
  //   axios.headers = {
  //     'Content-Type': 'application/json;charset=UTF-8'
  //   };
  // }
  return config;
}, error => {
  EventBus.$emit('loading', false);
  return Promise.reject(error.response);
});

axios.interceptors.response.use(response => {
  // 에러 체크
  EventBus.$emit('loading', false);
  // if (response.data.resultCode) {
  //
  // }
  return response;
}, error => {
  EventBus.$emit('loading', false);
  return Promise.reject(error);
});

export default axios;
