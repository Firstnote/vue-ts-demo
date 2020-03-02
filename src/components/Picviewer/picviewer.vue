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

//获取事件触发position
function getEventPosition(ev: MouseEvent) {
  return { x: ev.clientX, y: ev.clientY };
}

//事件绑定函数
function attach(position: { x: number; y: number }, param: any, callback: any) {
  let { x, y } = position;
  if (
    x < param.x &&
    x > param.x - param.h &&
    y > param.y &&
    y < param.y + param.w
  ) {
    callback(param);
  }
}

function myClick(canvas: any, param: any, callback: any) {
  canvas.addEventListener("click", function(ev: MouseEvent) {
    attach(getEventPosition(ev), param, callback);
  });
}
@Component
export default class Picviewer extends Vue {
  @Prop({
    default: () => {
      return {
        width: 260, //相框宽度 13
        height: 420, //相框高度 21
        widthwrap: 375, //相机宽度
        heightwrap: 500, //相机高度
        uri: idcard //预览图
      };
    }
  })
  param!: any; //原生相机传入相框信息

  //证件类型 身份证人像面：front；国徽面：back
  @Prop({
    default: "front"
  })
  type!: string;

  scalePc = 1; //图片缩放比例
  btn2 = {
    x: 0, //y轴
    y: 0, //x轴
    w: 0,
    h: 0,
    r: 8,
    s: "#ffffff"
  };
  btn1 = {
    x: 0, //
    y: 0,
    w: 0,
    h: 0,
    r: 8,
    s: "#df3031",
    f: "#df3031"
  };

