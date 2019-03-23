(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{216:function(t,e,r){"use strict";r.r(e);var a=r(4),v=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"api-参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-参考","aria-hidden":"true"}},[t._v("#")]),t._v(" API 参考")]),t._v(" "),r("h2",{attrs:{id:"routertab-props"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-props","aria-hidden":"true"}},[t._v("#")]),t._v(" RouterTab Props")]),t._v(" "),r("h3",{attrs:{id:"alive-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alive-id","aria-hidden":"true"}},[t._v("#")]),t._v(" alive-id")]),t._v(" "),r("p",[t._v("页面组件缓存的 id")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型: "),r("code",[t._v("String | Function")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("如果类型为 "),r("code",[t._v("String")]),t._v(" ，则可使用内置的缓存规则，"),r("code",[t._v("path")]),t._v(" (默认) 和 "),r("code",[t._v("fullPath")])])]),t._v(" "),r("li",[r("p",[t._v("如果类型为 "),r("code",[t._v("Function")]),t._v(" ，则取 "),r("code",[t._v("aliveId(route)")]),t._v(" 返回的字符串。该函数传入相同的 "),r("code",[t._v("route")]),t._v(" 应返回固定的字符串，以免页签无法与缓存的页面对应")])])])]),t._v(" "),r("li",[r("p",[t._v("默认值: "),r("code",[t._v("'path'")])]),t._v(" "),r("p",[t._v("根据 "),r("code",[t._v("route.path")]),t._v(" 来缓存页面组件。")])])]),t._v(" "),r("h3",{attrs:{id:"i18n"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i18n","aria-hidden":"true"}},[t._v("#")]),t._v(" i18n")]),t._v(" "),r("p",[t._v("语言配置")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型: "),r("code",[t._v("String | Object")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("如果类型为 "),r("code",[t._v("String")]),t._v(" ，可以设置为内置的语言 "),r("code",[t._v("'zh-CN'")]),t._v(" (默认) 和 "),r("code",[t._v("'en'")])])]),t._v(" "),r("li",[r("p",[t._v("如果类型为 "),r("code",[t._v("Object")]),t._v(" ，可设置自定义的语言")])])])]),t._v(" "),r("li",[r("p",[t._v("默认值: "),r("code",[t._v("'zh-CN'")])])])]),t._v(" "),r("h3",{attrs:{id:"tabs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tabs","aria-hidden":"true"}},[t._v("#")]),t._v(" tabs")]),t._v(" "),r("p",[r("strong",[t._v("初始页签数据")]),t._v("，进入页面时默认显示的页签。相同 "),r("code",[t._v("aliveId")]),t._v(" 的页签只保留第一个")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型: "),r("code",[t._v("Array <String | Object>")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("tabs子元素类型为 "),r("code",[t._v("String")]),t._v(" 时，应配置为要打开页面的 "),r("code",[t._v("fullPath")]),t._v(" ，页签的标题、图标、提示等信息会从对应页面的 "),r("code",[t._v("router")]),t._v(" 配置中获取")])]),t._v(" "),r("li",[r("p",[t._v("tabs子元素类型为 "),r("code",[t._v("Object")]),t._v(" 时：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("to: 页签路由地址，跟 "),r("code",[t._v("router.push")]),t._v(" 的 "),r("code",[t._v("location")]),t._v(" 参数一致，可以为 "),r("code",[t._v("fullPath")]),t._v("，也可以为 "),r("code",[t._v("location")]),t._v(" 对象 - "),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("title: 页签标题，如果页面有设置 "),r("code",[t._v("routerTab.title")]),t._v(" 动态标题，可在此设置最终的动态标题值，以免与默认从 "),r("code",[t._v("router")]),t._v(" 获取的标题不一致")])]),t._v(" "),r("li",[r("p",[t._v("closable: 页签是否允许关闭，默认为 "),r("code",[t._v("true")])])])])])])]),t._v(" "),r("li",[r("p",[t._v("默认值: "),r("code",[t._v("[]")])])])]),t._v(" "),r("h3",{attrs:{id:"router-view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#router-view","aria-hidden":"true"}},[t._v("#")]),t._v(" router-view")]),t._v(" "),r("p",[r("strong",[t._v("Vue Router Tab 内置 "),r("code",[t._v("<router-view>")]),t._v(" 组件的配置")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型: "),r("code",[t._v("Object")])]),t._v(" "),r("p",[t._v("配置参考: "),r("a",{attrs:{href:"https://router.vuejs.org/zh/api/#router-view-props",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Router - <router-view> Props"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("默认值: "),r("code",[t._v("{}")])])])]),t._v(" "),r("h3",{attrs:{id:"tab-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tab-transition","aria-hidden":"true"}},[t._v("#")]),t._v(" tab-transition")]),t._v(" "),r("p",[r("strong",[t._v("页签过渡效果")]),t._v("，新增和关闭页签时的过渡")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型: "),r("code",[t._v("String | Object")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型为 "),r("code",[t._v("String")]),t._v(" 时，应配置为 "),r("code",[t._v("transition.name")])])]),t._v(" "),r("li",[r("p",[t._v("类型为 "),r("code",[t._v("Object")]),t._v(" 时，配置参考: "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue - transition"),r("OutboundLink")],1)])])])]),t._v(" "),r("li",[r("p",[t._v("默认值: "),r("code",[t._v("'router-tab-zoom'")])])])]),t._v(" "),r("h3",{attrs:{id:"page-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#page-transition","aria-hidden":"true"}},[t._v("#")]),t._v(" page-transition")]),t._v(" "),r("p",[r("strong",[t._v("页面过渡效果")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("类型: "),r("code",[t._v("String | Object")])]),t._v(" "),r("p",[t._v("同 "),r("a",{attrs:{href:"#tab-transition"}},[r("code",[t._v("tab-transition")])])])]),t._v(" "),r("li",[r("p",[t._v("默认值: "),r("code",[t._v("{ name: 'router-tab-swap', mode: 'out-in' }")])])])]),t._v(" "),r("h2",{attrs:{id:"routertab-实例属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例属性","aria-hidden":"true"}},[t._v("#")]),t._v(" RouterTab 实例属性")]),t._v(" "),r("h3",{attrs:{id:"routertab-activedtab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activedtab","aria-hidden":"true"}},[t._v("#")]),t._v(" routerTab.activedTab")]),t._v(" "),r("p",[t._v("当前激活的页签id")]),t._v(" "),r("h2",{attrs:{id:"routertab-实例方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" RouterTab 实例方法")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("在 Vue 实例内部，您可以通过 "),r("code",[t._v("this.$routerTab")]),t._v(" 来访问路由页签实例。例如：调用 "),r("code",[t._v("this.$routerTab.close()")]),t._v(" 来关闭当前页签。")])]),t._v(" "),r("h3",{attrs:{id:"routertab-close"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-close","aria-hidden":"true"}},[t._v("#")]),t._v(" routerTab.close")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参数")]),t._v("：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("{String | Object} [location]")]),t._v(" 路由地址 - "),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("code",[t._v("{Boolean} [fullMatch = true]")]),t._v(" 是否全匹配（匹配fullPath去除hash部分）")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("说明")]),t._v("：")]),t._v(" "),r("p",[t._v("关闭指定 "),r("code",[t._v("location")]),t._v(" 的页签")])])]),t._v(" "),r("h3",{attrs:{id:"routertab-refresh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refresh","aria-hidden":"true"}},[t._v("#")]),t._v(" routerTab.refresh")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参数")]),t._v("：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("{String | Object} [location]")]),t._v(" 路由地址 - "),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("code",[t._v("{Boolean} [fullMatch = true]")]),t._v(" 是否全匹配（匹配fullPath去除hash部分）")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("说明")]),t._v("：")]),t._v(" "),r("p",[t._v("刷新指定 "),r("code",[t._v("location")]),t._v(" 的页签")])])]),t._v(" "),r("h3",{attrs:{id:"routertab-refreshall"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshall","aria-hidden":"true"}},[t._v("#")]),t._v(" routerTab.refreshAll")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参数")]),t._v("：")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("{Boolean} [force = false]")]),t._v(" 如果 "),r("code",[t._v("force")]),t._v(" 为 "),r("code",[t._v("true")]),t._v("，则忽略页面组件的 "),r("code",[t._v("beforePageLeave")]),t._v(" 配置，强制刷新所有页签")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("说明")]),t._v("：")]),t._v(" "),r("p",[t._v("刷新所有页签")])])]),t._v(" "),r("h2",{attrs:{id:"route-meta-路由元信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#route-meta-路由元信息","aria-hidden":"true"}},[t._v("#")]),t._v(" Route.meta 路由元信息")]),t._v(" "),r("p",[t._v("通过路由的 "),r("code",[t._v("meta")]),t._v("，我们可以配置路由页签的标题、图标、提示和缓存规则")]),t._v(" "),r("h3",{attrs:{id:"meta-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-title","aria-hidden":"true"}},[t._v("#")]),t._v(" meta.title")]),t._v(" "),r("ul",[r("li",[t._v("类型: "),r("code",[t._v("String")])]),t._v(" "),r("li",[t._v("默认值: "),r("code",[t._v("'新页签'")])])]),t._v(" "),r("p",[t._v("页签标题")]),t._v(" "),r("h3",{attrs:{id:"meta-icon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-icon","aria-hidden":"true"}},[t._v("#")]),t._v(" meta.icon")]),t._v(" "),r("ul",[r("li",[t._v("类型: "),r("code",[t._v("String")])])]),t._v(" "),r("p",[t._v("页签图标")]),t._v(" "),r("h3",{attrs:{id:"meta-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-tips","aria-hidden":"true"}},[t._v("#")]),t._v(" meta.tips")]),t._v(" "),r("ul",[r("li",[t._v("类型: "),r("code",[t._v("String")])]),t._v(" "),r("li",[t._v("默认值: 默认和页签标题 "),r("code",[t._v("meta.title")]),t._v(" 保持一致")])]),t._v(" "),r("p",[t._v("页签提示")]),t._v(" "),r("h3",{attrs:{id:"meta-aliveid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-aliveid","aria-hidden":"true"}},[t._v("#")]),t._v(" meta.aliveId")]),t._v(" "),r("p",[t._v("页面组件缓存的 id，用以设置路由独立的页签缓存规则。")]),t._v(" "),r("p",[t._v("配置参考: "),r("a",{attrs:{href:"#alive-id"}},[t._v("RouterTab Props > alive-id")])]),t._v(" "),r("h2",{attrs:{id:"routerpage-路由页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routerpage-路由页面","aria-hidden":"true"}},[t._v("#")]),t._v(" RouterPage 路由页面")]),t._v(" "),r("p",[t._v("通过 "),r("code",[t._v("RouterTab")]),t._v(" 加载的页面组件")]),t._v(" "),r("h3",{attrs:{id:"beforepageleave"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforepageleave","aria-hidden":"true"}},[t._v("#")]),t._v(" beforePageLeave")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("参数")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("{Function} resolve")]),t._v(" 执行后允许离开页签")]),t._v(" "),r("li",[r("code",[t._v("{Function} reject")]),t._v(" 执行后阻止离开页签")]),t._v(" "),r("li",[r("code",[t._v("{Object} tab")]),t._v(" 页签信息")]),t._v(" "),r("li",[r("code",[t._v("{String} type")]),t._v(" 离开类型："),r("code",[t._v("close")]),t._v(": '关闭', "),r("code",[t._v("refresh")]),t._v(": '刷新', "),r("code",[t._v("replace")]),t._v(": '替换'")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("说明")]),t._v(": 页面离开确认。页面组件选项，与 "),r("code",[t._v("data")]),t._v(", "),r("code",[t._v("methods")]),t._v(" 并列")])])]),t._v(" "),r("h3",{attrs:{id:"vm-routertab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-routertab","aria-hidden":"true"}},[t._v("#")]),t._v(" vm.$routerTab")]),t._v(" "),r("p",[t._v("为了方便调用，"),r("code",[t._v("RouterTab")]),t._v(" 将实例挂载在 "),r("code",[t._v("Vue.prototype")]),t._v(" 上。因此，在所有 Vue 组件内部，您都可以通过 "),r("code",[t._v("this.$routerTab")]),t._v(" 来访问路由页签实例")]),t._v(" "),r("h3",{attrs:{id:"vm-routetab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-routetab","aria-hidden":"true"}},[t._v("#")]),t._v(" vm.routeTab")]),t._v(" "),r("p",[r("strong",[t._v("路由页签配置")]),t._v("。"),r("code",[t._v("RouterTab")]),t._v(" 通过监听页面组件的 "),r("code",[t._v("this.routeTab")]),t._v(" 来更新页面对应页签的标题、图标、提示")]),t._v(" "),r("h3",{attrs:{id:"vm-isrouterpage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-isrouterpage","aria-hidden":"true"}},[t._v("#")]),t._v(" vm._isRouterPage")]),t._v(" "),r("p",[r("strong",[t._v("是否是路由页面")]),t._v("：在通过 "),r("code",[t._v("RouterTab")]),t._v(" 加载的页面组件内部，访问 "),r("code",[t._v("this._isRouterPage")]),t._v(" 会返回 "),r("code",[t._v("true")])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("应用：在需要给路由页面添加全局混入 "),r("code",[t._v("mixin")]),t._v(" 时，可在生命周期钩子（ "),r("code",[t._v("created")]),t._v(" 之后）里判断 "),r("code",[t._v("this._isRouterPage")])])])])},[],!1,null,null,null);e.default=v.exports}}]);