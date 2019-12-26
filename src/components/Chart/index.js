import Chart from './chart.vue'

Chart.install = function (Vue) {
  Vue.component(Chart.name,Chart)
}
export default Chart