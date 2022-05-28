// 进行多语言的实例化
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'
import elementZH from 'element-ui/lib/locale/lang/zh-CN' // 中文语言包
import elementEN from 'element-ui/lib/locale/lang/en' // 英语语言包
import customZH from './zh'
import customEN from './en'

Vue.use(VueI18n) // 注册国际化对象
// 有elementUI的语言包
// Vuei18n进行实例化
export default new VueI18n({
  // 多语言的配置选项
  // locale决定当前的多语言类型
  locale: Cookie.get('language') || 'zh', // 当前的多语言的类型 当前只能有一种
  messages: {
    'zh': { // 中文语言包
      ...elementZH,
      ...customZH
    },
    'en': { // 英文语言包
      ...elementEN,
      ...customEN
    }
  }
})
