<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-sm-12 col-lg-12">
          <p class="padding-top-xsm" v-html="description"></p>
          <div class="text-md">
            <a v-for="item in contacts" v-title="item.title" :href="item.link" :style="contactStyle" target="_blank">
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>
          <span v-html="designer"></span>
        </div>

<!--         <div class="col-sm-6 col-lg-6 col-lg-offset-1">
          <div class="row">
            <div class="col-sm-4">
              <h4>{{ sponsor.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in sponsor.list">
                  <a :href="item.link" target="_blank">
                    <img v-title="item.title" :src="item.logo" :alt="item.title" class="footer-sponsor-link" width="98">
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ statistics.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in statistics.list">{{ item.title }}: {{ item.description }}</li>
              </ul>
            </div>

            <div class="col-sm-4">
              <h4>{{ other.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in other.list">
                  <a :href="item.link" :title="item.title" target="_blank">
                    <i :class="`fa fa-${item.icon}`"></i> {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script>
// 引入 title.js 的默认值
import title from '@/directives/title'

export default {
  name: 'TheFooter',
  // 添加 directives 选项，并注册 title
  directives: {
    title
  },
  data() {
    return {
      description: 'Copyright &copy; 2020 <a href="http://qingyyy.cn">青羽悠扬</a> All Rights Reserved || <a href="https://beian.miit.gov.cn" target="_blank">备案号：豫ICP备20023881号</a>' ,
      contacts: [
        {
          icon: 'envelope',
          title: '反馈问题',
          link: '2582459187@qq.com'
        },
        // {
        //   icon: 'weibo',
        //   title: '站长微博',
        //   link: 'https://weibo.com/1837553744/profile?topnav=1&wvr=6'
        // },
        {
          icon: 'weixin',
          title: '加我微信',
          link: '13027701320'
        }
      ],
      contactStyle: {
        paddingRight: '10px'
      },
      designer: `
        <span style="font-size:0.9em">Designed by
          <span style="color: #e27575;font-size: 14px;">❤</span>
          <a href="http://qingyyy.cn" target="_blank"style="color:inherit">青羽悠扬</a>
        </span>
      `,
      sponsor: {
        title: '赞助商',
        list: [
          {
            logo: 'https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png',
            title: '本站服务器由 UCloud 赞助',
            link: 'http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao'
          },
          {
            logo: 'https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png',
            title: '本站 CDN 服务由七牛赞助',
            link: 'http://www.qiniu.com/?utm_source=phphub'
          },
          {
            logo: 'https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png',
            title: 'Composer 镜像赞助商',
            link: 'https://www.upyun.com/'
          },
          {
            logo: 'https://cdn.learnku.com/uploads/banners/JpTCK6OKYBIrBIWdtob8.png',
            title: '订阅邮件赞助商：SendCloud',
            link: 'http://www.sendcloud.net/'
          }
        ]
      },
      statistics: {
        title: '统计信息',
        list: [
          {
            title: '访问次数',
            description: '423357',
          },
          {
            title: '文章数',
            description: '7397'
          },
          {
            title: '评论数',
            description: '39375'
          }
        ]
      },
      other: {
        title: '其他信息',
        list: [
          {
            icon: 'thumbs-up',
            title: '软件外包服务',
            link: '#'
          },
          {
            icon: 'globe',
            title: '推荐网站',
            link: '#'
          }
        ]
      },
    }
  },
  beforeCreate() {
    // 通过 axios 执行 GET 请求来返回活跃用户
    this.$axios.get(this.GLOBAL.baseURL+'/api/v1/setting').then((response) => {
      // 在成功的回调里，从 response.data 获取返回数据
      this.statistics.list[0].description = response.data.visited
    })
  },
}

</script>