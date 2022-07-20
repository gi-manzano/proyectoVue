import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'jquery'
import '@popperjs/core'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
