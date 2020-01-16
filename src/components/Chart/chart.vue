
<template functional>
  <component v-bind:is="props.type" v-bind="[data.attrs,props]"/>
</template>
<script lang='ts'>
import "./chart.js";

import { Component, Prop, Vue } from "vue-property-decorator";
import Chartkick from 'chartkick'
@Component
({ mixins: [Chartkick] })
export default class Chart extends Vue {
  @Prop({
    required: false,
    default: "line-chart"
  })
  type!: string;
}
</script>
