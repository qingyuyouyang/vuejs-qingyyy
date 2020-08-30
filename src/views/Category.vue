<template>
  <div>
    <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>

    <div class="jumbotron">
     <h2 class="l-h2"></h2>
     <!-- <hr class="my-4"> -->
     <!-- <p class="lead">爱你这件事,从一而终,认真且执着</p> -->
     <br />
     <!-- <p>你就像春天的精灵,路过人间时,弥漫芬芳与光亮.</p> -->
     <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
     <img src="@/images/avatar.jpg" alt="..." class="img-thumbnail" />
    </div>
    <div class="motto">
     <span>❤成功源于不懈的努力。</span>
    </div>
       <div class="container">
        <div class="row justify-content-md-center">
         <div class="c-left col-9">
          <h2 class="l-h2">最新文章</h2>
          <div v-for="(item, index) in postList" class="media">
           <router-link :to="`/articles/${item.id}/content`" class="media-title hidden-xs"> <img :src="`${baseURL}/storage/${item.image}`" class="align-self-start mr-3 width="155px"" alt="..." /> </router-link>
           <div class="media-body">
            <router-link :to="`/articles/${item.id}/content`" class="media-title hidden-xs">
              <h5 class="media-title">{{ item.title }}</h5>
            </router-link>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.body }}</p>
            <!-- <div class="topic-body mt-4 mb-4" v-html="item.body"></div> -->
           </div>
          </div>
          <nav aria-label="Page navigation example">
           <ul v-if="totalPage > 1" class="pagination justify-content-center">
            <li :class="{ disabled: internalCurrentPage === 1 }" class="page-item"> 
              <a class="page-link" href="javascript:;" @click="changePage(internalCurrentPage - 1)">上一页</a> 
            </li>
            <li v-for="n in totalPage" :class="{ active: internalCurrentPage === n }" class="page-item">
              <a class="page-link" href="javascript:;" @click="changePage(n)">{{ n }}</a>
            </li>
            <li :class="{ disabled: internalCurrentPage === totalPage }" class="page-item"> 
              <a class="page-link" href="javascript:;" @click="changePage(internalCurrentPage + 1)">下一页</a> 
            </li>
           </ul>
          </nav>
         </div>
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
<!--             <li class="list-group-item">
              <i class="card-info-icon fas fa-comment-dots"></i>&nbsp;
              <span class="card-info-text">评论数量</span>
              <span class="card-info-number">9</span>
            </li> -->
           </ul>
    <!--        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
           </div> -->
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
        </div>
       </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      msg: '', // 消息
      msgType: '', // 消息类型
      msgShow: false, // 是否显示消息，默认不显示
    
      totalPage: 1,
      internalCurrentPage: 1,
      carousel: [
        {
          title:'1',
          img:'',
          src:''
        },{
          title:'2',
          img:'',
          src:''
        },{
          title:'3',
          img:'',
          src:''
        }
      ],

      activeCarouselIndex: 0,
      postList: [],
      setting: [],
      baseURL: this.GLOBAL.baseURL,
    }
  },

  // 在实例创建完成后
  created() {
    const category_id = this.$route.params.category_id
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/posts/category', { page:1, category_id:category_id }).then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.postList = response.data.data
      this.totalPage = response.data.last_page
      this.internalCurrentPage = response.data.current_page
    }),
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/setting', { visit:1 }).then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.setting = response.data
    })
  },
  watch: {
    // 监听 '$route'，在查询参数变化后，设置相关数据
    '$route'(to) {
      const category_id = this.$route.params.category_id
      // 通过 axios 执行 GET 请求来返回活跃用户
      this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/posts/category', { page:1, category_id:category_id }).then((response) => {
        // 在成功的回调里，从 response.data 获取返回数据
        this.postList = response.data.data
      })
    }
  },
  methods: {
    showMsg(msg, type = 'success') {
      this.msg = msg
      this.msgType = type
      this.msgShow = true
    },
    changePage(page) {
      this.internalCurrentPage = page
      this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/posts/category', { page:1, category_id:category_id }).then((response) => {
        // 在成功的回调里，从 response.data 获取返回数据
        this.postList = response.data.data
      })
    }
  },
}
</script>

<style scoped>

</style>