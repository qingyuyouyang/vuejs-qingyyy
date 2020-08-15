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
          <div class="the-carousel">
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
          </div>
          <h2 class="l-h2">最新文章</h2>
          <div v-for="(item, index) in postList" class="media">
           <a href="#"> <img :src="`${baseURL}/storage/${item.image}`" class="align-self-start mr-3" alt="..." /> </a>
           <div class="media-body">
            <router-link :to="`/articles/${item.id}/content`" class="media-title hidden-xs">
              <h5 class="media-title">{{ item.title }}</h5>
            </router-link>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.body }}</p>
            <!-- <div class="topic-body mt-4 mb-4" v-html="item.body"></div> -->
           </div>
          </div>
          <nav aria-label="Page navigation example">
           <ul class="pagination justify-content-center">
            <li class="page-item disabled"> <a class="page-link" href="#" tabindex="-1" aria-disabled="true">上一页</a> </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"> <a class="page-link" href="#">下一页</a> </li>
           </ul>
          </nav>
         </div>
         <div class="c-right col-3">
          <div class="card card-one">
           <!-- <img src="./images/right-avatar.jpg" class="card-img-top" alt="..." /> -->
           <div class="card-body">
            <h5 class="card-title"><i class="fas fa-feather-alt"></i>&nbsp;&nbsp;青羽悠扬</h5>
            <p class="card-text">业余的编程爱好者，找寻向往的生活。</p>
           </div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <i class="card-info-icon fas fa-meteor"></i>&nbsp;
              <span class="card-info-text">访问次数</span>
              <span class="card-info-number">{{ setting.visited }}</span>
            </li>
            <li class="list-group-item">
              <i class="card-info-icon fas fa-calendar-alt"></i>&nbsp;
              <span class="card-info-text">运行天数</span>
              <span class="card-info-number">{{ setting.run_days }}</span>
            </li>
            <li class="list-group-item">
              <i class="card-info-icon fas fa-file-alt"></i>&nbsp;
              <span class="card-info-text">文章数量</span>
              <span class="card-info-number">{{ setting.article_nums }}</span>
            </li>
            <li class="list-group-item">
              <i class="card-info-icon fas fa-comment-dots"></i>&nbsp;
              <span class="card-info-text">评论数量</span>
              <span class="card-info-number">9</span>
            </li>
           </ul>
    <!--        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
           </div> -->
          </div>
          <div class="card card-two">
           <img src="@/images/right-avatar.jpg" class="card-img-top" alt="..." />
           <div class="card-body">
            <h5 class="card-title">怀念，是你的笑颜</h5>
            <p class="card-text">那些逝去的时光，那些被记忆冲散的岁月，那挂在心头的人儿啊，Are you ok? ^_^.</p>
           </div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">昨天，已成记忆</li>
            <li class="list-group-item">今天，正在逝去</li>
            <li class="list-group-item">明天，美好无限！</li>
           </ul>
    <!--        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
           </div> -->
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
      media: [
        {
          title:'爱，不止在字里行间',
          content:'那些藏匿心中很久的甜言 那些羞于表达出口的蜜语 借今天，写成三行情书 向你表达你心中的爱意 爱你这件事 从一而终 认真且执着 你的微笑 是深藏的秘密 刻在我的心底 爱，不止在字里行间 在你看不见的眉眼之间 还在有你的每个地方 你那不经意展露的笑容 令我的心宛如蒲公英的绒毛般 乘着恋爱的风，向你飞去 我怀疑 星星坠落的时候 掉进了你的眼睛里 爱你这两个字 是世界上最胆小的 它总是在你面前东躲西藏',
          src:''
        },{
          title:'爱，不止在字里行间',
          content:'那些藏匿心中很久的甜言 那些羞于表达出口的蜜语 借今天，写成三行情书 向你表达你心中的爱意 爱你这件事 从一而终 认真且执着 你的微笑 是深藏的秘密 刻在我的心底 爱，不止在字里行间 在你看不见的眉眼之间 还在有你的每个地方 你那不经意展露的笑容 令我的心宛如蒲公英的绒毛般 乘着恋爱的风，向你飞去 我怀疑 星星坠落的时候 掉进了你的眼睛里 爱你这两个字 是世界上最胆小的 它总是在你面前东躲西藏',
          src:''
        },{
          title:'爱，不止在字里行间',
          content:'那些藏匿心中很久的甜言 那些羞于表达出口的蜜语 借今天，写成三行情书 向你表达你心中的爱意 爱你这件事 从一而终 认真且执着 你的微笑 是深藏的秘密 刻在我的心底 爱，不止在字里行间 在你看不见的眉眼之间 还在有你的每个地方 你那不经意展露的笑容 令我的心宛如蒲公英的绒毛般 乘着恋爱的风，向你飞去 我怀疑 星星坠落的时候 掉进了你的眼睛里 爱你这两个字 是世界上最胆小的 它总是在你面前东躲西藏',
          src:''
        }
      ],

      activeCarouselIndex: 0,
      postList: [],
      setting: [],
      baseURL: this.GLOBAL.baseURL,
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
    this.$axios.get(this.GLOBAL.baseURL+'/api/v1/posts').then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.postList = response.data
    }),
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.patch(this.GLOBAL.baseURL+'/api/v1/setting', { visit:1 }).then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.setting = response.data
    })
  },
  methods: {
    showMsg(msg, type = 'success') {
      this.msg = msg
      this.msgType = type
      this.msgShow = true
    },
    changeCarouselIndex(index) {
      index = 1 + index,
      alert(index)
      this.activeCarouselIndex = index
    },
  },
  // computed: {
  //   // auth() {
  //   //   return this.$store.state.auth
  //   // },
  //   ...mapState([
  //     'auth',
  //     'user',
  //     'articles'
  //   ])
  // },
}
</script>

<style scoped>

</style>