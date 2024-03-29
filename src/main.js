// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Button, Select } from 'element-ui'
Vue.config.productionTip = false
Vue.config.debug = true;
Vue.use(router)
Vue.use(ElementUI)
Vue.use(Button)
/* eslint-disable no-new */
console.log('----')
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
