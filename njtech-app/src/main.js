import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;

// 在跨域请求时带上cookie，否则后端每次收到的session都不一样
axios.defaults.withCredentials=true

Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
