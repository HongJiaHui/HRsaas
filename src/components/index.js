import PageTools from './PageTools'
import UploadExcel from './UploadExcel'
import ImageUpload from './ImageUpload'
import ScreenFull from './ScreenFull'
import ThemePicker from './ThemePicker'
import LangSelect from './Lang'
import TagsView from './TagsView'

export default {
  install(Vue) {
    Vue.component('PageTools', PageTools)
    Vue.component('UploadExcel', UploadExcel)
    Vue.component('ImageUpload', ImageUpload) // 注册图片上传组件
    Vue.component('ScreenFull', ScreenFull)
    Vue.component('ThemePicker', ThemePicker) // 完成改变主体组件的注册
    Vue.component('LangSelect', LangSelect) // 语言切换组件
    Vue.component('TagsView', TagsView) // Tab页视图组件
  }
}
