import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueBarcodeScanner from 'vue-barcode-scanner'
Vue.config.productionTip = false
Vue.use(VueBarcodeScanner)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
