(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Rule-vue"],{"0a71":function(t,e,a){},"2dd9":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page"},[a("h2",[t._v(t._s(t.ruleLabel)+"页签规则")]),a("p",[t._v("你在 "),a("strong",{staticClass:"text-strong"},[t._v(t._s(t.pageTime))]),t._v(" 秒前打开本页面")]),a("h3",[t._v(t._s(t.ruleLabel)+"页签规则")]),"global"===t.ruleType?a("p",{staticClass:"rule-desc"},[t._v("\n    页签ID: "),a("strong",[t._v("route => route.fullPath.replace(route.hash, '')`")])]):"route"===t.ruleType?a("p",{staticClass:"rule-desc"},[t._v("\n    页签ID: "),a("strong",[t._v("route => `route-rule/${route.params.catalog}`")])]):a("p",{staticClass:"rule-desc"},[t._v("\n    页签ID: "),a("strong",[t._v("route.path")])]),a("h4",[t._v("点击下面的链接，并观察页签的变化")]),a("ul",{staticClass:"btn-list"},t._l(t.catalogs,function(e){return a("li",{key:e},[t._l(t.types,function(r){return a("router-link",{key:r,staticClass:"demo-btn",attrs:{to:"../"+e+"/"+r}},[t._v("\n        "+t._s(e)+"/"+t._s(t.type)+"\n      ")])}),a("router-link",{staticClass:"demo-btn",attrs:{to:"../"+e+"/1?q=abc"}},[t._v("\n        "+t._s(e)+"/1?q=abc\n      ")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"../"+e+"/1?q=def"}},[t._v("\n        "+t._s(e)+"/1?q=def\n      ")])],2)}),0),a("h3",[t._v("路由信息")]),a("page-route-info")],1)},s=[],n=a("df9a"),l=a("ce92"),o={name:"Rule",components:{PageRouteInfo:l["a"]},mixins:[n["a"]],data:function(){var t=this.$route,e=t.params,a=e.catalog,r=e.type,s="default";t.meta.aliveId?s="route":t.fullPath.indexOf("/global-rule/")>-1&&(s="global");var n={default:"默认",route:"路由",global:"全局"}[s];return{ruleType:s,ruleLabel:n,catalog:a,type:r,catalogs:["a","b","c"],types:[1,2],link:{catalog:a,type:r},routeTab:"".concat(n,"规则").concat(a,"/").concat(r)}}},u=o,c=(a("4eea"),a("0c7c")),i=Object(c["a"])(u,r,s,!1,null,"530df39a",null);e["default"]=i.exports},"4eea":function(t,e,a){"use strict";var r=a("a31b"),s=a.n(r);s.a},"799a":function(t,e,a){"use strict";var r=a("0a71"),s=a.n(r);s.a},a31b:function(t,e,a){},ce92:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"route-info"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v("\n      name\n    ")]),a("td",[t._v(t._s(t.$route.name))])]),a("tr",[a("th",[t._v("path")]),a("td",[t._v(t._s(t.$route.path))])]),a("tr",[a("th",[t._v("params")]),a("td",[t._v(t._s(t.$route.params))])]),a("tr",[a("th",[t._v("query")]),a("td",[t._v(t._s(t.$route.query))])]),a("tr",[a("th",[t._v("hash")]),a("td",[t._v(t._s(t.$route.hash))])]),a("tr",[a("th",[t._v("fullPath")]),a("td",[t._v(t._s(t.$route.fullPath))])])])},s=[],n=(a("799a"),a("0c7c")),l={},o=Object(n["a"])(l,r,s,!1,null,"35fbd041",null);e["a"]=o.exports},df9a:function(t,e,a){"use strict";e["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}}}]);
//# sourceMappingURL=p-Rule-vue.a07a585d.js.map