import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import VCharts from 'v-charts'
import Axios from 'axios'
import VueSession from 'vue-session'
import qs from 'qs'
import Moment from 'moment'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://115.157.200.157:8096/'
//  Axios.defaults.baseURL = 'http://localhost:8096/'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.prototype.moment=Moment
Vue.config.productionTip = false
Vue.use(ElementUI).use(Select).use(Button).use(VueCookies).use(VCharts).use(Axios).use(VueSession).use(qs)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
