(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{211:function(e,t,a){"use strict";a.r(t);var r=a(2),v=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"api-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-参考","aria-hidden":"true"}},[e._v("#")]),e._v(" API 参考")]),e._v(" "),a("h2",{attrs:{id:"routertab-配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-配置参数","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab 配置参数")]),e._v(" "),a("h3",{attrs:{id:"alive-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alive-id","aria-hidden":"true"}},[e._v("#")]),e._v(" alive-id")]),e._v(" "),a("p",[e._v("页面组件缓存的 id")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("String | Function")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("如果类型为 "),a("code",[e._v("String")]),e._v(" ，则可使用内置的缓存规则，"),a("code",[e._v("path")]),e._v(" (默认) 和 "),a("code",[e._v("fullPath")])])]),e._v(" "),a("li",[a("p",[e._v("如果类型为 "),a("code",[e._v("Function")]),e._v(" ，则取 "),a("code",[e._v("aliveId(route, pagePath)")]),e._v(" 返回的字符串。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("route")]),e._v(" 为页面路由对象。")]),e._v(" "),a("li",[a("code",[e._v("pagePath")]),e._v(" 当页面存在嵌套路由时生效，为匹配页面所在路由链的路径")]),e._v(" "),a("li",[e._v("该函数传入相同的 "),a("code",[e._v("route")]),e._v(" 应返回固定的字符串，以免页签无法与缓存的页面对应")])])])])]),e._v(" "),a("li",[a("p",[e._v("默认值: "),a("code",[e._v("'path'")])]),e._v(" "),a("p",[e._v("根据 "),a("code",[e._v("route.path")]),e._v(" 来缓存页面组件。")])])]),e._v(" "),a("h3",{attrs:{id:"i18n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i18n","aria-hidden":"true"}},[e._v("#")]),e._v(" i18n")]),e._v(" "),a("p",[e._v("页签国际化转换")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("Function")])])]),e._v(" "),a("li",[a("p",[e._v("参数:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("{String} [key]")]),e._v(": 国际化字段 "),a("code",[e._v("key")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("{Array} [params]")]),e._v(" 国际化字段参数列表")])])])]),e._v(" "),a("li",[a("p",[e._v("返回: "),a("code",[e._v("Strong")]),e._v(" 国际化转换后的字符串")])])]),e._v(" "),a("h3",{attrs:{id:"language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#language","aria-hidden":"true"}},[e._v("#")]),e._v(" language")]),e._v(" "),a("p",[e._v("组件语言")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("String | Object")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("如果类型为 "),a("code",[e._v("String")]),e._v(" ，可以设置为内置的语言 "),a("code",[e._v("'zh-CN'")]),e._v(" (默认) 和 "),a("code",[e._v("'en'")])])]),e._v(" "),a("li",[a("p",[e._v("如果类型为 "),a("code",[e._v("Object")]),e._v(" ，可设置自定义的语言")])])])]),e._v(" "),a("li",[a("p",[e._v("默认值: "),a("code",[e._v("'zh-CN'")])])])]),e._v(" "),a("h3",{attrs:{id:"tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs","aria-hidden":"true"}},[e._v("#")]),e._v(" tabs")]),e._v(" "),a("p",[a("strong",[e._v("初始页签数据")]),e._v("，进入页面时默认显示的页签。相同 "),a("code",[e._v("aliveId")]),e._v(" 的页签只保留第一个")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("Array <String | Object>")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("tabs子元素类型为 "),a("code",[e._v("String")]),e._v(" 时，应配置为要打开页面的 "),a("code",[e._v("fullPath")]),e._v(" ，页签的标题、图标、提示等信息会从对应页面的 "),a("code",[e._v("router")]),e._v(" 配置中获取")])]),e._v(" "),a("li",[a("p",[e._v("tabs子元素类型为 "),a("code",[e._v("Object")]),e._v(" 时:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("to: 页签路由地址，跟 "),a("code",[e._v("router.push")]),e._v(" 的 "),a("code",[e._v("location")]),e._v(" 参数一致，可以为 "),a("code",[e._v("fullPath")]),e._v("，也可以为 "),a("code",[e._v("location")]),e._v(" 对象 - "),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("title: 页签标题，如果页面有设置 "),a("code",[e._v("routerTab.title")]),e._v(" 动态标题，可在此设置最终的动态标题值，以免与默认从 "),a("code",[e._v("router")]),e._v(" 获取的标题不一致")])]),e._v(" "),a("li",[a("p",[e._v("closable: 页签是否允许关闭，默认为 "),a("code",[e._v("true")])])])])])])]),e._v(" "),a("li",[a("p",[e._v("默认值: "),a("code",[e._v("[]")])])])]),e._v(" "),a("h3",{attrs:{id:"router-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-view","aria-hidden":"true"}},[e._v("#")]),e._v(" router-view")]),e._v(" "),a("p",[e._v("内置 "),a("code",[e._v("router-view")]),e._v(" 组件的配置")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("Object")])]),e._v(" "),a("blockquote",[a("p",[e._v("配置参考: "),a("a",{attrs:{href:"https://router.vuejs.org/zh/api/#router-view-props",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router - <router-view> Props"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("默认值: "),a("code",[e._v("{}")])])])]),e._v(" "),a("h3",{attrs:{id:"tab-transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tab-transition","aria-hidden":"true"}},[e._v("#")]),e._v(" tab-transition")]),e._v(" "),a("p",[a("strong",[e._v("页签过渡效果")]),e._v("，新增和关闭页签时的过渡")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("String | Object")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型为 "),a("code",[e._v("String")]),e._v(" 时，应配置为 "),a("code",[e._v("transition.name")])])]),e._v(" "),a("li",[a("p",[e._v("类型为 "),a("code",[e._v("Object")]),e._v(" 时，配置参考: "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#transition",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue - transition"),a("OutboundLink")],1)])])])]),e._v(" "),a("li",[a("p",[e._v("默认值: "),a("code",[e._v("'router-tab-zoom'")])])])]),e._v(" "),a("h3",{attrs:{id:"page-transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-transition","aria-hidden":"true"}},[e._v("#")]),e._v(" page-transition")]),e._v(" "),a("p",[e._v("页面过渡效果")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("类型: "),a("code",[e._v("String | Object")])]),e._v(" "),a("p",[e._v("同 "),a("a",{attrs:{href:"#tab-transition"}},[a("code",[e._v("tab-transition")])])])]),e._v(" "),a("li",[a("p",[e._v("默认值: "),a("code",[e._v("{ name: 'router-tab-swap', mode: 'out-in' }")])])])]),e._v(" "),a("h2",{attrs:{id:"routertab-实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例属性","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab 实例属性")]),e._v(" "),a("p",[e._v("在组件内部可通过 "),a("code",[e._v("this.$routerTab.[prop]")]),e._v(" 访问")]),e._v(" "),a("h3",{attrs:{id:"routertab-activedtab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-activedtab","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.activedTab")]),e._v(" "),a("p",[e._v("当前激活的页签 id")]),e._v(" "),a("h2",{attrs:{id:"routertab-实例方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-实例方法","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab 实例方法")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("在 Vue 实例内部，您可以通过 "),a("code",[e._v("this.$routerTab")]),e._v(" 来访问路由页签实例。例如: 调用 "),a("code",[e._v("this.$routerTab.close()")]),e._v(" 来关闭当前页签。")])]),e._v(" "),a("h3",{attrs:{id:"routertab-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-close","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.close")]),e._v(" "),a("p",[e._v("关闭指定 "),a("code",[e._v("location")]),e._v(" 的页签")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String | Object} [location]")]),e._v(" 路由地址 - "),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [fullMatch = true]")]),e._v(" 是否全匹配（匹配fullPath去除hash部分）")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-refresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refresh","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.refresh")]),e._v(" "),a("p",[e._v("刷新指定 "),a("code",[e._v("location")]),e._v(" 的页签")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String | Object} [location]")]),e._v(" 路由地址 - "),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#router-push-location-oncomplete-onabort",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("{Boolean} [fullMatch = true]")]),e._v(" 是否全匹配（匹配fullPath去除hash部分）")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-refreshall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshall","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.refreshAll")]),e._v(" "),a("p",[e._v("刷新所有页签")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{Boolean} [force = false]")]),e._v(" 如果 "),a("code",[e._v("force")]),e._v(" 为 "),a("code",[e._v("true")]),e._v("，则忽略页面组件的 "),a("code",[e._v("beforePageLeave")]),e._v(" 配置，强制刷新所有页签")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-openiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-openiframe","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.openIframe")]),e._v(" "),a("p",[e._v("打开 iframe 页签")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String} [src]")]),e._v(" 要打开的 iframe 页签链接")]),e._v(" "),a("li",[a("code",[e._v("{String} [title]")]),e._v(" 页签标题")]),e._v(" "),a("li",[a("code",[e._v("{String} [icon]")]),e._v(" 页签图标")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-closeiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-closeiframe","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.closeIframe")]),e._v(" "),a("p",[e._v("关闭 iframe 页签")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String} [src]")]),e._v(" 要关闭的 iframe 页签链接")])])])]),e._v(" "),a("h3",{attrs:{id:"routertab-refreshiframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-refreshiframe","aria-hidden":"true"}},[e._v("#")]),e._v(" routerTab.refreshIframe")]),e._v(" "),a("p",[e._v("刷新 iframe 页签")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String} [src]")]),e._v(" 要刷新的 iframe 页签链接")])])])]),e._v(" "),a("h2",{attrs:{id:"routertab-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routertab-事件","aria-hidden":"true"}},[e._v("#")]),e._v(" RouterTab 事件")]),e._v(" "),a("h3",{attrs:{id:"iframe-mounted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-mounted","aria-hidden":"true"}},[e._v("#")]),e._v(" iframe-mounted")]),e._v(" "),a("p",[e._v("iframe 节点挂载就绪")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String} [url]")]),e._v(" iframe 的链接地址")]),e._v(" "),a("li",[a("code",[e._v("{HTMLIFrameElement} [iframe]")]),e._v(" iframe 节点")])])])]),e._v(" "),a("h3",{attrs:{id:"iframe-loaded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-loaded","aria-hidden":"true"}},[e._v("#")]),e._v(" iframe-loaded")]),e._v(" "),a("p",[e._v("iframe 内容加载成功")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{String} [url]")]),e._v(" iframe 的链接地址")]),e._v(" "),a("li",[a("code",[e._v("{HTMLIFrameElement} [iframe]")]),e._v(" iframe 节点")])])])]),e._v(" "),a("h2",{attrs:{id:"route-meta-路由元信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-meta-路由元信息","aria-hidden":"true"}},[e._v("#")]),e._v(" Route.meta 路由元信息")]),e._v(" "),a("p",[e._v("通过路由的 "),a("code",[e._v("meta")]),e._v("，我们可以配置路由页签的标题、图标、提示和缓存规则")]),e._v(" "),a("h3",{attrs:{id:"meta-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-title","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.title")]),e._v(" "),a("p",[e._v("页签标题")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("String | Array")])]),e._v(" "),a("li",[e._v("默认值: "),a("code",[e._v("'新页签'")])])]),e._v(" "),a("p",[e._v("该字段支持国际化配置，参考: "),a("router-link",{attrs:{to:"/guide/essentials/i18n.html"}},[e._v("教程 - 多语言支持")])],1),e._v(" "),a("h3",{attrs:{id:"meta-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-icon","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.icon")]),e._v(" "),a("p",[e._v("页签图标")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("String")])])]),e._v(" "),a("h3",{attrs:{id:"meta-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-tips","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.tips")]),e._v(" "),a("p",[e._v("页签提示")]),e._v(" "),a("ul",[a("li",[e._v("类型: "),a("code",[e._v("String | Array")])]),e._v(" "),a("li",[e._v("默认值: 默认和页签标题 "),a("code",[e._v("meta.title")]),e._v(" 保持一致")])]),e._v(" "),a("p",[e._v("该字段支持国际化配置，参考: "),a("router-link",{attrs:{to:"/guide/essentials/i18n.html"}},[e._v("教程 - 多语言支持")])],1),e._v(" "),a("h3",{attrs:{id:"meta-aliveid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta-aliveid","aria-hidden":"true"}},[e._v("#")]),e._v(" meta.aliveId")]),e._v(" "),a("p",[e._v("页面组件缓存的 id，用以设置路由独立的页签缓存规则。")]),e._v(" "),a("blockquote",[a("p",[e._v("配置参考: "),a("a",{attrs:{href:"#alive-id"}},[e._v("RouterTab Props > alive-id")])])]),e._v(" "),a("h2",{attrs:{id:"扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展","aria-hidden":"true"}},[e._v("#")]),e._v(" 扩展")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("说明")]),e._v(" "),a("p",[a("code",[e._v("vm")]),e._v(": Vue 组件实例")]),e._v(" "),a("p",[a("code",[e._v("pageVm")]),e._v(": 通过 RouterTab 加载的页面组件实例")])]),e._v(" "),a("h3",{attrs:{id:"beforepageleave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforepageleave","aria-hidden":"true"}},[e._v("#")]),e._v(" beforePageLeave")]),e._v(" "),a("p",[e._v("页面离开确认。")]),e._v(" "),a("p",[e._v("页面组件选项，与 "),a("code",[e._v("data")]),e._v(", "),a("code",[e._v("methods")]),e._v(" 等选项并列配置")]),e._v(" "),a("ul",[a("li",[e._v("参数:\n"),a("ul",[a("li",[a("code",[e._v("{Function} resolve")]),e._v(" 执行后允许离开页签")]),e._v(" "),a("li",[a("code",[e._v("{Function} reject")]),e._v(" 执行后阻止离开页签")]),e._v(" "),a("li",[a("code",[e._v("{Object} tab")]),e._v(" 页签信息")]),e._v(" "),a("li",[a("code",[e._v("{String} type")]),e._v(" 离开类型: "),a("code",[e._v("close")]),e._v(": '关闭', "),a("code",[e._v("refresh")]),e._v(": '刷新', "),a("code",[e._v("replace")]),e._v(": '替换'")])])])]),e._v(" "),a("h3",{attrs:{id:"vm-routertab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vm-routertab","aria-hidden":"true"}},[e._v("#")]),e._v(" vm.$routerTab")]),e._v(" "),a("p",[e._v("RouterTab 实例")]),e._v(" "),a("p",[e._v("为了方便调用，RouterTab 将实例挂载在 "),a("code",[e._v("Vue.prototype")]),e._v(" 上。因此，在所有 Vue 组件内部，您都可以通过 "),a("code",[e._v("this.$routerTab")]),e._v(" 来访问路由页签实例")]),e._v(" "),a("h3",{attrs:{id:"pagevm-routetab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagevm-routetab","aria-hidden":"true"}},[e._v("#")]),e._v(" pageVm.routeTab")]),e._v(" "),a("p",[e._v("路由页签配置")]),e._v(" "),a("p",[e._v("RouterTab 通过监听页面组件的 "),a("code",[e._v("this.routeTab")]),e._v(" 来更新页面对应页签的标题、图标、提示")]),e._v(" "),a("h3",{attrs:{id:"pagevm-isrouterpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagevm-isrouterpage","aria-hidden":"true"}},[e._v("#")]),e._v(" pageVm._isRouterPage")]),e._v(" "),a("p",[e._v("是否是路由页面")]),e._v(" "),a("p",[e._v("在通过 RouterTab 加载的页面组件内部，访问 "),a("code",[e._v("this._isRouterPage")]),e._v(" 会返回 "),a("code",[e._v("true")])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("应用: 在需要给路由页面添加全局混入 "),a("code",[e._v("mixin")]),e._v(" 时，可在生命周期钩子（ "),a("code",[e._v("created")]),e._v(" 之后）里判断 "),a("code",[e._v("this._isRouterPage")])])])])},[],!1,null,null,null);t.default=v.exports}}]);