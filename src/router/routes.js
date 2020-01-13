import NeedLogin from '@/views/devbox/NeedLogin';

const Main = () => import(/* webpackChunkName: "Main" */ '@/views/main/Main');

let routes = [
  {
    path: '/main',
    component: Main,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '*',
    redirect: '/main'
  }
];

if (process.env.NODE_ENV === 'development') {
  routes.push(
    {
      name: 'NeedLogin',
      path: '/needlogin',
      component: NeedLogin,
      meta: {
        requireAuth: false
      }
    }
  );
}

export default routes;
