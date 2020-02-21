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
        width: 220, //相框宽度
        height: 360, //相框高度
        widthwrap: 375, //相机宽度
        heightwrap: 500 //相机高度
      };
    }
  })
  param!: any; //原生相机传入相框信息

  scalePc = 1; //图片缩放比例
  btn1= {
      x: 40,//y轴
      y: 375-30-4-10,//x轴
      w: 220,
      h: 30,
      r: 8,
      s: "#ffffff"
  }
  btn2= {
      x: 40,//
      y: 30-4-10,
      w: 220,
      h: 30,
      r: 8,
      s: "#df3031"
  }

  drawBtn(ctx: any, param: any, scalex: number = 1, scaley: number = 1) {
    ctx.save();
    ctx.translate(param.x*scalex,param.y*scaley)
    ctx.rotate((90 * Math.PI) / 180);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(param.r, 0);
    ctx.lineTo(param.w * scalex - param.r, 0);
    ctx.arc(param.w * scalex - param.r, param.r, param.r, -Math.PI / 2, 0);
    ctx.lineTo(param.w * scalex, param.h * scalex - param.r);
    ctx.arc(
      param.w * scalex - param.r,
      param.h * scalex - param.r,
      param.r,
      0,
      Math.PI / 2
    );
    ctx.lineTo(param.r, param.h * scalex);
    ctx.arc(param.r, param.h * scalex - param.r, param.r, Math.PI / 2, Math.PI);
    ctx.lineTo(0, param.r);
    ctx.arc(param.r, param.r, param.r, 3 * Math.PI, (3 * Math.PI) / 2);
    if (param.s) {
      ctx.strokeStyle = param.s;
    }
    if (param.f) {
      ctx.fillStyle = param.f;
    }
    if (param.s) {
      ctx.stroke();
    }
    if (param.f) {
      ctx.fill();
    }
    ctx.restore()
  }
 

  get widthPc() {
    return (this.param.widthwrap - this.param.width) / 2 / this.param.widthwrap;
  }

  get heightPc() {
    return (
      (this.param.heightwrap - this.param.height) / 2 / this.param.heightwrap
    );
  }

  get picviewer(): any {
    return this.$refs.picviewer;
  }
  get picviewerwrap(): any {
    return this.$refs.picviewerwrap;
  }

  mounted() {
    let canvas: any = this.picviewer;
    let ctx = canvas.getContext("2d");
    canvas.width = this.picviewerwrap.clientWidth;
    canvas.height = this.picviewerwrap.clientHeight;
    let width = this.param.height * this.scalePc, //绘制原图大小 可修改
      height = this.param.width * this.scalePc, //绘制原图大小 可修改
      y = (this.param.widthwrap - height) / 2, //预览图绘制开始位置 可修改
      x = (this.param.heightwrap - this.param.height) / 2; //预览图绘制开始位置 可修改
    
    //画按钮
    this.drawBtn(ctx,this.btn1)
    this.drawBtn(ctx,this.btn2)
    ctx.translate(canvas.width, 0);
    ctx.rotate((90 * Math.PI) / 180);
    // 画预览图片
    let img = new Image();
    img.src = idcard;
    let that = this;
    img.onload = function() {
      let sx = img.width * that.heightPc, //切片开始位置,需结合原生拍摄时的状态决定
        sy = img.height * that.widthPc, //切片开始位置
        swidth = img.width * (1 - that.heightPc * 2), //切片大小
        sheight = img.height * (1 - that.widthPc * 2); //切片大小
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
  overflow: hidden;
}
</style>