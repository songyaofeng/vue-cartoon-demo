webpackJsonp([2],{DdLr:function(t,a,e){t.exports=e.p+"static/img/video.782b03a.gif"},S2ov:function(t,a){},YZJo:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("DdLr"),i=e.n(s),n=e("p6y8"),c=e.n(n),r={name:"Category",components:{BreadCrumb:e("xDDl").a},data:function(){return{currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,videoGif:i.a,currentDate:new Date,exampleJpg:c.a,isActiveTag:!0,activeSortTagIndex:0,activeRegionTagIndex:0,activeTimeTagIndex:0,activeTagIndex:0,searchWhereTags:[],tagCloseAble:!0,show:!1,downUpArrow:"el-icon-arrow-down",sorts:[{name:"全部",value:"all",type:"sort"},{name:"最新",value:"new",type:"sort"},{name:"最热",value:"hot",type:"sort"}],regions:[{name:"全部",value:"all",type:"region"},{name:"国漫",value:"china",type:"region"},{name:"日漫",value:"japan",type:"region"}],times:[{name:"全部",value:"all",type:"time"},{name:"2018",value:"2018",type:"time"},{name:"2019",value:"2019",type:"time"},{name:"2017",value:"2017",type:"time"},{name:"2016",value:"2016",type:"time"},{name:"2015",value:"2015",type:"time"}],tags:[{name:"全部",value:"all",type:"tag"},{name:"冒险",value:"adventure",type:"tag"},{name:"战斗",value:"battle",type:"tag"},{name:"搞笑",value:"funny",type:"tag"},{name:"经典",value:"classic",type:"tag"},{name:"科幻",value:"science",type:"tag"},{name:"玄幻",value:"xuan",type:"tag"},{name:"魔幻",value:"magic",type:"tag"},{name:"武侠",value:"swordsman",type:"tag"},{name:"竞技",value:"competitive",type:"tag"},{name:"恋爱",value:"love",type:"tag"},{name:"推理",value:"reasoning",type:"tag"},{name:"治愈",value:"cure",type:"tag"},{name:"其他",value:"other",type:"tag"}]}},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)},handleDownUp:function(){"el-icon-arrow-down"===this.downUpArrow?(this.downUpArrow="el-icon-arrow-up",this.show=!this.show):"el-icon-arrow-up"===this.downUpArrow&&(this.downUpArrow="el-icon-arrow-down",this.show=!this.show)},handleSearchTagClose:function(t){this.searchWhereTags.splice(this.searchWhereTags.indexOf(t),1),"sort"===t.type?this.activeSortTagIndex=0:"region"===t.type?this.activeRegionTagIndex=0:"time"===t.type?this.activeTimeTagIndex=0:"tag"===t.type&&(this.activeTagIndex=0)},test:function(t){console.log(t)},searchAcg:function(t,a){var e=this.searchWhereTags.findIndex(function(a){return a.value===t.value}),s=this.searchWhereTags.findIndex(function(a){return a.type===t.type});"all"!==t.value?(-1===s&&this.searchWhereTags.push(t),-1===e&&(this.searchWhereTags.splice(this.searchWhereTags.findIndex(function(a){return a.type===t.type}),1),this.searchWhereTags.push(t))):-1!==s&&this.searchWhereTags.splice(this.searchWhereTags.findIndex(function(a){return a.type===t.type}),1),"sort"===t.type?this.activeSortTagIndex=a:"region"===t.type?this.activeRegionTagIndex=a:"time"===t.type?this.activeTimeTagIndex=a:"tag"===t.type&&(this.activeTagIndex=a)}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("BreadCrumb"),t._v(" "),e("div",{staticClass:"filter-acg-wrap"},[e("p",[e("span",[t._v("排    序：")]),t._v(" "),t._l(t.sorts,function(a,s){return e("el-button",{key:s,staticClass:"search-btn-tag",class:{is_active:s===t.activeSortTagIndex},attrs:{size:"small"},on:{click:function(e){t.searchAcg(a,s)}}},[t._v(t._s(a.name)+"\n        ")])}),t._v(" "),e("span",{staticClass:"down-up-arrow",class:t.downUpArrow,on:{click:t.handleDownUp}}),t._v(" "),t._l(t.searchWhereTags,function(a,s){return e("el-tag",{key:s+200,staticClass:"search-where-tag",attrs:{size:"small",closable:t.tagCloseAble,type:"danger"},on:{close:function(e){t.handleSearchTagClose(a)}}},[t._v("\n          "+t._s(a.name)+"\n        ")])})],2),t._v(" "),e("el-collapse-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("p",[e("span",[t._v("地    域：")]),t._v(" "),t._l(t.regions,function(a,s){return e("el-button",{key:s,staticClass:"search-btn-tag",class:{is_active:s===t.activeRegionTagIndex},attrs:{size:"small"},on:{click:function(e){t.searchAcg(a,s)}}},[t._v("\n              "+t._s(a.name)+"\n            ")])})],2),t._v(" "),e("p",[e("span",[t._v("时    间：")]),t._v(" "),t._l(t.times,function(a,s){return e("el-button",{key:s,staticClass:"search-btn-tag",class:{is_active:s===t.activeTimeTagIndex},attrs:{size:"small"},on:{click:function(e){t.searchAcg(a,s)}}},[t._v("\n              "+t._s(a.name)+"\n            ")])})],2),t._v(" "),e("p",[e("span",[t._v("标    签：")]),t._v(" "),t._l(t.tags,function(a,s){return e("el-button",{key:s,staticClass:"search-btn-tag",class:{is_active:s===t.activeTagIndex},attrs:{size:"small"},on:{click:function(e){t.searchAcg(a,s)}}},[t._v("\n              "+t._s(a.name)+"\n            ")])})],2)])])],1),t._v(" "),e("div",{staticClass:"acg-list-wrap"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-lg-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 acg-sing-wrap"},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",attrs:{src:t.exampleJpg,alt:""}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("span",[t._v("好吃的汉堡")]),t._v(" "),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time img-responsive"},[t._v(t._s(t.currentDate))])])])])],1)]),t._v(" "),e("div",{staticClass:"acg-list-page",staticStyle:{"margin-top":"15px","vertical-align":"middle","text-align":"center","padding-top":"15px"}},[e("el-pagination",{attrs:{background:!0,"current-page":t.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)])},staticRenderFns:[]},p=e("VU/8")(r,l,!1,null,null,null);a.default=p.exports},p6y8:function(t,a,e){t.exports=e.p+"static/img/test.663f399.jpg"},xDDl:function(t,a,e){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[this._v("首页")]),this._v(" "),a("el-breadcrumb-item",[this._v("番剧")])],1)],1)},staticRenderFns:[]};var i=e("VU/8")({name:"BreadCrumb"},s,!1,function(t){e("S2ov")},"data-v-4ae3a008",null);a.a=i.exports}});
//# sourceMappingURL=2.0b43435ec1a1f68fa275.js.map