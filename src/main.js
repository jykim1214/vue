// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.moment = moment;

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Header, App, Footer },
  template: '<App/>'
})
