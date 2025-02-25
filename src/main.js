import './assets/main.css'
import microApp from '@micro-zoe/micro-app'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

microApp.start({
    'disable-memory-router': true, // 关闭虚拟路由系统
    'disable-patch-request': true, // 关闭对子应用请求的拦截
    'router-mode': 'native-scope',
    tagName: 'micro-app-platform',
})

