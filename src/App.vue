<template>
  <div id="wrap">
    <TheHeader/>
    <div id="main-container">
      <router-view/>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'

// 引入 TheFooter.vue 的默认值
import TheFooter from '@/components/layouts/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    // 注册 TheFooter
    TheFooter
  }
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";
@import "~bootstrap/scss/bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
@import '~simplemde/dist/simplemde.min.css';
@import '~highlight.js/styles/atom-one-dark.css';
</style>