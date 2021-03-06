import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './directives'
import './components'
import store from './store'
import VueSweetalert2 from './plugins/vue-sweetalert2'
import './filters'
import $ from 'jquery'
import bootstrap from 'bootstrap'
import { mockArticles } from './mock/data'
import ls from './utils/localStorage'
// 引入 axios 的默认值
import axios from 'axios'
import './api'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

// 将 axios 添加到 Vue.prototype 上，使其在实例内部的所有组件中可用
Vue.prototype.$axios = axios

Vue.use(VueSweetalert2)
Vue.use(Viewer)
Vue.config.productionTip = false

const AddMockData = (() => {
  // 是否加入测试数据
  const isAddMockData = true
  // 用户数据
  let userArticles = ls.getItem('articles')

  if (Array.isArray(userArticles)) {
    userArticles = userArticles.filter(article => parseInt(article.uid) === 1)
  } else {
    userArticles = []
  }

  if (isAddMockData) {
    // 合并用户数据和测试数据，使用合并值作为所有文章
    store.commit('UPDATE_ARTICLES', [...userArticles, ...mockArticles(10)])
  } else {
    // 使用用户数据作为所有文章
    store.commit('UPDATE_ARTICLES', userArticles)
  }
})()

new Vue({
	router,
	store,
 	render: h => h(App),
}).$mount('#app')
