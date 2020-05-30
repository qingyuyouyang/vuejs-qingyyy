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
      <img :src="logo.src" :alt="logo.title">&nbsp;&nbsp;{{ logo.title }}
   </router-link>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNav">
      <span class="navbar-toggler-icon"></span> 
   </button>

   <div id="navbarText" :class="['collapse', 'navbar-collapse', { show: showCollapsedNav }]">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item" v-for="(item, index) in navList" :class="{ active: index === activeNavIndex }">
       <a class="nav-link" href="#" @click="changeNavIndex(item.href)">{{ item.title }} <span class="sr-only">(current)</span></a> 
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
      logo: {
        src: `${this.uploadsUrl}`,
        title: '青羽悠扬'
      },
      navList: [],
      activeNavIndex: 0,
      showCollapsedNav: false
    }
  },
  // 在实例创建完成后
  created() {
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.get('http://laravel-qingyyy.test/api/v1/categories').then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.navList = response.data
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