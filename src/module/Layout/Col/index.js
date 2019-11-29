import Col from '../../../components/Layout/col.vue'

Col.install = function (Vue) {
  console.log(Col.name,1)
  Vue.component(Col.name+'-item', Col)
}
export default Col