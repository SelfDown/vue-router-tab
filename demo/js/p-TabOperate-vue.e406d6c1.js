(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-TabOperate-vue"],{"5dcb":function(t,e,a){},c62d:function(t,e,a){"use strict";var i=a("5dcb"),n=a.n(i);n.a},d982:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page"},[a("h2",[t._v("页签操作")]),a("p",[t._v("你在"),a("strong",[t._v(t._s(t.pageTime))]),t._v("秒前打开本页面")]),a("div",{staticClass:"btn-list"},[a("router-link",{staticClass:"btn",attrs:{to:"/default/page/1"}},[t._v("打开“页面1”")]),a("a",{staticClass:"btn",on:{click:function(e){return t.$routerTab.refresh("/default/page/1")}}},[t._v("刷新“页面1”")]),a("router-link",{staticClass:"btn",attrs:{to:"/default/tab-dynamic"}},[t._v("打开“动态页签”")]),a("a",{staticClass:"btn",on:{click:function(e){return t.$routerTab.close("/default/tab-dynamic")}}},[t._v("关闭“动态页签”")]),a("a",{staticClass:"btn",on:{click:function(e){return t.$routerTab.refresh()}}},[t._v("刷新当前页面")]),a("a",{staticClass:"btn",on:{click:function(e){return t.$routerTab.close()}}},[t._v("关闭当前页面")])],1)])},n=[],c=a("df9a"),s={mixins:[c["a"]]},r=s,o=(a("c62d"),a("2877")),u=Object(o["a"])(r,i,n,!1,null,"264c154b",null);e["default"]=u.exports},df9a:function(t,e,a){"use strict";e["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}}}]);
//# sourceMappingURL=p-TabOperate-vue.e406d6c1.js.map