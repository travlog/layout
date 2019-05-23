import Vue from 'vue'
import localforage from 'localforage'
import vSelect from 'vue-select'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

Vue.prototype.$lf = localforage

Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
