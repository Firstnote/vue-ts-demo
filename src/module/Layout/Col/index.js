import Col from '../../../components/Layout/col.vue'

Col.install = function (Vue) {
  Vue.component('col-item', Col)
}
export default Col