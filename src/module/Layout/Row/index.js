import Row from '../../../components/Layout/row.vue'

Row.install = function (Vue) {
  Vue.component(Row.name+'-item', Row)
}
export default Row