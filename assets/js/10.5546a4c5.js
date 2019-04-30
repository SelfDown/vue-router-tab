(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{259:function(e,t,r){"use strict";r.r(t);var a=r(4),v=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"api-参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-参考","aria-hidden":"true"}},[e._v("#")]),e._v(" API 参考")]),e._v(" "),r("h2",{attrs:{id:"routertab-props"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-props","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab Props")]),e._v(" "),r("h3",{attrs:{id:"alive-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alive-id","aria-hidden":"true"}},[e._v("#")]),e._v(" alive-id")]),e._v(" "),r("p",[e._v("页面组件缓存的 id")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("String | Function")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("如果类型为 "),r("code",[e._v("String")]),e._v(" ，则可使用内置的缓存规则，"),r("code",[e._v("path")]),e._v(" (默认) 和 "),r("code",[e._v("fullPath")])])]),e._v(" "),r("li",[r("p",[e._v("如果类型为 "),r("code",[e._v("Function")]),e._v(" ，则取 "),r("code",[e._v("aliveId(route)")]),e._v(" 返回的字符串。该函数传入相同的 "),r("code",[e._v("route")]),e._v(" 应返回固定的字符串，以免页签无法与缓存的页面对应")])])])]),e._v(" "),r("li",[r("p",[e._v("默认值: "),r("code",[e._v("'path'")])]),e._v(" "),r("p",[e._v("根据 "),r("code",[e._v("route.path")]),e._v(" 来缓存页面组件。")])])]),e._v(" "),r("h3",{attrs:{id:"i18n"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i18n","aria-hidden":"true"}},[e._v("#")]),e._v(" i18n")]),e._v(" "),r("p",[e._v("页签国际化转换")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("Function")])])]),e._v(" "),r("li",[r("p",[e._v("参数:")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("{String} [key]")]),e._v(": 国际化字段 "),r("code",[e._v("key")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("{Array} [params]")]),e._v(" 国际化字段参数列表")])])])]),e._v(" "),r("li",[r("p",[e._v("返回: "),r("code",[e._v("Strong")]),e._v(" 国际化转换后的字符串")])])]),e._v(" "),r("h3",{attrs:{id:"language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#language","aria-hidden":"true"}},[e._v("#")]),e._v(" language")]),e._v(" "),r("p",[e._v("组件语言")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("String | Object")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("如果类型为 "),r("code",[e._v("String")]),e._v(" ，可以设置为内置的语言 "),r("code",[e._v("'zh-CN'")]),e._v(" (默认) 和 "),r("code",[e._v("'en'")])])]),e._v(" "),r("li",[r("p",[e._v("如果类型为 "),r("code",[e._v("Object")]),e._v(" ，可设置自定义的语言")])])])]),e._v(" "),r("li",[r("p",[e._v("默认值: "),r("code",[e._v("'zh-CN'")])])])]),e._v(" "),r("h3",{attrs:{id:"tabs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tabs","aria-hidden":"true"}},[e._v("#")]),e._v(" tabs")]),e._v(" "),r("p",[r("strong",[e._v("初始页签数据")]),e._v("，进入页面时默认显示的页签。相同 "),r("code",[e._v("aliveId")]),e._v(" 的页签只保留第一个")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("Array <String | Object>")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("tabs子元素类型为 "),r("code",[e._v("String")]),e._v(" 时，应配置为要打开页面的 "),r("code",[e._v("fullPath")]),e._v(" ，页签的标题、图标、提示等信息会从对应页面的 "),r("code",[e._v("router")]),e._v(" 配置中获取")])]),e._v(" "),r("li",[r("p",[e._v("tabs子元素类型为 "),r("code",[e._v("Object")]),e._v(" 时:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("to: 页签路由地址，跟 "),r("code",[e._v("router.push")]),e._v(" 的 "),r("code",[e._v("location")]),e._v(" 参数一致，可以为 "),r("code",[e._v("fullPath")]),e._v("，也可以为 "),r("code",[e._v("location")]),e._v(" 对象 - "),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("title: 页签标题，如果页面有设置 "),r("code",[e._v("routerTab.title")]),e._v(" 动态标题，可在此设置最终的动态标题值，以免与默认从 "),r("code",[e._v("router")]),e._v(" 获取的标题不一致")])]),e._v(" "),r("li",[r("p",[e._v("closable: 页签是否允许关闭，默认为 "),r("code",[e._v("true")])])])])])])]),e._v(" "),r("li",[r("p",[e._v("默认值: "),r("code",[e._v("[]")])])])]),e._v(" "),r("h3",{attrs:{id:"router-view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#router-view","aria-hidden":"true"}},[e._v("#")]),e._v(" router-view")]),e._v(" "),r("p",[e._v("内置 "),r("code",[e._v("router-view")]),e._v(" 组件的配置")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("Object")])]),e._v(" "),r("p",[e._v("配置参考: "),r("a",{attrs:{href:"https://router.vuejs.org/zh/api/#router-view-props",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router - <router-view> Props"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("默认值: "),r("code",[e._v("{}")])])])]),e._v(" "),r("h3",{attrs:{id:"tab-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tab-transition","aria-hidden":"true"}},[e._v("#")]),e._v(" tab-transition")]),e._v(" "),r("p",[r("strong",[e._v("页签过渡效果")]),e._v("，新增和关闭页签时的过渡")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("String | Object")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型为 "),r("code",[e._v("String")]),e._v(" 时，应配置为 "),r("code",[e._v("transition.name")])])]),e._v(" "),r("li",[r("p",[e._v("类型为 "),r("code",[e._v("Object")]),e._v(" 时，配置参考: "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#transition",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue - transition"),r("OutboundLink")],1)])])])]),e._v(" "),r("li",[r("p",[e._v("默认值: "),r("code",[e._v("'router-tab-zoom'")])])])]),e._v(" "),r("h3",{attrs:{id:"page-transition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#page-transition","aria-hidden":"true"}},[e._v("#")]),e._v(" page-transition")]),e._v(" "),r("p",[e._v("页面过渡效果")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("类型: "),r("code",[e._v("String | Object")])]),e._v(" "),r("p",[e._v("同 "),r("a",{attrs:{href:"#tab-transition"}},[r("code",[e._v("tab-transition")])])])]),e._v(" "),r("li",[r("p",[e._v("默认值: "),r("code",[e._v("{ name: 'router-tab-swap', mode: 'out-in' }")])])])]),e._v(" "),r("h2",{attrs:{id:"routertab-实例属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例属性","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab 实例属性")]),e._v(" "),r("h3",{attrs:{id:"routertab-activedtab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activedtab","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.activedTab")]),e._v(" "),r("p",[e._v("当前激活的页签 id")]),e._v(" "),r("h2",{attrs:{id:"routertab-实例方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例方法","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab 实例方法")]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("在 Vue 实例内部，您可以通过 "),r("code",[e._v("this.$routerTab")]),e._v(" 来访问路由页签实例。例如: 调用 "),r("code",[e._v("this.$routerTab.close()")]),e._v(" 来关闭当前页签。")])]),e._v(" "),r("h3",{attrs:{id:"routertab-close"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-close","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.close")]),e._v(" "),r("p",[e._v("关闭指定 "),r("code",[e._v("location")]),e._v(" 的页签")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{String | Object} [location]")]),e._v(" 路由地址 - "),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("{Boolean} [fullMatch = true]")]),e._v(" 是否全匹配（匹配fullPath去除hash部分）")])])])]),e._v(" "),r("h3",{attrs:{id:"routertab-refresh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refresh","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.refresh")]),e._v(" "),r("p",[e._v("刷新指定 "),r("code",[e._v("location")]),e._v(" 的页签")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{String | Object} [location]")]),e._v(" 路由地址 - "),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("code",[e._v("{Boolean} [fullMatch = true]")]),e._v(" 是否全匹配（匹配fullPath去除hash部分）")])])])]),e._v(" "),r("h3",{attrs:{id:"routertab-refreshall"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshall","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.refreshAll")]),e._v(" "),r("p",[e._v("刷新所有页签")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{Boolean} [force = false]")]),e._v(" 如果 "),r("code",[e._v("force")]),e._v(" 为 "),r("code",[e._v("true")]),e._v("，则忽略页面组件的 "),r("code",[e._v("beforePageLeave")]),e._v(" 配置，强制刷新所有页签")])])])]),e._v(" "),r("h3",{attrs:{id:"routertab-openiframetab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-openiframetab","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.openIframeTab")]),e._v(" "),r("p",[e._v("打开 iframe 页签")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{String} [src]")]),e._v(" 要打开的 iframe 页签链接")]),e._v(" "),r("li",[r("code",[e._v("{String} [title]")]),e._v(" 页签标题")]),e._v(" "),r("li",[r("code",[e._v("{String} [icon]")]),e._v(" 页签图标")])])])]),e._v(" "),r("h3",{attrs:{id:"routertab-closeiframetab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-closeiframetab","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.closeIframeTab")]),e._v(" "),r("p",[e._v("关闭 iframe 页签")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{String} [src]")]),e._v(" 要关闭的 iframe 页签链接")])])])]),e._v(" "),r("h3",{attrs:{id:"routertab-refreshiframetab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshiframetab","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.refreshIframeTab")]),e._v(" "),r("p",[e._v("刷新 iframe 页签")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{String} [src]")]),e._v(" 要刷新的 iframe 页签链接")])])])]),e._v(" "),r("h2",{attrs:{id:"route-meta-路由元信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#route-meta-路由元信息","aria-hidden":"true"}},[e._v("#")]),e._v(" Route.meta 路由元信息")]),e._v(" "),r("p",[e._v("通过路由的 "),r("code",[e._v("meta")]),e._v("，我们可以配置路由页签的标题、图标、提示和缓存规则")]),e._v(" "),r("h3",{attrs:{id:"meta-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-title","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.title")]),e._v(" "),r("p",[e._v("页签标题")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("String | Array")])]),e._v(" "),r("li",[e._v("默认值: "),r("code",[e._v("'新页签'")])])]),e._v(" "),r("p",[e._v("该字段支持国际化配置，参考: "),r("router-link",{attrs:{to:"/guide/essentials/i18n.html"}},[e._v("教程 - 多语言支持")])],1),e._v(" "),r("h3",{attrs:{id:"meta-icon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-icon","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.icon")]),e._v(" "),r("p",[e._v("页签图标")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("String")])])]),e._v(" "),r("h3",{attrs:{id:"meta-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-tips","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.tips")]),e._v(" "),r("p",[e._v("页签提示")]),e._v(" "),r("ul",[r("li",[e._v("类型: "),r("code",[e._v("String | Array")])]),e._v(" "),r("li",[e._v("默认值: 默认和页签标题 "),r("code",[e._v("meta.title")]),e._v(" 保持一致")])]),e._v(" "),r("p",[e._v("该字段支持国际化配置，参考: "),r("router-link",{attrs:{to:"/guide/essentials/i18n.html"}},[e._v("教程 - 多语言支持")])],1),e._v(" "),r("h3",{attrs:{id:"meta-aliveid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meta-aliveid","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.aliveId")]),e._v(" "),r("p",[e._v("页面组件缓存的 id，用以设置路由独立的页签缓存规则。")]),e._v(" "),r("p",[e._v("配置参考: "),r("a",{attrs:{href:"#alive-id"}},[e._v("RouterTab Props > alive-id")])]),e._v(" "),r("h2",{attrs:{id:"routerpage-路由页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#routerpage-路由页面","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterPage 路由页面")]),e._v(" "),r("p",[e._v("通过 "),r("code",[e._v("RouterTab")]),e._v(" 加载的页面组件")]),e._v(" "),r("h3",{attrs:{id:"beforepageleave"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beforepageleave","aria-hidden":"true"}},[e._v("#")]),e._v(" beforePageLeave")]),e._v(" "),r("p",[e._v("页面离开确认。页面组件选项，与 "),r("code",[e._v("data")]),e._v(", "),r("code",[e._v("methods")]),e._v(" 并列")]),e._v(" "),r("ul",[r("li",[e._v("参数:\n"),r("ul",[r("li",[r("code",[e._v("{Function} resolve")]),e._v(" 执行后允许离开页签")]),e._v(" "),r("li",[r("code",[e._v("{Function} reject")]),e._v(" 执行后阻止离开页签")]),e._v(" "),r("li",[r("code",[e._v("{Object} tab")]),e._v(" 页签信息")]),e._v(" "),r("li",[r("code",[e._v("{String} type")]),e._v(" 离开类型: "),r("code",[e._v("close")]),e._v(": '关闭', "),r("code",[e._v("refresh")]),e._v(": '刷新', "),r("code",[e._v("replace")]),e._v(": '替换'")])])])]),e._v(" "),r("h3",{attrs:{id:"vm-routertab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-routertab","aria-hidden":"true"}},[e._v("#")]),e._v(" vm.$routerTab")]),e._v(" "),r("p",[e._v("为了方便调用，"),r("code",[e._v("RouterTab")]),e._v(" 将实例挂载在 "),r("code",[e._v("Vue.prototype")]),e._v(" 上。因此，在所有 Vue 组件内部，您都可以通过 "),r("code",[e._v("this.$routerTab")]),e._v(" 来访问路由页签实例")]),e._v(" "),r("h3",{attrs:{id:"vm-routetab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-routetab","aria-hidden":"true"}},[e._v("#")]),e._v(" vm.routeTab")]),e._v(" "),r("p",[r("strong",[e._v("路由页签配置")]),e._v("。"),r("code",[e._v("RouterTab")]),e._v(" 通过监听页面组件的 "),r("code",[e._v("this.routeTab")]),e._v(" 来更新页面对应页签的标题、图标、提示")]),e._v(" "),r("h3",{attrs:{id:"vm-isrouterpage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-isrouterpage","aria-hidden":"true"}},[e._v("#")]),e._v(" vm._isRouterPage")]),e._v(" "),r("p",[r("strong",[e._v("是否是路由页面")]),e._v(": 在通过 "),r("code",[e._v("RouterTab")]),e._v(" 加载的页面组件内部，访问 "),r("code",[e._v("this._isRouterPage")]),e._v(" 会返回 "),r("code",[e._v("true")])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[e._v("应用: 在需要给路由页面添加全局混入 "),r("code",[e._v("mixin")]),e._v(" 时，可在生命周期钩子（ "),r("code",[e._v("created")]),e._v(" 之后）里判断 "),r("code",[e._v("this._isRouterPage")])])])])},[],!1,null,null,null);t.default=v.exports}}]);