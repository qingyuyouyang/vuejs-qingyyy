<template>
  <div class="c-right col-3">
    <div class="card card-one">
     <!-- <img src="./images/right-avatar.jpg" class="card-img-top" alt="..." /> -->
     <div class="card-body">
      <h5 class="card-title"><i class="fa fa-window-maximize" aria-hidden="true"></i>&nbsp;&nbsp;网站信息</h5>
      <p class="card-text">记录生活，分享生活。</p>
     </div>
     <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <i class="card-info-icon fa fa-eye" aria-hidden="true"></i>&nbsp;
        <span class="card-info-text">访问次数</span>
        <span class="card-info-number">{{ setting.visited }}</span>
      </li>
      <li class="list-group-item">
        <i class="card-info-icon fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;
        <span class="card-info-text">运行天数</span>
        <span class="card-info-number">{{ setting.run_days }}</span>
      </li>
      <li class="list-group-item">
        <i class="card-info-icon fa fa-list" aria-hidden="true"></i>&nbsp;
        <span class="card-info-text">文章数量</span>
        <span class="card-info-number">{{ setting.article_nums }}</span>
      </li>
     </ul>
    </div>
    <div class="card card-two">
     <img src="@/images/right-avatar.jpg" class="card-img-top" alt="..." />
     <div class="card-body">
      <h5 class="card-title"><i class="fa fa-leaf"></i>&nbsp;&nbsp;青羽悠扬</h5>
      <p class="card-text">保持好奇，求知若饥。</p>
     </div>
     <ul class="list-group list-group-flush">
      <li class="list-group-item ">
        <i class="fa fa-address-book" aria-hidden="true" style="color:#a5a5a5"></i> 
        <span class="card-info-text">维护者 @ qingyyy.cn</span>
      </li>
      <li class="list-group-item">
        <i class="fa fa-map-marker" aria-hidden="true" style="color:#a5a5a5"></i> 
        <span class="card-info-text">郑州</span>
      </li>
      <li class="list-group-item">
        <i class="fa fa-link" aria-hidden="true" style="color:#a5a5a5"></i>
         <a href="qingyyy.cn">
          <span class="card-info-text">qingyyy.cn</span>
          </a>
      </li>
      <li class="list-group-item">
        <i class="fa fa-headphones" aria-hidden="true" style="color:#a5a5a5"></i> 
        <span class="card-info-text">
          5小时前
        </span>
      </li>
     </ul>
    </div>
 </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'TheSidebar',
    data(){
      return {
        setting: [],
        baseURL: this.GLOBAL.baseURL
      }
    },
    created() {
      this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/setting', { visit:1 }).then((response) => {
        this.setting = response.data
      })
    },
  }
</script>