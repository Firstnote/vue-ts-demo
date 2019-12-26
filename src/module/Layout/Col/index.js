import Col from '../../../components/Layout/col.vue'

Col.install = function (Vue) {
  Vue.component(Col.name+'-item', Col)
}
export default Col