import Vue from 'vue'
import App from './App'
import router from './router'
//使用element UI
import ElemnetUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引用编译好的样式文件
import './common/sass/index.scss'
//使用axios做通信代理
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(ElemnetUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
