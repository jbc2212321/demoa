import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import VCharts from 'v-charts'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false
Vue.use(ElementUI).use(Select).use(Button).use(VueCookies).use(VCharts).use(Axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
