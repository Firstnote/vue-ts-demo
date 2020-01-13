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

// import {
//   Col,
//   Row
// } from './module.js'

import Col from "./module/Layout/Col";
import Row from "./module/Layout/Row";
import Navbarslot from "./components/Navbar/Navbarslot";
import Navbarsimple from "./components/Navbar/Navbarsimple";
import Navbarsearch from "./components/Navbar/Navbarsearch";
import Navbarpull from "./components/Navbar/Navbarpull";
import Chart from "./components/Chart";
import Addresspicker from "./components/Addresspicker";
import Scroll from "./components/Scroll";

const components = [
	Col,
	Row,
	Navbarslot,
	Navbarsimple,
	Navbarsearch,
	Navbarpull,
	Chart,
	Addresspicker,
	Scroll
];

/* eslint-disable no-undef */
// version: __VERSION__,


// components.forEach((Component)=>{
//
//   // Cube[Component.name] = Component
// })

function install(Vue) {
	// if (install.installed) {
	//   return
	// }
	// install.installed = true
	components.forEach(Component => {
		// ignore radio
		// if (Component === Radio) {
		//   return
		// }
		Component.install(Vue);
	});
	// for(let Component in components){
	//   Component.install(Vue)
	// }
}

const Zlui = {
	install
};

components.forEach(Component => {
  Zlui[name] = Component;
});
if (typeof window !== "undefined" && window.Vue) {
	window.Vue.use(install);
}
export default Zlui;
