<template>
  <div id="article" class="container">
    <div class="row">

      <div class="col-lg-3 col-md-3 hidden-sm hidden-xs author-info">
        <div class="card ">
          <div class="card-body">
            <div class="text-center">
              分类
            </div>
            <hr>
            <div class="media">
              <div align="center">
                <a href="">
                  <img class="thumbnail img-fluid" src="" width="300px" height="300px">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 topic-content">
        <div class="card ">
          <div class="card-body">
            <h1 class="text-center mt-3 mb-3">
              {{ title }}
            </h1>

            <div class="article-meta text-center text-secondary">
              <abbr>{{ date | moment('from') }}</abbr>
              ⋅
              <i class="fa fa-clock-o"></i>
              1
            </div>

            <div class="topic-body mt-4 mb-4" v-html="content"></div>

<!--             <div class="operate">
              <hr>
              <a href="#" class="btn btn-outline-secondary btn-sm" role="button">
                <i class="far fa-edit"></i> 编辑
              </a>
              <a href="#" class="btn btn-outline-secondary btn-sm" role="button">
                <i class="far fa-trash-alt"></i> 删除
              </a>
            </div> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import hljs from 'highlight.js'
import emoji from 'node-emoji'

export default {
  name: 'Content',
  data() {
    return {
      title: '', // 文章标题
      content: '', // 文章内容
      date: '' // 创建时间
    }
  },
  created() {
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.get('http://laravel-qingyyy.test/api/v1/posts/1').then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.title = response.data.title
      this.content = response.data.body
      this.date = response.data.created_at
    })

    const articleId = this.$route.params.articleId
    const article = this.$store.getters.getArticleById(articleId)

    if (article) {
      let { title, content, date } = article

      this.title = title
      this.content = SimpleMDE.prototype.markdown(emoji.emojify(content, name => name))
      this.date = date

      this.$nextTick(() => {
        this.$el.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightBlock(el)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>