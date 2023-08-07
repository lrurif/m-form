import { createI18n } from "vue-i18n";
// 导入全局中英文配置对象
import zh from './zh'
import en from './en'
const messages = {
    en,
    zh,
  }
  const language = (navigator.language || 'en').toLocaleLowerCase() // 这是获取浏览器的语言
  const i18n = createI18n({
    legacy: false, //解决vue-i18n报错Uncaught (in promise) SyntaxError: Not available in legacy mode
    locale: localStorage.getItem('lang') || language.split('-')[0] || 'zh', // 首先从缓存里拿，没有的话就用浏览器语言，
    fallbackLocale: 'zh', // 设置备用语言
    messages, 
  })
  
  export default i18n
