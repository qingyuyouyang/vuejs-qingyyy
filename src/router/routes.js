/*
* @Author: faker
* @Date:   2020-05-26 15:06:16
* @Last Modified by:   faker
* @Last Modified time: 2020-06-20 11:58:36
*/
export default [
  {
    path: '/auth/register',
    name: 'Register',
    // component: () => import('@/views/auth/Register')
  },
  {
    path: '/',
    name: 'Home',
    alias: '/topics',
    component: () => import('@/views/Home')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/auth/login',
    name: 'Login',
    // component: () => import('@/views/auth/Login')
  },
  // Content
  {
    path: '/articles/:articleId/content',
    name: 'Content',
    component: () => import('@/views/articles/Content.vue')
  },
]