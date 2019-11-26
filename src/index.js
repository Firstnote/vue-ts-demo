// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

import {
  Col,
  Row
} from './module.js'

const components = [
  Col,
  Row
]

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  // components.forEach((Component) => {
  //   // ignore radio
  //   if (Component === Radio) {
  //     return
  //   }
  //   Component.install(Vue)
  // })
  for(let Component in components){
    Component.install(Vue)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
export default install