import Vue from 'vue'
import VueToastify from "vue-toastify"
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueToastify);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
