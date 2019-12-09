<template>
  <!-- 外层 -->
  <!-- 导航主体 -->
  <div class="navbar" ref="navbar">
    <!-- 头部机型适配 -->
    <div :style="navTopSpace"></div>
    <!-- 浏览人数信息 -->
    <div v-if="numofpeople" class="message">
      <span>当前有{{ numofpeople }}人在浏览该产品</span>
    </div>
    <!-- 遮罩层 -->
    <slot name="navcover"></slot>
    <!-- 导航栏内容 -->
    <div class="navcontent" ref="navcontent">
      <div class="navmiddle" @click="navmiddleclick">
        <slot name="navmiddle" v-bind="$props">
          <span class="navmiddlespan" ref="navmiddlespan">{{ title }}</span>
        </slot>
      </div>
      <div class="navleft" @click="navleftclick">
        <slot name="navleft">
          <span class="navleftspan">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantou2" />
            </svg>
          </span>
        </slot>
      </div>
      <div class="navright" @click="navrightclick">
        <slot name="navright">
          <span class="navrightspan">我的定制</span>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import "../../../common/icon/iconfont.js";
import { Component, Prop, Vue, Provide ,Emit} from "vue-property-decorator";

@Component
export default class Navbarslot extends Vue {
  @Prop({
    required: false,
    default: true
  })
  public sticky!: boolean;

  @Prop({
    required: false,
    default: false
  })
  public fixed!: boolean;

  @Prop({
    required: false,
    default: "单标题"
  })
  public title!: string;

  @Prop({
    required: false,
    default: 12
  })
  public numofpeople!: number;

  phoneversion() {
    var is = navigator.appVersion.toLocaleLowerCase().indexOf("iphone");
    if (is > 0) {
      var height = window.screen.height;
      if (height == 812 || height == 896) {
        return 44;
      } else {
        return 22;
      }
    } else {
      return 0;
    }
  }
  // navleftclick() {
  //   this.$emit("navleftclick");
  // }
  @Emit()
  navleftclick(){
    return
  }
  @Emit()
  navrightclick() {
    return
  }

  @Emit()
  navmiddleclick() {
   return
  }

  get navTopSpace() {
    return {
      height: this.phoneversion() + "px"
    };
  }
}
</script>
<style lang='less'>
.navbar {
  /* overflow: hidden; */
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  text-align: center;
  background: rgba(255, 133, 0);
  .navcontent {
    position: relative;
    vertical-align: middle;
    .navmiddle {
      width: 100%;
      height: 42px;
      .navmiddlespan {
        color: white;
        font-size: 30px;
        line-height: 42px;
      }
    }
    .navleft {
      position: absolute;
      top: 0;
      left: 0;
      .navleftspan {
        color: white;
        font-size: 36px;
        line-height: 42px;
      }
    }
    .navright {
      position: absolute;
      top: 0;
      right: 0;
      .navrightspan {
        color: white;
        line-height: 42px;
      }
    }
  }
  .message {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    /* background: rgba(255, 133, 0); */
    /* width: 300px; */
    height: 30px;
    span {
      background: rgba(255, 133, 0);
      padding: 2px 50px;
      border-radius: 10px;
      color: aliceblue;
      font-size: 14px;
    }
  }
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
