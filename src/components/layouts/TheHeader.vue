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
  <nav class="navbar fixed-top navbar-expand-lg">
   <a class="navbar-brand" href="#"><i class="fas fa-feather-alt"></i>&nbsp;&nbsp;青羽悠扬</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
   <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item active"> <a class="nav-link" href="#">主页 <span class="sr-only">(current)</span></a> </li>
     <li class="nav-item"> <a class="nav-link" href="#">心情随笔</a> </li>
     <li class="nav-item"> <a class="nav-link" href="#">工作笔记</a> </li>
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
        title: 'Learnku Vue.js'
      }
    }
  },
  beforeCreate() {
    this.uploadsUrl = 'http://localhost:8080/'
  }
}
</script>

<style scoped>
/*.title { display: none;}*/
</style>