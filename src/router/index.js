/*
* @Author: faker
* @Date:   2020-05-25 14:19:14
* @Last Modified by:   faker
* @Last Modified time: 2020-05-25 15:44:44
*/
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    // component: () => import('@/views/auth/Register')
  },
  // 首页路由配置
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  // 其他未配置的路由都跳转到首页
  {
    path: '*',
    // 重定向
    redirect: '/'
  },
  {
    path: '/articles/:articleId/content',
    name: 'Content',
    component: () => import('@/views/articles/Content.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes
})

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   const app = router.app
//   const store = app.$options.store
//   const auth = store.state.auth
//   // 获取目标页面路由参数里的 articleId
//   const articleId = to.params.articleId

//   app.$message.hide()

//   if (
//     (auth && to.path.indexOf('/auth/') !== -1) ||
//     (!auth && to.meta.auth) ||
//     // 有 articleId 且不能找到与其对应的文章时，跳转到首页
//     (articleId && !store.getters.getArticleById(articleId))
//   ) {
//     next('/')
//   } else {
//     next()
//   }
// })

// 注册全局后置钩子
router.afterEach((to, from) => {
  const app = router.app
  const store = app.$options.store
  const showMsg = to.params.showMsg

  if (showMsg) {
    if (typeof showMsg === 'string') {
      app.$message.show(showMsg)
    } else {
      app.$message.show('操作成功')
    }
  }
})

export default router