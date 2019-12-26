<template>
  <div>
      <Addresspicker @confirm='confirm'></Addresspicker>
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