// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Install from '../src'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

window.Promise = window.Promise || Promise

FastClick.attach(document.body) //  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch

Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(Install)
/* eslint-disable no-new */
new Vue({
  router,
  render(h) {
    return h(App)
  }
}).$mount('#app')
