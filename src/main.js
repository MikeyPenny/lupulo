// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Dependencies
import jQuery from 'jquery'
 // jQuery variable
global.jQuery = jQuery
// Bootstrap variable
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

// Firebase
import Vuefire from 'vuefire'
import './firebase'

Vue.config.productionTip = false

Vue.use(Vuefire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
