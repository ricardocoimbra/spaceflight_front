import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './bootstrap'
import axios from 'axios'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(bootstrap)
Vue.prototype.moment = moment

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
