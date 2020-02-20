<template>
  <div class="picviewer-wrap" ref="picviewerwrap">
    <canvas ref="picviewer"></canvas>
    <!-- <div>重新扫描</div> -->
    <div></div>
  </div>
</template>
<script lang="ts">
import exampleFront from "../../common/img/idcardfront.jpg";
import exampleBack from "../../common/img/idcardback.jpg";
import idcard from "../../common/img/idcard-get.jpg";
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
@Component
export default class Picviewer extends Vue {
  @Prop({
    default: () => {
      return {
        width: 300,
        height: 450,
        widthwrap: 375,
        heightwrap: 500
      };
    }
  })
  param!: any; //原生相机传入相框信息

  // @Prop({
  //   default:0.15
  // })
  // widthPc!:number; //相框宽度百分比
  // @Prop({
  //   default:0.15
  // })
  // heightPc!:number //相框高度百分比

  get widthPc() {
    return (this.param.widthwrap - this.param.width) / 2 / this.param.widthwrap;

    // return 0.15
  }

  get heightPc() {
    return (
      (this.param.heightwrap - this.param.height) / 2 / this.param.heightwrap
    );
    // return 0.15
  }

  get picviewer():any {
    return this.$refs.picviewer;
  }
  get picviewerwrap():any{
    return this.$refs.picviewerwrap
  }

  mounted() {
    let canvas: any = this.picviewer;
    let ctx = canvas.getContext("2d");
    canvas.width = this.picviewerwrap.clientWidth;
    canvas.height = this.picviewerwrap.clientHeight;
    ctx.translate(canvas.width, 0);
    ctx.rotate((90 * Math.PI) / 180);
    let img = new Image();
    img.src = idcard;
    let that = this;
    img.onload = function() {
      let sx = img.width * that.widthPc, //切片开始位置,需结合原生拍摄时的状态决定
        sy = img.height * that.heightPc, //切片开始位置
        swidth = img.width * (1 - that.widthPc * 2), //切片大小
        sheight = img.height * (1 - that.heightPc * 2), //切片大小
        x = 0, //绘制开始位置
        y = 0, //绘制开始位置
        width = canvas.height, //绘制大小
        height = canvas.width; //绘制大小
      let picData = [img, sx, sy, swidth, sheight, x, y, width, height];

      ctx.drawImage(...picData);
    };
  }
}
</script>
<style lang="stylus">
.picviewer-wrap {
  z-index: 120;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3f3f3f;
}
</style>