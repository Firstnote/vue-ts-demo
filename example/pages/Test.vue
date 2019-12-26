<template>
  <div class="test-view">
    <!-- 一级页面 -->
    <div class="page" v-show="headarr.length==0">
      <div v-if="Array.isArray(province)">
        <div v-for="(item,index) in province" :key="index">{{item}}</div>
      </div>
      <div v-else>
        <div v-for="(item,index) in province" :key="index">{{index}}</div>
      </div>
    </div>
    <!-- 二级页面 -->
    <div class="page" v-show="headarr.length==1">
      <div v-if="Array.isArray(city)">
        <div v-for="(item,index) in city" :key="index">{{item}}</div>
      </div>
      <div v-else>
        <div v-for="(item,index) in city" :key="index">{{index}}</div>
      </div>
    </div>
    <!-- 三级页面 -->
    <div class="page" v-show="headarr.length==2">
      <div v-if="Array.isArray(county)">
        <div v-for="(item,index) in county" :key="index">{{item}}</div>
      </div>
      <div v-else>
        <div v-for="(item,index) in county" :key="index">{{index}}</div>
      </div>
    </div>
    <!-- 四级页面 -->
    <div class="page" v-show="headarr.length==3">
      <div v-if="Array.isArray(street)">
        <div v-for="(item,index) in street" :key="index">{{item}}</div>
      </div>
      <div v-else>
        <div v-for="(item,index) in street" :key="index">{{index}}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import address from "../../src/components/Addresspicker/address.js";
import { Component, Prop, Vue, Emit ,Watch} from "vue-property-decorator";
export default class Test extends Vue {
  province: any = address;
  city:any = {};
  county:any = {};
  street:any = {};
  page1:boolean = true;
  page2:boolean = true;
  page3:boolean = true;
  page4:boolean = true;
  headarr:any[] = []
  @Watch("headarr", { immediate: true, deep: true })
  handle(val: string[], oldVal: string[]){

  }
  

}
</script>

<style lang='less'>
.page{
  height: 300px;
  width: 100%;
  border: 1px solid red;
  overflow-y: scroll;
  position: absolute;
  top:0;
  left: 0;
}
</style>
