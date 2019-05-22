import Vue from 'vue'
import localforage from 'localforage'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$lf = localforage

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
