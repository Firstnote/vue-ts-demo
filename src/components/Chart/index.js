import Chart from './chart.vue'

Chart.install = function (Vue) {
  Vue.component("Chart",Chart)
}
export default Chart