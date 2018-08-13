import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
Vue.config.productionTip = false

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
