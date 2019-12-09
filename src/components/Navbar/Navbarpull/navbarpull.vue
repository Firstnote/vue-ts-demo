<template>
  <div class="navbarpull">
    <div class="navbarpullhead">
      <Navbarslot v-bind="$props" ref="navbarpull" v-on="$listeners">
        <slot name="navmiddle" slot="navmiddle"></slot>
        <slot name="navleft" slot="navleft"></slot>
        <slot name="navright" slot="navright"></slot>
      </Navbarslot>
    </div>
    <cube-scroll
      :options="options"
      v-bind="$props"
      :data="items"
      @pulling-down="onPullingDown"
      ref="scroll"
      :scroll-events="['scroll', 'before-scroll-start', 'scroll-end']"
      @scroll="onScrollHandle"
      @before-scroll-start="onBeforeScrollStartHandle"
      @scroll-end="onScrollEndHandle"
    >
      <template slot="pulldown" slot-scope="props">
        <div v-if="props" class="cube-pulldown-wrapper" ref="pulldown">
          <div class="pulldown-content" v-show="showpulldown">
            <!-- 下拉刷新自定义插槽 -->
            <slot v-bind="props" name="pulldowncontent">
              <span v-if="props.beforePullDown">xialashuaxin</span>
              <template v-else>
                <span v-if="props.isPullingDown">正在更新...</span>
                <span v-else>更新成功</span>
              </template>
            </slot>
          </div>
        </div>
      </template>
      <div ref="bottomspace"></div>
      <slot>
        <p>scroll top</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll content</p>
        <p>scroll end</p>
      </slot>
    </cube-scroll>
  </div>
</template>

<script lang='ts'>
import "./cube-ui.js";
import { Scroll } from "cube-ui";
import Navbarslot from "../Navbarslot/navbarslot.vue";
import {
  Component,
  Prop,
  Vue,
  Provide,
  Mixins,
  Inject
} from "vue-property-decorator";

@Component({
  components: {
    Navbarslot
  },
  mixins: [Navbarslot, Scroll]
})
export default class Navbarpull extends Vue {
  @Prop({
    required: false,
    default: function() {
      return {
        pullDownRefresh: {
          threshold: 60,
          stop: 60,
          stopTime: 1000,
          txt: "更新成功"
        }
      };
    }
  })
  options!: any;

  items: any[] = [];
  pullDownY: number = 0;
  pulldown() {
    return this.$refs.pulldown;
  }
  onScrollHandle(pos: any) {
    this.pullDownY = pos.y;
    if (pos.y > 0) {
      this.$refs.navbarpull.$refs.navmiddlespan.style.opacity = 0;
      this.$refs.pulldown.style.transform = `translateY(${pos.y}px)`;
    } else {
      this.$refs.navbarpull.$refs.navmiddlespan.style.opacity = 1;
    }
    this.$emit("scroll", pos);
  }
  onBeforeScrollStartHandle() {
    this.$emit("before-scroll-start");
  }
  onScrollEndHandle(pos: any) {
    this.$emit("scroll-end", pos);
  }
  changedata() {
    this.items = [...this.items];
  }
  onPullingDown() {
    //pulling-down会主动接收一个函数，请在数据更新后主动调用函数以便刷新完成
    this.$emit("pulling-down", this.changedata);
    // console.log(Scroll.isPullingDown)
  }
  navleftclick() {
    this.$emit("navleftclick");
  }
  navrightclick() {
    this.$emit("navrightclick");
  }
  navmiddleclick() {
    this.$emit("navmiddleclick");
  }
  get showpulldown() {
    if (this.pullDownY > 0) {
      return true;
    } else {
      return false;
    }
  }
  mounted() {
    // this.bottomstyleobject = {
    //   height: this.navbarcrollheight + "px",
    //   width: "100%"
    // };
    this.$refs.pulldown.style.top =
      this.$refs.navbarpull.$el.offsetHeight -
      this.$refs.pulldown.offsetHeight +
      "px";
    this.$refs.bottomspace.style.height =
      this.$refs.navbarpull.$el.offsetHeight + "px";
  }
}
</script>
<style lang='less'>
.navbarpull {
  height: 100vh;
  /* overflow: hidden; */
  /* background: red; */
  .navbarpullhead {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100000;
    .navbar {
      background: none;
    }
  }
  .cube-pulldown-wrapper {
    /* 下拉刷新背景图所在位置 */
    height: 400px;
    z-index: 50;
    background: url("../../../common/img/62843266_p0.jpg");
    // background: none;
    background-repeat: no-repeat;
    background-size: contain;
    /* background-position:bottom 3px; */
    background-position: bottom right;
  }
}
.bottomspace {
  width: 100%;
  height: 100px;
}
.pulldown-content {
  position: absolute;
  bottom: 0;
  color: #eee;
}
</style>