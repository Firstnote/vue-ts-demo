import Scroll from './scroll.vue';

Scroll.install = function (Vue) {
  console.log(Scroll.name)
  Vue.component("Scroll",Scroll)
}
export default Scroll