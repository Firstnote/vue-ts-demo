<template>
  <navbarpull @navleftclick="goback" :numofpeople="0" @pulling-down="onPullingDown">
    <p>scroll default top</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll content</p>
    <p>scroll end</p>
  </navbarpull>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Noview extends Vue {
  goback() {
    this.$router.go(-1);
  }
  onPullingDown(fn: any) {
    setTimeout(() => {
      fn();
    }, 1000);
  }
}
</script>