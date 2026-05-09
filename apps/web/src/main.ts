import '@/assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import focus from './directives/focus'

const app = createApp(App)
const pinia = createPinia()
app.use(focus)
pinia.use(PiniaPluginPersistedstate)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(pinia)
app.use(router)

app.mount('#app')
