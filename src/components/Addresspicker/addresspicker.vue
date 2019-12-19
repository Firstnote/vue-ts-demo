<template>
  <div class="address-picker">
    <div class="address-picker-head">
      <div class="address-picker-head-bottom"></div>
      <div v-for="(item,index) in listarr" :key="index" @click="select(index)">
        <span :class="{'select-active':index==listarr.length-1}">{{item}}</span>
      </div>
    </div>
    <div class="address-picker-content">
      <div
        v-for="(item,index) in showarr"
        :key="index"
        @click="next(item)"
        :class="{'select-active':hasselected(item)}"
      >{{item}}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import address1 from "./address.js";
const address:any = address1
import {
  Component,
  Prop,
  Vue,
  Watch,
  Emit
} from "vue-property-decorator";
@Component
export default class Addresspicker extends Vue {
  showarr: string[] = []; //展示区域
  headarr: string[] = []; //头部
  comparearr: string[] = []; //数据存放
  @Prop({
    required:false,
    default:()=>address
  })
  address!:any

  get province() {
    let province: string[] = [];
    for (let key in this.address) {
      province.push(key);
    }
    return province;
  }
  mounted() {
    this.showarr = this.province;
  }

  @Emit()
  confirm(a: string[] | string) {
    return a;
  }

  @Watch("headarr", { immediate: true, deep: true })
  onHeaderarrChanged(val: string[], oldVal: string[]) {
    let addressarr: any = "";
    if (val.length == 4) {
      //确认
      let confirmmsg = [...val];
      if (val[1] === "市辖区") {
        confirmmsg.splice(1, 1);
      }
      this.confirm(confirmmsg);
    }
    this.showarr = [];
    if (val.length == 0) {
      //初始状态省
      addressarr = this.address;
    }
    if (val.length == 1) {
      addressarr = this.address[val[0]];
    }
    if (val.length == 2) {
      addressarr = this.address[val[0]][val[1]];
    }
    for (let key in addressarr) {
      this.showarr.push(key);
    }

    if (val.length == 3) {
      this.showarr = this.address[this.headarr[0]][this.headarr[1]][this.headarr[2]];
    }
  }
  get listarr() {
    if (this.headarr.length <= 3) {
      return [...this.headarr, "请选择"];
    } else {
      return this.headarr;
    }
  }
  next(item: string): void {
    this.headarr.push(item);
    this.comparearr = [...this.headarr];
  }
  select(index: number): void {
    this.headarr.splice(index);
  }
  hasselected(item: string) {
    let flag = false;
    this.comparearr.forEach(element => {
      if (element == item) {
        flag = true;
      }
    });
    return flag;
  }
}
</script>
<style lang='less'>
.address-picker {
  width: 100%;
  height: 30px;
  .address-picker-head {
    width: 100%;
    overflow: hidden;
    position: relative;
    div {
      line-height: 30px;
      float: left;
      width: 25%;
      height: 30px;
      span {
        display: inline-block;
        margin-left: 10px;
        height: 28px;
      }
      .select-active {
        color: #de3031;
        border-bottom: 2px solid #de3031;
      }
    }
    .address-picker-head-bottom {
      z-index: -1;
      width: 100%;
      position: absolute;
      bottom: 0px;
      height: 2px;
      float: none;
      background: #eee;
    }
  }
  .address-picker-content {
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    line-height: 30px;
    div {
      height: 30px;
      padding-left: 10px;
    }
    .select-active {
      color: #de3031;
    }
  }
}
</style>