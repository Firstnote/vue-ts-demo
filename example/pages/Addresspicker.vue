<template>
  <div>
    <button @click="pickerup">请选择地址</button>
    <span>{{msg}}</span>
    <Addresspicker @confirm="confirm" ref="addresspicker"></Addresspicker>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Addresspickerview extends Vue {
  turnOn = false;
  turnup = "";
  msg: any[] | string = "";
  pickerup() {
    (this.$refs as any).addresspicker.showup();
  }
  confirm(msg: any[]) {
    this.msg = msg.join("");
    (this.$refs as any).addresspicker.hidein();
  }
}
</script>