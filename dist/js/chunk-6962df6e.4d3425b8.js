(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6962df6e"],{"0583":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"c-right col-3"},[s("div",{staticClass:"card card-one"},[t._m(0),s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"card-info-icon fa fa-eye",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"card-info-text"},[t._v("访问次数")]),s("span",{staticClass:"card-info-number"},[t._v(t._s(t.setting.visited))])]),s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"card-info-icon fa fa-calendar-check-o",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"card-info-text"},[t._v("运行天数")]),s("span",{staticClass:"card-info-number"},[t._v(t._s(t.setting.run_days))])]),s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"card-info-icon fa fa-list",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"card-info-text"},[t._v("文章数量")]),s("span",{staticClass:"card-info-number"},[t._v(t._s(t.setting.article_nums))])])])]),t._m(1)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[s("i",{staticClass:"fa fa-window-maximize",attrs:{"aria-hidden":"true"}}),t._v(" 网站信息")]),s("p",{staticClass:"card-text"},[t._v("记录生活，分享生活。")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card card-two"},[i("img",{staticClass:"card-img-top",attrs:{src:s("4e9f"),alt:"..."}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[i("i",{staticClass:"fa fa-leaf"}),t._v(" 青羽悠扬")]),i("p",{staticClass:"card-text"},[t._v("保持好奇，求知若饥。")])]),i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"list-group-item "},[i("i",{staticClass:"fa fa-address-book",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"card-info-text"},[t._v("维护者 @ qingyyy.cn")])]),i("li",{staticClass:"list-group-item"},[i("i",{staticClass:"fa fa-map-marker",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"card-info-text"},[t._v("郑州")])]),i("li",{staticClass:"list-group-item"},[i("i",{staticClass:"fa fa-link",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"qingyyy.cn"}},[i("span",{staticClass:"card-info-text"},[t._v("qingyyy.cn")])])]),i("li",{staticClass:"list-group-item"},[i("i",{staticClass:"fa fa-headphones",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"card-info-text"},[t._v(" 5小时前 ")])])])])}],r={name:"TheSidebar",data:function(){return{setting:[],baseURL:this.GLOBAL.baseURL}},created:function(){var t=this;this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/setting",{visit:1}).then((function(a){t.setting=a.data}))}},n=r,c=s("2877"),l=Object(c["a"])(n,i,e,!1,null,null,null);a["a"]=l.exports},"4e9f":function(t,a,s){t.exports=s.p+"img/right-avatar.64b7092d.jpg"},6292:function(t,a,s){t.exports=s.p+"img/cat 2.40479dca.jpeg"},bb51:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(a){t.msgShow=a}}}),i("div",{staticClass:"jumbotron",style:[{background:"url("+t.setting.jumbotron+") center center / contain no-repeat"}]},[i("h2",{staticClass:"l-h2"}),i("br"),i("img",{staticClass:"img-thumbnail",attrs:{src:t.setting.avatar,alt:"..."}})]),t._m(0),i("div",{staticClass:"container"},[i("div",{staticClass:"row justify-content-md-center"},[i("div",{staticClass:"c-left col-9"},[i("div",{staticClass:"the-carousel"},[i("h2",{staticClass:"l-h2"},[t._v("推荐文章")]),i("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions","data-ride":"carousel"}},[t._m(1),i("div",{staticClass:"carousel-inner"},t._l(t.carousel,(function(a,e){return i("div",{staticClass:"carousel-item",class:{active:e===t.activeCarouselIndex}},[i("img",{staticClass:"d-block w-100",attrs:{src:s("6292"),alt:"./Fimages/Article/1.jpg"}}),i("div",{staticClass:"carousel-caption d-none d-md-block"},[i("h5",[t._v(t._s(a.title))])])])})),0),t._m(2),t._m(3)])]),i("h2",{staticClass:"l-h2"},[t._v("最新文章")]),t._l(t.postList,(function(a,s){return i("div",{staticClass:"media"},[i("router-link",{staticClass:"media-title hidden-xs",attrs:{to:"/articles/"+a.id+"/content"}},[i("img",{staticClass:"align-self-start mr-3",attrs:{src:t.baseURL+"/storage/"+a.image,alt:"...",width:"155px"}})]),i("div",{staticClass:"media-body"},[i("router-link",{staticClass:"media-title hidden-xs",attrs:{to:"/articles/"+a.id+"/content"}},[i("h5",{staticClass:"media-title"},[t._v(t._s(a.title))])]),i("div",{staticClass:"media-info"},[i("i",{staticClass:"card-info-icon fa fa-user",attrs:{"aria-hidden":"true"}}),i("span",[t._v("作者 青羽悠扬 | ")]),i("i",{staticClass:"card-info-icon fa fa-clock-o",attrs:{"aria-hidden":"true"}}),i("span",[t._v("发表于 "+t._s(t._f("moment")(a.created_at,"from"))+" | ")]),i("i",{staticClass:"card-info-icon fa fa-bars",attrs:{"aria-hidden":"true"}}),i("span",[t._v("分类 "+t._s(a.category.name)+" | ")]),i("i",{staticClass:"card-info-icon fa fa-eye",attrs:{"aria-hidden":"true"}}),i("span",[t._v("阅读量 1| ")]),i("i",{staticClass:"card-info-icon fa fa-commenting",attrs:{"aria-hidden":"true"}}),i("span",[t._v("评论数 0")])]),i("p",{domProps:{innerHTML:t._s(a.excerpt)}})],1)],1)})),i("nav",{attrs:{"aria-label":"Page navigation example"}},[t.totalPage>1?i("ul",{staticClass:"pagination justify-content-center"},[i("li",{staticClass:"page-item",class:{disabled:1===t.internalCurrentPage}},[i("a",{staticClass:"page-link",attrs:{href:"javascript:;"},on:{click:function(a){return t.changePage(t.internalCurrentPage-1)}}},[t._v("上一页")])]),t._l(t.totalPage,(function(a){return i("li",{staticClass:"page-item",class:{active:t.internalCurrentPage===a}},[i("a",{staticClass:"page-link",attrs:{href:"javascript:;"},on:{click:function(s){return t.changePage(a)}}},[t._v(t._s(a))])])})),i("li",{staticClass:"page-item",class:{disabled:t.internalCurrentPage===t.totalPage}},[i("a",{staticClass:"page-link",attrs:{href:"javascript:;"},on:{click:function(a){return t.changePage(t.internalCurrentPage+1)}}},[t._v("下一页")])])],2):t._e()])],2),i("TheSidebar")],1)])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"motto"},[s("span",[t._v("❤成功源于不懈的努力。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselExampleCaptions","data-slide-to":"2"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleCaptions",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])}],r=(s("b0c0"),s("0583")),n={name:"Home",components:{TheSidebar:r["a"]},data:function(){return{msg:"",msgType:"",msgShow:!1,carousel:[{title:"1",img:"",src:""},{title:"2",img:"",src:""},{title:"3",img:"",src:""}],activeCarouselIndex:0,postList:[],setting:[],baseURL:this.GLOBAL.baseURL,totalPage:1,internalCurrentPage:1}},beforeRouteEnter:function(t,a,s){var i=a.name;s((function(t){if(t.$store.state.auth)switch(i){case"Register":t.showMsg("注册成功");break}}))},created:function(){var t=this;this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/posts",{page:1}).then((function(a){t.postList=a.data.data,t.totalPage=a.data.last_page,t.internalCurrentPage=a.data.current_page})),this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/setting",{visit:1}).then((function(a){t.setting=a.data}))},methods:{showMsg:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=a,this.msgShow=!0},changePage:function(t){var a=this;this.internalCurrentPage=t,this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/posts",{page:t}).then((function(t){a.postList=t.data.data}))}}},c=n,l=s("2877"),o=Object(l["a"])(c,i,e,!1,null,"1e8f3704",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-6962df6e.4d3425b8.js.map