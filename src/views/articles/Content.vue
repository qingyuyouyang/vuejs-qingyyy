<template>
  <div id="article" class="container">
    <div class="row">

      <div class="col-lg-3 col-md-3 hidden-sm hidden-xs author-info">
        <div class="card ">
          <div class="card-body">
            <div class="text-center">
              <i class="fa fa-window-restore" aria-hidden="true"></i>
              <h3>分类</h3>
            </div>
            <hr>
            <h4 class="card-title" style="text-align: center">
              {{ category }}
            </h4>
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
              <abbr>{{ created_at | moment('from') }}{{fuck_day}}发布</abbr>
              ⋅
              <i class="fa fa-clock-o"></i>
              <abbr>{{ updated_at | moment('from') }}更新</abbr>
            </div>

            <div class="topic-body mt-4 mb-4" v-html="content" v-viewer></div>

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
window.hljs = hljs

export default {
  name: 'Content',
  data() {
    return {
      title: '', // 文章标题
      content: '', // 文章内容
      created_at: '', // 创建时间
      updated_at: '', //修改时间
      category: '' // 分类
    }
  },
  created() {
    const articleId = this.$route.params.articleId
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.get(this.GLOBAL.baseURL+'/api/v1/posts/'+articleId).then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      let { title, content, created_at, updated_at } = article

      this.title = response.data.title
      this.content = SimpleMDE.prototype.markdown(emoji.emojify(response.data.body, name => name))
      this.created_at = response.data.created_at
      this.updated_at = response.data.updated_at
      this.category = response.data.category

      this.$nextTick(() => {
        this.$el.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightBlock(el)
        })
      })
    })
  }
}
</script>

<style scoped>

</style>