import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  base: '/app',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ x: 0, y: 0 });
        }
      });
    });
  }
});

router.beforeEach((to, from, next) => {
  let _isLogin = true;
  /**
   * 토큰 체크 로직
   * **/
  if (_isLogin) {
    next();
  } else {
    next({
      path: '/needlogin',
      query: {
        redirect: to.fullPath
      }
    });
  }
});

export default router;
