import { getStore } from '@/utils/localstore/index';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login', // 默认往登录页跳转，存在token直接去往主页
  },
  {
    path: '/home',
    redirect: '/home/sysmenu',
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'), // 路由懒加载
  },
  // register
  {
    path: '/register_forgotpass',
    component: () => import('@/views/register_forgotpass/index.vue'),
  },
  // home
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue'),
    children: [
      {
        path: 'userinfo',
        component: () => import('@/components/menuItems/userinfo.vue'),
        children: [
          {
            path: 'usercard',
            component: () =>
              import('@/components/userinfo/uesrCard/baseMessage.vue'),
          },
        ],
      },
      {
        path: 'sysmenu',
        component: () => import('@/components/menuItems/sysmenu.vue'),
      },
      {
        path: 'chats',
        component: () => import('@/components/menuItems/chats.vue'),
      },
      {
        path: 'systemSet',
        component: () => {
          return import('@/components/menuItems/systemSet.vue');
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由全局守卫
const token = getStore('token');
router.beforeEach(async (to, from) => {
  // 去往任何一个不是登陆页面的都需要token
  if (to.path !== '/login') {
    if (token === 'token') {
      return true;
    } else {
      return '/login';
    }
  }
});

export default router;
