(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d398793"],{4886:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(a){t.msgShow=a}}}),t._m(0),t._m(1),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-md-center"},[s("div",{staticClass:"c-left col-9"},[s("h2",{staticClass:"l-h2"},[t._v("最新文章")]),t._l(t.postList,(function(a,i){return s("div",{staticClass:"media"},[s("router-link",{staticClass:"media-title hidden-xs",attrs:{to:"/articles/"+a.id+"/content"}},[t._v('"" alt="..." /> ')]),s("div",{staticClass:"media-body"},[s("router-link",{staticClass:"media-title hidden-xs",attrs:{to:"/articles/"+a.id+"/content"}},[s("h5",{staticClass:"media-title"},[t._v(t._s(a.title))])]),s("p",[t._v(" "+t._s(a.body))])],1)],1)})),s("nav",{attrs:{"aria-label":"Page navigation example"}},[t.totalPage>1?s("ul",{staticClass:"pagination justify-content-center"},[s("li",{staticClass:"page-item",class:{disabled:1===t.internalCurrentPage}},[s("a",{staticClass:"page-link",attrs:{href:"javascript:;"},on:{click:function(a){return t.changePage(t.internalCurrentPage-1)}}},[t._v("上一页")])]),t._l(t.totalPage,(function(a){return s("li",{staticClass:"page-item",class:{active:t.internalCurrentPage===a}},[s("a",{staticClass:"page-link",attrs:{href:"javascript:;"},on:{click:function(s){return t.changePage(a)}}},[t._v(t._s(a))])])})),s("li",{staticClass:"page-item",class:{disabled:t.internalCurrentPage===t.totalPage}},[s("a",{staticClass:"page-link",attrs:{href:"javascript:;"},on:{click:function(a){return t.changePage(t.internalCurrentPage+1)}}},[t._v("下一页")])])],2):t._e()])],2),s("div",{staticClass:"c-right col-3"},[s("div",{staticClass:"card card-one"},[t._m(2),s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"card-info-icon fa fa-eye",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"card-info-text"},[t._v("访问次数")]),s("span",{staticClass:"card-info-number"},[t._v(t._s(t.setting.visited))])]),s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"card-info-icon fa fa-calendar-check-o",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"card-info-text"},[t._v("运行天数")]),s("span",{staticClass:"card-info-number"},[t._v(t._s(t.setting.run_days))])]),s("li",{staticClass:"list-group-item"},[s("i",{staticClass:"card-info-icon fa fa-list",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"card-info-text"},[t._v("文章数量")]),s("span",{staticClass:"card-info-number"},[t._v(t._s(t.setting.article_nums))])])])]),t._m(3)])])])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"jumbotron"},[i("h2",{staticClass:"l-h2"}),i("br"),i("img",{staticClass:"img-thumbnail",attrs:{src:s("ee92"),alt:"..."}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"motto"},[s("span",[t._v("❤成功源于不懈的努力。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[s("i",{staticClass:"fa fa-window-maximize",attrs:{"aria-hidden":"true"}}),t._v(" 网站信息")]),s("p",{staticClass:"card-text"},[t._v("记录生活，分享生活。")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card card-two"},[i("img",{staticClass:"card-img-top",attrs:{src:s("4e9f"),alt:"..."}}),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[i("i",{staticClass:"fa fa-leaf"}),t._v(" 青羽悠扬")]),i("p",{staticClass:"card-text"},[t._v("保持好奇，求知若饥。")])]),i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"list-group-item "},[i("i",{staticClass:"fa fa-address-book",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"card-info-text"},[t._v("维护者 @ qingyyy.cn")])]),i("li",{staticClass:"list-group-item"},[i("i",{staticClass:"fa fa-map-marker",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"card-info-text"},[t._v("郑州")])]),i("li",{staticClass:"list-group-item"},[i("i",{staticClass:"fa fa-link",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("a",{attrs:{href:"qingyyy.cn"}},[i("span",{staticClass:"card-info-text"},[t._v("qingyyy.cn")])])]),i("li",{staticClass:"list-group-item"},[i("i",{staticClass:"fa fa-headphones",staticStyle:{color:"#a5a5a5"},attrs:{"aria-hidden":"true"}}),i("span",{staticClass:"card-info-text"},[t._v(" 5小时前 ")])])])])}],r={name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1,totalPage:1,internalCurrentPage:1,carousel:[{title:"1",img:"",src:""},{title:"2",img:"",src:""},{title:"3",img:"",src:""}],activeCarouselIndex:0,postList:[],setting:[],baseURL:this.GLOBAL.baseURL}},created:function(){var t=this,a=this.$route.params.category_id;this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/posts/category",{page:1,category_id:a}).then((function(a){t.postList=a.data.data,t.totalPage=a.data.last_page,t.internalCurrentPage=a.data.current_page})),this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/setting",{visit:1}).then((function(a){t.setting=a.data}))},watch:{$route:function(t){var a=this,s=this.$route.params.category_id;this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/posts/category",{page:1,category_id:s}).then((function(t){a.postList=t.data.data}))}},methods:{showMsg:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=a,this.msgShow=!0},changePage:function(t){var a=this;this.internalCurrentPage=t,this.$axios.patch(this.GLOBAL.baseURL+"/api/v1/posts/category",{page:1,category_id:category_id}).then((function(t){a.postList=t.data.data}))}}},c=r,n=s("2877"),l=Object(n["a"])(c,i,e,!1,null,"15ba7fd6",null);a["default"]=l.exports},"4e9f":function(t,a,s){t.exports=s.p+"img/right-avatar.64b7092d.jpg"},ee92:function(t,a,s){t.exports=s.p+"img/avatar.e6b247e9.jpg"}}]);
//# sourceMappingURL=chunk-3d398793.3d1ccbde.js.map