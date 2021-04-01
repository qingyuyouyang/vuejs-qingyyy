<template>
  <div>
    <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
    <div class="jumbotron" :style="[{'background':`url(${setting.jumbotron}) center center / contain no-repeat`}]">
     <h2 class="l-h2"></h2>
     <!-- <hr class="my-4"> -->
     <!-- <p class="lead">爱你这件事,从一而终,认真且执着</p> -->
     <br />
     <!-- <p>你就像春天的精灵,路过人间时,弥漫芬芳与光亮.</p> -->
     <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
     <img :src="setting.avatar" alt="..." class="img-thumbnail" />
    </div>
    <div class="motto">
     <span>❤成功源于不懈的努力。</span>
    </div>
       <div class="container">
        <div class="row justify-content-md-center">
         <div class="c-left col-9">
<!--           <div class="the-carousel">
           <h2 class="l-h2">推荐文章</h2>
           <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
             <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
             <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
             <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
             <div v-for="(item, index) in carousel" class="carousel-item" :class="{ active: index === activeCarouselIndex }">
              <img src="@/images/article/cat 2.jpeg" class="d-block w-100" alt="./Fimages/Article/1.jpg" />
              <div class="carousel-caption d-none d-md-block">
               <h5>{{ item.title }}</h5>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
             </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
           </div>
          </div> -->
          <h2 class="l-h2">发表过的</h2>
          <div v-for="(item, index) in postList" class="media">
           <router-link :to="`/articles/${item.id}/content`" class="media-title hidden-xs"> <img :src="`${baseURL}/storage/${item.image}`" class="align-self-start mr-3" alt="..." width="155px" /> </router-link>
           <div class="media-body">
            <router-link :to="`/articles/${item.id}/content`" class="media-title hidden-xs">
              <h5 class="media-title">{{ item.title }}</h5>
            </router-link>
            <div class="media-info">
              <i class="card-info-icon fa fa-user" aria-hidden="true"></i>
              <span>作者 青羽悠扬 | </span>
              <i class="card-info-icon fa fa-clock-o" aria-hidden="true"></i>
              <span>发表于 {{ item.created_at | moment('from') }} | </span>
              <i class="card-info-icon fa fa-bars" aria-hidden="true"></i>
              <span>分类 {{ item.category.name }} | </span>
              <i class="card-info-icon fa fa-eye" aria-hidden="true"></i>
              <span>阅读量 1| </span>
              <i class="card-info-icon fa fa-commenting" aria-hidden="true"></i>
              <span>评论数 0</span>

            </div>
            <p v-html='item.excerpt'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
         <TheSidebar/>
        </div>
       </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/layouts/TheSidebar'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    TheSidebar
  },
  data() {
    return {
      msg: '', // 消息
      msgType: '', // 消息类型
      msgShow: false, // 是否显示消息，默认不显示
    
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

      totalPage: 1,
      internalCurrentPage: 1,
    }
  },
  beforeRouteEnter(to, from, next) {
    const fromName = from.name

    next(vm => {
      if (vm.$store.state.auth) {
        switch (fromName) {
          case 'Register':
            vm.showMsg('注册成功')
            break
        }
      }
    })
  },
  // 在实例创建完成后
  created() {
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/posts', { page:1 }).then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.postList = response.data.data
      this.totalPage = response.data.last_page
      this.internalCurrentPage = response.data.current_page
    }),
    this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/setting', { visit:1 }).then((response) => {
      this.setting = response.data
    })
  },
  methods: {
    showMsg(msg, type = 'success') {
      this.msg = msg
      this.msgType = type
      this.msgShow = true
    },
    changePage(page) {
      this.internalCurrentPage = page
      this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/posts', { page:page }).then((response) => {
        // 在成功的回调里，从 response.data 获取返回数据
        this.postList = response.data.data
      })
    }
  },
}
</script>

<style scoped>

</style>