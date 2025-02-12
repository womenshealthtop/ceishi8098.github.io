// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils.js'                                        // 封装function 方法
import ElementUI from 'element-ui'                                      //  UI
import 'element-ui/lib/theme-chalk/index.css'                           //  ui
Vue.use(ElementUI)                              //使用ElementUI 


// 样式
import './assets/css/index.css'
// 字体
import './assets/css/fonts.css'


Vue.config.productionTip = false
Vue.use(utils)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
