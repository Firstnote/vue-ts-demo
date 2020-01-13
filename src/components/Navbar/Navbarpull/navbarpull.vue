<template>
  <div class="navbarpull">
    <div class="navbarpullhead">
      <Navbarslot v-bind="$props" ref="navbarpull" v-on="$listeners">
        <slot name="navmiddle" slot="navmiddle"></slot>
        <slot name="navleft" slot="navleft"></slot>
        <slot name="navright" slot="navright"></slot>
      </Navbarslot>
    </div>
    <scroll
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
        <div v-if="props" class="zl-pulldown-wrapper" ref="pulldown">
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
    </scroll>
  </div>
</template>

<script lang='ts'>
import Navbarslot from "../Navbarslot/navbarslot.vue";
import Scroll from "../../Scroll/scroll.vue"
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
    Navbarslot,
    Scroll
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
  onScrollHandle(pos: any) {
    this.pullDownY = pos.y;
    if (pos.y > 0) {
      (this.$refs as any).navbarpull.$refs.navmiddlespan.style.opacity = 0;
      (this.$refs as any).pulldown.style.transform = `translateY(${pos.y}px)`;
    } else {
      (this.$refs as any).navbarpull.$refs.navmiddlespan.style.opacity = 1;
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
  navrightclick(e:DocumentEvent) {
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
    (this.$refs.pulldown as HTMLElement).style.top =
      (this.$refs.navbarpull as any).$el.offsetHeight -
      (this.$refs.pulldown as HTMLElement).offsetHeight +
      "px";
    (this.$refs.bottomspace  as HTMLElement).style.height =
      (this.$refs.navbarpull as any).$el.offsetHeight + "px";
  }
}
</script>
<style lang='stylus'>
.navbarpull {
  height: 100vh;
  .navbarpullhead {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100000;
    .navbar {
      background: none;
    }
  }
  .zl-pulldown-wrapper {
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
  .pulldown-content {
  position: absolute;
  bottom: 0;
  color: #eee;
}
}

</style>