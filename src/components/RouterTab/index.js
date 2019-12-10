import Vue from 'vue'

// 方法
import { emptyObj, findIndex } from '../../util'
import { warn } from '../../util/warn'

// 功能模块混入
import contextmenu from './contextmenu'
import i18n from './i18n'
import iframe from './iframe'
import pageLeave from './pageLeave'
import rule from './rule'
import scroll from './scroll'

// RouterTab 组件
export default {
  name: 'RouterTab',
  mixins: [ contextmenu, i18n, iframe, pageLeave, rule, scroll ],
  props: {
    containHiddenTab:{
      type:String,
      default:"monitor_big_dish"
    },
    // 初始页签数据
    tabs: {
      type: Array,
      default: () => []
    },

    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },

    // 默认页面
    defaultPage: [ String, Object ],

    // router-view组件配置
    routerView: Object,

    // 页签过渡效果
    tabTransition: {
      type: [ String, Object ],
      default: 'router-tab-zoom'
    },

    // 页面过渡效果
    pageTransition: {
      type: [ String, Object ],
      default: () => ({
        name: 'router-tab-swap',
        mode: 'out-in'
      })
    }
  },

  data () {
    return {
      loading: false, // 路由页面 loading
      items: [], // 页签项
      activedTab: null, // 当前激活的页签
      isViewAlive: true,
      isMounted: false // 是否挂载
    }
  },

  computed: {
    // 默认路径
    defaultPath () {
      return this.defaultPage || this.getBasePath()
    },

    // routerAlive
    $alive () {
      return this.isMounted ? this.$refs.routerAlive : null
    },
    showTab(){
      return (this.$route.path.indexOf(this.containHiddenTab)>=0)
    }
  },

  watch: {
    // 路由切换更新激活的页签
    $route ($route) {
      this.loading = false
      this.updateActivedTab()
      this.fixCommentPage()
    }
  },

  created () {
    this.fix_chrome_39()
    // 添加到原型链
    Vue.prototype.$routerTab = this

    this.initTabs()
    this.updateActivedTab()
  },

  mounted () {
    this.isMounted = true
   
  },

  destroyed () {
    // 取消原型挂载
    if (Vue.prototype.$routerTab === this) {
      Vue.prototype.$routerTab = null
    }
  },

  methods: {
    fix_chrome_39 () {

        if (!String.prototype.startsWith) {
          Object.defineProperty(String.prototype, 'startsWith', {
            value: function (search, pos) {
              pos = !pos || pos < 0 ? 0 : +pos;
              return this.substring(pos, pos + search.length) === search;
            }
          });
        }

      if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
          value: function (searchElement, fromIndex) {

            // 1. Let O be ? ToObject(this value).
            if (this == null) {//this是空或者未定义，抛出错误
              throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);//将this转变成对象

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;//无符号右移0位，获取对象length属性，如果未定义就会变成0

            // 3. If len is 0, return false.
            if (len === 0) {//length为0直接返回false未找到目标值
              return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;//查找起始索引

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);//计算正确起始索引，因为有可能是负值

            // 7. Repeat, while k < len
            while (k < len) {//从起始索引处开始循环
              // a. Let elementK be the result of ? Get(O, ! ToString(k)).
              // b. If SameValueZero(searchElement, elementK) is true, return true.
              // c. Increase k by 1.
              // NOTE: === provides the correct "SameValueZero" comparison needed here.
              if (o[k] === searchElement) {//如果某一位置与寻找目标相等，返回true，找到了
                return true;
              }
              k++;
            }

            // 8. Return false
            return false;//未找到，返回false
          }
        });
      }
    },
    // 初始页签数据
    initTabs () {
      let { tabs, $router } = this
      let ids = {}

      this.items = tabs.map((item, index) => {
        let { to, closable, title, tips } = typeof item === 'string'
          ? { to: item }
          : (item || emptyObj)
        let route = to && $router.match(to)

        if (route) {
          let tab = this.getRouteTab(route)
          let id = tab.id

          // 根据 id 去重
          if (!ids[id]) {
            // 初始 tab 数据
            if (title) tab.title = title
            if (tips) tab.tips = tips
            tab.closable = closable !== false

            return (ids[id] = tab)
          }
        }
      }).filter(item => !!item)
    },

    // 更新激活的页签
    updateActivedTab () {
      this.activedTab = this.getAliveId()
    },

    // 更新 tab 数据
    updateTab (key, { route, tab }) {
      let { items } = this
      let matchIdx = findIndex('id', key, items)
      let item = Object.assign(this.getRouteTab(route), tab)

      if (matchIdx > -1) {
        let matchTab = items[matchIdx]
        item.closable = matchTab.closable !== false
        this.$set(items, matchIdx, item)
      } else {
        items.push(item)
      }
    },

    // 从路由地址获取 aliveId
    getIdByLocation (location, fullMatch = true) {
      if (!location) return

      let route = this.$router.match(location, this.$router.currentRoute)

      // 路由地址精确匹配页签
      if (fullMatch) {
        let matchPath = this.getPathWithoutHash(route)
        let matchTab = this.items.find(({ to }) => to.split('#')[0] === matchPath)

        if (matchTab) {
          return matchTab.id
        }
      } else {
        return this.getAliveId(route)
      }
    },

    // 从 route 中获取 tab 数据
    getRouteTab (route, matchRoutes = this.matchRoutes(route)) {
      let id = this.getAliveId(route)
      let { title, icon, tips } = matchRoutes.pageRoute.meta

      return { id, to: route.fullPath, title, icon, tips }
    },

    // 移除 tab 项
    async removeTab (id, force = false) {
      let { items } = this
      const idx = findIndex('id', id, items)

      // 最后一个页签不允许关闭
      if (!force && this.keepLastTab && items.length === 1) {
        throw new Error(this.lang.msg.keepLastTab)
      }

      if (!force) await this.pageLeavePromise(id, 'close')

      // 承诺关闭后移除页签和缓存
      this.$alive.remove(id)
      idx > -1 && items.splice(idx, 1)
    },

    /**
     * 通过路由地址关闭页签
     * @param {location} target 需要关闭的 location，falsy 则默认为当前页签
     * @param {location} to 关闭后跳转的地址，为 null 则不跳转，参数可忽略
     * @param {boolean} [fullMatch = true] 是否匹配 target 完整路径
     * @param {boolean} [force = true] 是否强制关闭
     */
    close (target, to, fullMatch = true, force = true) {
      if (typeof to === 'boolean') {
        force = fullMatch === undefined ? true : !!fullMatch
        fullMatch = to
        to = undefined
      }

      if (target) {
        let id = this.getIdByLocation(target, fullMatch)
        if (id) this.closeTab(id, to, force)
      } else {
        this.closeTab(undefined, to, force)
      }
    },

    // 通过页签 id 关闭页签
    async closeTab (id = this.activedTab, to, force = false) {
      let { activedTab, items, $router } = this
      const idx = findIndex('id', id, items)

      try {
        await this.removeTab(id, force)

        // 为 null 不跳转
        if (to === null) return

        // 如果关闭当前页签，则打开后一个页签
        if (!to && activedTab === id) {
          let nextTab = items[idx] || items[idx - 1]
          to = nextTab ? nextTab.to : this.defaultPath
        }

        if (to) {
          let toRoute = $router.match(to)

          // 目标地址与当前地址一致则强制刷新页面
          if (toRoute.fullPath === this.$route.fullPath) {
            this.refreshTab()
          } else {
            $router.replace(to)
          }
        }
      } catch (e) {
        warn(false, e)
      }
    },

    /**
     * 通过路由地址刷新页签
     * @param {location} target
     * @param {boolean} [fullMatch = true] 是否匹配 target 完整路径
     * @param {boolean} [force = true] 是否强制刷新
     */
    refresh (target, fullMatch = true, force = true) {
      if (target) {
        let id = this.getIdByLocation(target, fullMatch)
        if (id) {
          this.refreshTab(id, force)
        }
      } else {
        this.refreshTab(undefined, force)
      }
    },

    // 刷新指定页签
    async refreshTab (id = this.activedTab, force = false) {
      try {
        if (!force) await this.pageLeavePromise(id, 'refresh')
        this.$alive.remove(id)
        if (id === this.activedTab) this.reloadView()
      } catch (e) {
        warn(false, e)
      }
    },

    /**
     * 刷新所有页签
     * @param {boolean} [force = false] 是否强制刷新，如果强制则忽略页面 beforePageLeave
     */
    async refreshAll (force = false) {
      const { cache } = this.$alive
      for (const id in cache) {
        try {
          if (!force) await this.pageLeavePromise(id, 'refresh')
          this.$alive.remove(id)
        } catch (e) {}
      }
      this.reloadView()
    },

    /**
     * 重置 RouterTab 到默认状态，关闭所有页签并清理缓存页签数据
     * @param {location} [to = this.defaultPath] 重置后跳转页面
     */
    reset (to = this.defaultPath) {
      // 遍历删除缓存
      this.items.forEach(({ id }) => this.$alive.remove(id))

      // 初始页签数据
      this.initTabs()

      let toRoute = this.$router.match(to)

      // 目标地址与当前地址一致则强制刷新页面
      if (toRoute.fullPath === this.$route.fullPath) {
        this.refreshTab()
      } else {
        this.$router.replace(to)
      }
    },

    // 重载路由视图
    async reloadView (ignoreTransition = false) {
      this.isViewAlive = false

      // 默认在页面过渡结束后会设置 isViewAlive 为 true
      // 如果过渡事件失效，则需传入 ignoreTransition 为 true 手动更改
      if (ignoreTransition) {
        await this.$nextTick()
        this.isViewAlive = true
      }
    },

    // 页签过渡结束
    onTabTransitionEnd () {
      this.adjust()
    },

    // 页面过渡结束
    onPageTransitionEnd () {
      if (!this.isViewAlive) this.isViewAlive = true
    },

    // 修复：当快速频繁切换页签时，旧页面离开过渡效果尚未完成，新页面内容无法正常 mount，内容节点为 comment 类型
    fixCommentPage () {
      if (this.$alive.$el.nodeType === 8) {
        this.reloadView(true)
      }
    }
  }
}