  text1 = {
    font: "16px PingFangSC-Regular",
    fillStyle: "#FFFFFF",
    textAlign: "center",
    textBaseline: "middle",
    txt: "完成"
  };
  text2 = {
    font: "16px PingFangSC-Regular",
    fillStyle: "#FFFFFF",
    textAlign: "center",
    textBaseline: "middle",
    txt: "重新扫描"
  };
  topic = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    font: "16px PingFangSC-Regular",
    fillStyle: "#FFFFFF",
    textAlign: "center",
    textBaseline: "middle",
    txt: "请您核对照片"
  };
  examplePic1 = {
    src: this.examplePicSrc,
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
  examplePicText1 = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    font: "14px PingFangSC-Regular",
    textAlign: "center",
    textBaseline: "middle",
    txt: `请将身份证${this.examplePicText}`
  };
  examplePicText2 = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    font: "14px PingFangSC-Regular",
    textAlign: "center",
    textBaseline: "middle",
    txt: "放置在扫描框中"
  };

  drawBtn(ctx: any, param: any, scalex: number = 1, scaley: number = 1) {
    //按钮
    ctx.save();
    ctx.translate(param.x * scalex, param.y * scaley);
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
    ctx.restore();
  }

  drawText(
    //标语
    ctx: any,
    param: any,
    scalex: number = 1,
    scaley: number = 1
  ) {
    ctx.save();

    ctx.translate(param.x * scalex, param.y * scaley);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.font = param.font;
    ctx.fillStyle = param.fillStyle ? param.fillStyle : "#a8a8a8";
    if (param.textAlign) {
      ctx.textAlign = param.textAlign;
    }
    if (param.textBaseline) {
      ctx.textBaseline = param.textBaseline;
    }
    ctx.fillText(param.txt, param.w * 0.5, param.h * 0.5);
    ctx.restore();
  }

  drawPic(ctx: any, param: any, scalex: number = 1, scaley: number = 1) {
    //画图
    let img = new Image();
    img.src = param.src;
    let that = this;
    img.onload = function() {
      ctx.save();
      ctx.translate(param.x * scalex, param.y * scaley);
      ctx.rotate((90 * Math.PI) / 180);
      if (param.start) {
        let sx = img.width * that.heightPc, //切片开始位置,需结合原生拍摄时的状态决定
          sy = img.height * that.widthPc, //切片开始位置
          swidth = img.width * (1 - that.heightPc * 2), //切片大小
          sheight = img.height * (1 - that.widthPc * 2); //切片大小
        ctx.drawImage(img, sx, sy, swidth, sheight, 0, 0, param.w, param.h);
      } else {
        ctx.drawImage(img, 0, 0, param.w, param.h);
      }
      ctx.restore();
    };
  }

  btn1Callback(param: any) {
    this.$emit("finish");
  }
  btn2Callback(param: any) {
    this.$emit("back");
  }

  get widthPc() {
    return (this.param.widthwrap - this.param.width) / 2 / this.param.widthwrap;
  }

  get heightPc() {
    return (
      (this.param.heightwrap - this.param.height) / 2 / this.param.heightwrap
    );
  }

  get examplePicSrc(): any {
    return this.type === "front" ? exampleFront : exampleBack;
  }

  get examplePicText(): string {
    return this.type === "front" ? "人面像" : "国徽像";
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

    // 画预览图片
    let viewPic = {
      src: this.param.uri,
      x: (canvas.width + this.param.width) * 0.5,
      y: (canvas.height - this.param.height) * 0.5 * 0.4,
      w: width,
      h: height,
      start: true
    };
    this.drawPic(ctx, viewPic);

    //画标题
    let topicHeightPercent = 0.4; //标题高度百分比
    // this.topic.x = (canvas.width + this.param.width) * 0.5*1.1;
    this.topic.x =
      canvas.width -
      (1 - topicHeightPercent) * 0.5 * 0.5 * (canvas.width - this.param.width);
    this.topic.y = viewPic.y;
    this.topic.w = this.param.height;
    this.topic.h = 0.5 * (canvas.width - this.param.width) * topicHeightPercent;
    this.drawText(ctx, this.topic);

    //画按钮和文本
    let xper = 0.6, //按钮高度百分比
      yper = 0.32, //按钮宽度百分比
      changeY = this.param.height * 0.05;
    this.btn1.x =
      0.5 * (canvas.width - this.param.width) * (1 - (1 - xper) / 2);
    this.btn1.y =
      viewPic.y + (0.5 + 0.25 * (1 - yper * 2)) * this.param.height - changeY;
    this.btn1.w = yper * this.param.height;
    this.btn1.h = xper * 0.5 * (canvas.width - this.param.width);
    this.drawBtn(ctx, this.btn1);
    Object.assign(this.text1, this.btn1);
    this.drawText(ctx, this.text1);
    myClick(canvas, this.text1, this.btn1Callback);

    this.btn2.x = this.btn1.x;
    this.btn2.y =
      viewPic.y + 0.25 * (1 - 2 * yper) * this.param.height + changeY;
    this.btn2.w = this.btn1.w;
    this.btn2.h = this.btn1.h;
    this.drawBtn(ctx, this.btn2);
    Object.assign(this.text2, this.btn2);
    this.drawText(ctx, this.text2);
    myClick(canvas, this.text2, this.btn2Callback);

    //画示例图片
    let examplePer = 0.5;
    this.examplePic1.w = examplePer * (canvas.height - viewPic.y - viewPic.w);
    this.examplePic1.h =
      (13 / 21) * examplePer * (canvas.height - viewPic.y - viewPic.w);
    this.examplePic1.x = 0.5 * canvas.width + this.examplePic1.h;
    this.examplePic1.y =
      (canvas.height - viewPic.y - viewPic.w) * 0.5 * (1 - examplePer) +
      viewPic.y +
      viewPic.w;
    this.drawPic(ctx, this.examplePic1);

    //示例图片配套文字
    let copyObject = Object.assign({}, this.examplePic1);
    copyObject.h = copyObject.h * 0.8;
    Object.assign(this.examplePicText1, copyObject);
    this.examplePicText1.x = this.examplePicText1.x - this.examplePicText1.h;
    this.drawText(ctx, this.examplePicText1);
    Object.assign(this.examplePicText2, copyObject);
    this.examplePicText2.x =
      this.examplePicText2.x - this.examplePicText2.h - 20;
    this.drawText(ctx, this.examplePicText2);
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