<template>
  <div>
    cv
    <canvas ref="picviewer"></canvas>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
@Component
export default class Picviewer extends Vue {
get picviewer(){
  return this.$refs.picviewer
}

mounted () {
  this.picviewer
}
}
</script>