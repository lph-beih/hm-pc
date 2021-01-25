import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// @代表src的绝对路径，只有在vue-cli中才可以用
import router from '@/router'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
