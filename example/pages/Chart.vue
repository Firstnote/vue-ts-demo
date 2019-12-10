<template>
  <div>
    <chart height="500px" :type="type" :data="data" :curve="false"></chart>
    <button @click="line">Line chart</button>
    <button @click="pie">Pie chart</button>
    <button @click="column">Column chart</button>
    <button @click="bar">Bar chart</button>
    <button @click="area">Area chart</button>
    <button @click="scatter">Scatter chart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Workout",
          data: {
            "2017-01-01": 3,
            "2017-01-02": 4,
            "2017-01-03": 3,
            "2017-01-04": 4
          }
        },
        {
          name: "Call parents",
          data: {
            "2017-01-01": 5,
            "2017-01-02": 3,
            "2017-01-03": 5,
            "2017-01-04": 3
          }
        }
      ],
      type: "line-chart",
      linedata: {
        "2017-01-01": 3,
        "2017-01-02": 4,
        "2017-01-03": 3,
        "2017-01-04": 4
      },
      piedata: [["Blueberry", 44], ["Strawberry", 23]],
      columndata: [["Sun", 32], ["Mon", 46], ["Tue", 28]],
      bardata: [["Work", 32], ["Play", 1492]],
      areadata: {
        "2017-01-01": 3,
        "2017-01-02": 4,
        "2017-01-03": 3,
        "2017-01-04": 4
      },
      scatterdata: [[174.0, 80.0], [176.5, 82.3]]
    };
  },
  methods: {
    line() {
      this.type = "line-chart";
      this.data = this.linedata;
    },
    pie() {
      this.type = "pie-chart";
      this.data = this.piedata;
    },
    column() {
      this.type = "column-chart";
      this.data = this.columndata;
    },
    bar() {
      this.type = "bar-chart";
      this.data = this.bardata;
    },
    area() {
      this.type = "area-chart";
      this.data = this.areadata;
    },
    scatter() {
      this.type = "scatter-chart";
      this.data = this.scatterdata;
    }
  }
};
</script>