// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import "./faketouch.js"
/* eslint-disable no-new */
new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app')
