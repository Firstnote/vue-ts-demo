<template>
  <popup :turnOn="turnOn" :names="turnup">
    <div class="zl-address-picker" slot="popup">
      <div class="zl-zl-address-picker-button">
        <div class="zl-zl-address-picker-buttonR" @click="cancle">取消</div>
        <span>请选择地址</span>
      </div>
      <div class="zl-address-picker-head">
        <div class="zl-address-picker-head-bottom"></div>
        <div v-for="(item,index) in listarr" :key="index" @click="select(index)">
          <span :class="{'zl-select-active':index==listarr.length-1}">{{item}}</span>
        </div>
      </div>
      <div class="zl-address-picker-content">
        <div
          v-for="(item,index) in showarr"
          :key="index"
          @click="next(item)"
          :class="{'zl-select-active':hasselected(item)}"
        >{{item}}</div>
      </div>
    </div>
  </popup>
</template>

<script lang='ts'>
import address1 from "./address.js";
const address: any = address1;
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
import Popup from "../Popup/popup.vue";

@Component({
  components: {
    Popup
  }
})
export default class Addresspicker extends Vue {
  showarr: string[] = []; //展示区域
  headarr: string[] = []; //头部
  comparearr: string[] = []; //数据存放
  turnOn = false;
  turnup = "";
  @Prop({
    required: false,
    default: () => address
  })
  address!: any;
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
    } else {
      this.showarr = [];
    }

    if (val.length == 0) {
      //初始状态省
      addressarr = this.address;
      for (let key in addressarr) {
        this.showarr.push(key);
      }
    }
    if (val.length == 1) {
      addressarr = this.address[val[0]];
      for (let key in addressarr) {
        this.showarr.push(key);
      }
    }
    if (val.length == 2) {
      addressarr = this.address[val[0]][val[1]];
      for (let key in addressarr) {
        this.showarr.push(key);
      }
    }
    if (val.length == 3) {
      this.showarr = this.address[this.headarr[0]][this.headarr[1]][
        this.headarr[2]
      ];
    }
  }
  get listarr() {
    if (this.headarr.length <= 3) {
      return [...this.headarr, "请选择"];
    } else {
      return this.headarr;
    }
  }
  showup() {
    this.turnup = "turnup";
    this.turnOn = true;
  }
  hidein() {
    this.turnup = "";
    this.turnOn = false;
  }
  next(item: string): void {
    if(this.headarr.length>=4){
      this.headarr.splice(3)
      this.headarr.push(item)
    }else{
      this.headarr.push(item);
    }
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
  cancle() {
    this.hidein();
  }
}
</script>
<style lang='stylus'>
.zl-zl-address-picker-button {
  text-align: center;
  line-height: 30px;
  overflow: hidden;

  div {
    width: 60px;
    height: 30px;
  }

  .zl-zl-address-picker-buttonL {
    float: left;
  }

  .zl-zl-address-picker-buttonR {
    float: right;
    color: orange;
  }
}

.zl-address-picker {
  width: 100%;
  height: 30px;

  .zl-address-picker-head {
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

      .zl-select-active {
        color: #de3031;
        border-bottom: 2px solid #de3031;
      }
    }

    .zl-address-picker-head-bottom {
      z-index: -1;
      width: 100%;
      position: absolute;
      bottom: 0px;
      height: 2px;
      float: none;
      background: #eee;
    }
  }

  .zl-address-picker-content {
    position: absolute;
    bottom: 0;
    top: 60px;
    width: 100%;
    overflow-y: scroll;
    line-height: 30px;

    div {
      height: 30px;
      padding-left: 10px;
    }

    .zl-select-active {
      color: #de3031;
    }
  }
}
</style>