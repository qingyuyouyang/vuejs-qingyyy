<template>
<!--   <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
      </div>
    </div>
  </div> -->
  <nav class="navbar-default navbar fixed-top navbar-expand-lg">
   <router-link to="/" class="navbar-brand">
      <img :src="website.logo" :alt="website.title">&nbsp;&nbsp;{{ website.title }}
   </router-link>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
      <span class="navbar-toggler-icon"></span> 
   </button>

   <div id="navbarText" :class="['collapse', 'navbar-collapse', { show: showCollapsedNav }]">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item" v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
       <router-link class="nav-link" :to="`/category/${ item.id }`" @click="changeNavIndex(item.href)">{{ item.name }} <span class="sr-only">(current)</span></router-link> 
     </li>
    </ul>
    <span class="navbar-text"> 回不去的旧日时光 </span>
   </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      website: [],
      navList: [],
      activeNavIndex: 0,
      showCollapsedNav: false
    }
  },
  // 在实例创建完成后
  created() {
    // 通过 axios 执行 GET 请求来返回分类
    this.$axios.get(this.GLOBAL.baseURL+'/api/v1/categories').then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.navList = response.data
    }),
    // 通过 axios 执行 GET 请求来返回设置信息
    this.$axios.get(this.GLOBAL.baseURL+'/api/v1/setting/website').then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.website = response.data
    })
  },
  beforeCreate() {
    this.uploadsUrl = require('@/images/logo.png')
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    },
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav
    }
  }
}
</script>

<style scoped>
.title { display: none;}
.navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.08);}
</style>