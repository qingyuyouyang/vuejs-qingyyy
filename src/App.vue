<template>
  <div id="wrap">
    <TheHeader/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";
@import "~bootstrap/scss/bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
</style>