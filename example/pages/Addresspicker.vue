<template>
  <div>
    <h2>
      <Addresspicker @confirm='confirm'></Addresspicker>
    </h2>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Prop,
  Vue
} from "vue-property-decorator";

@Component
export default class Addresspickerview extends Vue{
  confirm(msg:any[] | string){
    alert(msg)
  }
}
</script>